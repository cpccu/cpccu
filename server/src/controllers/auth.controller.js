import { User } from '../models/user.model.js';
import {
    COOKIE_OPTIONS,
    OTP_TIME,
    PUBLIC_ITEM,
    RESET_TIME,
    TOKEN_TIME,
} from './../constants.js';
import jwt from 'jsonwebtoken';
import {
    ApiError,
    ApiResponse,
    asyncHandler,
    sendOTP,
    generateOTP,
} from '../utils/utility.js';
import { auth } from '../utils/firebaseAuth.js';

// when user registers account manually
const registrationHandler = asyncHandler(async (req, res) => {
    const { email, fullname, batch, password, confirm_password, uniID } =
        req.body;

    if (
        [email, fullname, batch, password, uniID].some(
            (field) => field?.trim() === '' || !field
        )
    ) {
        throw new ApiError(400, 'All fields are required');
    }

    if (password !== confirm_password) {
        throw new ApiError(400, 'Passwords do not match');
    }

    if (password.length < 6) {
        throw new ApiError(400, 'Password must be at least 6 characters long.');
    }

    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser.isValid) {
        throw new ApiError(409, 'User with this email already exists');
    }

    const [otp, code] = generateOTP(OTP_TIME);

    const newUser = {
        email,
        fullname,
        batch,
        password,
        uniID,
        otp,
        isValid: false,
    };

    existingUser
        ? await User.findByIdAndUpdate(existingUser._id, newUser, {
              new: true,
          })
        : await User.create(newUser);

    sendOTP(email, code, 'registration', newUser);

    delete newUser.otp;
    delete newUser.password;

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                newUser,
                'User created. Verify the OTP sent to your email.'
            )
        );
});

const verifyOTPHandler = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        throw new ApiError(400, 'Email and OTP are required');
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    // Check OTP validity and expiration
    const isOtpCorrect = await user.isOTPcorrect(otp);
    const isOtpExpired = user.isOTPExpired();

    if (!isOtpCorrect) {
        throw new ApiError(401, 'Invalid OTP');
    }

    if (isOtpExpired) {
        throw new ApiError(419, 'OTP has expired');
    }

    // Update user to set OTP as verified
    user.isValid = true;
    user.otp = {}; // Clear OTP field
    await user.save({ validateBeforeSave: false });

    return res
        .status(201)
        .json(new ApiResponse(201, null, 'OTP verified successfully'));
});

//when user login account manually
const loginHandler = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if ([email, password].some((field) => field?.trim() === '' || !field)) {
        throw new ApiError(400, 'All fields are required');
    }

    const user = await User.findOne({ email });

    if (!user || !user.isValid) {
        throw new ApiError(401, 'Invalid credentials');
    }

    if (!user.password) {
        throw new ApiError(401, 'Invalid credentials');
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
        throw new ApiError(401, 'Invalid credentials');
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    const expire = new Date(Date.now() + TOKEN_TIME * 24 * 60 * 60 * 1000);

    user.refreshTokens.push({
        token: refreshToken,
        expire,
    });
    await user.save({ validateBeforeSave: false });

    const loggedInUser = await User.findOne({ email }).select(PUBLIC_ITEM);

    return res
        .status(200)
        .cookie('accessToken', accessToken, COOKIE_OPTIONS)
        .cookie('refreshToken', refreshToken, COOKIE_OPTIONS)
        .json(new ApiResponse(200, loggedInUser, 'Login successfully'));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies?.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, 'Unauthorized request');
    }

    const decodedToken = jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken._id).select('-password');

    if (!user) {
        throw new ApiError(401, 'Invalid credentials');
    }

    const renewToken = user.generateAccessToken();

    res.status(200)
        .cookie('accessToken', renewToken, COOKIE_OPTIONS)
        .json(
            new ApiResponse(
                200,
                { accessToken: renewToken },
                'Access token renewed successfully'
            )
        );
});

//secure handler
//when user logout
const logoutHandler = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
        throw new ApiError(401, 'Invalid credentials');
    }

    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
        throw new ApiError(400, 'Refresh token not provided');
    }

    user.refreshTokens = user.refreshTokens.filter(
        (item) => item.token !== refreshToken
    );
    await user.save({ validateBeforeSave: false });

    res.status(200)
        .clearCookie('accessToken', COOKIE_OPTIONS)
        .clearCookie('refreshToken', COOKIE_OPTIONS)
        .json(new ApiResponse(200, {}, 'User logged out successfully'));
});

