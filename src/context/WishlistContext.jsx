import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

import React from "react";
import toast from "react-hot-toast";
import { json } from "react-router-dom";

export default function WishlistContextProvider({ children }) {
  let headers = { token: localStorage.getItem("userToken") };
  const [wishlist, setWishlist] = useState([]);
  let [wishlistIds, setWishlistIds] = useState([]);
  const [isFavorites, setIsFavorites] = useState(false);
  const [productID, setProductID] = useState(null);
  const [loading, setLoading] = useState(false);

  // ! Toggle wishlist item
  function toggleWishlist(productId) {
    if (wishlistIds.includes(productId)) {
      setWishlistIds(wishlistIds.filter((id) => id !== productId));
    } else {
      setWishlistIds([...wishlistIds, productId]);
    }
  }

  // ! Add Product To Wishlist
  async function addProductToWishlist(productId) {
    try {
      setIsFavorites(true);
      setProductID(productId);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        { headers }
      );
      setWishlist(data);
      toggleWishlist(productId);
      wishlistIds.push(productId);
      localStorage.setItem("wishlistIds", JSON.stringify(wishlistIds));
      toast.success(data.message);
      console.log(data);
    } catch (err) {
      // toast.error(err);
      console.log(err);
    }
  }

  // ! Get Wishlist Products
  async function getWishlistProducts() {
    try {
        setLoading(true);
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { headers }
      );
      setWishlist(data);
      console.log(data);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.message);
      console.log(err.response.data.message);
    }
  }

  // ! Remove Product From Wishlist
  async function removeProductFromWishlist(productId) {
    try {
      setIsFavorites(false);
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        { headers }
      );
      setWishlist(data);
      toggleWishlist(productId);
      localStorage.setItem("wishlistIds", JSON.stringify(wishlistIds));
      console.log(data);
      toast.success(data.message);
      getWishlistProducts();
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  }

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlistIds"));
    if (savedWishlist) {
      setWishlistIds(savedWishlist);
    } else {
      setWishlistIds([]); // Initialize with an empty array if there is no saved wishlist
    }
  }, []);
  

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    getWishlistProducts();
    // localStorage.setItem('wishlistIds', JSON.stringify(wishlistIds));
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        addProductToWishlist,
        getWishlistProducts,
        removeProductFromWishlist,
        wishlist,
        wishlistIds,
        isFavorites,
        setIsFavorites,
        productID,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
