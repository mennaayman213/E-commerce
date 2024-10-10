import React, { useContext, useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios'
import Loading from '../Loading/Loading';
import { ProductsContext } from '../../context/ProductsContext';
import RecentProduct from '../recentProdutc/recentProduct';

export default function Products() {

  let {data} = useContext(ProductsContext);
  const [searchVal, setSearchVal] = useState('');

  function Search() {
    let searchInput = document.querySelector('#search');
    setSearchVal(searchInput.value);
  }

    
  return (
    <>

      <div className='w-1/2 mx-auto'>
          <input onChange={Search} className='w-full px-5 py-2 my-5 rounded-md border border-[#0AAD0A] outline-none' type="text" placeholder="Search" id='search'/>
      </div>

      {data?.data.data.length ? (
          <div className="products py-10 px-10 flex flex-wrap justify-center gap-y-10">
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
    )
}



// {<div className='w-1/6 p-4 overflow-hidden border-2 rounded-3xl border-transparent hover:border-emerald-400 group relative'>
//   <img src={product.imageCover} className='w-full' alt={product.description} />
//   <h2 className='text-sm text-emerald-400'>{product.category?.name}</h2>
//   <h2 className='font-medium'>{product.title}</h2>
//   <div className='flex justify-between items-center mt-5'>
//     <h3>{product.price} EGP</h3>
//     <h3><i className='fas fa-star text-yellow-400'></i> {product.ratingsAverage}</h3>
//   </div>
//  </div>}