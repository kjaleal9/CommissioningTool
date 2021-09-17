import asyncHandler from 'express-async-handler'
import CmType from '../models/cmTypeModel.js'

// @desc    Fetch all control module types
// @route   GET /api/cms
// @access  Public
const getCms = asyncHandler(async (req, res) => {
  const cmTypes = await CmType.find()

  if (cmTypes) {
    res.json({ cmTypes })
  } else {
    res.status(500).send('Server Error')
  }
})

export { getCms }
