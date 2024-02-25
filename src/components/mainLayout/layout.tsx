"use client";

import SideBar from "@/utils/sideBar/sideBar";
import { ProtectedRouteWrapper } from "../settings/protectedRoute";

export default function Layout({ children, show, filters, updateFilters ,filterOpen,searchText,setSearchText }: any) {

  return (
    <ProtectedRouteWrapper>
      <div>
        <main className="space-toggle">
          <SideBar show={show}  filters={filters} updateFilters={updateFilters} filterOpen={filterOpen} searchText={searchText} setSearchText={setSearchText}/>
          {children}
        </main>
      </div>
    </ProtectedRouteWrapper>
  );
}
