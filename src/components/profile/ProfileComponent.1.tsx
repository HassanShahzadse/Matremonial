"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Man from "/public/member2.png";
import { ChooseImg } from "./profileComponents/ChooseImg";
import { InputField } from "./profileComponents/InputField";
import { PhotosList } from "./profileComponents/PhotosList";
import { Appearance } from "./profileComponents/Appearance";
import { GeneralInput } from "./profileComponents/GeneralInput";

export default function ProfileComponent() {
  const [show, setShow] = useState(false);
  return (
    <Layout show={show} setShow={setShow}>
      <>
        <div className=" lg:top-16 xsm:top-10 fixed inline w-full p-4 bg-white">
              <h2 className="text-2xl font-bold  z-10  inline">Profile</h2>
            </div>

        <form action="">
          {/* <div className="grid w-full  lg:grid-cols-3 md:grid-cols-2 gap-6 mt-20 bg-gray-100">
            <div className="sm:col-span-2 p-5 shadow-md bg-white rounded-md">
              <div className="flex">
                <div>
                  <Image
                    src={Man}
                    alt=""
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>

                <div className="ml-7 mt-6">
                  <h1 className="text-xl">Change Profile Picture</h1>
                  <label className="flex items-center justify-center w-28 mt-5 p-2 rounded-lg shadow-md cursor-pointer bg-green-300 hover:bg-[#fb1086] hover:text-white">
                    <span className="text-base leading-normal">
                      Select a file
                    </span>
                    <input type="file" className="hidden" />
                  </label>
                  <button className="w-28 mt-5 p-2 rounded-lg shadow-md cursor-pointer bg-green-300 hover:bg-[#fb1086] hover:text-white">
                    Upload
                  </button>
                </div>
              </div>
            </div>

            <div className="description shadow-md rounded-md bg-white">
              <div className="msg leading-10 p-4">
                <h1>I' am looking for</h1>
                <span className="bg-[#fb1086] text-white p-2 rounded-md">
                  Girl
                </span>
                <br />
                <span className="bg-[#fb1086] text-white p-2 rounded-md">
                  From 21 to 30{" "}
                </span>
                <span className="bg-[#fb1086] text-white p-2 rounded-md">
                  Frinidship
                </span>
                <br />
                <span className="bg-[#fb1086] text-white p-2 rounded-md">
                  Frinidship
                </span>
                <p></p>
                <p></p>
              </div>
            </div>
          </div> */}
          <ChooseImg/>  
          {/* ********* Section Form ******* */}

          {/* <div className="grid lg:grid-cols-2 gap-5 bg-white shadow-md p-5 rounded-md my-10 w-full">
            <div>
              <div className="mb-4 ">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Display Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

          
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Birthday
                </label>
                <input
                  type="number"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 ">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              
              <div className="mb-4">
                <label
                  htmlFor="text"
                  className="block text-gray-600 text-sm font-medium"
                >
                  City
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border focus:border-none rounded-md"
                />
              </div>
            </div>

          </div> */}
          <InputField/>
          {/* ********* Section Form End ******* */}

          {/* ********* Photos Section **** */}
          
          {/* <div className="photos bg-white shadow-md rounded-md p-7">
            <h1 className="text-xl font-semibold mb-5 ">Photos</h1>
            <div className="grid lg:grid-cols-9 md:grid-cols-5 gap-2 sm:grid-cols-5 xsm:grid-cols-3 ">
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <label className="bg-[#fb1086]  xsm:w-[90px] flex items-center rounded-md justify-center ">
                <span className="leading-normal text-4xl text-white ">+</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div> */}
          <PhotosList/>
          {/* ********* Photos Section End **** */}


          {/* <div className="photos bg-white shadow-md rounded-md p-7 my-10">
            <h1 className="text-xl font-semibold mb-5">Appearance</h1>
            <div className="flex justify-between lg:mx-10">
              <div className="flex-col">
                <h3>Height</h3>
                <label htmlFor="">
                  <input
                    type="number"
                    className="rounded border-2  p-2 w-20 my-3 mr-2 "/>{" "}
                  cm{" "}
                </label>
                <h3>Weight</h3>
                <label htmlFor="">
                  <input
                    type="number"
                    className="rounded border-2 p-2 w-20 mt-3 mr-2"
                  />
                  kg
                </label>
              </div>
              <div className="flex">
                <div className="flex-col ">
                  <h3 className="leading-10">On your body there is</h3>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      className="mr-3 w-5 h-5 accent-[#fb1086]"
                    />
                    Piercing
                  </label>
                  <br />
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      className="mr-3 w-5 h-5 accent-[#fb1086]"
                    />
                    Tattos
                  </label>
                  <br />
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      className="mr-3 w-5 h-5 accent-[#fb1086]"
                    />
                    Freckles
                  </label>
                </div>
              </div>
            </div>
          </div> */}
        <Appearance/>

          {/* ********* General Section **** */}

          {/* <div className="bg-white shadow-md p-5 rounded-md my-10 w-full">
              <h1 className="text-xl font-semibold mb-5 ">General</h1>
              <div className="grid lg:grid-cols-3 gap-5 ">

                <div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>

                    
                    <div className="mb-4">
                      <label
                        htmlFor="number"
                        className=" text-gray-600 text-sm font-medium"
                      >
                        Birthday
                      </label>
                      <input
                        type="number"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="number"
                        className=" text-gray-600 text-sm font-medium"
                      >
                        Birthday
                      </label>
                      <input
                        type="number"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>

                  </div>
                <div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>

                    
                    <div className="mb-4">
                      <label
                        htmlFor="number"
                        className=" text-gray-600 text-sm font-medium"
                      >
                        Birthday
                      </label>
                      <input
                        type="number"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="number"
                        className=" text-gray-600 text-sm font-medium"
                      >
                        Birthday
                      </label>
                      <input
                        type="number"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>

                  </div>
                <div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 text-sm font-medium"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>

                  
                    <div className="mb-4">
                      <label
                        htmlFor="number"
                        className=" text-gray-600 text-sm font-medium"
                      >
                        Birthday
                      </label>
                      <input
                        type="number"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="number"
                        className=" text-gray-600 text-sm font-medium"
                      >
                        Birthday
                      </label>
                      <input
                        type="number"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>

                  </div>

            </div>
          </div> */}

            <GeneralInput/>

            {/* Submit Button */}
            <div className="flex justify-end mb-5 space-x-4">
          <button type="button" className="bg-green-400 text-white p-2 rounded-md px-5">
            Cencel
          </button>
          <button type="submit" className="bg-[#fb1086] text-white p-2 rounded-md px-5">
            Submit
          </button>
        </div>

        </form>
      </>
    </Layout>
  );
}
