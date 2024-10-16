import {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
/*import { products } from '../assets/img/assets.js';*/

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
   const currency = '$';
   const deliveryFee = 10;
   const backendURL = import.meta.env.VITE_BACKEND_URL;
   const [products, setProducts] = useState([]);
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
   }//end of addToCart Function

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
   }//end of getCartCount Function

   const updateQuantity = async (itemId, size, quantity) => {
      let cartData = structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setCartItems(cartData)

   }//end of updateQuantity Function

   const getCartAmount = () => {
      let totalAmount = 0;
      for (const items in cartItems) {
         let itemInfo = products.find((product) => product._id === items);
         for (const item in cartItems[items]) {
            try {
               if (cartItems[items][item] > 0) {
                  totalAmount += itemInfo.price * cartItems[items][item];
               }
            } catch (error) {

            }
         }
      }
      return totalAmount;
   }//end of getCartAmount Function

   const getProductsData = async () => {
      try {
         const response = await axios.get(backendURL + '/api/v1.0/product/products/');
         console.log(response.data);
         if (response.data.success) {
            setProducts(response.data.data.products.reverse());
            console.log(response.data.data.products.reverse());

         } else {
            toast.error(response.data.data.message)
         }

      } catch(err) {
         toast.error(err.message);
      }
   }


/*   useEffect(() => {
      console.log(cartItems)
   }, [cartItems]);*/

   useEffect(() => {
      getProductsData();
   }, []);

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
      getCartCount: getCartCount,
      updateQuantity: updateQuantity,
      getCartAmount: getCartAmount,
      backendURL: backendURL,
      getProductsData: getProductsData
   }
   return (
      <ShopContext.Provider value={value}>
         {props.children}
      </ShopContext.Provider>
   );

}//end of ShopContextProvider Function
export default ShopContextProvider;