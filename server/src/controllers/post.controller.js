import mongoose from 'mongoose';
import { Post } from '../models/post.model.js';
import {
    ApiError,
    ApiResponse,
    asyncHandler,
    uploadOnCloudinary,
    isValidIdentity,
} from '../utils/utility.js';

const createPostHandler = asyncHandler(async (req, res) => {
    const { caption } = req.body;
    const mediaFiles = req.files;
    let media;

    if (mediaFiles && mediaFiles.length > 0) {
        media = await Promise.all(
            mediaFiles.map(async (file) => {
                const uploadedMedia = await uploadOnCloudinary(file.path);

                if (!uploadedMedia) {
                    throw new ApiError(500, 'error while uploading media');
                }

                return {
                    url: uploadedMedia.secure_url,
                    type:
                        uploadedMedia.resource_type === 'video'
                            ? 'video'
                            : 'image',
                };
            })
        );
    }

    const post = await Post.create({
        owner: req.user._id,
        caption,
        media,
    });

    if (!post) {
        throw new ApiError(500, 'server site error while creating the post');
    }

    return res
        .status(201)
        .json(new ApiResponse(201, post, 'Post created successfully'));
});

const updatePostHandler = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { caption, existingMedia } = req.body;
    const mediaFiles = req.files;

    if (!id) {
        throw new ApiError(400, 'Post ID is required');
    }

    if (!isValidIdentity(id)) {
        throw new ApiError(400, 'Invalid post ID');
    }

    const post = await Post.findById(id);

    if (!post) {
        throw new ApiError(404, 'Post not found');
    }

    if (post.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(
            403,
            "You don't have permission to access this post"
        );
    }

    post.caption = caption || undefined;

    let media = [];
    if (existingMedia && Array.isArray(existingMedia)) {
        media = existingMedia.filter((item) => item.url && item.type);
    }

    if (mediaFiles && mediaFiles.length > 0) {
        const newMedia = await Promise.all(
            mediaFiles.map(async (file) => {
                try {
                    const uploadedMedia = await uploadOnCloudinary(file.path);

                    if (!uploadedMedia) {
                        throw new Error('Failed to upload media');
                    }

                    return {
                        url: uploadedMedia.secure_url,
                        type:
                            uploadedMedia.resource_type === 'video'
                                ? 'video'
                                : 'image',
                    };
                } catch (error) {
                    throw new ApiError(500, 'Error while uploading media');
                }
            })
        );

        media.push(...newMedia);
    }

    post.media = media;

    const updatedPost = await post.save();

    if (!updatedPost) {
        throw new ApiError(500, 'Error while updating the post');
    }

    return res
        .status(200)
        .json(new ApiResponse(200, updatedPost, 'Post updated successfully'));
});

const deletePostHandler = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        throw new ApiError(400, 'Post ID is required');
    }

    if (!isValidIdentity(id)) {
        throw new ApiError(400, 'Invalid Post ID');
    }

    const post = await Post.findById(id);

    if (!post) {
        throw new ApiError(404, 'Post not found');
    }

    if (post.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(
            403,
            "You don't have permission to delete this post"
        );
    }

    await post.deleteOne();

    return res
        .status(200)
        .json(new ApiResponse(200, null, 'Post deleted successfully'));
});

export { createPostHandler, updatePostHandler, deletePostHandler };
