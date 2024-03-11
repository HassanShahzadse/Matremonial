import Link from "next/link";
import { logout } from "./../../sharedService/auth/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMessage } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import Image from "next/image";
import Woman from "/public/member3.png";
import { getLoggedInUserInfo } from "../userProfile/loggedInUserInfo";
export default function SideBarNav(){
 const user = getLoggedInUserInfo()
    const router = useRouter();
    const handleLogout = async () => {
        await logout();
        router.push("/login");
      };
    return(
        <>
                <nav className="nav  overflow-y-scroll  bg-[#F05F93]">
          <div className="text-white">
            <div className="img-name flex ml-3 my-5 items-center space-x-3 ">
              <Image
                className="rounded-full h-14 w-14"
                src={user.image}
                alt=""
                width={50}
                height={50}
              />
              <h3 className="font-bold text-2xl">{user.username}</h3> 
            </div>
            <div className="nav-list" style={{ color: "#fff" }}>
              <Link href="/dashboard" className="nav-link active">
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Home </span>
              </Link>
              <Link href="/dashboard" className="nav-link">
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Profile</span>
              </Link>
              <Link href="/dashboard/messages" className="nav-link ">
                <FaMessage />
                <span className="">Messages</span>
              </Link>
              <Link href="/dashboard/gallery" className="nav-link ">
                <IoNotifications />
                <span className="nav-link-name">Gallery</span>
              </Link>
              <Link href="/dashboard/settings" className="nav-link ">
                <IoMdSettings />
                <span className="nav-link-name">Settings</span>
              </Link>
              <Link href="/dashboard/friends" className="nav-link ">
                <FaUserFriends />
                <span className="">Contact us</span>
              </Link>
              <Link href="/dashboard/subscription" className="nav-link ">
                <IoNotifications />
                <span className="nav-link-name">Subscription</span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-[#f57aa5] nav-link"
              >
                  <IoLogOut />
                <span className="nav-link-name"> Logout </span>
              </button>
            </div>
          </div>
        </nav>
        </>
    )
}