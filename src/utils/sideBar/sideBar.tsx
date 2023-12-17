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


const SideBar = ({ show }: any) => {
  const router = useRouter()
  const handleLogout = async() =>{
    await logout()
    router.push('/login');
  }
  return (
    <aside className={`sidebar ${show ? "show" : "show"}`}>
      <nav className="nav">
        <div>
          <Link href="/" className="nav-logo">
            <i className={`fas fa-home-alt nav-logo-icon`}></i>
            <span className="nav-logo-name">Matrimonial</span>
          </Link>
          <div className="nav-list">
            <Link href="/dashboard" className="nav-link active">
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="nav-link-name">Dashboard</span>
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
            <Link href="/dashboard/addprofile" className="nav-link ">
              <CgProfile />
              <span className="nav-link-name">Profile</span>
            </Link>
            <Link href="/dashboard/settings" className="nav-link ">
              <IoMdSettings />
              <span className="nav-link-name">Settings</span>
            </Link>
          </div>
        </div>
          <button onClick={handleLogout}>Logout</button>
      </nav>
    </aside>
  );
};

export default SideBar;
