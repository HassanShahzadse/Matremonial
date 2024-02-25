"use client";

import Navbar from "@/components/navbar/Navbar";
import SideBarNav from "./sideBarNav";
import SideBarFilter from "./sideBarFilter";
import { useState } from "react";

const SideBar = ({ show, updateFilters,filters,searchText,setSearchText }: any) => {
  const [filterVisible, setFilterVisible] = useState(false);
  console.log(updateFilters,filters)
  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };
  return (
    <aside
      className={`sidebar mt-[100px] xsm:mt-14 ${show ? "show" : "show"}`}
      style={{ height: "89vh", backgroundColor: "#F05F93" }}
    >
      <Navbar toggleFilter={toggleFilter} searchText={searchText} setSearchText={setSearchText}/>
      {!filterVisible ? (
        <SideBarNav/>
      ) : (
        <SideBarFilter
        filters={filters}
        updateFilters={updateFilters}
        />
      )}
    </aside>
  );
};
export default SideBar;
