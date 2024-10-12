import React from 'react';
import {NavLink} from 'react-router-dom';
import { assets } from '../assets/img/assets.js';

export default function SidebarComponent() {

   return (
      <div className='w-[18%] min-h-screen border-r-2'>
         <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink
               className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'
               to="/add-product">
               <img className='w-5 h-5' src={assets.add_icon} alt="add icon"/>
               <p className='hidden md:block font-semibold'>Add Product</p>
            </NavLink>

            <NavLink
               className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'
               to="/products">
               <img className='w-5 h-5' src={assets.order_icon} alt="list icon"/>
               <p className='hidden md:block font-semibold'>Products</p>
            </NavLink>

            <NavLink
               className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'
               to="/orders">
               <img className='w-5 h-5' src={assets.order_icon} alt="list icon"/>
               <p className='hidden md:block font-semibold'>Orders</p>
            </NavLink>

         </div>

      </div>

   );
}