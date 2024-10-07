import {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import { products } from '../assets/img/assets.js';

export const ShopContext = createContext();


const ShopContextProvider = (props) => {

   const currency = '$';
   const deliveryFee = 10;
   const [search, setSearch] = useState('');
   const [showSearch, setShowSearch] = useState(false);
   const navigate = useNavigate();


   const value = {
      products: products,
      currency: currency,
      deliveryFee: deliveryFee,
      navigate: navigate,
      search: search,
      setSearch: setSearch,
      showSearch: showSearch,
      setShowSearch: setShowSearch
   }
   return (
      <ShopContext.Provider value={value}>
         {props.children}
      </ShopContext.Provider>
   );

}
export default ShopContextProvider;