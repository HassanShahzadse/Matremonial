"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/icons/LOGO-soulmate.png";
import Navbar from "../navbar/Navbar";

const SubscriptionComponents = () => {
  const [activeButton, setActiveButton] = useState("Subscription");
  const [transitionDirection, setTransitionDirection] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (button:any) => {
    setTransitionDirection(activeButton === "Subscription" ? "left" : "right");
    setActiveButton(button);
    setExpandedIndex(null)
  };

  return (
    <>
    <Navbar />
      <div className="overflow-hidden mx-auto max-w-7xl  ps-2 pe-4 sm:px-6 lg:px-8 mt-[8vh] lg:mt-[15vh] ">
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
              {activeButton === "Subscription" ? "Subscription" : "Boost"} Plan
            </span>
          </div>
          <div className="btn  mt-6 lg:mt-0">
            <ToggleButton
              activeButton={activeButton}
              handleToggle={handleToggle}
            />
          </div>
        </div>

        <div className="my-14">
          <CardsContainer
            activeButton={activeButton}
            transitionDirection={transitionDirection}
            setExpandedIndex={setExpandedIndex}
            expandedIndex={expandedIndex}
          />
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

const ToggleButton: React.FC<any> = ({ activeButton,handleToggle }) => {
  return (
    <div className="border space-x-1 rounded-full">
      <button
        className={`px-3 py-1 rounded-full ${
          activeButton === "Subscription"
            ? "bg-[#FD307A] text-white"
            : "bg-transparent text-black"
        }`}
        onClick={() => handleToggle("Subscription")}
      >
        Subscription
      </button>
      <button
        className={`px-5 py-1 rounded-full / font-bold ${
          activeButton === "Boost"
            ? "bg-[#FD307A] text-white"
            : "bg-transparent text-black"
        }`}
        onClick={() => handleToggle("Boost")}
      >
        Boost
      </button>
    </div>
  );
};

  const Card: React.FC<any> = ({ title, days, price, isExpanded, expandCard }) => {
    return (
      <div className={`p-4 ${isExpanded ? "scale-125" : ""}`}>
        <div
          className={`bg-[#ffffff] py-6 px-1 ${isExpanded ? "expanded" : ""}    m-2  rounded-3xl  border-[#808080]  drop-shadow-3xl `}
          onClick={expandCard}
          style={{ boxShadow: "5px 5px 5px gray", borderWidth: "1px" }}
        >
          <h3 className={`${isExpanded ? "text-4xl" : "text-3xl"} font-bold text-center`}>{title}</h3>
          <p className="text-gray-600 text-center py-3">{days}</p>
          <div className="mt-16 text-center flex flex-col ">
            <span className="py-3">{price}</span>
            <button
              className={`border-2 border-gray-500 px-5    ${
                isExpanded
                  ? "bg-[#FE035C] text-[#ffffff]"
                  : "bg-[#ffffff] "
              }          rounded-md mx-auto`}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const CardsContainer: React.FC<any> = ({ activeButton, transitionDirection,expandedIndex,setExpandedIndex }) => {
  
    const handleExpand = (index:any) => {
      setExpandedIndex(index === expandedIndex ? null : index);
    };
  
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
  
    const boostCards = [
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
  
    const cards:any = activeButton === "Subscription" ? subscriptionCards : boostCards;
  
    return (
      <div className={`grid lg:grid-cols-4 md:grid-cols-2 transition-all duration-500 ${transitionDirection === 'left' ? 'transition-left-sub' : 'transition-right-sub'}`}>
        {cards.map((data:any, index:any) => (
          <Card
            key={index}
            title={data.title}
            days={data.days}
            price={data.price}
            isExpanded={expandedIndex === index}
            expandCard={() => handleExpand(index)}
          />
        ))}
      </div>
    );
  };