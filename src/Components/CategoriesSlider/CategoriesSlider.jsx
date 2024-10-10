import React, { useEffect, useState } from 'react'
import style from './CategoriesSlider.module.css'
import axios from 'axios';
import Slider from "react-slick";

export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:1500,
  };


  const [categories, setCategories] = useState([]);

  async function getRecentCategories() {
    try{
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories`
      );
      setCategories(data.data);
      console.log(data.data);
      

    } catch(err) {
      console.log("🚀 ~ getRecentCategories ~ err:", err)
    }
  }

  
  useEffect(() => {
    getRecentCategories();
  }, []);

    
  return <>
    
    <Slider {...settings}>
          {categories.map((category, i) => <div key={i} className='mb-5 mt-1'>
            <img src={category.image} className='w-full h-[200px]' alt={category.name} />
            <h3>{category.name}</h3>
          </div>)}
    </Slider>
  </>
}
