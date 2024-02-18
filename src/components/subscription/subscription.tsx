"use client";

import React from "react";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import TopHeader from "../mainLayout/TopHeader";
import Image from "next/image";
import Logo from "/public/icons/LOGO-soulmate.png";

const SubscriptionComponents = () => {
  const [activeOption, setActiveOption] = useState("Subscription");

  const handleClick = () => {
    setActiveOption(activeOption === "Subscription" ? "Boots" : "Subscription");
  };
  return (
    <>
      <TopHeader />
      <div className="container mx-auto grid lg:grid-cols-3 gap-10 mt-20 py-10">
        <div className="flex flex-col items-center">
          <Image src={Logo} alt="Logo" width={80} height={80} />
          <h3>Muslim Marriage Online</h3>
        </div>
        <div className="heading text-center space-y-4">
          <h1 className="text-4xl font-bold">Find Your Soulmate</h1>
          <h1 className="text-2xl font-bold">Subscription Plan</h1>
        </div>
        <div className="btn mx-auto">
          <ToggleButton activeOption={activeOption} handleClick={handleClick} />
        </div>
      </div>

      <div className="mt-14">
        <CardsContainer activeOption={activeOption} />
      </div>

      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 "></div>
    </>
  );
};

export default SubscriptionComponents;

const ToggleButton : React.FC<any> = ({ activeOption, handleClick }) => {
  return (
    <button
      className="relative flex items-center justify-between w-28 h-8 px-2 rounded-full bg-gray-200 focus:outline-none"
      onClick={handleClick}
    >
      <span
        className={`absolute top-0 left-0 h-full bg-[#FD307A] rounded-full transition-width duration-300 ${
          activeOption === "Subscription" ? "w-14" : "w-0"
        }`}
      ></span>
      <span
        className={`absolute top-0 right-0 h-full bg-gray-300 rounded-full transition-width duration-300 ${
          activeOption === "Boots" ? "w-14" : "w-0"
        }`}
      ></span>
      <span className="z-10">{activeOption}</span>
    </button>
  );
};

const Card : React.FC<any> = ({ title, days, price }) => {
  return (
    <div className="bg-gray-100 p-6 px-10 m-2 h-72 rounded-3xl shadow-xl ">
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <p className="text-gray-600 text-center py-3">{days}</p>
      <div className="mt-24 text-center flex flex-col ">
        <span>{price}</span>
        <button className="bg-gray-300 px-5 w-1/2 mx-auto">Buy now</button>
      </div>
    </div>
  );
};

const CardsContainer : React.FC<any> = ({ activeOption }) => {
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
  const bootsCards = [
    {
      title: "1 week bost",
    },
    {
      title: "3 weeks bost",
    },
    {
      title: "1 month bost",
    },
    {
      title: "2 month bost",
    },
  ];

  const cards =
    activeOption === "Subscription" ? subscriptionCards : bootsCards;

  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-7 w-screen">
      {cards.map((data:any, index) => (
        <Card
          key={index}
          title={data.title}
          days={data.days}
          price={data.price}
        />
      ))}
    </div>
  );
};
