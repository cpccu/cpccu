import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { MAINTENANCE_DAY } from '../constants.js';

// Define role schema
const roleSchema = new Schema(
    {
        role: {
            type: String,
            enum: ['admin', 'moderator', 'mentor', 'member'],
            required: true,
        },
        position: {
            type: Number,
            required: true,
        },
        positionName: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

// Define refresh token schema
const refreshTokenSchema = new Schema(
    {
        token: {
            type: String,
            required: true,
        },
        expire: {
            type: Date,
            required: true,
        },
    },
    {
        _id: false,
    }
);

const userSchema = new Schema(
    {
        googleID: {
            type: String,
            unique: true,
            sparse: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        avatar: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        batch: {
            type: String,
            validate: {
                validator: function () {
                    return !this.googleID;
                },
                message: 'Batch is required for non-Google users',
            },
        },
        uniID: {
            type: String,
            validate: {
                validator: function () {
                    return !this.googleID;
                },
                message: 'University ID is required for non-Google users',
            },
        },
        password: {
            type: String,
            required: function () {
                return !this.googleID;
            },
        },
        socialLinks: {
            type: [String],
            default: [],
        },
        roles: {
            type: roleSchema,
            default: { role: 'member', position: 0, positionName: 'member' },
        },
        otp: {
            code: String,
            expire: Date,
        },
        resetOTP: {
            code: String,
            expire: Date,
        },
        isValid: {
            type: Boolean,
            default: false,
        },
        refreshTokens: {
            type: [refreshTokenSchema],
            default: [],
        },
    },
    { timestamps: true }
);

// Pre-save hook for password and OTP hashing
userSchema.pre('save', async function (next) {
    if (this.isModified('password') && this.password) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    // Clean up expired refresh tokens
    if (this.isModified('refreshTokens')) {
        this.refreshTokens = this.refreshTokens.filter(
            (token) => token.expire > Date.now()
        );
    }

    // Hash OTP code if modified
    if (this.isModified('otp.code') && this.otp && this.otp.code) {
        this.otp.code = await bcrypt.hash(this.otp.code, 10);
    }

    // Hash OTP code if modified
    if (
        this.isModified('resetOTP.code') &&
        this.resetOTP &&
        this.resetOTP.code
    ) {
        this.resetOTP.code = await bcrypt.hash(this.resetOTP.code, 10);
    }

    next();
});

// Method to check password correctness
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Verify OTP code
userSchema.methods.isOTPcorrect = async function (inputOTP) {
    if (!this.otp || !this.otp.code) return false;
    // Hash the inputOTP to compare with the stored OTP code
    return await bcrypt.compare(inputOTP, this.otp.code);
};

// Check if OTP has expired
userSchema.methods.isOTPExpired = function () {
    if (!this.otp || !this.otp.expire) return true;
    return Date.now() > new Date(this.otp.expire).getTime();
};

// Verify reserOTP code
userSchema.methods.isresetOTPcorrect = async function (inputOTP) {
    if (!inputOTP || !this.resetOTP.code) return false;
    return await bcrypt.compare(inputOTP, this.resetOTP.code);
};

// Check if resetOTP has expired
userSchema.methods.isresetOTPExpired = function () {
    if (!this.resetOTP || !this.resetOTP.expire) return true; // Assume expired if no expiry date
    return Date.now() > this.resetOTP.expire;
};

// Method to generate a refresh token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.REFRESH_TOKEN_SECRET, // Use a different secret for refresh token
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRE }
    );
};

// Method to generate an access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
    });
};

// Method to generate a password reset token
userSchema.methods.generatePasswordToken = function () {
    return jwt.sign({ _id: this._id }, process.env.PASSWORD_TOKEN_SECRET, {
        expiresIn: process.env.PASSWORD_TOKEN_EXPIRE,
    });
};

// Expire users who haven't validated their accounts after one month
userSchema.index(
    { createdAt: 1 },
    {
        expireAfterSeconds: MAINTENANCE_DAY * 24 * 60 * 60,
        partialFilterExpression: { isValid: false },
    }
);

export const User = mongoose.model('User', userSchema);
