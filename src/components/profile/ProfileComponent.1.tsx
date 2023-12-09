"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Man from "/public/member2.png";
import { ChooseImg } from "./profileComponents/ChooseImg";
import { PhotosList } from "./profileComponents/PhotosList";
import { Appearance } from "./profileComponents/Appearance";
import { GeneralInput } from "./profileComponents/GeneralInput";
import Profile from "@/utils/addProfile/profile";
import { useForm, useFieldArray } from "react-hook-form";
import { Controller, SubmitHandler } from "react-hook-form";
import ChooseProfilePicture from "@/utils/addProfile/profile";
import Gallery from "@/utils/addProfile/galleryPicture";
import GalleryPicture from "@/utils/addProfile/galleryPicture";
import InputField from "@/utils/addProfile/inputField";
import SelectField from "@/utils/addProfile/selectField";
const profileInfoFields = [
  { label: "Headline", name: "headline", placeholder: "Enter a Headline" },
  {
    label: "About",
    name: "about",
    placeholder: "Write something About Your-self",
  },
  {
    label: "Education Level",
    name: "education",
    placeholder: "Education level",
  },
  { label: "My job Title", name: "job", placeholder: "Enter job title" },
  {
    label: "My Profession",
    name: "profession",
    placeholder: "Enter education level",
  },
  {
    label: "Mother Tongue",
    name: "tongue",
    placeholder: "Enter Your Mother Tongue",
  },
  {
    label: "Second Language",
    name: "secondlanguage",
    placeholder: "Enter your Second Language",
  },
];
const martialOptions = [
  { label: "Never Married", value: "NeverMarried" },
  { label: "Legally Separated", value: "LegallySeparated" },
  { label: "Divorced", value: "Divorced" },
  { label: "Widowd", value: "Widowd" },
  { label: "Annulled", value: "Annulled" },
];
const lookingToMarryOptions=[
  { label: "As soon As Possible", value: "AssoonAsPossible" },
  { label: "This Year", value: "ThisYear" },
  { label: "Next Year", value: "NextYear" },
  { label: "Not Sure", value: "NotSure" },
  
];
const livingArrangementsOptions=[
  { label: "Live with Family", value: "LivewithFamily" },
  { label: "Separate", value: "Separate" },
  { label: "Alone", value: "Alone" },
];
export default function ProfileComponent() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, control } = useForm();
  const galleryFields = [
    "gallery1",
    "gallery2",
    "gallery3",
    "gallery4",
    "gallery5",
    "gallery6",
  ];
  const [previewImages, setPreviewImages] = useState<
    Record<string, string | null>
  >({
    gallery1: "",
    gallery2: "",
    gallery3: "",
    gallery4: "",
    gallery5: "",
    gallery6: "",
  });
  const [showPics, setShowPics] = useState<Record<string, boolean>>({
    gallery1: true,
    gallery2: true,
    gallery3: true,
    gallery4: true,
    gallery5: true,
    gallery6: true,
  });

  const handleFileChange = (fieldName: string, file: File | null) => {
    const imageUrl = file ? URL.createObjectURL(file) : null;
    setPreviewImages((prevImages) => ({
      ...prevImages,
      [fieldName]: imageUrl,
    }));
    setShowPics((prevShowPics) => ({ ...prevShowPics, [fieldName]: !file }));
  };

  const onSubmit = (data: any) => {
    console.log(data);
    console.log("My name is mehrab");
  };

  return (
    <Layout show={show} setShow={setShow}>
      <>
        <div className=" lg:top-0 xsm:top-0 fixed inline w-full p-4   bg-white">
          <h2 className="text-2xl font-bold  z-10  inline">Profile</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card bg-white w-full p-8 ">
            <ChooseProfilePicture control={control} />
          </div>

          {/*------------ Gallery Code Start-------------------- */}

          <div className="w-full bg-white p-5 mt-5">
            <h1 className="text-xl font-semibold  ">Photos</h1>

            <div className="grid lg:grid-cols-6 md:grid-cols-5  mt-4 sm:grid-cols-5 xsm:grid-cols-3  ">
              {galleryFields.map((field) => (
                <div key={field}>
                  <GalleryPicture
                    control={control}
                    previewImage={previewImages[field]}
                    setPreviewImage={(file) => handleFileChange(field, file)}
                    showPic={showPics[field]}
                    fieldName={field}
                  />
                </div>
              ))}
            </div>
          </div>

          {/*------------ Gallery Code End-------------------- */}

          {/* ProfileInfo */}

          <div className="w-full bg-white p-5 mt-5">
            <h1 className="text-xl font-semibold m ">Profile Info</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 p-4">
              {profileInfoFields.map((field) => (
                <InputField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  register={register}
                />
              ))}
            </div>
          </div>

          {/* Personal Info */}
          <div className="w-full bg-white p-5 mt-5">
            <h1 className="text-xl font-semibold m ">Personal Info</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 p-4">
              <InputField
                label="My Citizenship"
                name="citizen"
                placeholder="Enter Citizenship"
                register={register}
              />
              <InputField
                label="My Income"
                name="income"
                placeholder="Enter your Income"
                register={register}
              />
              <SelectField
                label="Martial Status"
                name="martial"
                options={martialOptions}
                register={register}
              />
              <SelectField
                label="Looking to Marry"
                name="looking"
                options={lookingToMarryOptions}
                register={register}
              />
              <InputField
                label="Willing to Relocate"
                name="relocate"
                placeholder="Willing to relocate"
                register={register}
              />
              <InputField
                label="Do I Have Children?"
                name="havechildren"
                placeholder="Do I have children?"
                register={register}
              />
              <SelectField
                label="Living Arrangements"
                name="livingarrangements"
                options={livingArrangementsOptions}
                register={register}
              />



            </div>
          </div>

          <div className="flex justify-end mb-5 space-x-4 mt-5">
            <button
              type="button"
              className="bg-green-400 text-white p-2 rounded-md px-5"
            >
              Cencel
            </button>
            <button
              type="submit"
              className="bg-[#fb1086] text-white p-2 rounded-md px-5"
            >
              Submit
            </button>
          </div>
        </form>
      </>
    </Layout>
  );
}
