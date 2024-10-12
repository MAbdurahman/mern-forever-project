import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent.jsx';
import SidebarComponent from './components/SidebarComponent.jsx';
import AddProductPage from './pages/AddProductPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import SignInPage from './pages/SignInPage.jsx';

export default function App() {
   const [token, setToken] = useState('');

   return (
      <div className='bg-gray-50 min-h-screen'>
         {token === '' ? <SignInPage /> :
         <>
            <NavbarComponent/>
            <hr/>
            <div className='flex w-full'>
               <SidebarComponent/>
               <div
                  className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                  <Routes>
                     <Route path='/add-product' element={<AddProductPage/>}/>
                     <Route path='/products' element={<ProductsPage />}/>
                     <Route path='/orders' element={<OrdersPage />}/>
                  </Routes>
               </div>
            </div>
         </>
         }

      </div>

   );
}