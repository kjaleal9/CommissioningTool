import mongoose from 'mongoose'

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    area: {
      type: String,
      required: true,
    },
    taskType: {
      type: String,
      enum: ['Control Module', 'Phase'],
      required: true,
    },
    deviceType: {
      type: String,
      required: function () {
        return this.taskType === 'Control Module'
      },
    },
    phaseType: {
      type: String,
      required: function () {
        return this.taskType === 'Phase'
      },
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
)

const Task = mongoose.model('Task', taskSchema)

export default Task
