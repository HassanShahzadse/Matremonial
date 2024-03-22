"use client";

import React from "react";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Image from "next/image";
import Logo from "/public/icons/LOGO-soulmate.png";
import Navbar from "../navbar/Navbar";

const SubscriptionComponents = () => {
  const [activeButton, setActiveButton] = useState("Subscription");

  const handleClick = () => {
    setActiveButton(activeButton === "Subscription" ? "Boost" : "Subscription");
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl  ps-2 pe-4 sm:px-6 lg:px-8 mt-[8vh] lg:mt-[15vh] ">
        <div className=" flex lg:flex-row flex-col  lg:justify-between  justify-center  items-center  my-10">
          <div className="flex flex-col items-center mt-14   lg:-mt-16">
            <Image src={Logo} alt="Logo" width={100} height={100} />
            <h3 className=" font-bold -mt-10  font-sm">
              Muslim Marriage Online
            </h3>
          </div>
          <div className="heading text-center space-y-4 mt-6 lg:mt-0">
            <h1 className="text-4xl font-bold mb-0">Find Your Soulmate</h1>
            <span className="text-3xl font-semibold mt-0">
              Subscription Plan
            </span>
          </div>
          <div className="btn  mt-6 lg:mt-0">
            <ToggleButton
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </div>
        </div>

        <div className="mt-14">
          {/* Modify the Card */}
          <SelectedOption activeButton={activeButton} />
        </div>

        <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 ">
          <Image
            src="/Navbar/NavbarThin1.png"
            alt="Description"
            className="rounded-lg"
            objectFit="cover"
            fill
          />
        </div>
      </div>
    </>
  );
};

export default SubscriptionComponents;

const ToggleButton: React.FC<any> = ({ setActiveButton, activeButton }) => {
  const handleClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <div className="border space-x-1 rounded-full">
      <button
        className={`px-3 py-1 rounded-full ${
          activeButton === "Subscription"
            ? "bg-[#FD307A] text-white"
            : "bg-transparent text-black"
        }`}
        onClick={() => handleClick("Subscription")}
      >
        Subscription
      </button>
      <button
        className={`px-5 py-1 rounded-full / font-bold ${
          activeButton === "Boost"
            ? "bg-[#FD307A] text-white"
            : "bg-transparent text-black"
        }`}
        onClick={() => handleClick("Boost")}
      >
        Boost
      </button>
    </div>
  );
};

const Card: React.FC<any> = ({ title, days, price }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const expandCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4">
      <div
        className={`bg-[#ffffff] p-6  ${
          isExpanded ? "scale-125" : ""
        }    m-2  rounded-3xl  border-[#707070]  drop-shadow-3xl border-2 `}
        onClick={expandCard}
      >
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <p className="text-gray-600 text-center py-3">{days}</p>
        <div className="mt-16 text-center flex flex-col ">
          <span className="py-3">{price}</span>
          <button
            className={`border-2 border-gray-500 px-5    ${
              isExpanded ? "bg-[#FE035C] text-[#ffffff]" : "bg-[#ffffff] "
            }          rounded-md mx-auto`}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

const SelectedOption: React.FC<any> = ({ activeButton }) => {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-2 ">
      {activeButton === "Subscription" ? <Subscription /> : <Boost />}
    </div>
  );
};

const Boost: React.FC<any> = () => {
  const bootsCards = [
    {
      title: "1 week boost",
    },
    {
      title: "3 weeks boost",
    },
    {
      title: "1 month boost",
    },
    {
      title: "2 month boost",
    },
  ];

  return (
    <>
      {bootsCards.map((data: any, index) => (
        <Card
          key={index}
          title={data.title}
          days={data.days}
          price={data.price}
          selectedCard={index}
        />
      ))}
    </>
  );
};

const Subscription: React.FC<any> = () => {
  const subscriptionCards = [
    {
      title: "Silver",
      days: "5 day plan",
      price: "10$",
    },
    {
      title: "Gold",
      days: "1 month plan",
      price: "20$",
    },
    {
      title: "Diamond",
      days: "3 month plan",
      price: "40$",
    },
    {
      title: "Platinum",
      days: "6 month plan",
      price: "100$",
    },
  ];

  return (
    <>
      {subscriptionCards.map((data: any, index) => (
        <Card
          key={index}
          title={data.title}
          days={data.days}
          price={data.price}
          selectedCard={index}

        />
      ))}
    </>
  );
};
