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
import { useEffect} from 'react';
import axios from 'axios';

const martialOptions = [
  { label: "Never Married", value: "NeverMarried" },
  { label: "Legally Separated", value: "LegallySeparated" },
  { label: "Divorced", value: "Divorced" },
  { label: "Widowd", value: "Widowd" },
  { label: "Annulled", value: "Annulled" },
];
const lookingToMarryOptions = [
  { label: "As soon As Possible", value: "AssoonAsPossible" },
  { label: "This Year", value: "ThisYear" },
  { label: "Next Year", value: "NextYear" },
  { label: "Not Sure", value: "NotSure" },
];
const livingArrangementsOptions = [
  { label: "Live with Family", value: "LivewithFamily" },
  { label: "Separate", value: "Separate" },
  { label: "Alone", value: "Alone" },
];

const myBuildOptions = [
  { label: "Normal", value: "Normal" },
  { label: "Muscular", value: "Muscular" },
  { label: "Fat", value: "Fat" },
  { label: "Slim", value: "Slim" },
];

const smokeOptions = [
  { label: "No", value: "No" },
  { label: "Yes", value: "Yes" },
  { label: "Special Occassion", value: "SpecialOccassion" },
  { label: "Sometimes", value: "Sometimes" },
];

const partnerReligionOptions = [
  { label: "Doesn't Matter", value: "Doesn'tMatter" },
  { label: "Hindu", value: "Hindu" },
  { label: "Muslim", value: "Muslim" },
  { label: "Cristian", value: "Cristian" },
];
const partnerSectOptions = [
  { label: "Doesn't Matter", value: "Doesn'tMatter" },
  { label: "Only Muslim", value: "OnlyMuslim" },
  { label: "Shia", value: "Shia" },
  { label: "Sunni", value: "Cristian" },
];
// PersonalInfoFields.json

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
export const personalInfoFields = [
  {
    type: "input",
    label: "My Citizenship",
    name: "citizen",
    placeholder: "Enter Citizenship",
    required: true,
  },
  {
    type: "input",
    label: "My Income",
    name: "income",
    placeholder: "Enter your Income",
    required: true,
  },
  {
    type: "select",
    label: "Martial Status",
    name: "martial",
    options: martialOptions,
    required: true,
  },
  {
    type: "select",
    label: "Looking to Marry",
    name: "looking",
    options: lookingToMarryOptions,
    required: true,
  },
  {
    type: "input",
    label: "Willing to Relocate",
    name: "relocate",
    placeholder: "Willing to relocate",
    required: true,
  },
  {
    type: "input",
    label: "Do I Have Children?",
    name: "havechildren",
    placeholder: "Do I have children?",
    required: true,
  },
  {
    type: "select",
    label: "Living Arrangements",
    name: "livingarrangements",
    options: livingArrangementsOptions,
    required: true,
  },
];
const bodyTypeFields = [
  {
    label: "My Height",
    name: "height",
    type: "input",
    placeholder: "Enter your height",
  },
  {
    label: "My Build",
    name: "build",
    type: "select",
    placeholder: "Select build",
    options: myBuildOptions,
  },
  {
    label: "Hair color",
    name: "hair",
    type: "input",
    placeholder: "Your hair color",
  },
  {
    label: "Eyes color",
    name: "eyes",
    type: "input",
    placeholder: "Your eyes color",
  },
  {
    label: "Do I Smoke?",
    name: "smoke",
    type: "select",
    placeholder: "Select smoke",
    options: smokeOptions,
  },
  {
    label: "Disabilities?",
    name: "disability",
    type: "input",
    placeholder: "",
  },
];


export default function ProfileComponent() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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

  const [ locationOptions, setLocationOptions] = useState([]);
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        
        console.log("countries",response)
        setLocationOptions(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const partnerFields = [
    {
      label: "Partner Location",
      name: "pl",
      type: "select",
      options: locationOptions,
    },
    {
      label: "Partner Religion",
      name: "pr",
      type: "select",
      options: partnerReligionOptions,
    },
    {
      label: "Partner Sect",
      name: "psect",
      type: "select",
      options: partnerSectOptions,
    },
    {
      label: "Partner Education",
      name: "Peducation",
      type: "input",
      placeholder: "",
    },
    {
      label: "Partner Profession",
      name: "Pprofession",
      type: "input",
      placeholder: "",
    },
    {
      label: "Describe Type of Partner",
      name: "top",
      type: "input",
      placeholder: "",
    },
  ];
  





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
                  required
                  errors={errors}
                />
              ))}
            </div>
          </div>

          {/* Personal Info */}
          <div className="w-full bg-white p-5 mt-5">
            <h1 className="text-xl font-semibold m ">Personal Info</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 p-4">
              {personalInfoFields.map((field) => (
                <div key={field.name} className="mb-5">
                  {field.type === "input" && (
                    <InputField
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      register={register}
                      required={field.required}
                      errors={errors}
                    />
                  )}

                  {field.type === "select" && (
                    <SelectField
                      label={field.label}
                      name={field.name}
                      options={field.options}
                      register={register}
                      required={field.required}
                      errors={errors}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Body Type */}
          <div className="w-full bg-white p-5 mt-5">
            <h1 className="text-xl font-semibold m ">Body Type</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 p-4">
              {bodyTypeFields.map((field) => (
                <React.Fragment key={field.name}>
                  {field.type === "input" && (
                    <InputField
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      register={register}
                      required
                      errors={errors}
                    />
                  )}
                  {field.type === "select" && (
                    <SelectField
                      label={field.label}
                      name={field.name}
                      options={field.options || []}
                      register={register}
                      required
                      errors={errors}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Religion */}
          



          {/* Type of Partner */}
          <div className="w-full bg-white p-5 mt-5">
            <h1 className="text-xl font-semibold m ">
              Type of Partner Your Looking for
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 p-4">
              {partnerFields.map((field) => (
                <React.Fragment key={field.name}>
                  {field.type === "input" && (
                    <InputField
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      register={register}
                      required
                      errors={errors}
                    />
                  )}
                  {field.type === "select" && (
                    <SelectField
                      label={field.label}
                      name={field.name}
                      options={field.options || []}
                      register={register}
                      required
                      errors={errors}
                    />
                  )}
                </React.Fragment>
              ))}
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
