"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {loginWithFacebook, loginWithGoogle, signInWithEmailAndPassword } from '@/shared/auth';

type Props = {}

const Login = (props: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  
    const handleSubmit = async (values: any) => {

      console.log("values", values);
      const email = values.email;
      const password = values.password

      try {
        const user = await signInWithEmailAndPassword(email, password);
        
        console.log('Logged in user:', user);
      } catch (error) {
        console.error('Login failed in login file', error);
      }
    };
  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      console.log('Logged in with Google:', user);
     
    } catch (error) {
      console.error('Google login error:', error);
      
    }
  };
  const handleFacebookLogin = async () => {
    try {
      const user = await loginWithFacebook();
      console.log('Logged in with Facebook:', user);
    } catch (error) {
      console.error('Facebook login error:', error);
    }
  };
 
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().min(8).required('Password is required'),
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
        <button className="google-btn border border-gray-300 rounded-full" onClick={handleGoogleLogin}>
          <i className="fa-brands fa-google me-1" style={{ color: ' #c61010' }}></i>
          Login with Google</button>
      </div>
      <div className='text-center mt-2'>
        <button className="facebook-btn border border-gray-300 rounded-full"  onClick={handleFacebookLogin}>
          <i className="fa-brands fa-facebook me-1" style={{ color: 'rgb(19 16 198)' }}></i>
          Login with Facebook</button>
      </div>
      <div className='text-center mt-2'>
        <button className="google-btn border border-gray-300 rounded-full" >
          <i className="fa-brands fa-apple me-1" style={{ color: 'rgb(28 27 27)' }}></i>
          Login with Apple ID</button>
      </div>
      <div className='text-center mt-5'>
        <span>Don't have an account?<a className='cursor-pointer text-red-500' onClick={() => router.push('/signup')}>Sign in</a></span>
      </div>
    </div >
  );
}
export default Login


