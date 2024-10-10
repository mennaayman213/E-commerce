import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios';
import Loading from '../Loading/Loading';

export default function Brands() {

  const [allBrands, setAllBrands] = useState([]);

  // ! Get All Brands
  async function getAllBrands() {
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands"
      );
      setAllBrands(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllBrands();
  }, []);

    
  return (
    <>
      <div className="py-10 flex flex-wrap justify-center gap-y-10 w-[90%] mx-auto">
        {allBrands.data ? (
          allBrands.data.map((brands) => (
            <div key={brands._id} className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 text-center p-4 border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer">
              <img src={brands.image} className="w-full object-contain" alt={brands.name} />
              <h2 className="font-medium">{brands.name}</h2>
            </div>
          ))
        ) 
        : <div className="py-7 flex justify-center">
            <Loading />
          </div> }
      </div>
    </>
  );
}
