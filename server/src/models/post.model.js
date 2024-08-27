import mongoose, { Schema } from 'mongoose';

const mediaSchema = new Schema(
    {
        url: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['image', 'video'],
            required: true,
        },
    },
    {
        _id: false,
    }
);

const postSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        caption: {
            type: String,
        },
        media: {
            type: [mediaSchema],
            default: [],
        },
    },
    { timestamps: true }
);

export const Post = mongoose.model('Post', postSchema);
