import express from 'express';
import { saveAnalyticsConfig, getAnalyticsConfig } from '../controllers/analyticsController.js';

const router = express.Router();


router.post('/config', saveAnalyticsConfig);
router.get('/config', getAnalyticsConfig);

export default router;
