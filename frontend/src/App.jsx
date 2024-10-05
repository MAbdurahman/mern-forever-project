import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import PlaceOrderPage from './pages/PlaceOrderPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import NavbarComponent from './components/NavbarComponent.jsx';



export default function App() {

   return (
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
         <NavbarComponent />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/place-order" element={<PlaceOrderPage />} />
            <Route path="/orders" element={<OrdersPage />} />
         </Routes>
      </div>

   );
}