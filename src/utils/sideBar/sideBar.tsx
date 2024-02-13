"use client";
import Link from "next/link";
import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { logout } from "./../../sharedService/auth/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Woman from "/public/member3.png";

const SideBar = ({ show }: any) => {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };
  return (
    <aside
      className={`sidebar xl:mt-[84px] xsm:mt-14 ${show ? "show" : "show"}`}
      style={{ height: "85vh" }}
    >
      <nav className="nav">
        <div className="">
          {/* <Link href="/" className="nav-logo">
            <i className={`fas fa-home-alt nav-logo-icon`}></i>
            <span className="nav-logo-name">Matrimonial</span>
          </Link> */}
          <div className="img-name flex ml-3 my-5 items-center space-x-3">
            <Image
              className="rounded-full h-14 w-14"
              src={Woman}
              alt=""
              width={50}
              height={50}
            />
            <h3 className="font-bold text-2xl">Mahanor</h3>
          </div>
          <div className="nav-list">
            <Link href="/dashboard" className="nav-link active">
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="nav-link-name">Dashboard</span>
            </Link>
            <Link href="/dashboard" className="nav-link">
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="nav-link-name">Profile</span>
            </Link>
            <Link href="/dashboard/messages" className="nav-link ">
              <FaMessage />
              <span className="">Messages</span>
            </Link>
            <Link href="/dashboard/friends" className="nav-link ">
              <FaUserFriends />
              <span className="">Friends</span>
            </Link>
            <Link href="/dashboard/notifications" className="nav-link ">
              <IoNotifications />
              <span className="nav-link-name">Notifications</span>
            </Link>
            {/* <Link href="/dashboard/addprofile" className="nav-link ">
              <CgProfile />
              <span className="nav-link-name">Profile</span>
            </Link> */}
            <Link href="/dashboard/settings" className="nav-link ">
              <IoMdSettings />
              <span className="nav-link-name">Settings</span>
            </Link>
          </div>
        </div>
        <button onClick={handleLogout} className="text-[#f57aa5]">
          Logout
        </button>
      </nav>
    </aside>
  );
};
export default SideBar;
