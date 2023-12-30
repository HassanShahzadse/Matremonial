"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgSize } from "react-icons/cg";
import { FaEllipsisV } from "react-icons/fa";
import Woman from "/public/member3.png";
import Man from "/public/member2.png";
import { ChatWindow } from "@/utils/messages/chatWindow";
import { UserList } from "@/utils/messages/userList";
import { getAllChats } from "@/sharedService/users/chat";
import { fetchUserInfoFromFirebase } from "@/sharedService/users/user";
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
// ... (previous imports)

const images = [Woman, Man, Woman, Man, Woman, Man];

interface ViewProfileProps {
  userId: any | any[] | undefined;
}

export default function ViewProfile({ userId }: ViewProfileProps) {
  const [userProfile, setUserProfile] = useState<any | undefined>();

  const fetchData = async () => {
    try {
      const user: any | undefined = await fetchUserInfoFromFirebase(userId);
      setUserProfile(user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchDataAgain = async () => {
    try {
      await fetchData();
      console.log("----------------");
    } catch (error) {
      console.error("Error fetching data again:", error);
    }
  };
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-auto justify-between items-center mt-5">
          <div className="left xsm:order-3 lg:order-1 xsm:m-auto">
            <h1 className="text-3xl font-semibold">Jaccica Profile</h1>
            <p className="text-xl my-1 mb-5">So be carefull, Grumply Lina</p>
            <span text-gray-600>28</span>
            <p className="text-gray-600">New York, USA</p>
            <div className="flex space-x-5 text-gray-600">
              <p>Looking for</p>
              <span className="bg-[#fb1086] text-white text-sm  m-auto px-1 rounded-md">
                Male
              </span>
            </div>
          </div>
          <div className="space-x-3 flex mx-auto xsm:order-2">
            <div className="flex items-center bg-gray-200 px-5 rounded-md text-red-500 cursor-pointer">
              <RxCross2 />
              NO
            </div>
            <div className="flex items-center bg-gray-200 px-5 rounded-md text-green-400 cursor-pointer">
              <FaHeart /> Yes
            </div>
          </div>
          <div className="right mx-auto xsm:order-1 lg:order-3">
            <Image
              className="rounded-full"
              src={Woman}
              alt=""
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="grid xsm:mx-auto my-10 lg:grid-cols-3 sm:grid-cols-2  gap-10">
          {images.map((src, index) => (
            <div className="xsm:mx-auto" key={index}>
              <Image
                className="rounded-xl"
                src={Man}
                width={300}
                height={300}
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="shadow-md px-5 py-5 bg-white rounded-md my-10">
          <h1 className="text-2xl font-semibold">Profile Info</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-5">
            <div className="">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="mt-8">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="mt-8">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="mt-8">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
          </div>
        </div>

        <div className="shadow-md px-5 py-5 bg-white rounded-md my-10">
          <h1 className="text-2xl font-semibold">General</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-5">
            <div className="">
              <label htmlFor="">Religion</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="mt-8">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="mt-8">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
            <div className="mt-8">
              <label htmlFor="">Name</label>
              <input type="text" className="border p-2 w-full " />
            </div>
          </div>
        </div>
      </div>

      {/* {userProfile && (
        <div className="mt-14">
          <h1>User Profile Page</h1>
        <p>Hijab: {userProfile.hijab}</p>
        <p>Partner Location: {userProfile.partnerLocation}</p>
        <p>Phone Number: {userProfile.phone_number}</p>
        <p>Children: {userProfile.children}</p>
        <p>Country: {userProfile.country}</p>
        <p>Salah: {userProfile.salah}</p>
        <p>Partner Religion: {userProfile.partnerReligion}</p>
        <p>Revert: {userProfile.revert}</p>
        <p>Username: {userProfile.username}</p>
        <p>Citizenship: {userProfile.citizenship}</p>
        <p>Hair: {userProfile.hair}</p>
        <p>Partner Education: {userProfile.partnerEducation}</p>
        <p>Eyes: {userProfile.eyes}</p>
        <p>Halal: {userProfile.halal}</p>
        <p>Paid A: {userProfile.paidA}</p>
        <p>Birth Date: {userProfile.birth_date}</p>
        <p>Smoke Frequency: {userProfile.smokeFreq}</p>
        <p>Ramadan: {userProfile.ramadan}</p>
        <p>Email: {userProfile.email}</p>
        <p>Zakat: {userProfile.zakat}</p>
        <p>Partner Profession: {userProfile.partnerProfession}</p>
        <p>Partner Type: {userProfile.partnerType}</p>
        <p>Headline: {userProfile.headline}</p>
        <p>Paid B: {userProfile.paidB}</p>
        <p>Build Cont: {userProfile.buildCont}</p>
        <p>Height: {userProfile.height}</p>
        <p>Partner Sect: {userProfile.partnerSect}</p>
        <p>Slang: {userProfile.slang}</p>
        <p>Education: {userProfile.education}</p>
        <p>Marital Status: {userProfile.maritalStatus}</p>
        <p>Disability: {userProfile.disability}</p>
        <p>Reason for Registering: {userProfile.reason_for_registering}</p>
        <p>Heard About Us: {userProfile.heard_about_us}</p>
        <p>Job: {userProfile.job}</p> */}
      {/* Displaying imageUrls */}
      {/* <p>Image URLs:</p>
        {userProfile.imageUrls.map((url: string, index: number) => (
          <p key={index}>{url}</p>
        ))}
        <p>Beard: {userProfile.beard}</p>
        <p>Profession: {userProfile.profession}</p>
        <p>Income: {userProfile.income}</p>
        <p>Religion: {userProfile.religion}</p>
        <p>Password: {userProfile.password}</p>
        <p>Living Arrange: {userProfile.livingArrange}</p>
        <p>Relocate: {userProfile.relocate}</p>
        <p>Sect: {userProfile.sect}</p>
        <p>Tongue: {userProfile.tongue}</p>
        <p>Gender: {userProfile.gender}</p>
        <p>Bio: {userProfile.bio}</p>
        <p>Marital Time: {userProfile.maritalTime}</p> */}
      {/* Add more details based on your actual data */}
      {/* <button className="p-5 bg-[#fb1086] hover:bg-pink-700 text-[#ffff]  p-1 rounded-2xl my-4 text-sm  ">Add friend</button>
      </div>
      )} */}
    </Layout>
  );
}
