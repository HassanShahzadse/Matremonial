"use client";

import SideBar from "@/utils/sideBar/sideBar";
import TopBar from "@/utils/topBar/topBar";
import { useState } from "react";
import { ProtectedRouteWrapper } from "../settings/protectedRoute";

export default function Layout({ children, show, setShow }: any) {
  return (
    <ProtectedRouteWrapper>
      <div>
        <main className="space-toggle">
          <SideBar show={show} />
          {children}
        </main>
      </div>
    </ProtectedRouteWrapper>
  );
}
