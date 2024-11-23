import express from 'express';
import { getDetails, createDetail } from '../controllers/detailController.js';

const router = express.Router();

router.get('/', getDetails);
router.post('/', createDetail);

export default router;
