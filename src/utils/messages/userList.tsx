import React from "react";
import Image from "next/image";
import Woman from "/public/member3.png";
import { FaSearch } from "react-icons/fa";

import { RiArrowDropDownLine } from "react-icons/ri";
import { CgSize } from "react-icons/cg";
import { FaEllipsisV } from "react-icons/fa";
const data = [
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
];
export const UserList = () => {
  return (
    <>
   
   <div className="lg:w-1/3  xsm:w-full h-full  p-4 bg-white border-r border-gray-300 overflow-y-scroll">
        {/* <div className="text-xl sticky bg-white p-2 top-0 font-bold mb-4">Users</div> */}
        <div className="flex items-center justify-between sticky bg-white p-2  top-0 font-bold mb-4">
          <div className="flex items-center space-x-2 cursor-pointer">
            <h3 className="">All Messages</h3>
            <RiArrowDropDownLine />
          </div>
          <FaEllipsisV />
        </div>
        <div className="search flex my-5">
        <button className="bg-[#F10086]  active:scale-95 font-semibold p-3 text-white rounded ">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="search or start new chat"
          className="w-[100%] p-2 rounded-md border bg-gray-100"
        />
      </div>

    {data.map((card) => (
        <div
          key={card.id}
          className="overflow-y-auto rounded-md active:bg-green-200 bg-white my-3 shadow-md p-5"
        >
          <div className="flex space-x-10">
            <div className="img">
              <Image
                src={Woman}
                alt="My Image"
                height={60}
                width={60}
                className="rounded"
              />
            </div>

            <div>
              <h2 className="font-semibold text-gray-400 mb-2">{card.name}</h2>
              <p className="text-sm my-1">{card.message}</p>
              <div className="flex divide-x-2 divide-black mt-4">
                <div className="mr-3">{card.date}</div>
                <div className="px-3">{card.time}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      </div>
    </>
  );
};
