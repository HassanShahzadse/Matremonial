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
  { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
  { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
  { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
  { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
  { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
  { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
  { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },

];

export default function MessagesComponent() {
  const [show, setShow] = useState(false);
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
          <SearchBar/>
          <hr />
        <UserList/>
      </div>
    <ChatWindow/>
  </div>
</Layout>
  );
}





// // MessagesComponent.js
// import React from 'react';
// import Layout from '../mainLayout/layout';
// import SearchBar from '@/utils/messages/searchBar';
// import UserList from '@/utils/messages/userList';
// import MessageInfo from '@/utils/messages/messageInfo';
// import ChatWindow from '@/utils/messages/chatWindow';

// const data = [
//     { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
//     { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
//     { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
//     { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
//     { id: 1, name: 'John Snow', message: 'Yes we can meet. What time?', date: 'Today', time: '5:30' },
//   // Your message data here
// ];

// const MessagesComponent = () => {
//   return (
//     <Layout>
//       {/* Header */}
//       <div className="my-6">
//         <h1 className="text-2xl font-semibold">Messages</h1>
//       </div>

//       {/* Section 1 Card */}
//       <div className="container flex mt-7 rounded p-4 mx-auto shadow-md bg-white h-20 items-center space-x-10">
//         {/* Left Section */}
//         <div className="left flex items-center w-[30%] justify-between">
//           <div className="flex items-center space-x-2">
//             <h3 className="">All Messages</h3>
//             {/* Add your dropdown icon here */}
//           </div>
//           {/* Add your ellipsis icon here */}
//         </div>

//         {/* Right Section */}
//         <div className="right flex w-[70%] justify-between items-center">
//           <div className="img-name flex ml-3 items-center space-x-3">
//             {/* Add your user image here */}
//             <h3>Jasica</h3>
//           </div>
//           <div className="star shadow-md p-2">⭐</div>
//         </div>
//       </div>

//       {/* Section 2 Card */}
//       <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-1">
//         {/* SearchBar Component */}
//         <SearchBar />

//         {/* UserList Component */}
//         <UserList users={data} />

//         {/* ChatWindow Component */}
//         <ChatWindow messages={data} />
//       </div>

//       {/* MessageInfo Component */}
//       {data.map((card) => (
//         <MessageInfo key={card.id} message={card} />
//       ))}
//     </Layout>
//   );
// };

// export default MessagesComponent;
