import express from 'express'
const router = express.Router()

import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTask)

export default router
