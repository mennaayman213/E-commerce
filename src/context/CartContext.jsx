import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from "react";
import toast from "react-hot-toast";

export let CartContext = createContext();

export default function CartContextProvider({ children }) {
  let headers = { token: localStorage.getItem("userToken") };
  const [cart, setCart] = useState(null);
  const [countLoading, setcountLoading] = useState(false);
  const [mainLoading, setmainLoading] = useState(false);
  const [id, setId] = useState(null);

  //   ! ADD TO CART
  async function addProductToCart(productId) {
    try {
        setmainLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        { headers }
      );
      setCart(data);
      toast.success(data.message);
      console.log(data);
      setmainLoading(false);
    } catch (err) {
        setmainLoading(false);
      toast.error(err);
      console.log(err);
    }
  }

  //   ! Checkout session
  async function checkoutSession(shippingAddress) {
    try {
        setmainLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,
        { shippingAddress },
        { headers }
      );
      console.log(data);
      window.location.href = data.session.url;
      setmainLoading(false);
    } catch (err) {
        setmainLoading(false);
      toast.error(err.response.data.message);
      console.log(err.response.data.message);
    }
    console.log("🚀 ~ addProductToCart ~ data:", data);
  }

  //   ! GET PRODUCT IN CART
  async function getProductInCart() {
    try {
      setmainLoading(true);
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      setCart(data);
      console.log(data);
      setmainLoading(false);
    } catch (err) {
        setmainLoading(false);
        console.log(err);
    }
  }

  //   ! Update Cart Product Quantity
  async function updateCartProductQuantity(productId, count) {
    if (count > 0) {
      try {
        setcountLoading(true);
        setId(productId);
        let { data } = await axios.put(
          `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
          { count },
          { headers }
        );
        setCart(data);
        console.log(data);
        setcountLoading(false);
      } catch (err) {
        setcountLoading(false);
        toast.error(err.response.data.message);
        console.log(err.response.data.message);
      }
    }
  }

  //   ! Remove Specific Cart Item
  async function removeSpecificCartItem(productId) {
    try {
      setmainLoading(true);
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { headers }
      );
      setCart(data);
      console.log(data);
      setmainLoading(false);
    } catch (err) {
      setmainLoading(false);
      toast.error(err.response.data.message);
      console.log(err.response.data.message);
    }
  }

  //   ! Clear User Cart
  async function clearUserCart() {
    try {
      setmainLoading(true);
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      setCart(null);
      console.log(data);
      toast.success(data.message);
      setmainLoading(false);
    } catch (err) {
      setmainLoading(false);
      console.log(err);
    }
  }



  useEffect(() => {
    getProductInCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        getProductInCart,
        updateCartProductQuantity,
        removeSpecificCartItem,
        checkoutSession,
        clearUserCart,
        setCart,
        cart,
        countLoading,
        id,
        mainLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
