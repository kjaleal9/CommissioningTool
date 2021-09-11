import mongoose from 'mongoose';

const areaSchema = mongoose.Schema({
    name: { type: String, required: true },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
        },
    ],
});

const Area = mongoose.model('Area', areaSchema);

export default Area;
