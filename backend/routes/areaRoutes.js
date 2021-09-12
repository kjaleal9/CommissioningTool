import express from 'express'
const router = express.Router()

import { getAreas } from '../controllers/areaController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getAreas)

export default router
