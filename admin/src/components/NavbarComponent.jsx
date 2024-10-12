import React from 'react';
import { assets } from '../assets/img/assets.js';

export default function NavbarComponent({setToken}) {

   return (
      <div className='flex items-center py-2 px-[4%] justify-between'>
         <img className='w-[max(10%,80px)]' src={assets.logo} alt="forever logo"/>
         <button onClick={()=>setToken('')} className='bg-gray-600 uppercase tracking-wider text-white px-5 py-2 sm:px-7 sm:py-2 rounded-md text-xs sm:text-sm'>Sign Out</button>
      </div>

   );
}