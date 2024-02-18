"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Woman from "/public/member3.png";
import Message from "/public/icons/message.png";
import Filter from "/public/icons/filter.png";
import Batch from "/public/icons/batch.png";
import SearchLove from "/public/icons/search-love.png";
import TopHeader from "../mainLayout/TopHeader";

export default function NotificationsComponent() {
  const [show, setShow] = useState(false);
  const images = Array.from(
    { length: 10 },
    (_, index) => `/member3-${index + 1}.png`
  );

  return (
    <>
      <TopHeader />
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
