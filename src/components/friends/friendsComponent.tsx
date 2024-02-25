"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Layout from "../mainLayout/layout";
import Contact from "/public/icons/contact.png";
import Call from "/public/icons/call.png";
import Faq from "/public/icons/faq.png";
import Massage from "/public/icons/email.png";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
export default function FriendsComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Layout show={show} setShow={setShow}>
        <Navbar />
        <div className="container flex flex-col justify-center items-center text-center mx-auto w-full mt-16">
          <div className="flex-col justify-center items-center">
            <Image src={Contact} alt="" width={300} height={300} />
            <h1 className="text-4xl font-bold -mt-10">Contact Us</h1>
          </div>

          <div className="container text-center grid lg:grid-cols-3 gap-8 overflow-y-auto py-10">
            <div className="p-3 mx-auto flex flex-col md:w-1/2 border-2 border-gray-400 items-center text-center">
              <Image
                className="-rotate-90"
                src={Call}
                alt=""
                width={60}
                height={60}
              />
              <h3 className="font-bold py-2">Calls</h3>
              <p>+44 788888 2776</p>
            </div>
            <div className="p-3 mx-auto flex flex-col  border-2 border-gray-400 items-center text-center">
              <Image src={Massage} alt="" width={60} height={60} />
              <h3 className="font-bold py-2">Write to us</h3>
              <p>customercare@muslimmarriageonline.com</p>
            </div>
            <div className="p-3 px-9 mx-auto md:w-2/4 flex flex-col border-2 border-gray-400 items-center text-center">
              <Image src={Faq} alt="" width={60} height={60} />
              <h3 className="font-bold py-2">FAQ</h3>
            </div>
          </div>
          <p className="text-center xsm:mb-10 lg:mt-20">
            V0.0.1 muslimmarriageonline 2024
          </p>
        </div>
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 "></div>
    </>
  );
}
