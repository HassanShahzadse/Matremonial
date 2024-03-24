"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import { ChatWindow } from "@/utils/messages/chatWindow";
import { fetchUserInfoFromFirebase } from "@/sharedService/users/user";
import useChats from "@/sharedService/users/customChatHook";
interface MessagesComponentProps {
  userId: any | any[] | undefined;
}

export default function MessagesComponent({ userId }: MessagesComponentProps) {
  const [show, setShow] = useState(false);
  const { chats, loading, error } = useChats();
  const [filteredChats, setFilteredChats] = useState<any>([]);
  const [selectedChat, setSelectedChat] = useState<any>();
  const fetchData = async () => {
    console.log(chats)
    try {
      const localuser: any = localStorage.getItem("user");
      const user = JSON.parse(localuser);
      const filteredData = chats
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

      setSelectedChat(selectedChat ?  sortedUsersData.find(user => user.userId === selectedChat.userId) :sortedUsersData[0]);
      console.log(selectedChat)
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
  }, [chats]);

  const handleCardClick = (chat: any) => {
    setSelectedChat(chat);
    setShow(true);
  };
  return (
    <>
      <Layout show={show} setShow={setShow} handleCardClick={handleCardClick} filteredChats={filteredChats}>
        {/* ******* Header ******* */}
        <div className="h-[100vh] overflow-hidden md:mt-0 xl:ms-[150px] lg:ms-[125px] ">
          <div className=" mx-4 flex space-x-5 items-center mt-20">
            <div className="right w-full flex justify-between xsm:hidden md:flex py-2">
              <div className="img-name flex ml-3 items-center space-x-3">
                <Image
                  className="rounded-full h-12 w-12"
                  src={selectedChat?.userInfo?.imageUrls && selectedChat?.userInfo?.imageUrls[0]?.startsWith("https")
                  ? selectedChat.userInfo.imageUrls[0]
                  : "https://www.w3schools.com/w3images/avatar2.png"}
                  alt=""
                  width={30}
                  height={30}
                />
                <h3>{selectedChat?.userInfo?.userName}</h3>
              </div>
              <div className="star shadow-md text-3xl items-center text-center p-2">
                ...
              </div>
            </div>
          </div>
          <hr />
          <div className="h-[83vh] mt-1 grid lg:grid-cols-2 md:grid-cols-1 xsm:grid-cols-1 ">
            <ChatWindow
              selectedChat={selectedChat}
            />
          </div>
        </div>
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 ">
      <Image
              src="/Navbar/NavbarThin1.png"
              alt="Description"
              className="rounded-lg"
              objectFit="cover"
              fill
            />
      </div>
    </>
  );
}
