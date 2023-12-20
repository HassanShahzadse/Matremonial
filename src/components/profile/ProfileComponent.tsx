"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Man from "/public/member2.png";
// import Ring from "/public/ring.jpg";
import { useRouter } from "next/navigation";
import Profile from "@/utils/addProfile/profile";
import { useForm, useFieldArray } from "react-hook-form";
import { Controller, SubmitHandler } from "react-hook-form";
import ChooseProfilePicture from "@/utils/addProfile/profile";
import Gallery from "@/utils/addProfile/galleryPicture";
import GalleryPicture from "@/utils/addProfile/galleryPicture";
import InputField from "@/utils/addProfile/inputField";
import SelectField from "@/utils/addProfile/selectField";
import { useEffect } from "react";
import axios from "axios";
import RadioButtonGroup from "@/utils/addProfile/radioButtonGroup";
import styles from "./Profile.module.css";
import ProfileInfo from "@/utils/addProfile/profileInfo";
import PersonalInfo from "@/utils/addProfile/personalInfo";
import BodyType from "@/utils/addProfile/bodyType";
import Religion from "@/utils/addProfile/Religion";
import Partner from "@/utils/addProfile/partner";

const martialOptions = [
  { label: "Never Married", value: "NeverMarried" },
  { label: "Legally Separated", value: "LegallySeparated" },
  { label: "Divorced", value: "Divorced" },
  { label: "Widow", value: "Widowd" },
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
  { label: "Christian", value: "Christian" },
];
const partnerSectOptions = [
  { label: "Doesn't Matter", value: "Doesn'tMatter" },
  { label: "Only Muslim", value: "OnlyMuslim" },
  { label: "Shia", value: "Shia" },
  { label: "Sunni", value: "Cristian" },
];
const sectOptions = [
  { label: "Only Muslim", value: "OnlyMuslim" },
  { label: "Wahabi", value: "Wahabi" },
  { label: "Sunni", value: "Sunni" },
  { label: "Shia", value: "Shia" },
];
const hijabOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Occasionally", value: "Occasionally" },
];
const beardOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Trend", value: "trend" },
];
const halalOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Sometimes", value: "sometimes" },
];
const salahOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Occasionally", value: "Occasionally" },
];
const zikatOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Sometimes", value: "sometimes" },
];
const ramadanOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "A Few", value: "a few" },
];
const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
const childrenOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Maybe", value: "May be" },
];
// PersonalInfoFields.json

