import express from 'express';
import { getMaster, createMaster } from '../controllers/masterController.js';

const router = express.Router();

router.get('/', getMaster);
router.post('/', createMaster);

export default router;
