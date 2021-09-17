import mongoose from 'mongoose';

const cmTypeSchema = mongoose.Schema({
    name: { type: String, required: true },
});

const CmType = mongoose.model('CmType', cmTypeSchema);

export default CmType;