const profileInfoFields = [
  {
    type: "input",
    label: "Headline",
    name: "headline",
    placeholder: "Enter a Headline",
  },

  {
    type: "radio",
    label: "What I am looking for",
    name: "gender",
    options: genderOptions,
  },

  {
    type: "input",
    label: "About",
    name: "bio",
    placeholder: "Write something About Your-self",
  },
  {
    type: "input",
    label: "Education Level",
    name: "education",
    placeholder: "Education level",
  },
  {
    type: "input",
    label: "My job Title",
    name: "job",
    placeholder: "Enter job title",
  },
  {
    type: "input",
    label: "My Profession",
    name: "profession",
    placeholder: "Enter education level",
  },
  {
    type: "input",
    label: "Mother Tongue",
    name: "tongue",
    placeholder: "Enter Your Mother Tongue",
  },
  {
    type: "input",
    label: "Second Language",
    name: "slang",
    placeholder: "Enter your Second Language",
  },
];
export const personalInfoFields = [
  {
    type: "input",
    label: "My Citizenship",
    name: "citizenship",
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
    name: "martialStatus",
    options: martialOptions,
    required: true,
  },
  {
    type: "select",
    label: "Looking to Marry",
    name: "martialTime",
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
    type: "radio",
    label: "Would I like to have Children?",
    name: "children",
    options: childrenOptions,
    required: true,
  },

  {
    type: "input",
    label: "Do I Have Children?",
    name: "haveChildren",
    placeholder: "Do I have children?",
    required: true,
  },
  {
    type: "select",
    label: "Living Arrangements",
    name: "livingArrange",
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
    name: "buildCont",
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
    name: "smokeFreq",
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

const religiousInfoFields = [
  {
    type: "input",
    label: "Religiousness",
    name: "religion",
    placeholder: "",
    required: true,
  },
  {
    type: "select",
    label: "My Sect",
    name: "sect",
    options: sectOptions,
    required: true,
  },
  {
    type: "radio",
    label: "Do you wear a Hijab?",
    name: "hijab",
    options: hijabOptions,
  },
  {
    type: "radio",
    label: "Do you prefer a Beard?",
    name: "beard",
    options: beardOptions,
  },
  {
    type: "input",
    label: "Are you a Revert?",
    name: "revert",
    placeholder: "",
    required: true,
  },
  {
    type: "select",
    label: "Do you keep Halal?",
    name: "halal",
    options: halalOptions,
    required: true,
  },
  {
    type: "radio",
    label: "Do you perform Salah?",
    name: "salah",
    options: salahOptions,
  },
  {
    type: "radio",
    label: "Do you pay Zakat?",
    name: "zakat",
    options: zikatOptions,
  },
  {
    type: "radio",
    label: "Do you Fast in the month of Ramadan?",
    name: "ramadan",
    options: ramadanOptions,
  },
];

export default function ProfileComponent() {
  const router = useRouter();
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

  const [locationOptions, setLocationOptions] = useState([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country: any) => ({
          label: country.name.common,
          value: country.name.common,
        }));

        console.log(" name of country", countryData);
        setLocationOptions(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const partnerFields = [
    {
      label: "Partner Location",
      name: "partnerLocation",
      type: "select",
      options: locationOptions,
    },
    {
      label: "Partner Religion",
      name: "partnerReligion",
      type: "select",
      options: partnerReligionOptions,
    },
    {
      label: "Partner Sect",
      name: "partnerSect",
      type: "select",
      options: partnerSectOptions,
    },
    {
      label: "Partner Education",
      name: "partnerEducation",
      type: "input",
      placeholder: "",
    },
    {
      label: "Partner Profession",
      name: "partnerProfession",
      type: "input",
      placeholder: "",
    },
    {
      label: "Describe Type of Partner",
      name: "partnerType",
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

  const previous = () => {

    setStep((step) => step - 1);
  };
  const next = () => {
    setStep((step) => step + 1);
  };
  const onSubmit = (data: any) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <>
      <div className={styles.backgroundImg}>
        <div className="h-[8vh] bg-[#fb1086] fixed top-0  left-0 right-0 "></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Photos */}
          {/* <div className="w-full bg-white bg-opacity-70 p-5 mt-5">
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
        </div>   */}

          <div className="container mx-auto  rounded-[3rem] bg-white bg-opacity-70 p-8  mt-20 mb-5 ">
            <div className="card flex justify-center p-1 ">
              <ChooseProfilePicture control={control} />
            </div>

            {(() => {
              switch (step) {
                case 1:
                  return (
                    <ProfileInfo
                      profileInfoFields={profileInfoFields}
                      register={register}
                    />
                  );
                case 2:
                  return (
                    <PersonalInfo
                      personalInfoFields={personalInfoFields}
                      register={register}
                    />
                  );
                case 3:
                  return (
                    <BodyType
                      bodyTypeFields={bodyTypeFields}
                      register={register}
                    />
                  );
                case 4:
                  return (
                    <Religion
                      religiousInfoFields={religiousInfoFields}
                      register={register}
                    />
                  );
                case 5:
                  return (
                    <Partner
                      partnerFields={partnerFields}
                      register={register}
                    />
                  );
                default:
                  return null;
              }
            })()}
          </div>

          <div className="btn text-center mx-auto space-x-3 mb-20 "> 
        
          {step != 1 &&  (<span className="bg-[#fb1086]  rounded-md px-4 p-2 mt-10 cursor-pointer text-white" onClick={previous}>
              Previous
            </span>)}
          
          {step!=5 &&  (<span
              className="bg-[#fb1086]  rounded-md px-4 p-2  cursor-pointer text-white"
              onClick={next}
            >
              Next
            </span>)}

            {step == 5 && (
         
         <button
           type="submit"
           className="bg-[#fb1086] text-white p-2 rounded-md px-5"
         >
           Submit
         </button>
      
     )}
      
          </div>

        </form>
        
         
        

        <div className="h-[5vh] bg-[#fb1086] fixed bottom-0 left-0 right-0  rounded-s-2xl"></div>
      </div>
    </>
  );
}
