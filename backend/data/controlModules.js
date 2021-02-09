export const controlModules = [
  {
    name: 'ZS20500',
    area: 'Cream',
    tickets: [
      {
        name: 'ZS20500',
        priority: 'High',
        issueType: 'Electrical',
        comment: 'The proximity switch is broken',
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
        isResolved: { type: Boolean, required: true, default: false },
        resolvedAt: { type: Date },
      },
    ],
  },
]
