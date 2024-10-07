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
   const [cartItems, setCartItems] = useState({});
   const navigate = useNavigate();


   const addToCart = async (itemId, size) => {
      if (!size) {
         toast.error('Select Product Size');
         return;
      }
      let cartData = structuredClone(cartItems);
      if (cartData[itemId]) {
         if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
         }
         else {
            cartData[itemId][size] = 1;
         }
      }
      else {
         cartData[itemId] = {};
         cartData[itemId][size] = 1;
      }
      setCartItems(cartData);
   }

   const getCartCount = () => {
      let totalCount = 0;
      for (const items in cartItems) {
         for (const item in cartItems[items]) {
            try {
               if (cartItems[items][item] > 0) {
                  totalCount += cartItems[items][item];
               }
            } catch (error) {

            }
         }
      }
      return totalCount;
   }


/*   useEffect(() => {
      console.log(cartItems)
   }, [cartItems]);*/

   const value = {
      products: products,
      currency: currency,
      deliveryFee: deliveryFee,
      navigate: navigate,
      search: search,
      setSearch: setSearch,
      showSearch: showSearch,
      setShowSearch: setShowSearch,
      cartItems: cartItems,
      setCartItems: setCartItems,
      addToCart: addToCart,
      getCartCount: getCartCount
   }
   return (
      <ShopContext.Provider value={value}>
         {props.children}
      </ShopContext.Provider>
   );

}
export default ShopContextProvider;