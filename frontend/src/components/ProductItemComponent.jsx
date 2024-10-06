import {Link} from 'react-router-dom';
import {useContext} from "react";
import {ShopContext} from '../context/ShopContext.jsx';

export default function ProductItemComponent({id,image,name,price}) {
   const {currency} = useContext(ShopContext);

   return (
      <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
         <div className=' overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
         </div>
         <p className='pt-3 pb-1 text-sm'>{name}</p>
         <p className=' text-sm font-medium'>{currency}{price}</p>
      </Link>

   );
}