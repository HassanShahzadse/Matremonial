"use client";

import SideBar from "@/utils/sideBar/sideBar";
import { ProtectedRouteWrapper } from "../settings/protectedRoute";

export default function Layout({ children, show, filters, updateFilters ,filterOpen,searchText,setSearchText }: any) {

  return (
    <ProtectedRouteWrapper>
      <div className="">
        <main className="space-toggle">
          <SideBar show={show}  filters={filters} updateFilters={updateFilters} filterOpen={filterOpen} searchText={searchText} setSearchText={setSearchText}/>
          <div className="mt-5">
            {children}
            </div>
        </main>
      </div>
    </ProtectedRouteWrapper>
  );
}
