import React, { useContext, useEffect, useState } from 'react'
import style from './Allorders.module.css'
import { CartContext } from '../../context/CartContext'

export default function Allorders() {

let {clearUserCart} = useContext(CartContext);


useEffect(() => {
  clearUserCart();
}, [])
    
  return <>
    
    <h1 className="text-3xl">Allorders</h1>
  
  </>
}
