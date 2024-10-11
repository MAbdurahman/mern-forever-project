import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { generateToken } from '../utils/generateTokenUtil.js';
import { errorMessageHandler } from '../utils/errorMessageHandlerUtil.js';

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
         return errorMessageHandler(res, 'Email already exists!', false, 409);
      }

      if (!validator.isEmail(email)) {
         return errorMessageHandler(res, 'Enter a valid email!', 400);
      }

      if (password.length < 8) {
         return errorMessageHandler(res, 'Passwords must be at least 8 characters!', 400);
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
         name,
         email,
         password: hashedPassword
      });

      const user = await newUser.save();
      const token = generateToken(user._id);

      res.status(201).json({
         success: true,
         message: 'User created successfully',
         user: {
            ...user._doc, password: undefined,
         },
         token
      });


   } catch(err) {
      next(err);
   }
}//end of signUp Function

export const signIn = async (req, res, next) => {
   const {email, password} = req.body;
   if (!email) {
      return errorMessageHandler(res, 'Please enter email!', 400);
   }
   if (!password) {
      return errorMessageHandler(res, 'Please enter password!', 400);
   }

   try {
      const user = await User.findOne({email});
      if (!user) {
         return errorMessageHandler(res, 'User not found!', 404);
      }

      const isPassword = await bcrypt.compare(password, user.password);
      if (!isPassword) {
         return errorMessageHandler(res, 'Invalid credentials!', 401);
      }

      const token = generateToken(user._id);

      res.status(201).json({
         success: true,
         message: 'User signed in successfully',
         token
      });

      } catch(err) {
      next(err);
   }

}//end of signIn Function

export const adminSignIn = async (req, res, next) => {
   const { email, password } = req.body;

   try {
      if (!email) {
         return errorMessageHandler(res, 'Email is required!', 400);
      }
      if (!password) {
         return errorMessageHandler(res, 'Password is required!', 400);
      }
      if (email !== process.env.ADMIN_EMAIL) {
         return errorMessageHandler(res, 'Invalid credentials', 401);
      }
      if (password !== process.env.ADMIN_PASSWORD) {
         return errorMessageHandler(res, 'Invalid credentials', 401);
      }
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
         const token = jwt.sign(email + password, process.env.JWT_SECRET);
         res.status(200).json({
				success: true,
				data: {
					message: 'Admin SignIn successfully',
					token,
				},
			});
      } else {
         return errorMessageHandler(res,'Forbidden Access!', 403);
      }
      
   } catch (err) {
      next(err);
      
   }

}//end of adminSignIn Function