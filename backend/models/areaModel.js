import mongoose from 'mongoose';

const areaSchema = mongoose.Schema({
    name: { type: String, required: true },
    controlModules: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ControlModule',
        },
    ],
});

const Area = mongoose.model('Area', areaSchema);

export default Area;
