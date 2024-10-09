import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/productModel.js';
import {errorMessageHandler} from '../utils/errorMessageHandlerUtil.js';

export const createProduct = async (req, res, next) => {
   console.log('Creating product...');
   res.status(201).json({
      success: true,
      data: {
         message: 'Product created successfully'
      }
   })
}

export const getProducts = async (req, res, next) => {
   console.log('Getting product list');
   res.status(200).json({
      success: true,
      data: {
         message: 'Product list successfully'
      }
   })
}

export const getSingleProduct = async (req, res, next) => {
   console.log('Getting single product list');
   res.status(200).json({
      success: true,
      data: {
         message: 'Single product successfully'
      }
   })
}

export const deleteProduct = async (req, res, next) => {
   console.log('Deleting product...');
   res.status(200).json({
      success: true,
      data: {
         message: 'Product deleted successfully'
      }
   })
}