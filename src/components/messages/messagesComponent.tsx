"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgSize } from "react-icons/cg";
import { FaEllipsisV } from "react-icons/fa";
import Woman from "/public/member3.png";
import Message from "/public/Icons/message.png";
import Filter from "/public/Icons/filter.png";
import Batch from "/public/Icons/batch.png";
import SearchLove from "/public/Icons/search-love.png";
import { FaSearch } from "react-icons/fa";
import { ChatWindow } from "@/utils/messages/chatWindow";
import { UserList } from "@/utils/messages/userList";
import { getAllChats } from "@/sharedService/users/chat";
import { fetchUserInfoFromFirebase } from "@/sharedService/users/user";
interface MessagesComponentProps {
  userId: any | any[] | undefined; // Adjust the type based on your use case
}

export default function MessagesComponent({ userId }: MessagesComponentProps) {
  const [show, setShow] = useState(false);
  const [filteredChats, setFilteredChats] = useState<any>([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedUser, setSelectedUser] = useState<any>({});
  const fetchData = async () => {
    try {
      const chatData: any = await getAllChats();
      const localuser: any = localStorage.getItem("user");
      const user = JSON.parse(localuser);
      const filteredData = chatData.filter(
        (chat: { sender: any; receiver: any }) =>
          chat.sender === user.id || chat.receiver === user.id
      );
      const combinedRecords: any = {};
      filteredData.forEach((chat: any) => {
        const otherUserId =
          chat.sender === user.id ? chat.receiver : chat.sender;
        if (combinedRecords[otherUserId]) {
          combinedRecords[otherUserId].push(chat);
        } else {
          combinedRecords[otherUserId] = [chat];
        }
      });

      // Check if the userId from props is not found in existing chats
      if (userId && !combinedRecords[userId]) {
        const newChatData = await fetchUserInfoFromFirebase(userId);
        if (newChatData) {
          combinedRecords[userId] = [];
        }
      }

      const usersArray = Object.keys(combinedRecords);
      const usersPromises = usersArray.map(async (userId) => {
        const userInfo = await fetchUserInfoFromFirebase(userId);
        return {
          userId,
          userInfo,
          chats: combinedRecords[userId],
        };
      });

      const usersData: any = await Promise.all(usersPromises);
      const sortedUsersData = sortUsersData(usersData, userId);

      setSelectedChat(sortedUsersData[0]);
      setSelectedUser(sortedUsersData[0].userInfo);
      setFilteredChats(sortedUsersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const sortUsersData = (
    usersData: any[],
    targetUserId: string | string[] | undefined
  ) => {
    console.log(usersData);
    if (targetUserId) {
      // If targetUserId exists, move it to the top of the array
      const targetIndex = usersData.findIndex(
        (user) => user.userId === targetUserId
      );
      if (targetIndex !== -1) {
        const targetUser = usersData[targetIndex];
        usersData.splice(targetIndex, 1);
        usersData.unshift(targetUser);
      }
    }
    return usersData;
  };

  useEffect(() => {
    fetchData();
  }, [userId]);
  const fetchDataAgain = async () => {
    try {
      await fetchData();
      console.log("----------------");
    } catch (error) {
      console.error("Error fetching data again:", error);
    }
  };
  const handleCardClick = (chat: any) => {
    setSelectedChat(chat);
    console.log(chat.userInfo, "---------------------");
    setSelectedUser(chat.userInfo);
    setShow(true);
  };
  return (
    <>
      <Layout show={show} setShow={setShow}>
        {/* ******* Header ******* */}
        <div className="h-[100vh] overflow-hidden md:mt-0">
          {/* ***** Header Message ******* */}
          <div className="flex bg-[#FD307A] fixed left-0 w-full top-0 h-[10vh] items-center z-10 justify-between px-5">
            <div className="search flex sm:space-x-28 items-center justify-center relative">
              <div>
                <p className="text-2xl text-white">☰</p>
              </div>
              <div className="flex space-x-2">
                {/* <button className="text-[#F10086] rounded-full bg-white active:scale-95 font-semibold p-3 px-3   ">
                <FaSearch />
              </button> */}
                <div className="icon">
                  <Image
                    className=""
                    src={SearchLove}
                    alt="Message"
                    width={30}
                    height={30}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[20vw] p-1 rounded-full focus:outline-0 border-t-2  border-b-2 border-s-2 border-gray-500 "
                />
              </div>
            </div>
            <div className="right-side flex space-x-5 items-center">
              <div className="icon">
                <Image
                  className=""
                  src={Message}
                  alt="Message"
                  width={30}
                  height={30}
                />
              </div>
              <div className="icon">
                <Image
                  className=""
                  src={Batch}
                  alt="Message"
                  width={30}
                  height={30}
                />
              </div>

              <div className=" flex-col py-2 items-center">
                <Image
                  className="rounded-full"
                  src={Woman}
                  alt=""
                  width={40}
                  height={40}
                />
                <h3 className="font-semibold text-sm text-white">Mahanor</h3>
              </div>
            </div>
          </div>

          {/* ******* Section 2 Card **** */}
          <div className=" mx-4 flex space-x-5 items-center mt-20">
            {/* <div className="flex md:w-[32vw] xsm:w-full justify-between pt-3 font-semibold">
              <div className="underline underline-offset-4 decoration-[#f10086] 	">
                All Chats
              </div>
              <div className="">Read</div>
              <div className="">Unread</div>
            </div> */}
            <div className="right w-full flex justify-between xsm:hidden md:flex py-2">
              <div className="img-name flex ml-3 items-center space-x-3">
                <Image
                  className="rounded-full h-12 w-12"
                  src={"https://www.w3schools.com/w3images/avatar2.png"}
                  alt=""
                  width={30}
                  height={30}
                />
                <h3>username</h3>
              </div>
              <div className="star shadow-md text-3xl items-center text-center p-2">
                ...
              </div>
            </div>
          </div>
          <hr />
          <div className="h-[83vh] mt-1 grid lg:grid-cols-2 md:grid-cols-1 xsm:grid-cols-1 ">
            {/* <div className="flex-col shadow-md p-5 h-[88vh] overflow-y-auto">
              <UserList chat={filteredChats} onCardClick={handleCardClick} />
            </div> */}
            <ChatWindow
              selectedChat={selectedChat}
              onSendMessage={fetchDataAgain}
            />
          </div>
        </div>
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 "></div>
    </>
  );
}
