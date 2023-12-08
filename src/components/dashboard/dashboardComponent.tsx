"use client";
import { useEffect, useState } from "react";
import Layout from "../mainLayout/layout";
import Image from "next/image";
import Button from "@/utils/shared/button";
import Modal from "@/utils/profileModal/profileModal";

import Avatar from "/public/avatar1.jpg";
import Man from "/public/member2.png";
import Woman from "/public/member3.png";
import Bridal from "/public/img1.jpg";
import Love from "/public/img2.jpeg";
import UserCardProps from "./../../types/dashboard/UserCardProps";
import fetchData from "@/sharedService/dashboardService/page"; // permanently
import initializeFirebase from "@/sharedService/fireBase/firebase";
import { Firestore, collection, getDocs, query } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { FaSearch } from "react-icons/fa";
import UserProfileCard from "@/utils/userProfile/userProfileCard";

const DashboardCard = [
 
  { id: 1, image: Avatar, name: 'John Snow', age: 28, location: 'New York, USA', gender: 'Female', decision: 'Chat ' },
  { id: 1, image: Man, name: 'John Snow', age: 28, location: 'New York, USA', gender: 'Female', decision: 'Chat' },
  { id: 1, image: Woman, name: 'John Snow', age: 28, location: 'New York, USA', gender: 'Female', decision: 'Chat' },
  { id: 1, image: Man, name: 'John Snow', age: 28, location: 'New York, USA', gender: 'Female', decision: 'Chat' },
  { id: 1, image: Avatar, name: 'John Snow', age: 28, location: 'New York, USA', gender: 'Female', decision: 'Chat ' },
  {
    id: 1,
    image: Avatar,
    name: "John Snow",
    age: 28,
    location: "New York, USA",
    gender: "Female",
    decision: "No",
  },
  {
    id: 1,
    image: Woman,
    name: "John Snow",
    age: 28,
    location: "New York, USA",
    gender: "Female",
    decision: "No",
  },
  {
    id: 1,
    image: Man,
    name: "John Snow",
    age: 28,
    location: "New York, USA",
    gender: "Female",
    decision: "No",
  },
  {
    id: 1,
    image: Avatar,
    name: "John Snow",
    age: 28,
    location: "New York, USA",
    gender: "Female",
    decision: "No",
  },
  {
    id: 1,
    image: Woman,
    name: "John Snow",
    age: 28,
    location: "New York, USA",
    gender: "Female",
    decision: "No",
  },
  {
    id: 1,
    image: Man,
    name: "John Snow",
    age: 28,
    location: "New York, USA",
    gender: "Female",
    decision: "No",
  },

  // Add more data objects for additional cards
];

const fetchDataFromFirebase = async () => {
  const firebaseInstance = await initializeFirebase();
  const { app, auth, db } = firebaseInstance as {
    app: FirebaseApp;
    auth: Auth;
    db: Firestore;
  };
  const usersCollection = collection(db, "users");
  const usersQuery = query(usersCollection);
  const querySnapshot = await getDocs(usersQuery);
  const usersData = querySnapshot.docs.map((doc) => doc.data());

  return usersData;
};


export default function DashboardComponent() {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const usersData = await fetchDataFromFirebase();

      const cards = usersData.map((user) => ({
        id: user.phone_number,
        title: user.username,
        name: user.username,
        content: user.bio,
        image: user?.imageUrls ? user.imageUrls[0] : "", // Assuming there's at least one image URL
        isModalOpen: false,
        setIsModalOpen,
      }));

     
      console.log(cards);
    }

    fetchData();
  }, []);
  console.log(fetchDataFromFirebase());
  const handleGoogleLogin = async () => {
    try {
      const userId = "someUserId";

      let data = fetchData(userId);

      console.log("dashboard data", data);
    } catch (error) {
      console.error("dashboard data error:", error);
    }
  };

  return (
    <Layout show={show} setShow={setShow}>
      {/* ****** Search Bar ****** */}


      <div className="container mx-auto shadow-xl">
        <div className="search h-36 flex items-center justify-center relative">
          <input type="text" className="w-[60%] p-2 rounded-md focus:outline-0" />
          <button className="bg-[#F10086] text-white active:scale-95 font-semibold p-3 px-3 ml-5 rounded ">
            <FaSearch />
          </button>
        </div>
      </div>
      {/* ****** Search Bar End ****** */}

      {/* ****** Cards ****** */}


      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-5 / gap-6  my-12">
      {DashboardCard.map((card) => (
          <UserProfileCard {...card} />
        ))} 
      </div>

      {/* ****** Cards ****** */}
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const userId = "1IW1JRGm3WSzErc6mPrT";
  const userData = await fetchData(userId);
  console.log("dashboard data", userData);
  return {
    props: {
      userData,
    },
  };
}
