import express from 'express'
const router = express.Router()

import { getCms } from '../controllers/cmTypesController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getCms)

export default router
