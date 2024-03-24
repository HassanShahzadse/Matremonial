"use client";

import SideBar from "@/utils/sideBar/sideBar";
import { ProtectedRouteWrapper } from "../settings/protectedRoute";
import Image from "next/image";


export default function Layout({
  children,
  show,
  filters,
  updateFilters,
  filterOpen,
  searchText,
  setSearchText,
  handleCardClick,
  filteredChats,
  hideSideBar,
  setHideSideBar
}: any) {
  return (
    <ProtectedRouteWrapper>
      <div className="">
        <main className={`${!hideSideBar ? 'space-toggle':''}`}>
          <SideBar
            show={show}
            filters={filters}
            updateFilters={updateFilters}
            filterOpen={filterOpen}
            searchText={searchText}
            setSearchText={setSearchText}
            filteredChats={filteredChats}
            handleCardClick={handleCardClick}
            setHideSideBar={setHideSideBar}
            hideSideBar={hideSideBar}
          />
          <div className="mt-5">{children}</div>
          <div className=" h-[3vh] fixed left-0 w-full bottom-0 z-10 ">
            <Image
              src="/Navbar/NavbarThin1.png"
              alt="Description"
              className="rounded-lg"
              objectFit="cover"
              fill
            />
          </div>
        </main>
      </div>
    </ProtectedRouteWrapper>
  );
}
