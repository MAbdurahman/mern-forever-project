import jwt from 'jsonwebtoken';

const authAdmin = async (req,res,next) => {
   try {
      const { token } = req.headers
      if (!token) {
         return res.json({success:false,message:"Not Authorized Sign In Again"})
      }
      const token_decode = jwt.verify(token,process.env.JWT_SECRET);
      if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
         return res.json({success:false,message:"Not Authorized Sign In Again"})
      }
      next();

   } catch (err) {
      console.log(err);
      res.json({ success: false, message: err.message });
   }
}

export default authAdmin