// src/presentation/routes/UserRoutes.ts
import { Router } from 'express';
import { CustomerController } from '../controllers/customercontroller';

const router = Router();
const customerController = new CustomerController();

router.get('/:id', (req, res) => customerController.getCustomerById(req, res));
router.get('/name/:name', (req, res) => customerController.getCustomerByName(req, res));
router.get('/', (req, res) => customerController.getAllCustomer(req, res));
router.post('/', (req, res) => customerController.createCustomer(req, res));
router.delete('/:id', (req, res) => customerController.deleteCustomer(req, res));
router.put('/:id', (req, res) => customerController.updateCustomer(req, res));


export default router;