//reset user password
const forgottenPasswordHandler = asyncHandler(async (req, res) => {
    const { email } = req.params;
    console.log(email);

    if (!email || email.trim() === '') {
        throw new ApiError(400, 'Email is required');
    }

    const user = await User.findOne({
        email,
        isValid: true,
    });

    if (!user) {
        throw new ApiError(404, 'User is not found');
    }

    const token = user.generatePasswordToken();

    const [otp, code] = generateOTP(RESET_TIME);
    const data = {
        fullname: user.fullname,
        token: token,
        code: code,
    };

    sendOTP(email.trim(), code, 'reset', data);

    user.resetOTP = otp;
    await user.save();
    return res
        .status(200)
        .json(new ApiResponse(200, null, ' Reset link sent successfully!'));
});

const resetPasswordHandler = asyncHandler(async (req, res) => {
    const { code, token, password, retype } = req.body;

    if (password !== retype) {
        throw new ApiError(400, 'Passwords do not match.');
    }

    if (password.length < 6) {
        throw new ApiError(400, 'Password must be at least 6 characters long.');
    }

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.PASSWORD_TOKEN_SECRET);
    } catch (error) {
        throw new ApiError(401, 'Invalid credentials');
    }

    const user = await User.findById(decodedToken._id);

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    const isresetOTPcorrect = await user.isresetOTPcorrect(code);
    const isresetOTPExpired = await user.isresetOTPExpired();

    if (!isresetOTPcorrect) {
        throw new ApiError(401, 'invaild OTP');
    }

    if (isresetOTPExpired) {
        throw new ApiError(
            401,
            'The OTP has expired. Please request a new one'
        );
    }

    user.password = password;
    user.resetOTP = {};
    await user.save();

    return res
        .status(200)
        .json(new ApiResponse(200, null, 'Password successfully reset'));
});

const googleLoginHandler = asyncHandler(async (req, res) => {
    const { idToken } = req.body;

    if (!idToken) {
        throw new ApiError(400, 'Google ID token is required');
    }

    let decodedToken;
    try {
        decodedToken = await auth.verifyIdToken(idToken);
    } catch (error) {
        throw new ApiError(401, 'Invalid Google ID token');
    }

    const { uid, email } = decodedToken;

    const user = await User.findOne({
        $or: [{ googleID: uid }, { email: email }],
    });

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    const expire = new Date(Date.now() + TOKEN_TIME * 24 * 60 * 60 * 1000);

    user.refreshTokens.push({
        token: refreshToken,
        expire,
    });
    await user.save({ validateBeforeSave: false });

    const loginUser = await User.findById(user._id).select(PUBLIC_ITEM);

    return res
        .status(200)
        .cookie('accessToken', accessToken, COOKIE_OPTIONS)
        .cookie('refreshToken', refreshToken, COOKIE_OPTIONS)
        .json(new ApiResponse(200, loginUser, 'Login successful'));
});

const googleRegiHandler = asyncHandler(async (req, res) => {
    const { idToken } = req.body;

    // Verify the Google ID token
    let decodedToken;
    try {
        decodedToken = await auth.verifyIdToken(idToken);
    } catch (error) {
        throw new ApiError(401, 'Invalid Google ID token');
    }

    const { uid, email, name, picture } = decodedToken;

    // Check if the user already exists
    const existingUser = await User.findOne({
        $or: [{ googleID: uid }, { email: email }],
    });

    if (existingUser && existingUser.isValid) {
        // If the user already exists, do not create a new account
        throw new ApiError(
            409,
            'User with this email or Google ID already exists'
        );
    }

    // Create a new user
    const newUser = new User({
        googleID: uid,
        email,
        fullname: name,
        avatar: picture,
        isValid: true,
    });
    await newUser.save();

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                newUser,
                'User account created successfully. Verify the OTP sent to your email.'
            )
        );
});

export {
    registrationHandler,
    verifyOTPHandler,
    loginHandler,
    refreshAccessToken,
    logoutHandler,
    forgottenPasswordHandler,
    resetPasswordHandler,
    googleLoginHandler,
    googleRegiHandler,
};
