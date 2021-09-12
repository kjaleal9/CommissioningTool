import asyncHandler from 'express-async-handler'
import Area from '../models/areaModel.js'

// @desc    Fetch all areas
// @route   GET /api/areas
// @access  Public
const getAreas = asyncHandler(async (req, res) => {
  const areas = await Area.find()

  if (areas) {
    res.json({ areas })
  } else {
    res.status(500).send('Server Error')
  }
})

export { getAreas }
