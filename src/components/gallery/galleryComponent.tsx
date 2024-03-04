"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Navbar from "../navbar/Navbar";

export default function NotificationsComponent() {
  const localUser:any = localStorage.getItem("user");
  const parsedLocalUser = JSON.parse(localUser);
  console.log(parsedLocalUser);

  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar />
      <Layout show={show} setShow={setShow}>
        <div className="container mt-20 mx-auto">
          <h1 className="text-4xl font-bold text-center py-10">Gallery</h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 py-5 gap-8">
            {parsedLocalUser.imageUrls?.map((imageUrl:any, index:any) => (
              <div key={index} className="flex justify-center">
                <Image
                  width={200}
                  height={200}
                  src={imageUrl}
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
