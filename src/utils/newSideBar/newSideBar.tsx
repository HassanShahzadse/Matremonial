import React from "react";

const NewSideBar = () => {
  return (
    <>
      <aside className="bg-gray-900 w-[15vw] text-white flex flex-col h-[80vh]">
        <nav className="flex flex-col flex-grow">
          <div className="p-4">
            <i className="fas fa-home-alt nav-logo-icon"></i>
            <span className="nav-logo-name">Matrimonial</span>
          </div>
          <div className="flex flex-col">
            <a href="#" className="nav-link">
              <i className="fas fa-tachometer-alt nav-link-icon"></i>
              <span className="nav-link-name">Dashboard</span>
            </a>
            <a href="#" className="nav-link">
              <i className="far fa-envelope nav-link-icon"></i>
              <span className="nav-link-name">Messages</span>
            </a>
            <a href="#" className="nav-link">
              <i className="far fa-user-friends nav-link-icon"></i>
              <span className="nav-link-name">Friends</span>
            </a>
            <a href="#" className="nav-link">
              <i className="far fa-bell nav-link-icon"></i>
              <span className="nav-link-name">Notifications</span>
            </a>
            <a href="#" className="nav-link">
              <i className="fas fa-cog nav-link-icon"></i>
              <span className="nav-link-name">Settings</span>
            </a>
          </div>
        </nav>
        <button className="p-4 text-[#f57aa5] hover:bg-gray-800">Logout</button>
      </aside>
    </>
  );
};

export default NewSideBar;
