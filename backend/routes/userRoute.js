/************************* imports *************************/
import express from "express";
import {signIn, signOut, signUp, adminSignIn} from '../controllers/userController.js';

/************************* variables *************************/
const router = express.Router();

/*************************** routes ***************************/
router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/sign-out', signOut);
router.post('/admin-sign-in', adminSignIn);



export default router;