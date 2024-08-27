import mongoose, { Schema } from 'mongoose';

const reactionSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        postID: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
        audiaence: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        reaction: {
            type: String,
            enum: 'like',
            required: true,
        },
    },
    { timestamps: true }
);

export const Reaction = mongoose.model('Reaction', reactionSchema);
