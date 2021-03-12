import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        priority: { type: String, required: true },
        issueType: { type: String, required: true },
        text: { type: String, required: true },
        comments: [{ type: mongoose.Schema.ObjectId, ref: 'Comment' }],
        isResolved: { type: Boolean, required: true, default: false },
        resolvedAt: { type: Date },
    },
    {
        timestamps: true,
    }
);

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
