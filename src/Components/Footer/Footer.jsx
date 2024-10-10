import React, { useState } from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className="p-10 bg-[#E5E7EB]">
        <h2 className="text-2xl">Get the FreshCart app</h2>
        <p className="text-[#949AA4]">We will send you a link, open it on your phone to download the app.</p>

        <div className="input px-5 flex flex-wrap items-center justify-center gap-5">
          <input className="w-full sm:w-[60%] lg:w-[80%] px-5 py-2 my-5 rounded-md border-none outline-none" type="text" placeholder="Email.."/>
          <button className="min-w-40 w-[15%] py-2 rounded-md bg-[#0AAD0A] text-white border-none">
            Share App Link
          </button>
        </div>

        <div className="links mx-5 my-5 py-3 border-t-2 border-b-2 border-[#949AA4] flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="payLinks flex items-center gap-5">
            <h4>Payment Partners</h4>
            <i className="fa-brands fa-cc-amazon-pay"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <div className="paypal flex items-center">
              <i className="fa-brands fa-paypal me-1"></i>
              <p className="text-[#364df8] font-bold">
                Pay<span className="text-[#74C0FC]">Pal</span>
              </p>
            </div>
          </div>

          <div className="storeLinks flex flex-wrap justify-center items-center gap-5">
            <h4>Get deliveries with FreshCart</h4>
            <div className="flex gap-2">
            <div className="app-store flex justify-center items-center gap-2 text-white bg-black px-3 pb-3 rounded-md">
              <i className="fa-brands fa-apple text-2xl mt-2"></i>
              <div className="text flex flex-col justify-center items-center">
                <p className="text-sm">Available on the</p>
                <h2 className="text-xl font-bold my-[-8px]">App Store</h2>
              </div>
            </div>

            <div className="google-play flex justify-center items-center gap-2 text-white bg-black px-3 pb-3 rounded-md">
              <i className="fa-brands fa-google-play mt-2"></i>
              <div className="text flex flex-col justify-center items-center">
                <p className="text-sm">GET IT ON</p>
                <h2 className="text-xl font-bold my-[-8px]">Google Play</h2>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
