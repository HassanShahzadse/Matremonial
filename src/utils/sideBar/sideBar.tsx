"use client";

import Navbar from "@/components/navbar/Navbar";
import SideBarNav from "./sideBarNav";
import SideBarFilter from "./sideBarFilter";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { UserList } from "../messages/userList";

const SideBar = ({ show, updateFilters, filters, searchText, setSearchText,handleCardClick,filteredChats }: any) => {
  const [filterVisible, setFilterVisible] = useState(true);
  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };
  
  // Get the current location using useLocation hook
  const pathname = usePathname()
  return (
    <aside
      className={`sidebar mt-[8vh] ${show ? "show" : "show"}`}
      style={{ height: "90vh", backgroundColor: "#F05F93" }}
    >
      <Navbar toggleFilter={toggleFilter} searchText={searchText} setSearchText={setSearchText} />
      {!filterVisible ? (
        <SideBarNav />
      ) : (
        // Use ternary operator to conditionally render either SideBarFilter or ChatWindow based on the pathname
        !pathname.includes("messages") ? (
          <SideBarFilter filters={filters} updateFilters={updateFilters} />
        ) : (
          <UserList filteredChats={filteredChats} onCardClick={handleCardClick}/>
        )
      )}
    </aside>
  );
};

export default SideBar;
