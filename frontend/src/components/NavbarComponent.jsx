import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {assets} from '../assets/img/assets.js';

export default function NavbarComponent() {
   const [visible,setVisible] = useState(false);

   return (
      <div className='flex items-center justify-between py-5 font-medium'>
         <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>
      </div>

   );
}