import {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import { products } from '../assets/img/assets.js';

export const ShopContext = createContext();


const ShopContextProvider = (props) => {

   const currency = '$';
   const deliveryFee = 10;


   const value = {
      products: products,
      currency: currency,
      deliveryFee: deliveryFee,
   }
   return (
      <ShopContext.Provider value={value}>
         {props.children}
      </ShopContext.Provider>
   );

}
export default ShopContextProvider;