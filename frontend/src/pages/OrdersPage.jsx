import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import TitleComponent from '../components/TitleComponent.jsx';
import { ShopContext } from '../context/ShopContext'

export default function OrdersPage() {
   const { products, currency} = useContext(ShopContext);

   const [orderData,setOrderData] = useState([]);

   return (
      <div className='border-t pt-16'>

         <div className='text-2xl'>
            <TitleComponent text1={'MY'} text2={'ORDERS'}/>
         </div>
         <div>
            {
               products.slice(1, 4).map((item, index) => {
                  <div key={index}
                       className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                     <div className="flex items-start gap-6 text-sm">
                        <img className="w-16 sm:w-20" src={item.image[0]} alt=""/>
                     </div>
                     <div>
                        <p className='sm:text-base font-medium'>{item.name}</p>
                        <div
                           className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                           <p>{currency}{item.price}</p>
                           <p>Quantity: 1</p>
                           <p>Size: M</p>
                        </div>
                        <p className='mt-1'>Date:
                           <span className=' text-gray-400'>24 Sep 2024</span>
                        </p>
                        <p className='mt-1'>Payment:
                           <span
                              className=' text-gray-400'>{item.paymentMethod}</span>
                        </p>
                     </div>
                     <div className='md:w-1/2 flex justify-between'>
                        <div className='flex items-center gap-2'>
                           <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                           <p className='text-sm md:text-base'>Ready to ship</p>
                        </div>
                        <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
                           Track Order
                        </button>
                     </div>

                  </div>
               })
            }
         </div>


      </div>

   );
}