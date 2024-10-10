import React, { useState } from 'react'
import style from './VerifyResetCode.module.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import toast from "react-hot-toast";

export default function VerifyResetCode() {

  const [apiErr, setApiErr] = useState(null);
  const [userSubmit, setUserSubmit] = useState(false);
  let naviagte = useNavigate();

  async function verifyResetCode(values) {
    try{
      setUserSubmit(true);
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', values);
      
      console.log(data);
      toast.success(data.message);
      
      // ! navigate('/resetPassword');
      naviagte('/resetPassword');

      setApiErr(null);
      setUserSubmit(false);

    } catch(err) {
      setApiErr(err.response.data.message);
      setUserSubmit(false);
    }
  }

  // ! Library Validation (Yup)
  let  validationSchema = Yup.object().shape({
    resetCode: Yup.string().required('Required'),
   })


  let formik = useFormik({
    initialValues: {
      resetCode: '',
    },
    onSubmit: verifyResetCode,
    validationSchema: validationSchema,
  })

    
  return (
   <>
   <div className='py-16 w-1/2 mx-auto'>
    <h1 className='text-3xl py-6 font-semibold text-center'>Write your ResetCode</h1>


    <form onSubmit={formik.handleSubmit}>
          {apiErr && <div className='px-4 my-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>{apiErr}</div>}
          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="resetCode">resetCode</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="text" id="resetCode" name="resetCode" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.resetCode} />
            {formik.touched.resetCode && formik.errors.resetCode && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 '>{formik.errors.resetCode}</div>}
          </div>

          {userSubmit
           ? <button type="button" className=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <i className='fas fa-spinner fa-spin-pulse'></i>
             </button>
           : <button type="submit" className=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
          }
    </form>
   </div>
  </>
  )
}