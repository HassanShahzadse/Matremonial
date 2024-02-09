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
const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
export default function DashboardComponent() {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [userCards, setUserCards] = useState<CardProps[]>([]);
  const [filterCards, setfilterCards] = useState<CardProps[]>([]);
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [ageRangeFilter, setAgeRangeFilter] = useState<number[]>([18, 30]);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [professionFilter, setProfessionFilter] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const usersDataInitial: any = await fetchDataFromFirebase();
      const localUser:any = localStorage.getItem('user')
      const parsedLocalUser = JSON.parse(localUser)
      const usersData = usersDataInitial.filter((user: any)=> user.userId !==parsedLocalUser.id)
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
      if (searchText && !user.name?.toLowerCase().includes(searchText.toLowerCase())) {
        return false; 
      }
      return true;
    });
    setfilterCards(filteredCards);
  }, [locationFilter, ageRangeFilter, genderFilter, professionFilter,searchText]);

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
    <Layout show={show} setShow={setShow}>
      {/* ****** Search Bar ****** */}

      {/* ****** Search Bar End ****** */}

      {/* ****** Filters ****** */}

    
      {/* ****** Filters ****** */}

      {/* ****** Cards ****** */}

      <div className="card  bg-[#ffff] font-serif xl:p-10 px-2 py-6  ">
        <div className="flex  flex-row  justify-between px-5">
          <div className="search  flex items-center justify-center relative">
            <input
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
              type="text"
              className="w-full p-2   focus:outline-0 border-t-2  border-b-2 border-s-2 border-gray-500 "
            />
            <button className="bg-[#F10086] text-white active:scale-95 font-semibold p-[0.90rem] px-3   ">
              <FaSearch />
            </button>
          </div>
          <div>
            <button
              onClick={openModal}
              className=" text-slate-600 text-xl rounded-md p-2"
            >
            <FaFilter/>
            </button>
            <DashboardModal isOpen={isModalOpen} onClose={closeModal}>
        {/* Content of your modal goes here */}
        <select
          className="w-[60%] p-2 rounded-md focus:outline-0"
          onChange={(e) => setLocationFilter(e.target.value)}
          value={locationFilter || ''}
        >
          {countries.map((country) => (
            <option key={country.value} value={country.text}>
              {country.text}
            </option>
          ))}
        </select>

      
        <div className="w-[450px]">
          <label>Age Range:</label>
          <MultiRangeSlider
          style={{
            border: 'none',
             boxShadow: 'none',
             paddingRight:'50px'
        }}
            min={18}
            max={100}
            step={1}
            ruler={false}
            label={false}
            subSteps={false}
            minValue={ageRangeFilter[0]}
            maxValue={ageRangeFilter[1]}
            onInput={(e) => setAgeRangeFilter([e.minValue, e.maxValue])}
          />
        </div>
       
        <select
          className="w-[60%] p-2 rounded-md focus:outline-0"
          onChange={(e) => setGenderFilter(e.target.value)}
          value={genderFilter|| ''}
        >
          <option value={''}>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

       
        <input
          type="text"
          className="w-[60%] p-2 rounded-md focus:outline-0"
          placeholder="Search Professions"
          value={professionFilter|| ''}
          onChange={(e) => setProfessionFilter(e.target.value)}
        />
         <Button
          onClick={() => {
            
            setLocationFilter('ALL');
            setAgeRangeFilter([18, 30]);
            setGenderFilter(null);
            setProfessionFilter(null);
          }}
        >
          Reset Filters
        </Button>
                   
      </DashboardModal>

          </div>
        </div>
        <div className="card-body mt-5 p-2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-5  gap-8 ">
            {filterCards.map((card) => (
              <div
                key={card.id}
                className=" border  border-gray-300 bg-[#ffff] shadow-md rounded-md text-center hover:scale-105 duration-300"
              >
                <div className="flex flex-row space-x-5">
                  <div className="basis-1/2 ">
                    <Image
                      height={138}
                      width={138}
                      src={card.image}
                      alt="My Image"
                      className="rounded  h-36 "
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="text-start  basis-1/2   p-2 ">
                    <h2 className="font-semibold text-gray-400 mb-2">
                      {card.name}
                    </h2>
                    <span>{card.age}</span>
                    <p className="text-sm my-1">{card.location}</p>
                    <p className="text-sm mb-3">
                      Looking for{" "}
                      <span className="ml-2 text-[#fb1086] p-2 rounded-xl text-sm">
                        {card.gender === "Male" ? "female" : "male"}
                      </span>
                    </p>

                    <Link href={`dashboard/messages/${card.id}`}>
                      <button className="w-full bg-[#fb1086] hover:bg-pink-700 p-1 text-[#ffff]  rounded-2xl text-sm ">
                        Chat
                      </button>
                    </Link>
                    {/* <Link href="dashboard/messages">  */}
                    <Link href={`dashboard/viewProfile/${card.id}`}>
                    <button className="w-full bg-[#fb1086] hover:bg-pink-700 text-[#ffff]  p-1 rounded-2xl my-4 text-sm  ">
                      View Profile
                    </button>
                    </Link>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ****** Cards ****** */}
    </Layout>
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
