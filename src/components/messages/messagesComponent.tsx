"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgSize } from "react-icons/cg";
import { FaEllipsisV } from "react-icons/fa";
import Woman from "/public/member3.png";

import { FaSearch } from "react-icons/fa";
import { SearchBar } from "@/utils/messages/searchBar";
import { ChatWindow } from "@/utils/messages/chatWindow";
import { UserList } from "@/utils/messages/userList";

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
];

export default function MessagesComponent() {
  const [show, setShow] = useState(false);
  return (
    <Layout show={show} setShow={setShow}>
      {/* ****** Header ****** */}
      <div className="sticky top-16 flex mt-3  rounded p-4 shadow-md bg-white h-20 items-center space-x-10">
        <div className="flex items-center w-[30%] justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="">All Messages</h3>
            <RiArrowDropDownLine />
          </div>
          <FaEllipsisV />
        </div>

        <div className="right flex w-[70%] justify-between items-center">
          <div className="img-name flex ml-3 items-center space-x-3">
            <Image
              className="rounded"
              src={Woman}
              alt=""
              width={60}
              height={60}
            />
            <h3>Jasica</h3>
          </div>
          <div className="star shadow-md p-2">⭐</div>
        </div>
      </div>
      {/* ****** Header End****** */}
      <div className="mx-auto h-screen">
        <div className="flex flex-col md:flex-row h-full">
          {/* <!-- Sidebar (User List) --> */}
          <div className="md:w-1/3 p-4 shadow-lg">
            {/* <!-- Search Bar --> */}
            <SearchBar />
            {/* <!-- User List --> */}
            <div className="overflow-y-auto h-4/5">
              {/* <!-- Sample User --> */}
              <UserList />
            </div>
          </div>
          <ChatWindow />
        </div>

      {/* <!-- Message Input --> */}
      <div className="w-full flex sticky bottom-0 xsm:invisible md:visible justify-end">
      <div className="w-[66.7%] flex  bg-gray-200 p-3 items-center ">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 rounded border-none focus:outline-none"
          />
          <button className="bg-[#fb1086] text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
        </div>
      </div>
    </Layout>
  );
}
