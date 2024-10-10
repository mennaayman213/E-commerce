import React, { useContext, useState } from 'react'
import style from './Checkout.module.css'
import { useFormik } from 'formik'
import { CartContext } from '../../context/CartContext'

export default function Checkout() {

 let {checkoutSession} = useContext(CartContext)


  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: ""
    },
    onSubmit: checkoutSession,
  })

    
  return (
   <>
   <div className='pt-8 w-1/2 mx-auto'>
    <h1 className='text-3xl py-6 font-semibold text-center'>Checkout</h1>


    <form onSubmit={formik.handleSubmit}>
          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="details">Details</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="text" id="details" name="details" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} />
           </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="Phone">Phone</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="tel" id="phone" name="phone" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
           </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="city">City</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="text" id="city" name="city" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} />
           </div>

          
           <button type="submit" className="mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay</button>
    </form>
   </div>
  </>
  )
}
