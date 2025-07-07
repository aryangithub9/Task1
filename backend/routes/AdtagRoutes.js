// routes/adTagRoutes.js

import express from 'express';
import {
  createAdTag,
  getAdTagByPage,
  updateAdTag,
  deleteAdTag,
} from '../controllers/adTagController.js';

const router = express.Router();

router.post('/', createAdTag);
router.get('/:page', getAdTagByPage);
router.put('/:id', updateAdTag);
router.delete('/:id', deleteAdTag);

export default router;
