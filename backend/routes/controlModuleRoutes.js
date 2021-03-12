import express from 'express';
const router = express.Router();

import {
    getControlModules,
    getControlModuleById,
    createControlModule,
    updateControlModule,
} from '../controllers/controlModuleController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getControlModules).post(createControlModule);
router.route('/:id').get(getControlModuleById).put(updateControlModule);

export default router;
