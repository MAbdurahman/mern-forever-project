import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendURL, currency} from '../App.jsx';

export default function ProductsPage({token}) {
   const [products, setProducts] = useState([]);

   const fetchProducts = async () => {
      try {
         const response = await axios.get(backendURL + '/api/v1.0/product/products/');
         if (response.data.success) {
            setProducts(response.data.data.products.reverse());

         } else {
            toast.error(response.data.data.message)
         }

      } catch(err) {
         toast.error(err.message);
      }

   }//end of fetchProducts Function

   const deleteProduct = async (id) => {
      try {
      const response = await axios.delete(backendURL + `/api/v1.0/product/products/${id}`, { headers: { token } });
      if (response.data.success) {
         toast.success(response.data.data.message);
         await fetchProducts();

      } else {
         toast.error(response.data.data.message);
      }

      } catch(err) {
         toast.error(err.message);
      }

   }//end of deleteProduct Function

   useEffect(() => {
      fetchProducts();
   }, []);

   return (
      <>
         <p className='mb-2 font-semibold'>All Products List</p>
         <div className='flex flex-col gap-2'>

            {/* ------- Product Table Title ---------- */}

            <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
               <b>Image</b>
               <b>Name</b>
               <b>Category</b>
               <b>Price</b>
               <b className='text-center'>Action</b>
            </div>

            {/* ------ Product List ------ */}

            {
               products.map((item, index) => (
                  <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                     <img className='w-12' src={item.image[0]} alt="" />
                     <p>{item.name}</p>
                     <p>{item.category}</p>
                     <p>{currency}{item.price}</p>
                     <p onClick={()=>deleteProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
                  </div>
               ))
            }

         </div>
      </>

   );
}