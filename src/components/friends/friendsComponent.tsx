"use client";
import React, { useEffect } from "react";
import Layout from "../mainLayout/layout";
import Avatar from "/public/avatar1.jpg";
import Image from "next/image";
import Man from "/public/member2.png";
import Woman from "/public/member3.png";
import { useState } from "react";
import UserProfileCard from "@/utils/userProfile/userProfileCard";
import { fetchFriendRequests,fetchFriends } from "@/sharedService/users/user";
import Link from "next/link";
export default function FriendsComponent() {
  const [show, setShow] = useState(false);
  const [friendRequests, setFriendRequests] = useState<any>([]);
  const [friends, setFriends] = useState<any>([]);
  const localUser:any = localStorage.getItem('user')
  const parsedLocalUser = JSON.parse(localUser)
const fetchFriendReq = async()=>{
  const fR = await fetchFriendRequests(parsedLocalUser.id)
  setFriendRequests(fR)
  console.log(fR)
}
const fetchAllFriend = async()=>{
  const fR:any = await fetchFriends(parsedLocalUser.id)
  const cards = fR.map(
    (user: {
      userId: any;
      username: any;
      bio: any;
      age: any;
      country: any;
      gender: any;
      profession: any;
      imageUrls: any[];
    }) => ({
      id: user.userId,
      title: user.username,
      name: user.username,
      content: user.bio,
      age: user.age,
      profession: user.profession,
      location: user.country,
      gender: user.gender,
      decision: "yes",
      image:
        user?.imageUrls && user.imageUrls[0]?.startsWith("https")
          ? user.imageUrls[0]
          : "https://www.w3schools.com/w3images/avatar2.png",
      isModalOpen: false,
    })
  );
  setFriends(cards)
  console.log(fR)
}
useEffect(()=>{
  fetchFriendReq()
  fetchAllFriend()
},[])
  function calculateAge(birthDate: string) {
    const currentDate = new Date();
    const birthDateObject = new Date(birthDate);
    
    // Calculate the difference in years
    const age = currentDate.getFullYear() - birthDateObject.getFullYear();
  
    // Adjust age if the birthday hasn't occurred yet this year
    if (currentDate.getMonth() < birthDateObject.getMonth() ||
        (currentDate.getMonth() === birthDateObject.getMonth() &&
        currentDate.getDate() < birthDateObject.getDate())) {
      return age - 1;
    }
  
    return age;
  }
  

  function handleAccept(id: any): void {

  }

  function handleReject(id: any): void {

  }

  return (
    <Layout show={show} setShow={setShow}>
      <h1 className="text-2xl font-bold mb-4">Friend Requests</h1>
      <ul className="divide-y divide-gray-200">
        {friendRequests.map((user: any) => (
          <li key={user.id} className="py-4 flex items-center space-x-4">
            <div className="w-16 h-16 overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover"
                src={
                  user?.imageUrls && user.imageUrls[0]?.startsWith("https")
                    ? user.imageUrls[0]
                    : "https://www.w3schools.com/w3images/avatar2.png"
                }
                alt="Profile"
              />
            </div>
            <div>
              <h5 className="text-lg font-semibold">{user.username}</h5>
              <p className="text-gray-500">Age: {calculateAge(user.birth_date)}</p>
            </div>
            <div className="flex-grow"></div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleAccept(user.id)}
                className="text-green-500 hover:underline"
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(user.id)}
                className="text-red-500 hover:underline"
              >
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
  
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-5 gap-6 my-8">
      {friends.map((card:any) => (
              <div
                key={card.id}
                className=" border  border-gray-300 bg-[#ffff] shadow-md rounded-md text-center hover:scale-105 duration-300"
              >
                <div className="flex flex-row space-x-5">
                  <div className="basis-1/2 ">
                    <Image
                      height={138}
                      width={138}
                      src={card.image}
                      alt="My Image"
                      className="rounded  h-36 "
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="text-start  basis-1/2   p-2 ">
                    <h2 className="font-semibold text-gray-400 mb-2">
                      {card.name}
                    </h2>
                    <span>{card.age}</span>
                    <p className="text-sm my-1">{card.location}</p>
                    <p className="text-sm mb-3">
                      Looking for{" "}
                      <span className="ml-2 text-[#fb1086] p-2 rounded-xl text-sm">
                        {card.gender === "Male" ? "female" : "male"}
                      </span>
                    </p>

                    <Link href={`dashboard/messages/${card.id}`}>
                      <button className="w-full bg-[#fb1086] hover:bg-pink-700 p-1 text-[#ffff]  rounded-2xl text-sm ">
                        Chat
                      </button>
                    </Link>
                    {/* <Link href="dashboard/messages">  */}
                    <Link href={`dashboard/viewProfile/${card.id}`}>
                    <button className="w-full bg-[#fb1086] hover:bg-pink-700 text-[#ffff]  p-1 rounded-2xl my-4 text-sm  ">
                      View Profile
                    </button>
                    </Link>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </Layout>
  );
  
}
