import React, { useContext, useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { ProductsContext } from "../../context/ProductsContext";
import RecentProduct from "../recentProdutc/recentProduct";
import Loading from "../Loading/Loading";
import { CartContext } from "../../context/CartContext";

export default function ProductDetails() {
  const [productId, setProductId] = useState(null);
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  let { data } = useContext(ProductsContext);
  let {addProductToCart} = useContext(CartContext);

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

  async function getProductsDetails(id) {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );
      setProductDetails(data.data);
      console.log(data.data);
    } catch (err) {
      console.log("🚀 ~ getRecentProducts ~ err:", err);
    }
  }

  useEffect(() => {
    getProductsDetails(id);
  }, [id]);

  return (
    <>
      {productDetails ? (
        <div className="container px-10">
          <h1 className="text-3xl">ProductDetails</h1>

          <div className="flex flex-wrap items-center p-10">
            <div className="w-full md:w-1/4 px-4 rounded-md">
              {productDetails.images.length > 1 ? <Slider {...settings}>
                {productDetails.images?.map((image, i) => (
                  <img  key={i} src={image} className="w-full" alt={productDetails.description} />
                ))}
              </Slider> 
              :  <img src={productDetails.imageCover} className="w-full" alt={productDetails.description} />}
            </div>

            <div className="w-full md:w-3/4 px-10">
              <h2 className="text-2xl">{productDetails.title}</h2>
              <p className="text-gray-500 p-2 my-3">
                {productDetails.description}
              </p>
              <h3>{productDetails.category?.name}</h3>

              <div className="flex justify-between mt-1">
                <h3>{productDetails.price} EGP</h3>
                <h3>
                  <i className="fas fa-star text-yellow-400"></i>{" "}
                  {productDetails.ratingsAverage}
                </h3>
              </div>
              <button onClick={() => addProductToCart(productDetails.id)} className="w-full bg-emerald-500 text-white rounded-md py-1 mt-5">
                Add To Cart
              </button>
            </div>
          </div>

          <h1 className="text-3xl">Similar Products</h1>

          <div className="products p-10 flex flex-wrap justify-center gap-y-10">
            {data?.data.data.filter( (product, i) => product.category?.name === productDetails.category?.name).map((product, i) => (
                <RecentProduct key={product.id} product={product} />
              ))}
          </div>
        </div>
      ) : (
        <div className="py-24 flex justify-center">
          <Loading />
        </div>
      )}
    </>
  );
}
