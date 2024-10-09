/************************* imports *************************/
import express from "express";
import {createProduct, deleteProduct, getProducts, getSingleProduct} from '../controllers/productController.js';

/************************* variables *************************/
const router = express.Router();

/************************** routes **************************/
router.post('/createProduct', createProduct);
router.delete('/deleteProduct', deleteProduct);
router.get('/getProducts', getProducts);
router.post('/getSingleProduct', getSingleProduct);

export default router;