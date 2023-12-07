"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgSize } from "react-icons/cg";
import { FaEllipsisV } from "react-icons/fa";
import Woman from "/public/member3.png";

import { ChatWindow } from "@/utils/messages/chatWindow";
import { UserList } from "@/utils/messages/userList";


export default function MessagesComponent() {
  const [show, setShow] = useState(false);
  return (
    <Layout show={show} setShow={setShow}>
      {/* ****** Header ****** */}

     

      <div className="flex h-[90vh] bg-gray-100">
        {/* User List */}
        <UserList />
        <ChatWindow />
      </div>
    </Layout>
  );
}
