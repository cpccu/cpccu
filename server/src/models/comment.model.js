import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema(
    {
        postID: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
        commenter: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        comment: {
            type: String,
        },
    },
    { timestamps: true }
);

export const Comment = mongoose.model('Comment', commentSchema);
