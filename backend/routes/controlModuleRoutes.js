import express from 'express';
const router = express.Router();
import { getControlModules } from '../controllers/controlModuleController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getControlModules);

export default router;
