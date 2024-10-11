import jwt from 'jsonwebtoken';
import { errorMessageHandler } from '../utils/errorMessageHandlerUtil.js';

const authorizeAdmin = async (req,res,next) => {
   const { token } = req.headers;
   try {
      if (!token) {
         return errorMessageHandler(res, 'Not Authorized, sign in again!', 403);
      }
      const token_decode = jwt.verify(token,process.env.JWT_SECRET);
      if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
         return errorMessageHandler(res, 'Not Authorized, Credentials Invalid!', 403);

      }
      next();

   } catch (err) {
      next(err);
   }
}//end of authorizeAdmin Function

export default authorizeAdmin