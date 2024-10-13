// src/presentation/routes/UserRoutes.ts
import { Router } from 'express';
import { ProductController } from '../controllers/productcontroller';

const router = Router();
const productcontroller = new ProductController();

router.get('/:id', (req, res) => productcontroller.getProductById(req, res));
router.get('/name/:name', (req, res) => productcontroller.getProductByName(req, res));
router.get('/', (req, res) => productcontroller.getAllProduct(req, res));
router.post('/', (req, res) => productcontroller.createProduct(req, res));
router.put('/:id', (req, res) => productcontroller.updateProduct(req, res));
router.delete('/:id', (req, res) => productcontroller.deleteProduct(req, res));

export default router;