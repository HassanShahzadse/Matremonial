"use client";
import { useEffect, useState } from "react";
import Layout from "../mainLayout/layout";
import Image from "next/image";
import Button from "@/utils/shared/button";
import Modal from "@/utils/profileModal/profileModal";
import { fetchDataFromFirebase } from "@/sharedService/users/user";
import Select from "react-select";
import Avatar from "/public/avatar1.jpg";
import Man from "/public/member2.png";
import Woman from "/public/member3.png";
import Message from "/public/icons/message.png";
import Filter from "/public/icons/filter.png";
import Batch from "/public/icons/batch.png";
import Soulmate from "/public/icons/LOGO-soulmate.png";
import SearchLove from "/public/icons/search-love.png";
import { v4 as uuidv4 } from "uuid";
import MultiRangeSlider from "multi-range-slider-react";
import Bridal from "/public/img1.jpg";
import Love from "/public/img2.jpeg";
import UserCardProps from "./../../types/dashboard/UserCardProps";
import fetchData from "@/sharedService/dashboardService/page"; // permanently
import initializeFirebase from "@/sharedService/fireBase/firebase";
import { Firestore, collection, getDocs, query } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { countries } from "@/utils/shared/countries";
import DashboardModal from "@/utils/dashboardModel/dashboardModel";
import { FaFilter } from "react-icons/fa6";
import TopHeader from "../mainLayout/TopHeader";
type CardProps = {
  id: number;
  title: string;
  content: string;
  name: string;
  image: string;
  age: number;
  location: string;
  gender: string;
  decision: string;
  isModalOpen: boolean;
  profession: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
};
const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
export default function DashboardComponent() {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [userCards, setUserCards] = useState<CardProps[]>([]);
  const [filterCards, setfilterCards] = useState<CardProps[]>([]);
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [ageRangeFilter, setAgeRangeFilter] = useState<number[]>([18, 30]);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [professionFilter, setProfessionFilter] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const usersDataInitial: any = await fetchDataFromFirebase();
      const localUser: any = localStorage.getItem("user");
      const parsedLocalUser = JSON.parse(localUser);
      const usersData = usersDataInitial.filter(
        (user: any) => user.userId !== parsedLocalUser?.id
      );
      const cards = usersData.map(
        (user: {
          userId: any;
          username: any;
          bio: any;
          age: any;
          country: any;
          gender: any;
          profession: any;
          imageUrls: any[];
        }) => ({
          id: user.userId || generateUniqueId(),
          title: user.username,
          name: user.username,
          content: user.bio,
          age: user.age,
          profession: user.profession,
          location: user.country,
          gender: user.gender,
          decision: "yes",
          image:
            user?.imageUrls && user.imageUrls[0]?.startsWith("https")
              ? user.imageUrls[0]
              : "https://www.w3schools.com/w3images/avatar2.png",
          isModalOpen: false,
          setIsModalOpen,
        })
      );
      setUserCards(cards);
      setfilterCards(cards);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filteredCards = userCards.filter((user) => {
      if (
        locationFilter &&
        locationFilter !== "ALL" &&
        user.location?.toLowerCase() !== locationFilter?.toLowerCase()
      ) {
        return false;
      }
      const userAge = user.age;
      if (userAge < ageRangeFilter[0] || userAge > ageRangeFilter[1]) {
        return false;
      }
      if (genderFilter && user.gender !== genderFilter) {
        return false;
      }
      if (professionFilter && !user.profession?.includes(professionFilter)) {
        return false;
      }
      if (
        searchText &&
        !user.name?.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    setfilterCards(filteredCards);
  }, [
    locationFilter,
    ageRangeFilter,
    genderFilter,
    professionFilter,
    searchText,
  ]);

  const handleGoogleLogin = async () => {
    try {
      const userId = "someUserId";

      let data = fetchData(userId);
    } catch (error) {
      console.error("dashboard data error:", error);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout show={show} setShow={setShow}>
        <TopHeader />

        {/* ****** Search Bar ****** */}
        {/* ****** Search Bar End ****** */}
        {/* ****** Filters ****** */}
        {/* ****** Filters ****** */}
        {/* ****** Cards ****** */}
        <div className="container mx-auto flex flex-col justify-center items-center mt-16 text-center">
          <Image
            className="text-center"
            src={Soulmate}
            alt=""
            width={80}
            height={80}
          />
          <h2 className="text-center text-2xl font-bold">Find Your Soulmate</h2>
          <p className="text-center">Find Your Perfect Match</p>
        </div>
        <div className="bg-[#ffff] mt-10 font-serif">
          <div className="card-body mt-5 p-2">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 mx-5 gap-7 ">
              {filterCards.map((card) => (
                <div
                  key={card.id}
                  className=" border  border-gray-300 bg-[#ffff] "
                >
                  <div className="flex flex-col space-x-5 shadow-md rounded-md text-center hover:scale-105 duration-300">
                    <div className=" ">
                      <Image
                        width={200}
                        height={140}
                        src={card.image}
                        alt="My Image"
                        className="rounded h-36"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="text-start p-2 ">
                    <div className="flex justify-between">
                      <h2 className="font-semibold text-gray-400 mb-2">
                        {card.name}
                      </h2>
                      <p>22 year old</p>
                    </div>
                    <span>{card.age}</span>
                    <p className="text-sm my-1">{card.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ****** Cards ****** */}
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 "></div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const userId = "1IW1JRGm3WSzErc6mPrT";
  const userData = await fetchData(userId);

  return {
    props: {
      userData,
    },
  };
}
