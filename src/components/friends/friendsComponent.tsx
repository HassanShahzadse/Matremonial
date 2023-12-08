"use client";
import React from "react";
import Layout from "../mainLayout/layout";
import Avatar from "/public/avatar1.jpg";
import Man from "/public/member2.png";
import Woman from "/public/member3.png";
import { useState } from "react";
import UserProfileCard from "@/utils/userProfile/userProfileCard";
export default function FriendsComponent() {
  const [show, setShow] = useState(false);
  const FriendsCard = [
    {
      id: 1,
      image: Avatar,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "Chat ",
    },
    {
      id: 1,
      image: Man,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "Chat",
    },
    {
      id: 1,
      image: Woman,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "Chat",
    },
    {
      id: 1,
      image: Man,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "Chat",
    },
    {
      id: 1,
      image: Avatar,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "Chat ",
    },
    {
      id: 1,
      image: Avatar,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "No",
    },
    {
      id: 1,
      image: Woman,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "No",
    },
    {
      id: 1,
      image: Man,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "No",
    },
    {
      id: 1,
      image: Avatar,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "No",
    },
    {
      id: 1,
      image: Woman,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "No",
    },
    {
      id: 1,
      image: Man,
      name: "John Snow",
      age: 28,
      location: "New York, USA",
      gender: "Female",
      decision: "No",
    },
  ];
  return (
    <Layout show={show} setShow={setShow}>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-5  gap-6  my-24">
        {FriendsCard.map((card) => (
          <div key={card.id}>
            <UserProfileCard {...card} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
