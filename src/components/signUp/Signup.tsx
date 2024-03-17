"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React,{useState,useEffect} from "react";
import axios from "axios";
import {
  createUser,
  signupWithFacebook,
  signupWithGoogle,
} from "@/sharedService/auth/auth";
import Marrage from "/public/pngwing.png";
import { loginUser } from "@/sharedService/auth/auth";
import { signupSchema } from "../../utils/validations/Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "@/utils/shared/Input";
import Radio from "@/utils/shared/Radio";
import Select from "@/utils/shared/Select";
import Password from "@/utils/shared/Password";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {CountryCode} from "./CountryCode"


type Props = {};

const countryOption = [
  { value: "option1", label: "Pakistan" },
  { value: "option2", label: "Afghanistan" },
  { value: "option3", label: "India" },
  { value: "option4", label: "England" },
  { value: "option5", label: "Australia" },
];
const registeringOptions = [
  { value: "option1", label: "I am registering to find best partner" },
  { value: "option2", label: "I am registering to find my friend a partner" },
  { value: "option3", label: "I am registering to find my son a partner" },
  { value: "option4", label: "I am registering to find my daughter a partner" },
];
const hearAboutOptions = [
  { value: "option1", label: "From Internet" },
  { value: "option2", label: "From Facebook" },
  { value: "option3", label: "From Linkdin" },
  { value: "option4", label: "From Youtube" },
];
const countryCodeOptions = [
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
];
const radioGenderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const SignUp = (props: Props) => {
  const [locationOptions, setLocationOptions] = useState([]);

  const [value, setValue] = useState()
  useEffect(() => {
    
    fetchCountries();
  }, []);

   const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country: any) => ({
          label: country.name.common,
          value: country.name.common,
        }));

        console.log(" name of country", countryData);
        setLocationOptions(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const users = await createUser(data);
      if (!users) return;
      let user = await loginUser(data.email, data.password);
      console.log("Logged in user:", user);
      if (user && user.id) {
        const userId = user.id;
        router.push("/dashboard");
      } else {
        console.error("User object or user.id is undefined");
      }

      router.push("/addprofile");
    } catch (error) {
      console.error("Login failed in login file", error);
    }
  };
  const handleGoogleSignup = async () => {
    try {
      const user = await signupWithGoogle();
      console.log("Signed up with Google:", user);
      router.push("/addprofile");
    } catch (error) {
      console.error("Google signup error:", error);
    }
  };
  const handleFacebookSignup = async () => {
    try {
      const user = await signupWithFacebook();
      console.log("Signed up with Facebook:", user);
      router.push("");
    } catch (error) {
      console.error("Facebook signup error:", error);
    }
  };

  return (
    <>
    <div className="md:fixed md:top-0 md:left-0 md:right-0  h-[5vh] bg-[#fb1086] "></div>
      <div className="md:mt-[5vh] lg:h-[90vh] ">
        <div className=" container-fluid">
          <div className="grid lg:grid-cols-2">
            <div className="lg:order-1 order-2    xsm:mt-2 lg:mt-0 bg-white p-7 rounded-lg shadow-md  md:h-[45vh] lg:h-[90vh]   overflow-auto ">
              <h1 className="text-2xl font-bold text-center">
                LOOKING FOR SOULMATE
              </h1>
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="2xl:px-16 2xl:py-4 mb-3">
                    <Input
                      label="User Name"
                      type="text"
                      placeholder="Enter your Name"
                      register={register("userName")}
                      error={errors.userName}
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 ">
                    <div className="mb-3">
                      <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        register={register("email")}
                        error={errors.email}
                      />
                    </div>
                    <div className="mb-3">
                      <Input
                        label="Confirm Email"
                        type="email"
                        placeholder="Re-enter your Email"
                        register={register("confirmEmail")}
                        error={errors.confirmEmail}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <Password
                       label="Password"
                       placeholder="Enter your password"
                       register={register("password")}
                       error={errors.password}
                    />
                  </div>
                  <div>
                    <Radio
                      label="Gender"
                      options={radioGenderOptions}
                      register={register("gender")}
                      error={errors.gender}
                    />
                  </div>
                  <div className="2xl:px-16 2xl:py-4">
                    <div className="form-group xl:mb-3">
                      <Select
                        label="Select Option"
                        register={register("country")}
                        error={errors.country}
                        options={locationOptions}
                        placeholder="Where do you Live?"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-2">Phone Number</label>
                    <div className="flex items-center">
                      <div className="w-2/4">
                        <Select
                          options={CountryCode}
                          placeholder="Select Country"
                        />
                      </div>
                      <div className="ms-2 w-2/4">
                        <Input
                          type="text"
                          register={register("phone")}
                          placeholder="Enter your Phone Number"
                          error={errors.phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Input
                      label="Date Of Birth"
                      type="date"
                      register={register("dateOfBirth")}
                      error={errors.dateOfBirth}
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-2">
                    <div className="mb-3">
                      <Select
                        label="Reason of Registering"
                        placeholder="Select Option"
                        error={errors.reason_for_registering}
                        register={register("reason_for_registering")}
                        options={registeringOptions}
                      />
                    </div>
                    <div className="mb-3">
                      <Select
                        label="Where did you hear about us?"
                        placeholder="Select Option"
                        error={errors.heard_about_us}
                        register={register("heard_about_us")}
                        options={hearAboutOptions}
                      />
                    </div>
                  </div>
                  <div className="text-center xl:mt-5">
                    <button
                      type="submit"
                      className="login-btn border border-gray-300 rounded-full active:scale-95 bg-[#fb1086] hover:bg-pink-700 text-white"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <>
                  <div className="flex items-center xl:mt-2">
                    <hr className="flex-1 border-t border-black" />
                    <span className="px-2">OR</span>
                    <hr className="flex-1 border-t border-black" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="text-center mt-2">
                      <button
                        className="px-8 py-2 border border-gray-300 rounded-full"
                        onClick={handleGoogleSignup}
                      >
                        <i
                          className="fa-brands fa-google me-1"
                          style={{ color: " #c61010" }}
                        ></i>
                        Sign up with Google
                      </button>
                    </div>
                    <div className="text-center mt-2">
                      <button
                        className="px-5 py-2  border border-gray-300 rounded-full"
                        onClick={handleFacebookSignup}
                      >
                        <i
                          className="fa-brands fa-facebook me-1"
                          style={{ color: "rgb(19 16 198)" }}
                        ></i>
                        Sign up with Facebook
                      </button>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <button className="px-8 py-2 border border-gray-300 rounded-full">
                      <i
                        className="fa-brands fa-apple me-1"
                        style={{ color: "rgb(28 27 27)" }}
                      ></i>
                      Sign up with Apple ID
                    </button>
                  </div>
                </>
              </div>
              <div className="text-center mt-5">
                <span>
                  Already have an account?
                  <a
                    className="cursor-pointer text-red-500"
                    onClick={() => router.push("/login")}
                  >
                    Log In
                  </a>
                </span>
              </div>
            </div>
            <div className="lg:order-2 order-1   lg:h-[85vh] flex  items-center justify-center  md:h-[45vh] lg:h-[90vh]  flex-col bg-[#ffe8ea]  ">
              <h1 className="font-bold  lg:text-4xl text-5xl  xl:text-5xl  text-[#f46194] text-center md:-mb-3">
                Muslim Marriage online{" "}
              </h1>
              <Image
                src={Marrage}
                className="rounded-md "
                alt="marriage"
                width={325}
                height={325}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:fixed md:bottom-0 md:left-0 md:right-0   h-[5vh] rounded-l-xl bg-[#fb1086]"></div>
    </>
  );
};

export default SignUp;
