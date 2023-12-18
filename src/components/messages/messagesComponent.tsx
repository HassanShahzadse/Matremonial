"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgSize } from "react-icons/cg";
import { FaEllipsisV } from "react-icons/fa";
import Woman from "/public/member3.png";
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
      const chatData:any = await getAllChats();
      const localuser:any  = localStorage.getItem('user');
      const user = JSON.parse(localuser);
      const filteredData = chatData.filter(
        (chat: { sender: any; receiver: any; }) => chat.sender === user.id || chat.receiver === user.id
      );
      const combinedRecords:any = {};
      filteredData.forEach((chat:any) => {
        const otherUserId = chat.sender === user.id ? chat.receiver : chat.sender;
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

      const usersData:any = await Promise.all(usersPromises);
      const sortedUsersData = sortUsersData(usersData, userId);
      
      setSelectedChat(sortedUsersData[0]);
      setSelectedUser(sortedUsersData[0].userInfo);
      setFilteredChats(sortedUsersData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sortUsersData = (usersData: any[], targetUserId: string | string[] | undefined) => {
    if (targetUserId) {
      // If targetUserId exists, move it to the top of the array
      const targetIndex = usersData.findIndex((user) => user.userId === targetUserId);
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
      console.log("----------------")
    } catch (error) {
      console.error('Error fetching data again:', error);
    }
  };
  const handleCardClick = (chat:any) => {
    setSelectedChat(chat);
    setShow(true);
  };
  return (
    <Layout show={show} setShow={setShow}>

{/* ******* Header ******* */}
<div className="h-[100vh] overflow-hidden xsm:-mt-12 md:mt-0">
      <div className="h-[5vh]">
        <h1 className="text-2xl font-semibold">Messages</h1>
      </div>
      <div className="container flex mt-5 rounded p-4 mx-auto shadow-md bg-white h-[9vh] items-center space-x-10">
        <div className="left flex items-center w-[30%] justify-between">
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
              src={selectedUser?.imageUrls && selectedUser.imageUrls[0]?.startsWith("https") ? selectedUser.imageUrls[0] : "https://www.w3schools.com/w3images/avatar2.png"}
              alt=""
              width={50}
              height={50}
            />
            <h3>{selectedUser.username}</h3>
          </div>
          <div className="star shadow-md p-2">⭐</div>
        </div>
      </div> 

      {/* ******* Section 2 Card **** */}
    
      <div className="md:container h-[83vh] mx-auto mt-1 grid lg:grid-cols-3 md:grid-cols-1 xsm:grid-cols-1 ">
        <div className="flex-col shadow-md p-5 h-[83vh] overflow-y-auto">
          <hr />
        <UserList chat={filteredChats} onCardClick={handleCardClick} />
      </div>
    <ChatWindow selectedChat={selectedChat} onSendMessage={fetchDataAgain}/>
  </div>
  </div>
</Layout>
  );
}



