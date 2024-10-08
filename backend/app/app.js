/************************* imports *************************/
import colors from 'colors';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';


/************************* setup config file *************************/
if (process.env.NODE_ENV !== 'production') {
   dotenv.config({path: 'backend/config/config.env'})
}
/************************* variables *************************/
const app = express();
colors.enabled = true;
/************************* middlewares *************************/
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(helmet());



/************************* import all routes *************************/
import homeRoute from '../routes/homeRoute.js';
import userRoute from '../routes/userRoute.js';
import productRoute from '../routes/productRoute.js';
import orderRoute from '../routes/orderRoute.js';
import cartRoute from '../routes/cartRoute.js';


/****************************** routes ******************************/
app.use('/api/v1.0/', homeRoute);
app.use('/api/v1.0/user', userRoute);
app.use('/api/v1.0/product', productRoute);
app.use('/api/v1.0/order', orderRoute);
app.use('/api/v1.0/cart', cartRoute);


export default app;