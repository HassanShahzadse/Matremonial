"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
type Props = {}

const Login = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const handleSubmit = (values: any) => {
    console.log("values", values)
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required'),
  });
  return (
    <div className="card bg-white p-6 rounded-lg shadow-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className='card-body'>
              <div className='form-group mb-5'>
                <label className='mb-2'>Email</label>
                <Field type="text" name="email" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your email" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className='form-group'>
                <label className='mb-2'>Password</label>
                <Field type="password" name="password" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your password" />
                <ErrorMessage name="password" component="div" className="text-red-500" />

              </div>

              <div className='text-center mt-10'>
                <button className="login-btn border border-gray-300 rounded-full bg-pink-500 hover:bg-pink-700 text-white" type="submit">Login</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex items-center mt-2">
        <hr className="flex-1 border-t border-black" />
        <span className="px-2">OR</span>
        <hr className="flex-1 border-t border-black" />
      </div>
      <div className='text-center mt-2'>
        <button className="google-btn border border-gray-300 rounded-full" >
        <i className="fa-brands fa-google me-1" style={{ color:' #c61010' }}></i>
          Login with Google</button>
      </div>
      <div className='text-center mt-2'>
        <button className="google-btn border border-gray-300 rounded-full" >
        <i className="fa-brands fa-facebook me-1" style={{ color:'rgb(19 16 198)'}}></i>
          Login with Facebook</button>
      </div>
      <div className='text-center mt-2'>
        <button className="google-btn border border-gray-300 rounded-full" >
        <i className="fa-brands fa-apple me-1" style={{ color:'rgb(28 27 27)' }}></i>
          Login with Apple ID</button>
      </div>
      <div className='text-center mt-5'>
        <span>Don't have an account?<a className='cursor-pointer text-red-500' onClick={()=>router.push('/signup')}>Sign in</a></span>
      </div>
    </div >

    // <div className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto mt-10">
    //   <h1 className="text-2xl font-bold text-center">Login</h1>
    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <label>Email</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    //         onClick={() => router.push('/dashboard')}>Login</button>
    //     </div>
    //   </form>
    // </div>
  );





}
export default Login