import validator from "validator";
import bcrypt from "bcrypt"
import User from '../models/userModel.js';
import { generateToken } from '../utils/generateTokenUtil.js';
import { errorMessageHandler } from '../utils/errorMessageHandlerUtil.js';


export const signIn = async (req, res, next) => {
   console.log('Sign In');

   res.status(200).json({
      success: true,
      data: {
         message: 'Sign In Successfully'
      }
   })
}//end of signIn Function

export const signOut = async (req, res, next) => {
   console.log('Sign Out');
   res.status(200).json({
      success: true,
      data: {
         message: 'Sign Out Successfully'
      }
   })
}//end of signOut Function

export const signUp = async (req, res, next) => {
   const {name, email, password } = req.body;

   try {
      if (!email) {
         return errorMessageHandler(res, 'Please enter email!', 400);
      }
      if (!name) {
         return errorMessageHandler(res, 'Please enter name!', 400);
      }
      if (!password) {
         return errorMessageHandler(res, 'Please enter password!', 400);
      }

      const existingUser = await User.findOne({email});
      if (existingUser) {
         return errorMessageHandler(res, 'Email already exists!', 409);
      }


   } catch(err) {
      next(err);
   }
}//end of signUp Function

export const adminSignIn = async (req, res, next) => {
   console.log('Admin SignIn');
   res.status(200).json({
      success: true,
      data: {
         message: 'Admin SignIn successfully'
      }
   })
}//end of adminSignIn Function