'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router"; // Changed from "next/navigation"

function Page() {
  const { user, /* Add setUser if needed */ } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);

  return <h1>Only logged in users can view this page</h1>;
}

export default Page;
