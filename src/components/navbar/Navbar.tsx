"use client";
import { useState } from "react";
import Image from "next/image";
import Woman from "/public/member3.png";
import Message from "/public/icons/message.png";
import Filter from "/public/icons/filter.png";
import Batch from "/public/icons/batch.png";
import SearchLove from "/public/icons/search-love.png";
import Link from "next/link";
import { getLoggedInUserInfo } from "@/utils/userProfile/loggedInUserInfo";
import NotificationPopup from "../notification/notificationPopup";
import useNotifications from "@/sharedService/users/customNotificationHook";
export default function Navbar({
  toggleFilter,
  searchText,
  setSearchText,
}: any) {
  const user = getLoggedInUserInfo();
  const [showNotification,setShowNotification]=useState(false)
  const { newProfileViews, newFriendRequests } = useNotifications();
  return (
    <>
      <div className="flex bg-[#FD307A] fixed left-0 w-full top-0 h-[10vh] items-center z-10 justify-between px-5">
        <div className="search flex sm:space-x-28 items-center justify-center relative">
          <div>
            <p
              onClick={toggleFilter}
              className="text-2xl text-white cursor-pointer"
            >
              ☰
            </p>
          </div>
          <div className="flex space-x-2">
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search..."
              className="w-[20vw] p-1 rounded-full focus:outline-0 border-t-2  border-b-2 border-s-2 border-gray-500 "
            />
          </div>
        </div>

        <div className="right-side flex space-x-5 items-center">
          <Link href="/dashboard/subscription">
            <div className="icon">
              <Image
                className=""
                src={Batch}
                alt="Message"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <div>
            <button className=" text-slate-600 text-xl rounded-md p-2" onClick={() => setShowNotification(true)}>
              {/* <FaFilter /> */}
              <div className="icon">
                <Image
                  className=""
                  src={Filter}
                  alt="Message"
                  width={30}
                  height={30}
                />
              </div>
            </button>
            {showNotification && <NotificationPopup profileViews={newProfileViews} friendRequests={newFriendRequests} />}
          </div>
          <Link href="/dashboard/messages">
            <div className="icon">
              <Image
                className=""
                src={Message}
                alt="Message"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <div className=" flex-col py-2 items-center">
            <Image
              className="rounded-full h-12 w-12"
              src={user.image}
              alt=""
              width={40}
              height={40}
            />
            <h3 className="font-semibold text-sm text-white">
              {user.username}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
