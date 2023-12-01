"use client";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Image from "next/image";
import Button from "@/utils/shared/button";
import Modal from "@/utils/profileModal/profileModal";
import myImage from "/public/people.jpg";
import Avatar from "/public/avatar1.jpg";
import Bridal from "/public/img1.jpg";
import Love from "/public/img2.jpeg";
import DashboardCardProps from './../../types/dashboard/DashboardProps';
import fetchData from "@/sharedService/dashboardService/page"; // permanently

const DashboardCard = [
  { id: 1, image: Bridal, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  { id: 1, image: Bridal, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  { id: 1, image: Bridal, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  { id: 1, image: Bridal, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  { id: 2, image: myImage, avatar: Avatar,name:'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  { id: 2, image: myImage, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  { id: 2, image: myImage, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  // Add more data objects for additional cards
];

type CardProps = {
  title: string;
  content: string;
  imageUrl: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  setIsModalOpen,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4 mt-10 flex items-center">
    <Image
      width={500}
      height={500}
      src={imageUrl}
      alt={title}
      className="card-image rounded"
    />
    <div className="ml-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <Button
        children={"view Profile"}
        css="bg-pink-500 p-4 rounded-md shadow-md mb-4 mt-10 flex items-center"
        onClick={() => {
          setIsModalOpen(true);
        }}
      ></Button>
    </div>
  </div>
);

export default function DashboardComponent() {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardData = [
    {
      title: "Ahmed",
      content: "Good to work",
      imageUrl: "/img1.jpg",
      setIsModalOpen,
    },
    {
      title: "Muneeb",
      content: "Looking Good",
      imageUrl: "/img2.jpeg",
      setIsModalOpen,
    },
    {
      title: "Aslam",
      content: "Having good business",
      imageUrl: "/img1.jpg",
      setIsModalOpen,
    },
  ];

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

      <div className="  mx-auto shadow-xl   ">
        <div className="search h-36 flex items-center justify-center relative">
          <input type="text" className="w-[60%] rounded-md focus:outline-0" />
          <button className="bg-[#F10086] text-white active:scale-95 font-semibold p-2 px-4 rounded-3xl ">
            Search
          </button>
        </div>
      </div>
      {/* ****** Search Bar ****** */}

      {/* ****** Cards ****** */}

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {DashboardCard.map((card) => (
            <div key={card.id} className="card shadow-xl p-5 rounded-md text-center hover:scale-105 duration-300">
              <div className="img">
                <Image
                  src={card.image}
                  alt="My Image"
                  className="rounded"
                  width={500} height={200}
                />
                <div className="flex justify-center ">
                  <Image
                    src={card.avatar}
                    alt="My Image"
                    className="w-[80px] h-[80px] rounded-full -mt-10"
                  />
                </div>
              </div>
              <h1 className="my-3">{card.name}</h1>
              {/* <button className="my-3 bg"> </button>    */}
      <button className="bg-[#F10086] text-white active:scale-95 font-semibold my-4 p-2 px-4 rounded-sm ">{card.Profile}</button>
      <button className="bg-[#F10086] text-white active:scale-95 font-semibold p-2 px-4 rounded-sm">{card.Chat}</button>
            
            
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

