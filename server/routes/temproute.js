import tempcont from '../controllers/temp.js';
import express from 'express';
const router = express.Router();
router.get('/temp', tempcont);
export default router;