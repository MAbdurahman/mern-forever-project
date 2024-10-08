/************************* imports *************************/
import express from "express";
import {signIn, signUp, adminSignIn} from '../controllers/userController.js';

/************************* variables *************************/
const router = express.Router();

/*************************** routes ***************************/
router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/admin-sign-in', adminSignIn);



export default router;