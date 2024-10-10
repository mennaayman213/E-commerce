import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'

export default function Navbar() {

  let {userData, setUserData} = useContext(UserContext);
  let navigate = useNavigate();
  let {cart} = useContext(CartContext);

  let logOut = () => {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }

  function menu() {
    let menue = document.querySelector('#navbar-default');
    let icon = document.querySelector('.fa-ellipsis-vertical');
    menue.classList.toggle('hidden');
    icon.parentElement.classList.toggle('hidden');
  }

  function menuClose() {
    let menue = document.querySelector('#menue-bar');
    menue.classList.toggle('hidden');
  }
    
  return <>
    {/* <nav className='bg-gray-200 md:fixed top-0 inset-x-0 py-2 text-center capitalize z-50 px-10'>
      <div className="container flex justify-between items-center text-gray-500">
        <div className='flex items-center space-x-3'>
          <div className='menue-bar text-black cursor-pointer lg:hidden'> <i class="fa-solid fa-bars"></i> </div>

          <img src={logo} width={120} alt="" />
          {userData && 
          <ul className='hidden lg:flex space-x-2'>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="favorites">Favorites</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
            <li><NavLink to="categories">Categories</NavLink></li>
            <li><NavLink to="brands">Brands</NavLink></li>
            <li className='relative me-3'><NavLink to="cart">
              <i className="fa-solid fa-cart-shopping text-[#0AAD0A] text-2xl"></i>
              <span className='absolute top-0 right-0 text-xs bg-[#0AAD0A] text-white rounded-full w-4 h-4 flex justify-center items-center'>{cart ? cart.numOfCartItems : 0}</span>
            </NavLink></li>
          </ul>}
        </div>

        <div className='flex items-center space-x-3'>
        <ul className='hidden lg:flex space-x-2 items-center'>
            <li className='space-x-4 text-black'>
              <i className='fab fa-instagram cursor-pointer'></i>
              <i className='fab fa-facebook-f cursor-pointer'></i>
              <i className='fab fa-tiktok cursor-pointer'></i>
              <i className='fab fa-twitter cursor-pointer'></i>
              <i className='fab fa-linkedin-in cursor-pointer'></i>
              <i className='fab fa-youtube cursor-pointer'></i>
            </li>
            {userData 
            ? <li onClick={() => logOut()} className='ps-5 pe-2 cursor-pointer'><span>logout</span></li>
            : <>
                <li className='ps-5 pe-2'><NavLink to="login">Login</NavLink></li>
                <li><NavLink to="register">Register</NavLink></li>
            </>}
        </ul>

        <div className='menue-bar text-black cursor-pointer lg:hidden'> <i class="fa-solid fa-ellipsis-vertical"></i> </div>
        </div>
      </div>
    </nav> */}

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {userData && 
        <button onClick={menu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>}
    
        <img src={logo} width={120} alt="Logo" />
    
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
          {userData && 
          <ul className="font-medium space-y-4 lg:space-y-0 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="favorites">Favorites</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
            <li><NavLink to="categories">Categories</NavLink></li>
            <li><NavLink to="brands">Brands</NavLink></li>
            <li className='relative me-3 w-min'><NavLink to="cart">
              <i className="fa-solid fa-cart-shopping text-[#0AAD0A] text-2xl"></i>
              <span className='absolute top-0 right-0 text-xs bg-[#0AAD0A] text-white rounded-full w-4 h-4 flex justify-center items-center'>{cart ? cart.numOfCartItems : 0}</span>
            </NavLink></li>
          </ul>}
        </div>
    
        <div className='flex items-center space-x-3 relative'>
            <ul className='hidden lg:flex space-x-2 items-center lg:static absolute top-5 right-5 bg-gray-400 lg:bg-transparent rounded-md p-5 lg:p-0 z-50' id='menue-bar'>
                <li className='space-y-4 lg:space-x-4 lg:space-y-0 text-black flex flex-col items-center lg:flex-row'>
                  <i className='fab fa-instagram cursor-pointer'></i>
                  <i className='fab fa-facebook-f cursor-pointer'></i>
                  <i className='fab fa-tiktok cursor-pointer'></i>
                  <i className='fab fa-twitter cursor-pointer'></i>
                  <i className='fab fa-linkedin-in cursor-pointer'></i>
                  <i className='fab fa-youtube cursor-pointer'></i>
                </li>
                {userData 
                ? <li onClick={() => logOut()} className='my-3 lg:my-0 lg:ps-5 lg:pe-2 cursor-pointer'><span>logout</span></li>
                : <>
                    <div className='flex flex-col lg:flex-row items-center justify-center'>
                      <li className='my-3 lg:my-0 lg:ps-5 lg:pe-2'><NavLink to="login">Login</NavLink></li>
                      <li><NavLink to="register">Register</NavLink></li>
                    </div>
                </>}
            </ul>
    
            <div onClick={menuClose} className='text-black cursor-pointer lg:hidden'> <i className="fa-solid fa-ellipsis-vertical"></i> </div>
        </div>
      </div>
    </nav>


  </>
}
