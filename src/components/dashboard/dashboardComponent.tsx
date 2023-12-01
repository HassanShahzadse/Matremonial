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
import DashboardCardProps from "./../../types/dashboard/DashboardProps";
import fetchData from "@/sharedService/dashboardService/page"; // permanently
import initializeFirebase from "@/sharedService/fireBase/firebase";
import { Firestore, collection, getDocs, query } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { FaSearch } from "react-icons/fa";

const DashboardCard = [
  // { id: 1, image: Bridal, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  // { id: 1, image: Bridal, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  // { id: 1, image: Bridal, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  // { id: 1, image: Bridal, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  // { id: 2, image: myImage, avatar: Avatar,name:'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  // { id: 2, image: myImage, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
  // { id: 2, image: myImage, avatar: Avatar, name: 'John Snow', Profile: 'View Porfile', Chat:'Chat'},
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

type CardProps = {
  id: number;
  title: string;
  content: string;
  name: string;
  image: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  setIsModalOpen,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4 mt-10 flex items-center">
    <Image
      width={500}
      height={500}
      src={image}
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
  const [userCards, setUserCards] = useState<CardProps[]>([]);
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

      setUserCards(cards);
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

      <div className="  mx-auto shadow-xl   ">
        <div className="search h-36 flex items-center justify-center relative">
          <input type="text" className="w-[60%] rounded-md focus:outline-0" />
          <button className="bg-[#F10086] text-white active:scale-95 font-semibold p-3 px-3 ml-5 rounded ">
            <FaSearch />
          </button>
        </div>
      </div>
      {/* ****** Search Bar End ****** */}

      {/* ****** Cards ****** */}


      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-5 gap-4  my-10">
        {DashboardCard.map((card) => (
          <div
            key={card.id}
            className="card1 shadow-xl rounded-md text-center hover:scale-105 duration-300"
          >
            <div className="flex flex-row space-x-5">
              <div className="basis-1/2">
                <Image src={card.image} alt="My Image" className="rounded " />
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
                    {card.gender}
                  </span>
                </p>
                <span className="text-red-500 bg-gray-300 p-1 rounded-2xl text-sm ">
                  {card.decision}
                </span>
                <span className="text-green-500 bg-gray-300 p-1 rounded-2xl ml-2 text-sm  ">
                  View Profile
                </span>
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
