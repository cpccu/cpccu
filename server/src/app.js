import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { LIMIT } from './constants.js';
import { ApiError } from './utils/ApiError.js';

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        optionsSuccessStatus: 200,
    })
);
app.use(express.json({ limit: LIMIT }));
app.use(express.urlencoded({ extended: true, limit: LIMIT }));
app.use(express.static('public'));
app.use(cookieParser());

//routes
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import asyncHandler from './utils/asyncHandler.js';

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/comments', commentRouter);

app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
            errors: err.error,
        });
    }
    res.status(500).json({
        status: 500,
        message: 'Internal Server Error',
    });
});

export { app };
