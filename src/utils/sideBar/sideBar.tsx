"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const SideBar = ({ show }: any) => {
  return (
    <aside className={`sidebar ${show ? "show" : null}`}>
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
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="">Messages</span>
            </Link>
            <Link href="/dashboard/friends" className="nav-link ">
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="">Friends</span>
            </Link>
            <Link href="/dashboard/notifications" className="nav-link ">
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="nav-link-name">Notifications</span>
            </Link>
            <Link href="/dashboard/profile" className="nav-link ">
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="nav-link-name">Profile</span>
            </Link>
            <Link href="/dashboard/settings" className="nav-link ">
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="nav-link-name">Settings</span>
            </Link>
          </div>
        </div>

        <Link href="/logout" className="nav-link">
          <i className="fas fa-sign-out nav-link-icon"></i>
          <span className="nav-link-name">Logout</span>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
