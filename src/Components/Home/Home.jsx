import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import ProductDetails from '../ProductDetails/ProductDetails'
import RecentProduct from '../recentProdutc/recentProduct';
import axios from 'axios';
import Loading from '../Loading/Loading';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';
import { ProductsContext } from '../../context/ProductsContext';

export default function Home() {

  let {data} = useContext(ProductsContext);
  const [searchVal, setSearchVal] = useState('');

  function Search() {
    let searchInput = document.querySelector('#search');
    setSearchVal(searchInput.value);
  }


  return <>
    
    <div className='px-10'>
      <MainSlider/>
      <h2 className="text-2xl">Shop Popular Category</h2>
      <CategoriesSlider/>
    </div>

    <div className='w-1/2 mx-auto'>
      <input onChange={Search} className='w-full px-5 py-2 my-5 rounded-md border border-[#0AAD0A] outline-none' type="text" placeholder="Search" id='search'/>
    </div>

    {data?.data.data.length ? (
       <div className="products p-10 flex flex-wrap justify-center gap-y-10">
         {data.data.data.map((product, i) => {
          if(product.title?.toLowerCase().includes(searchVal.toLowerCase())) {
            return (<RecentProduct key={i} product={product}/>)
          }
         })}
       </div>)
        : (
       <div className="py-7 flex justify-center">
         <Loading/>
       </div>
    )}
  
  </>
}
