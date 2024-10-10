import React, { useState } from "react";
import style from "./MainSlider.module.css";
import Slider from "react-slick";
import slide1 from "../../assets/images/slider-image-1.jpeg";
import slide2 from "../../assets/images/slider-image-2.jpeg";
import slide3 from "../../assets/images/slider-image-3.jpeg";

export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="flex my-6">
        <div className="w-3/4">
          <Slider {...settings}>
            <img className="w-full h-[500px]" src={slide1} alt="" />
            <img className="w-full h-[500px]" src={slide2} alt="" />
            <img className="w-full h-[500px]" src={slide3} alt="" />
          </Slider>
        </div>
        <div className="w-1/4">
            <img className="w-full h-[250px]" src={slide2} alt="" />
            <img className="w-full h-[250px]" src={slide3} alt="" />
        </div>
      </div>
    </>
  );
}
