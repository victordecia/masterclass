import express from 'express';
import { convertString } from '../controllers/formatStringController.js';

const router = express.Router();

router.get('/convert/:originalString', convertString);

export default router;
