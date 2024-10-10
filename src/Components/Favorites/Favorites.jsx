import React, { useContext, useEffect, useState } from "react";
import style from "./Favorites.module.css";
import { WishlistContext } from "../../context/WishlistContext";
import RecentProduct from "../recentProdutc/recentProduct";
import Loading from "../Loading/Loading";

export default function Favorites() {
  let { getWishlistProducts, wishlist, Loading } = useContext(WishlistContext);

  useEffect(() => {
    getWishlistProducts();
  }, []);

  return (
    <>
      {Loading ? 
      <div className="py-24 flex justify-center">
          <Loading />
      </div> 
      : wishlist.data && wishlist.data.length ? 
      <div className="products py-20 px-10 flex flex-wrap justify-center gap-y-10">
        {wishlist.data.map((product, i) => (
        <RecentProduct key={i} product={product} />
      ))}
    </div>
    :  <div className="h-[25rem]">
      <h2 className="text-3xl text-black font-bold text-center py-20">Add products to Wishlist</h2>
    </div>}
    </>
  );
}
