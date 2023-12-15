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
  userId: string | string[] | undefined; // Adjust the type based on your use case
}

export default function MessagesComponent({ userId }: MessagesComponentProps) {
  const [show, setShow] = useState(false);
  const [filteredChats, setFilteredChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(()=>{
    console.log(userId)
    const opposite = fetchUserInfoFromFirebase(userId)
    console.log(opposite)
    const fetchData = async () => {
      try {
        const chatData:any = await getAllChats();
        const localuser:any  = localStorage.getItem('user')
        const user = JSON.parse(localuser)
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
        console.log('Filtered Chat Data:', combinedRecords);
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

        setSelectedChat(usersData[0])
        setFilteredChats(usersData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  },[])
  const handleCardClick = (chat:any) => {
    setSelectedChat(chat);
    setShow(true);
  };
  return (
    <Layout show={show} setShow={setShow}>

{/* ******* Header ******* */}
      <div className="my-6">
        <h1 className="text-2xl font-semibold">Messages</h1>
      </div>
      <div className="container flex mt-7 rounded p-4 mx-auto shadow-md bg-white h-20 items-center space-x-10">
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

      {/* ******* Section 2 Card **** */}
    
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-1">
        <div className="flex-col shadow-md p-5">
          <hr />
        <UserList chat={filteredChats} onCardClick={handleCardClick} />
      </div>
    <ChatWindow selectedChat={selectedChat}/>
  </div>
</Layout>
  );
}



