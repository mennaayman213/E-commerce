import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export default function Register() {

  const [apiErr, setApiErr] = useState(null);
  const [userSubmit, setUserSubmit] = useState(false);
  let naviagte = useNavigate();
  let {setUserData} = useContext(UserContext);

  async function register(values) {
    try{
      setUserSubmit(true);
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
    
      localStorage.setItem('userToken', data.token);
      setUserData(data.token);
      // ! navigate('/home');
      naviagte('/');

      setApiErr(null);
      setUserSubmit(false);

    } catch(err) {
      console.log(err.response.data.message)
      setApiErr(err.response.data.message);
      setUserSubmit(false);
    }
  }

  // ! Library Validation (Yup)
  let  validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least one letter and one number').min(8, 'Too Short!').max(15, 'Too Long!').required('Required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
    phone: Yup.string().matches(/^(002)?01[0125][0-9]{8}$/, 'Invalid phone number').required('Required'),
  })

  // ! Maniual Validation
  // function validateForm(values) {
  //   let errors = {};

  //   if (!values.name) {
  //     errors.name = 'Required';
  //   } else if (!/^[A-Za-z \s]{2,15}$/.test(values.name)) {
  //     errors.name = 'Invalid name';
  //   }

  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }

  //   if (!values.password) {
  //     errors.password = 'Required';
  //   } else if (values.password.length < 8) {
  //     errors.password = 'Must be 8 characters or more';
  //   }

  //   if (!values.rePassword) {
  //     errors.rePassword = 'Required';
  //   } else if (values.rePassword !== values.password) {
  //     errors.rePassword = 'Password does not match';
  //   }

  //   if (!values.phone) {
  //     errors.phone = 'Required';
  //   } else if (!/^(002)?01[0125][0-9]{8}$/.test(values.phone)) {
  //     errors.phone = 'Invalid phone number';
  //   }

  //   return errors;
  // }

  let formik = useFormik({
    initialValues: {
      name: '' ,
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    onSubmit: register,
    validationSchema: validationSchema
    // validate: validateForm,
  })

    
  return (
   <>
   <div className='w-full p-8 xl:w-1/2 mx-auto'>
    <h1 className='text-3xl py-6 font-semibold text-center'>Register</h1>


    <form onSubmit={formik.handleSubmit}>
          {apiErr && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>{apiErr}</div>}
    
          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="name">Name</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="text" id="name" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
            {formik.touched.name && formik.errors.name && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>{formik.errors.name}</div>}
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="email" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 '>{formik.errors.email}</div>}
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="password">Password</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="password" id="password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
            {formik.touched.password && formik.errors.password && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 '>{formik.errors.password}</div>}
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="rePassword">Re-Password</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="password" id="rePassword" name="rePassword" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} />
            {formik.touched.rePassword && formik.errors.rePassword && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 '>{formik.errors.rePassword}</div>}
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="phone">Phone</label>
            <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type="text" id="phone" name="phone" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
            {formik.touched.phone && formik.errors.phone && <div className='px-4 mt-2 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 '>{formik.errors.phone}</div>}
          </div>


          {userSubmit
           ? <button type="button" className=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <i className='fas fa-spinner fa-spin-pulse'></i>
             </button>
           : <button type="submit" className=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
          }
    </form>
   </div>
  </>
  )
}
