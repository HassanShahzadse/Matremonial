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

const SideBar = ({ show, filterOpen }: any) => {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };
  return (
    <aside
      className={`sidebar mt-[100px] xsm:mt-14 ${show ? "show" : "show"}`}
      style={{ height: "89vh", backgroundColor: "#F05F93" }}
    >
      {filterOpen ? (
        <nav className="nav">
          <div className="text-white">
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
              <Link href="/dashboard/notifications" className="nav-link ">
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
                Logout
              </button>
            </div>
          </div>
        </nav>
      ) : (
        <div className="filter bg-white h-full">
          <h1 className="py-10 ml-12 font-bold text-xl">Filters</h1>
          <div className="ml-3 my-10">
            <label htmlFor="" className="font-semibold">
              Select Location
            </label>
            <br />
            <select className="w-40 h-6 rounded-sm border mt-3" name="" id="">
              <option value="" disabled selected>
                Choose Location
              </option>
              <option value="">Pakistan</option>
              <option value="">New York</option>
              <option value="">England</option>
              <option value="">UK</option>
            </select>
          </div>
          {/* ******* Age ****  */}
          <div className="ml-3">
            <label htmlFor="" className="font-semibold">
              Choose Age
            </label>
            <input
              type="range"
              className="appearance-none w-[90%] h-6 rounded-lg bg-green-500"
              style={{
                /* Change the color to blue */
                WebkitAppearance: "none",
                height: "6px",
                borderRadius: "10px",
                background: "#F05F93",
                outline: "none",
                opacity: "0.7",
                transition: "opacity .2s",
              }}
            />
          </div>
          {/* Looking for  */}
          <div className="py-4 ml-3">
            <h3 className="font-semibold py-3">Looking for </h3>
            <button className="border ml-3 rounded-lg px-3">Any 💑</button>
            <button className="border ml-3 rounded-lg px-3">Male 🤵</button>
            <button className="border ml-12 mt-2 rounded-lg px-3">
              Female 💃
            </button>

            <h3 className="font-semibold py-5">Profession</h3>
            <input type="text" className="border-2 w-44 rounded" />
            <button className="bg-[#F05F93] text-center ml-12 mt-8 px-5 text-white font-semibold rounded-lg">
              Apply
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
export default SideBar;
