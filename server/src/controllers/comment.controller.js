import {
    ApiError,
    ApiResponse,
    asyncHandler,
    isValidIdentity,
} from './../utils/utility.js';
import { Comment } from '../models/comment.model.js';

const createCommentHandler = asyncHandler(async (req, res) => {
    const { postID } = req.params;
    const { comment } = req.body;

    if (!postID) {
        throw new ApiError(400, 'Comment Id is required');
    }

    if (!isValidIdentity(postID)) {
        throw new ApiError(400, 'Invaild comment id');
    }

    const newComment = await Comment.create({
        postID,
        commenter: req.user._id,
        comment,
    });

    if (!newComment) {
        throw new ApiError(
            500,
            'server site error while creating your comment'
        );
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                newComment,
                'Your comment created successfully'
            )
        );
});

const updateCommentHandler = asyncHandler(async (req, res) => {
    const { commentID } = req.params;
    const { comment } = req.body;

    if (!commentID) {
        throw new ApiError(400, 'Comment ID is required');
    }

    if (!isValidIdentity(commentID)) {
        throw new ApiError(400, 'Invalid Comment ID');
    }

    const existedComment = await Comment.findById(commentID);

    if (!existedComment) {
        throw new ApiError(404, 'Comment not found');
    }

    if (existedComment.commenter.toString() !== req.user._id.toString()) {
        throw new ApiError(
            403,
            'You do not have permission to edit this comment'
        );
    }

    existedComment.comment = comment;
    updatedComment = await existedComment.save();

    return res
        .status(200)
        .json(
            new ApiResponse(200, updatedComment, 'Comment updated successfully')
        );
});

const deleteCommentHandler = asyncHandler(async (req, res) => {
    const { commentID } = req.params;

    if (!commentID) {
        throw new ApiError(400, 'Comment ID is required');
    }

    if (!isValidIdentity(commentID)) {
        throw new ApiError(400, 'Invalid Comment ID');
    }

    const existedComment = await Comment.findById(commentID);

    if (!existedComment) {
        throw new ApiError(404, 'Comment not found');
    }

    if (existedComment.commenter.toString() !== req.user._id.toString()) {
        throw new ApiError(
            403,
            'You do not have permission to edit this comment'
        );
    }

    await existedComment.deleteOne();

    return res
        .status(200)
        .json(new ApiResponse(200, null, 'comment deleted successfully'));
});

export { createCommentHandler, updateCommentHandler, deleteCommentHandler };
