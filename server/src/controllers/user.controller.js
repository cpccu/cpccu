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
    uploadOnCloudinary,
} from '../utils/utility.js';

const getUserInfo = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select(PUBLIC_ITEM);

    return res
        .status(200)
        .json(new ApiResponse(200, user, 'User data get successfully'));
});

//update user information
const updateUserInfo = asyncHandler(async (req, res) => {
    const { fullname, batch, uniID, socialLinks } = req.body;

    if (
        [fullname, batch, uniID].some((field) => !field || field.trim() === '')
    ) {
        throw new ApiError(400, 'All fields are required');
    }

    // Update user information
    const user = await User.findByIdAndUpdate(
        req.user._id,
        { fullname, batch, uniID, socialLinks },
        { new: true }
    ).select(PUBLIC_ITEM);

    if (!user) {
        throw new ApiError(500, 'Server error while updating the user info');
    }

    // Return success response
    return res
        .status(200)
        .json(new ApiResponse(200, user, 'User info is updated successfully'));
});

//upload or update avatar and coverImage
const uploadORchangeIMG = asyncHandler(async (req, res) => {
    const { key } = req.params;
    const imageLocalPath = req.file?.path;

    if (!imageLocalPath) {
        throw new ApiError(400, 'Image file is missing');
    }

    const Image = await uploadOnCloudinary(imageLocalPath);

    if (!Image.url) {
        throw new ApiError(400, 'Error while uploading on coverImage');
    }

    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                [key]: Image.url,
            },
        },
        {
            new: true,
        }
    ).select(PUBLIC_ITEM);

    if (!user) {
        throw new ApiError(500, `server site error while uploading the ${key}`);
    }

    return res
        .status(200)
        .json(new ApiResponse(200, user, `${key} is uploaded successfully`));
});

export { getUserInfo, updateUserInfo, uploadORchangeIMG };
