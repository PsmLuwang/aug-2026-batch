import express from 'express';
import { create, getAllOrders } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/create', create);
router.get('/getAllOrders', getAllOrders);

export default router;