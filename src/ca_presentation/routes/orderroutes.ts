// src/presentation/routes/UserRoutes.ts
import { Router } from 'express';
import { OrderController } from '../controllers/ordercontroller';

const router = Router();
const orderController = new OrderController();

router.get('/:id', async (req, res) => orderController.getOrderById(req, res));
router.get('/name/:name', async (req, res) => orderController.getOrderByCustomerId(req, res));
router.get('/', async (req, res) => orderController.getAllOrders(req, res));
router.post('/', async (req, res) => orderController.createOrder(req, res));
router.put('/:id', async (req, res) => orderController.updateOrder(req, res));
router.delete('/:id', async (req, res) => orderController.deleteOrder(req, res));

export default router;