import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../context/ShopContext.jsx';
import { assets } from '../assets/img/assets.js';
import TitleComponent from '../components/TitleComponent';
import ProductItemComponent from '../components/ProductItemComponent.jsx';

export default function CollectionPage() {
   const {products, search , showSearch } = useContext(ShopContext);
   const [showFilter,setShowFilter] = useState(false);
   const [filterProducts,setFilterProducts] = useState([]);
   const [category,setCategory] = useState([]);
   const [subCategory,setSubCategory] = useState([]);
   const [sortType,setSortType] = useState('relevent');

   const toggleCategory = (e) => {
      if (category.includes(e.target.value)) {
         setCategory(prev => prev.filter(item => item !== e.target.value))
      }
      else{
         setCategory(prev => [...prev,e.target.value])
      }
   }

   const toggleSubCategory = (e) => {
      if (subCategory.includes(e.target.value)) {
         setSubCategory(prev => prev.filter(item => item !== e.target.value))
      }
      else{
         setSubCategory(prev => [...prev,e.target.value])
      }
   }

   const applyFilter = () => {
      let productsCopy = products.slice();

      if (showSearch && search) {
         productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }

      if (category.length > 0) {
         productsCopy = products.filter(item => category.includes(item.category));
      }

      if (subCategory.length > 0 ) {
         productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      }

      setFilterProducts(productsCopy);

   }

   const sortProducts = () => {
      let filteredProductsCopy = filterProducts.slice();

      switch (sortType) {
         case 'low-high':
            setFilterProducts(filteredProductsCopy.sort((a,b)=>(a.price - b.price)));
            break;

         case 'high-low':
            setFilterProducts(filteredProductsCopy.sort((a,b)=>(b.price - a.price)));
            break;

         default:
            applyFilter();
            break;
      }
   }

   useEffect(() => {
      applyFilter();
   }, [category, subCategory, search, showSearch, products]);

   useEffect(()=>{
      sortProducts();
   },[sortType])

   return (
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
         {/* Filter Options */}
         <div className='min-w-60'>
            <p onClick={() => setShowFilter(!showFilter)}
               className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
               <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
                    src={assets.dropdown_icon} alt="dropdown icon"/>
            </p>
            {/* Category Filter */}
            <div
               className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
               <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
               <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Dress'}
                            onChange={toggleCategory}/> Dresses
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Top'}
                            onChange={toggleCategory}/> Tops
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Bottom'}
                            onChange={toggleCategory}/> Bottoms
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Skirt'}
                            onChange={toggleCategory}/> Skirts
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Romper'}
                            onChange={toggleCategory}/> Rompers
                  </p>
               </div>
            </div>
            {/* SubCategory Filter */}
            <div
               className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>COLORS</p>
               <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Black'}
                            onChange={toggleSubCategory}/> Black
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Blue'}
                            onChange={toggleSubCategory}/> Blue
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Burgundy'}
                            onChange={toggleSubCategory}/> Burgundy
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Chartreuse'}
                            onChange={toggleSubCategory}/> Chartreuse
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Flora'}
                            onChange={toggleSubCategory}/> Flora
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Grey'}
                            onChange={toggleSubCategory}/> Grey
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Pink'}
                            onChange={toggleSubCategory}/> Pink
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Print'}
                            onChange={toggleSubCategory}/> Print
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Red'}
                            onChange={toggleSubCategory}/> Red
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Striped'}
                            onChange={toggleSubCategory}/> Striped
                  </p>
                  <p className="flex gap-2">
                     <input className="w-3" type="checkbox" value={'Taupe'}
                            onChange={toggleSubCategory}/> Taupe
                  </p>
               </div>
            </div>
         </div>

         {/* Right Side */}
         <div className="flex-1">

            <div className="flex justify-between text-base sm:text-2xl mb-4">
               <TitleComponent text1={'ALL'} text2={'COLLECTIONS'}/>
               {/* Product Sort */}
               <select onChange={(e) => setSortType(e.target.value)}
                       className='border-2 border-gray-300 text-sm px-2'>
                  <option value="relevent">Sort by: Relevant</option>
                  <option value="low-high">Sort by: Low to High</option>
                  <option value="high-low">Sort by: High to Low</option>
               </select>
            </div>

            {/* Map Products */}
            <div
               className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
               {
                  filterProducts.map((item, index) => (
                     <ProductItemComponent key={index} name={item.name} id={item._id}
                                  price={item.price} image={item.image}/>
                  ))
               }
            </div>
         </div>
      </div>
   );
}  