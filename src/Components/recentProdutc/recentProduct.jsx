import React, { useContext, useEffect, useState } from "react";
import style from "./recentProduct.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export default function RecentProduct({ product }) {
  let { addProductToCart } = useContext(CartContext);
  let {
    addProductToWishlist,
    removeProductFromWishlist,
    wishlist,
    wishlistIds,
    isFavorites,
    setIsFavorites,
    productID,
  } = useContext(WishlistContext);

  const [productId, setProductId] = useState(null);

  return (
    <>
      {/* <div className='product cursor-pointer w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4 overflow-hidden border-2 rounded-3xl border-transparent hover:border-[#0AAD0A] group relative'>
       {wishlistIds.includes(product.id) ? <i onClick={() => removeProductFromWishlist(product.id)} className="fa-solid fa-heart text-2xl absolute top-10 right-5 text-red-600"></i>
       : <i onClick={() => addProductToWishlist(product.id)} className="fa-regular fa-heart text-2xl absolute top-10 right-5" ></i>}

       <Link to={`/productdetails/${product.id}`}>
        <img src={product.imageCover} className='w-full' alt={product.description} />
        <h2 className='text-sm text-[#0AAD0A]'>{product.category?.name}</h2>
        <h2 className='font-medium'>{product.name}</h2>
        <div className='flex justify-between items-center mt-5'>
          <div className="price">
          <h3 className={product.priceAfterDiscount ? 'line-through text-red-500' : ''}>{product.price} EGP</h3>
          {product.priceAfterDiscount && <h3>{product.priceAfterDiscount} EGP</h3>}
          </div>
          <h3><i className='fas fa-star text-yellow-400'></i> {product.ratingsAverage}</h3>
        </div>
       </Link>
      <button onClick={() => addProductToCart(product.id)} className='w-full bg-[#0AAD0A] text-white rounded-md py-1 mt-3 translate-y-40 group-hover:translate-y-0 duration-500'>Add To Cart</button>
      </div> */}

      <div className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4 p-10 mx-auto cursor-pointer relative rounded-lg hover:shadow-lg hover:shadow-[#0AAD0A] duration-700">
      {wishlistIds?.includes(product.id) ? <i onClick={() => removeProductFromWishlist(product.id)} className="fa-solid fa-heart text-2xl absolute top-10 right-5 text-red-600"></i>
       : <i onClick={() => addProductToWishlist(product.id)} className="fa-regular fa-heart text-2xl absolute top-10 right-5" ></i>}

     

      <Link to={`/productdetails/${product.id}`}>
        <div className="w-full max-w-sm aspect-square">
          <img src={product.imageCover} alt={product.description} className="w-full h-full rounded-xl"/>
        </div>

        <div className="mt-5 flex items-center justify-between">
           <div>
             <h6 className="font-medium text-xl leading-8 text-black mb-2"> {product.name} </h6>
              <h6 className="font-medium text-xl leading-8 text-black mb-2"> {product.category?.name} </h6>
              <div className='flex justify-between items-center mt-5'>
                 <div className="price">
                <h3 className={product.priceAfterDiscount ? 'line-through text-red-500' : ''}>{product.price} EGP</h3>
                {product.priceAfterDiscount && <h3 className="font-semibold text-lg leading-8 text-indigo-600">{product.priceAfterDiscount} EGP</h3>}
                </div>
                <h3><i className='fas fa-star text-yellow-400'></i> {product.ratingsAverage}</h3>
             </div>
          </div>
          
          <button onClick={() => addProductToCart(product.id)} className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
            <svg
              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Link>
      </div>
    </>
  );
}
