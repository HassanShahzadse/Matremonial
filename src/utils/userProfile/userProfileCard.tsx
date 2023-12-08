// UserCard.js

import React from "react";
import Image from "next/image";
import UserCardProps from "./../../types/dashboard/UserCardProps";


const UserProfileCard: React.FC<UserCardProps> = ({ image,name,age,location,gender,decision }) => (
  <div className="card1 shadow-md rounded-md text-center hover:scale-105 duration-300">
    <div className="flex flex-row space-x-5">
      <div className="basis-1/2">
        <Image src={image} alt="My Image" className="rounded" />
      </div>
      <div className="text-start basis-1/2">
        <h2 className="font-semibold text-gray-400 mb-2">{name}</h2>
        <span>{age}</span>
        <p className="text-sm my-1">{location}</p>
        <p className="text-sm mb-3">
          Looking for{" "}
          <span className="ml-2 bg-[#F10086] text-white p-1 rounded-xl text-sm">
            {gender}
          </span>
        </p>
        <button className="w-full text-red-500 bg-gray-300 p-1 rounded-2xl text-sm ">
          {decision}
        </button>
        <button className="w-full text-green-500 bg-gray-300 p-1 rounded-2xl my-4 text-sm  ">
          View Profile
        </button>
      </div>
    </div>
  </div>
);

export default UserProfileCard;
