import express from 'express';
import { saveAnalyticsConfig, getAnalyticsConfig } from '../controllers/Analytics.Controlller.js';

const router = express.Router();


router.post('/config', saveAnalyticsConfig);
router.get('/config', getAnalyticsConfig);

export default router;
