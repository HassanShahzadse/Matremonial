"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Layout from "../mainLayout/layout";
import TopHeader from "../mainLayout/TopHeader";
import Avatar from "/public/avatar1.jpg";
import Man from "/public/member2.png";
import Woman from "/public/member3.png";
import Contact from "/public/Icons/contact.png";
import Call from "/public/Icons/call.png";
import Faq from "/public/Icons/faq.png";
import Massage from "/public/Icons/email.png";

import { useState } from "react";
import UserProfileCard from "@/utils/userProfile/userProfileCard";
import {
  acceptFriendRequest,
  fetchFriendRequests,
  fetchFriends,
  rejectFriendRequest,
} from "@/sharedService/users/user";
import Link from "next/link";
export default function FriendsComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Layout show={show} setShow={setShow}>
        <TopHeader />
        <div className="container flex flex-col justify-center items-center text-center mx-auto w-full mt-10">
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
              <p>+92 0300096853</p>
            </div>
            <div className="p-3 mx-auto flex flex-col md:w-1/2 border-2 border-gray-400 items-center text-center">
              <Image src={Massage} alt="" width={60} height={60} />
              <h3 className="font-bold py-2">Write to us</h3>
              <p>me@gamil.com</p>
            </div>
            <div className="p-3 px-9 mx-auto md:w-2/4 flex flex-col border-2 border-gray-400 items-center text-center">
              <Image src={Faq} alt="" width={60} height={60} />
              <h3 className="font-bold py-2">FAQ</h3>
            </div>
          </div>
          <p className="text-center mb-10">V0.0.1 muslimmarriageonline 2024</p>
        </div>
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 "></div>
    </>
  );
}
