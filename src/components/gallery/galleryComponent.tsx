"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../mainLayout/layout";
import Navbar from "../navbar/Navbar";
import { updateUser, uploadImageToFirestore } from "@/sharedService/auth/auth";
import { getLoggedInUserInfo } from "@/utils/userProfile/loggedInUserInfo";

export default function NotificationsComponent() {
  const [user, setUser] = useState(getLoggedInUserInfo());
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Fetch user info again after updating
    setUser(getLoggedInUserInfo());
  }, []);

  const handleUpload = async (event:any) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      await uploadImageToFirestore(file, setData); // Pass setData here
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const setData = (downloadedURL:any) => {
    const updatedUser = { ...user, imageUrls: [...user.imageUrls, downloadedURL] };
    updateUser(user.id, updatedUser)
      .then((success) => {
        if (success) {
          console.log("Image uploaded and user updated successfully.");
          setUser(updatedUser); // Update user state with new image URLs
        } else {
          console.error("Failed to update user after image upload.");
        }
      })
      .catch((error) => {
        console.error("Failed to update user:", error);
      });
  };

  return (
    <>
      <Navbar />
      <Layout show={show} setShow={setShow}>
        <div className="container mt-20 mx-auto">
          <h1 className="text-4xl font-bold text-center py-10">Gallery</h1>
            <div className="flex align-right justify-end">
              <label htmlFor="uploadImage" className="cursor-pointer bg-[#FD307A] text-white py-2 px-4 rounded-md">
                + Upload Image
                <input
                  id="uploadImage"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </label>
            </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 py-5 gap-8 relative">
            {user.imageUrls?.map((imageUrl:any, index:any) => (
              <div key={index} className="flex justify-center">
                <Image
                  width={200}
                  height={200}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="rounded h-36"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 ">
      <Image
              src="/Navbar/NavbarThin1.png"
              alt="Description"
              className="rounded-lg"
              objectFit="cover"
              fill
            />
      </div>
    </>
  );
}
