import { ApiError, asyncHandler } from '../utils/utility.js';
import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const verifyToken = asyncHandler(async (req, res, next) => {
    try {
        const Token =
            req.cookies?.accessToken ||
            req.header('Authorization')?.replace('Bearer ', '');

        if (!Token) {
            throw new ApiError(401, 'Unauthorized request');
        }

        const decodedToken = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);

        const existedUser = await User.findById(decodedToken._id).select(
            '-password -refreshTokens'
        );

        if (!existedUser) {
            throw new ApiError(401, 'Unauthorized request');
        }

        if (!existedUser.isValid) {
            throw new ApiError(401, 'Unauthorized request');
        }

        req.user = existedUser;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || 'Invalid access token');
    }
});

export { verifyToken };
