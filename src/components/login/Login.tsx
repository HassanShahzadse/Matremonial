"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser, loginWithFacebook, loginWithGoogle } from '@/sharedService/auth/auth';
import { fetchUserInfoFromFirebase, fetchUserInfoFromFirebaseEmail } from '@/sharedService/users/user';
import Marrage from "/public/clubmobile.png";

type Props = {}

const Login = (props: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (values: any) => {
    const email = values.email;
    const password = values.password
    try {
      let user = await loginUser(email, password);
      console.log('Logged in user:', user);
      if(user && user.id){
        const userId = user.id
        router.push('/dashboard');
      }
      else {
        console.error('User object or user.id is undefined');
      }
    } catch (error) {
      console.error('Login failed in login file', error);
    }
  };
  
  const handleGoogleLogin = async () => {
    try {
      const user:any = await loginWithGoogle();
      const userInfo:any = await fetchUserInfoFromFirebaseEmail(user.email);
      console.log('Logged in with Google:', user);
      router.push('/dashboard'); 

    } catch (error) {
      console.error('Google login error:', error);
    }
  };
  const handleFacebookLogin = async () => {
    try {
      const user = await loginWithFacebook();
      console.log('Logged in with Facebook:', user);
      router.push('/dashboard'); 
    } catch (error) {
      console.error('Facebook login error:', error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().min(8).required('Password is required'),
  });
  return (
    <>
    <div className="h-[10vh] bg-[#fb1086] "></div>
    <div className="lg:h-[85vh]">
      <div className=" container-fluid">
        <div className="grid lg:grid-cols-2 ">
         
       
          <div className=" lg:h-[85vh] flex  items-center justify-end  flex-col   bg-[#ffe8ea] ">
          <h1 className="font-bold  lg:text-4xl text-5xl  xl:text-5xl  text-[#f46194] text-center  md:-mb-14">Muslim Marriage online </h1>
             <Image
              src={Marrage}
              className="rounded-md "
              alt=""
              height={500}
              width={500}
          /> 
         

          </div>
         
          <div className="lg:mt-0 bg-white lg:h-[85vh] flex justify-center    flex-col   rounded-lg shadow-md ">
            
            <div className="card lg:px-32 lg:py-8 p-8"> 
            <h1 className="text-2xl  font-bold text-center">Login</h1>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <div className="card-body ">
                    <div className="form-group mb-5 ">
                      <label className="mb-2">Email</label>
                      <Field
                        type="text"
                        name="email"
                        className="w-full  border-b-2 border-gray-300 outline-none rounded p-2 "
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div> 
                    <div className="form-group">
                      <label className="mb-2">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className="w-full  border-b-2 border-gray-300 outline-none rounded p-2 "
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="text-center mt-10">
                      <button
                        className="login-btn  border border-gray-300 rounded-full  active:scale-95 bg-[#fb1086] text-white"
                        type="submit"
                      >
                        Login
                      </button>
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
            <div className="text-center mt-2">
              <button
                className="google-btn   border border-gray-300 rounded-full"
                onClick={handleGoogleLogin}
              >
                <i
                  className="fa-brands fa-google me-1"
                  style={{ color: " #c61010" }}
                ></i>
                Login with Google
              </button>
            </div>
            <div className="text-center mt-2">
              <button
                className="facebook-btn  border border-gray-300 rounded-full"
                onClick={handleFacebookLogin}
              >
                <i
                  className="fa-brands fa-facebook me-1"
                  style={{ color: "rgb(19 16 198)" }}
                ></i>
                Login with Facebook
              </button>
            </div>
            <div className="text-center mt-2">
              <button className="google-btn  border border-gray-300 rounded-full">
                <i
                  className="fa-brands fa-apple me-1"
                  style={{ color: "rgb(28 27 27)" }}
                ></i>
                Login with Apple ID
              </button>
            </div>
            <div className="text-center mt-5">
              <span>
                Dont have an account?
                <a
                  className="cursor-pointer text-red-500"
                  onClick={() => router.push("/signup")}
                >
                  Sign up
                </a>
              </span>
            </div>
            </div>
          </div>
          {/* <div className="col-span-2 h-7 xsm:hidden lg:block rounded-l-xl bg-[#fb1086]"></div> */}
        </div>
      </div>
    </div>
          {/* <div className="col-span-2 h-7 xsm:hidden lg:block rounded-l-xl bg-[#fb1086]"></div> */}
    <div className="h-[5vh] rounded-l-xl bg-[#fb1086]"></div>
    </>

  );
}
export default Login


