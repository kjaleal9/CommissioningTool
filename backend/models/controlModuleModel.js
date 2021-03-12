import mongoose from 'mongoose';

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
        comment: [{ type: mongoose.Schema.ObjectId, ref: 'Comment' }],
        tickets: [{ type: mongoose.Schema.ObjectId, ref: 'Ticket' }],
    },
    {
        timestamps: true,
    }
);

const ControlModule = mongoose.model('ControlModule', controlModuleSchema);

export default ControlModule;
