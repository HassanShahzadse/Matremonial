"use client";
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import Layout from "../mainLayout/layout";
import { IoNotifications } from "react-icons/io5";
import Woman from "/public/member3.png";


const notificationsData = [
  { id : 1 , message: 'Jasica liked you back, you can now chat with her.', timestamp: '2 minutes ago', button:'Chat' },
  { id : 1 , message: 'Jasica liked you back, you can now chat with her.', timestamp: '2 minutes ago', button:'Chat' },
  { id : 1 , message: 'Jasica liked you back, you can now chat with her.', timestamp: '2 minutes ago', button:'Chat' },
  { id : 1 , message: 'Jasica liked you back, you can now chat with her.', timestamp: '2 minutes ago', button:'Chat' },
  { id : 1 , message: 'Jasica liked you back, you can now chat with her.', timestamp: '2 minutes ago', button:'Chat' },
  { id : 1 , message: 'Jasica liked you back, you can now chat with her.', timestamp: '2 minutes ago', button:'Chat' },
  { id : 1 , message: 'Jasica liked you back, you can now chat with her.', timestamp: '2 minutes ago', button:'Chat' },
  { id : 1 , message: 'Jasica liked you back, you can now chat with her.', timestamp: '2 minutes ago', button:'Chat' },
  // Add more notifications as needed
];
export default function NotificationsComponent() {
  const [show, setShow] = useState(false);

  return (
    <Layout show={show} setShow={setShow} >
    <>

<div className="heading sticky top-16 mt-14 bg-white p-3">
  <h2 className='text-2xl font-semibold'>Notificaions</h2>
</div>

{notificationsData.map((card) => (
  <div
    key={card.id}
    className="flex justify-between mt-5 p-4 bg-white shadow-md items-center rounded-md"
  >
    <div className="lg:flex space-x-8 items-center">
    <div className="bell text-3xl text-[#fb1086]">
      <IoNotifications/>
      </div>
      <div className="img">
        <Image
          src={Woman}
          alt="My Image"
          height={60}
          width={60}
          className="rounded-full"
        />
      </div>
      <div className="msg">
      <p className='font-semibold'>{card.message} </p>
      <p>{card.timestamp}</p>
      </div>
    </div>
      <div className="chatBtn">
      <button className='mr-5 bg-green-400  px-7 rounded-xl'>{card.button}</button>
    </div>
  </div>
))}


    </>
    </Layout>
  )
}

