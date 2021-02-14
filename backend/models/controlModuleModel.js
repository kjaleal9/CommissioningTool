import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
    {
        comment: { type: String, required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const ticketSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        priority: { type: String, required: true },
        issueType: { type: String, required: true },
        text: { type: String, required: true },
        comments: [commentSchema],

        isResolved: { type: Boolean, required: true, default: false },
        resolvedAt: { type: Date },
    },
    {
        timestamps: true,
    }
);

const controlModuleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        deviceType: {
            type: String,
            required: true,
        },
        status: {
            completed: {
                type: Boolean,
                default: false,
            },
            mechanical: {
                type: Boolean,
                default: false,
            },
            electrical: {
                type: Boolean,
                default: false,
            },
            automation: {
                type: Boolean,
                default: false,
            },
        },
        comment: {
            type: String,
        },
        tickets: [ticketSchema],
    },
    {
        timestamps: true,
    }
);

const ControlModule = mongoose.model('ControlModule', controlModuleSchema);

export default ControlModule;
