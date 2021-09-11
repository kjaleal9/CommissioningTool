import express from 'express';
const router = express.Router();

import {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
} from '../controllers/taskController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTaskById).put(updateTask);

export default router;
