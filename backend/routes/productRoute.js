/************************* imports *************************/
import express from "express";
import {createProduct, deleteProduct, getAllProducts, getSingleProduct} from '../controllers/productController.js';
import upload from '../middlewares/multerMiddleware.js';
/************************* variables *************************/
const router = express.Router();

/************************** routes **************************/
router.post('/products', upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), createProduct);
router.delete('/products/:id', deleteProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getSingleProduct);

export default router;