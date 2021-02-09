import mongoose from 'mongoose'

const replySchema = mongoose.Schema({
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
})

const ticketSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    priority: { type: String, required: true },
    issueType: { type: String, required: true },
    comment: { type: String, required: true },
    replies: [replySchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    isResolved: { type: Boolean, required: true, default: false },
    resolvedAt: { type: Date },
  },
  {
    timestamps: true,
  }
)

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
    comment: {
      type: String,
      required: true,
    },
    tickets: [ticketSchema],
  },
  {
    timestamps: true,
  }
)

const ControlModule = mongoose.model('ControlModule', controlModuleSchema)

export default ControlModule
