import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
    {
        id: String,
        user: { type: mongoose.Schema.ObjectId, ref: 'User' },
        post: { type: mongoose.Schema.ObjectId, ref: 'Post' },
        comment: String,
        children: {
            type: [
                {
                    type: mongoose.Schema.ObjectId,
                    ref: 'Comment',
                },
            ],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
