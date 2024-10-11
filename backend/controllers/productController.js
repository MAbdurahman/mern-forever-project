import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/productModel.js';
import {errorMessageHandler} from '../utils/errorMessageHandlerUtil.js';

export const createProduct = async (req, res, next) => {
   const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
   if (!name || !description || !price || !category) {
      return errorMessageHandler(res, 'All fields are required!', 400);
   }
   if (!subCategory || !sizes || !bestseller) {
      return errorMessageHandler(res, 'All fields are required!', 400);
   }

   try {
      const image1 = req.files.image1 && req.files.image1[0];
      const image2 = req.files.image2 && req.files.image2[0];
      const image3 = req.files.image3 && req.files.image3[0];
      const image4 = req.files.image4 && req.files.image4[0];

      const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

      let imagesUrl = await Promise.all(
         images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
            return result.secure_url
         })
      );

      const productData = {
         name,
         description,
         category,
         price: Number(price),
         subCategory,
         bestseller: bestseller === "true" ? true : false,
         sizes: JSON.parse(sizes),
         image: imagesUrl,
         date: Date.now()
      }

      const product = new Product(productData);
      await product.save();

      res.status(201).json({
         success: true,
         data: {
            message: 'Product created',
            product: product
         }
      })

   } catch(err) {
      next(err);
   }
}//end of createProduct Function

export const getAllProducts = async (req, res, next) => {
   try {
      const products = await Product.find({});
      if (!products) {
         return errorMessageHandler(res, 'This resource was not found!', 404);
      }
      const productCount = await Product.countDocuments();

      res.status(200).json({
         success: true,
         data: {
            message: 'Products list found successfully',
            productCount,
            products
         }
      });

   } catch(err) {
      next(err);
   }
}//end of getAllProducts Function

export const getSingleProduct = async (req, res, next) => {
   const {id} = req.params;
   try {
      const singleProduct = await Product.findById(id);
      if (!singleProduct) {
         return errorMessageHandler(res, 'This product was not found!', 404);
      }
      res.status(200).json({
         success: true,
         data: {
            message: 'Get single product successfully',
            product: singleProduct
         }
      })

   } catch(err) {
      next(err);
   }
}//end of getSingleProduct Function

export const deleteProduct = async (req, res, next) => {
   const {id} = req.params;
   try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
         return errorMessageHandler(res, 'This product was not found!', 404);
      }
      
      res.status(202).json({
         success: true,
         data: {
            message: 'Product deleted successfully',
            product: deletedProduct
         }
      })

   } catch(err) {
      next(err);
   }
}//end of deleteProduct Function