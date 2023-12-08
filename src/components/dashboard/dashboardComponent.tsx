"use client";
import { useEffect, useState } from "react";
import Layout from "../mainLayout/layout";
import Image from "next/image";
import Button from "@/utils/shared/button";
import Modal from "@/utils/profileModal/profileModal";
import {fetchDataFromFirebase} from "@/sharedService/users/user"
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
import Link from "next/link";


type CardProps = {
  id: number;
  title: string;
  content: string;
  name: string;
  image: string;
  age:number;
  location:string;
  gender:string;
  decision:string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DashboardComponent() {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const usersData:any = await fetchDataFromFirebase();

      const cards = usersData.map((user: { phone_number: any; username: any; bio: any; age: any; address: any; gender: any; imageUrls: any[]; }) => ({
        id: user.phone_number,
        title: user.username,
        name: user.username,
        content: user.bio,
        age:user.age,
        location:user.address,
        gender:user.gender,
        decision:'yes',
        image: user?.imageUrls && user.imageUrls[0]?.startsWith("https") ? user.imageUrls[0] : "https://www.w3schools.com/w3images/avatar2.png",
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
        {userCards.map((card) => (
          <div
            key={card.id}
            className="card1 shadow-md rounded-md text-center hover:scale-105 duration-300"
          >
            <div className="flex flex-row space-x-5">
              <div className="basis-1/2">
                <Image height={138} width={138} src={card.image} alt="My Image" className="rounded " style={{ objectFit: "cover" }} />
              </div>
              <div className="text-start basis-1/2  ">
                <h2 className="font-semibold text-gray-400 mb-2">
                  {card.name}
                </h2>
                <span>{card.age}</span>
                <p className="text-sm my-1">{card.location}</p>
                <p className="text-sm mb-3">
                  Looking for{" "}
                  <span className="ml-2 bg-[#F10086] text-white p-1 rounded-xl text-sm">
                    {card.gender==='Male'?'female':'male'}
                  </span>
                </p>
                <button className="w-full text-red-500 bg-gray-300 p-1 rounded-2xl text-sm ">
                <Link href="dashboard/messages">
                  Chat
                </Link>
                </button>
                <button className="w-full text-green-500 bg-gray-300 p-1 rounded-2xl my-4 text-sm  ">
                  View Profile
                </button>
              </div>
            </div>
          </div>
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
