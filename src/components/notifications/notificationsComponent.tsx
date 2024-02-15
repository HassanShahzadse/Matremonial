"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Woman from "/public/member3.png";
import Message from "/public/Icons/message.png";
import Filter from "/public/Icons/filter.png";
import Batch from "/public/Icons/batch.png";
import SearchLove from "/public/Icons/search-love.png";

export default function NotificationsComponent() {
  const [show, setShow] = useState(false);
  const images = Array.from(
    { length: 10 },
    (_, index) => `/member3-${index + 1}.png`
  );

  return (
    <>
      <div className="flex bg-[#FD307A] fixed left-0 w-full top-0 h-[10vh] items-center z-10 justify-between px-5">
        <div className="search flex sm:space-x-28 items-center justify-center relative">
          <div>
            <p className="text-2xl text-white">☰</p>
          </div>
          <div className="flex space-x-2">
            <div className="icon">
              <Image
                className=""
                src={SearchLove}
                alt="Message"
                width={30}
                height={30}
              />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-[20vw] p-1 rounded-full focus:outline-0 border-t-2  border-b-2 border-s-2 border-gray-500 "
            />
          </div>
        </div>
        <div className="right-side flex space-x-5 items-center">
          <div className="icon">
            <Image
              className=""
              src={Message}
              alt="Message"
              width={30}
              height={30}
            />
          </div>
          <div className="icon">
            <Image
              className=""
              src={Batch}
              alt="Message"
              width={30}
              height={30}
            />
          </div>

          <div className=" flex-col py-2 items-center">
            <Image
              className="rounded-full"
              src={Woman}
              alt=""
              width={40}
              height={40}
            />
            <h3 className="font-semibold text-sm text-white">Mahanor</h3>
          </div>
        </div>
      </div>
      <Layout show={show} setShow={setShow}>
        <div className="container mt-20 mx-auto">
          <h1 className="text-4xl font-bold text-center py-10">Gallery</h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 py-5 gap-8">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  width={200}
                  height={200}
                  src={Woman}
                  alt={`Image ${index + 1}`}
                  className="rounded h-36"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 "></div>
    </>
  );
}
