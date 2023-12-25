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
      console.error('Error fetching data:', error);
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
      console.error('Error fetching data again:', error);
    }
  };

  return (
    <Layout>
      {userProfile && (
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
        {/* Displaying imageUrls */}
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
        {/* Add more details based on your actual data */}
        <button className="p-5 bg-[#fb1086] hover:bg-pink-700 text-[#ffff]  p-1 rounded-2xl my-4 text-sm  ">Add friend</button>
      </div>
      )}
    </Layout>
  );
}
