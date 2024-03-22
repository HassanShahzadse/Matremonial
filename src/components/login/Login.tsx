"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast ,  ToastContainer } from 'react-toastify';
import * as Yup from "yup";
import {
  loginUser,
  loginWithFacebook,
  loginWithGoogle,
} from "@/sharedService/auth/auth";
import {
  fetchUserInfoFromFirebase,
  fetchUserInfoFromFirebaseEmail,
} from "@/sharedService/users/user";
import Marrage from "/public/clubmobile.png";
import 'react-toastify/dist/ReactToastify.css';


type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (values: any) => {
    const email = values.email;
    const password = values.password;
    try {
      let user = await loginUser(email, password);
      console.log("Logged in user:", user);
      if (user && user.id) {
        const userId = user.id;
        router.push("/dashboard");
      } else {
        toast.error("Incorrect email or password. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      }
    } catch (error) {
      toast.error("Incorrect email or password. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user: any = await loginWithGoogle();
      const userInfo: any = await fetchUserInfoFromFirebaseEmail(user.email);
      console.log("Logged in with Google:", user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };
  const handleFacebookLogin = async () => {
    try {
      const user = await loginWithFacebook();
      console.log("Logged in with Facebook:", user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Facebook login error:", error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().min(8).required("Password is required"),
  });
  return (
    <>
       <ToastContainer />
      <div className="fixed   top-0 left-0 right-0  h-[5vh] w-screen  rounded-l-xl ">
        <Image src="/Navbar/NavbarThick.png" alt="Description"  
          objectFit="cover"
          fill
          className=""
        />
      </div>

      
      <div className="md:mt-[5vh] lg:h-[92vh]  mt-11 ">
        <div className=" container-fluid">
          <div className="grid lg:grid-cols-2 ">
            <div className="  flex  items-center justify-center md:h-[47vh] lg:h-[92vh]    flex-col   bg-[#ffe8ea] ">
              <h1 className="font-bold  lg:text-4xl text-5xl  xl:text-5xl  text-[#f46194] text-center  md:-mb-14">
                Muslim Marriage online{" "}
              </h1>
              <Image
                src={Marrage}
                className="rounded-md "
                alt=""
                height={500}
                width={500}
              />
            </div>
            <div className="lg:mt-0 bg-white  flex justify-center md:h-[47vh] lg:h-[92vh]  flex-col   rounded-lg shadow-md ">
              <div className="card lg:px-32 lg:py-8 p-8">
                <h1 className="text-2xl  font-bold text-center">
                  Find Your Soulmate
                </h1>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={handleSubmit}
                >
                  {() => (
                    <Form>
                      <div className="card-body ">
                        <div className="form-group mb-5 ">
                          <Field
                            type="text"
                            name="email"
                            className="w-full  border-b-2 border-gray-300 outline-none rounded p-2 "
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="form-group">
                          <div className="relative">
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="password"
                              className="w-full  border-b-2 border-gray-300 outline-none rounded p-2 "
                              placeholder="Password"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <i className="fas fa-eye-slash text-gray-400"></i>
                              ) : (
                                <i className="fas fa-eye text-gray-400"></i>
                              )}
                            </button>
                          </div>
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="form-group align-items-center mt-3">
                          <input type="checkbox" className="me-2"></input>
                          <label className="mb-2">Remember Me</label>
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
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-[3vh]  ">
       <Image src="/Navbar/NavbarThin1.png" alt="Description" 
        className="rounded-lg"
        objectFit="cover"
        fill
       />
      </div>
    </>
  );
};
export default Login;
