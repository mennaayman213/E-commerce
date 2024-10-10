import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {

  function getRecentProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  
  let {data, isLoading, error, refetch, isSuccess, isError} = useQuery({
    queryKey: ["products"],
    queryFn: getRecentProducts
  })


    return <ProductsContext.Provider value={{data}}>
        {children}
    </ProductsContext.Provider>
}