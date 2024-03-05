"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgSize } from "react-icons/cg";
import { FaEllipsisV } from "react-icons/fa";
import Woman from "/public/member3.png";
import { ChatWindow } from "@/utils/messages/chatWindow";
import { UserList } from "@/utils/messages/userList";
import { getAllChats } from "@/sharedService/users/chat";
import { fetchUserInfoFromFirebase } from "@/sharedService/users/user";

// ... (previous imports)

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
      <div className="mx-auto mt-24 mb-32 me-72">
        <div className="flex  flex-row">
          <div className="image-wrapper ">
            <Image
              src="/member4.png"
              alt="Preview"
              width={130}
              height={130}
              className="rounded-full  border border-2  border-[#FF2271] "
            />
          </div>
          <div className="flex flex-col ms-4 ">
            <h1 className="text-[#000000] text-2xl font-bold">Ayesha</h1>
            <div className="flex flex-row mt-1">
              <h2 className="text-sm text-[#000000] font-semibold opacity-100">
                Profile
              </h2>
              <span className="ms-3 textt-lg text-[#000000] font-semibold opacity-100">
                Lahore,Pakistan
              </span>
            </div>
            <div className="d-flex flex-row mt-8">
              <button
                type="button"
                className="bg-[#F45F93] text-sm ps-2 pe-2 text-[#ffffff] rounded-s-xl rounded-e-xl border border-[#707070]"
              >
                Add friend
              </button>
              <button
                type="button"
                className=" bg-[#F45F93] text-sm ms-1 ps-2 pe-2 text-[#ffffff] rounded-s-xl rounded-e-xl border border-[#707070]"
              >
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-2 mt-10">
          <div className=" border-[#707070] border rounded-lg">
            <div className="ms-2 me-6">
              <h1 className="text-[#000000] font-bold text-lg text-center opacity-100">
                About me
              </h1>
              <p className="mt-2 text-[#000000] font-bold text-sm opacity-100">
                My name is Halal a young man from Pakistan I am a Teacher I love
                pets I really love to spend my time in nature Love to travel and
                visit Different places
              </p>
               <div className="flex flex-row justify-between mt-4 mb-8">
                    <ul>
                      <li className="text-[#000000] font-semibold text-sm opacity-100" >Religon</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Cast</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Live</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Education</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Job</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Salary</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Living arrangement</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Martial Status</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Smoke</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Keep halal</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Do you want Kids</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Willing to relocate</li>
                      <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">Pray Salah</li>
                    </ul>
                    <ul className="text-center">
                      <li className="text-[#000000] font-bold text-sm opacity-100 ">Islam</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Jutt</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Pakistan</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">BS English</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Teacher</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Rs 30,000/-</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">With Parents</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Single</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">No</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Yes</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Yes</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Yes</li>
                      <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">Always</li>
                    </ul>
               </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </Layout>
  );
}

{
  /* {userProfile && (
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
        <p>Job: {userProfile.job}</p>
     
        <p>Image URLs:</p>
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
        <p>Marital Time: {userProfile.maritalTime}</p>
      
        <button className="p-5 bg-[#fb1086] hover:bg-pink-700 text-[#ffff]  p-1 rounded-2xl my-4 text-sm  ">Add friend</button>
      </div>
      )} */
}
