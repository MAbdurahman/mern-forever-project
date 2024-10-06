import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';

export default function LatestCollectionComponent() {
   const { products } = useContext(ShopContext);
   const [latestProducts,setLatestProducts] = useState([]);

   console.log(products);

   return (
      <div>
         <h2>LatestCollectionComponent</h2>
      </div>

   );
}