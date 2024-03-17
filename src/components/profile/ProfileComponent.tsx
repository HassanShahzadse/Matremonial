"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import ChooseProfilePicture from "@/utils/addProfile/profile";
import GalleryPicture from "@/utils/addProfile/galleryPicture";
import { useEffect } from "react";
import axios from "axios";
import styles from "./Profile.module.css";
import ProfileInfo from "@/utils/addProfile/profileInfo";
import PersonalInfo from "@/utils/addProfile/personalInfo";
import BodyType from "@/utils/addProfile/bodyType";
import Religion from "@/utils/addProfile/Religion";
import Partner from "@/utils/addProfile/partner";
import {
  partnerReligionOptions,
  partnerSectOptions,
  profileInfoFields,
  personalInfoFields,
  bodyTypeFields,
  religiousInfoFields,
} from "./profilefieldsData";
import { updateUser, uploadImageToFirestore } from "@/sharedService/auth/auth";
import { getLoggedInUserInfo } from "@/utils/userProfile/loggedInUserInfo";
import { addprofileSchema } from "@/utils/validations/Validations";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ProfileComponent() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addprofileSchema),
  });

  const errorKeys = Object.keys(errors);
  const errorCount = errorKeys.length;

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
  const [step, setStep] = useState(0);

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

  const nextStep0 = () => {
    setShowError(0)
    if (step === 0 && errorCount === 15) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const nextStep1 = () => {
    setShowError(1)
    if (step === 1 && errorCount === 10) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const nextStep2 = () => {
    setShowError(2)
    if (step === 2 && errorCount === 7) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const nextStep3 = () => {
    setShowError(3)
    if (step === 3 && errorCount === 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const nextStep4 = () => {
    setShowError(4)
  }; 

  const onSubmit = async (data: any) => {
  
    try {
      const uploadPromises: Promise<any>[] = [];
      const dataWithUrls = { ...data };

      // Rename fields as per the database naming convention
      dataWithUrls.maritalStatus = dataWithUrls.martialStatus;
      dataWithUrls.children = dataWithUrls.haveChildren;
      delete dataWithUrls.martialStatus;
      delete dataWithUrls.haveChildren;

      // Reorder image URLs with profile picture first
      const imageFields = [
        "profilePicture",
        "gallery1",
        "gallery2",
        "gallery3",
        "gallery4",
        "gallery5",
        "gallery6",
      ];
      const imageUrls: string[] = [];

      for (const field of imageFields) {
        if (dataWithUrls[field] instanceof File) {
          uploadPromises.push(
            new Promise((resolve, reject) => {
              uploadImageToFirestore(dataWithUrls[field], (url: any) => {
                if (field === "profilePicture") {
                  imageUrls.unshift(url);
                } else {
                  imageUrls.push(url);
                }
                resolve(undefined);
              }).catch(reject);
            })
          );
        }
      }

      await Promise.all(uploadPromises);

      const user = getLoggedInUserInfo();
      const userId = user.id;
      dataWithUrls.imageUrls = imageUrls;
      const excludedFields = [
        "profilePicture",
        "gallery1",
        "gallery2",
        "gallery3",
        "gallery4",
        "gallery5",
        "gallery6",
      ];
      excludedFields.forEach((field) => delete dataWithUrls[field]);
      const updateSuccess = await updateUser(userId, dataWithUrls);
      if (updateSuccess) {
        router.push("/dashboard");
        console.log("User updated successfully.");
      } else {
        window.alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error uploading images or updating user:", error);
    }
  };

  return (
    <>
      <div className={styles.backgroundImg}>
        <div className="h-[8vh] bg-[#fb1086] fixed top-0  left-0 right-0 "></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:container mx-auto  rounded-[3rem] bg-white bg-opacity-70 p-8  mt-20 mb-5 ">
            <div className="card flex justify-center p-1 ">
              <ChooseProfilePicture control={control} />
            </div>
            {(() => {
              if (step === 0) {
                return (
                  <ProfileInfo
                    profileInfoFields={profileInfoFields}
                    register={register}
                    errors={showError===0 ? errors : {}}
                  />
                );
              } else if (step === 1) {
                return (
                  <PersonalInfo
                    personalInfoFields={personalInfoFields}
                    register={register}
                    errors={showError===1 ? errors : {}}
                  />
                );
              } else if (step === 2) {
                return (
                  <BodyType
                    bodyTypeFields={bodyTypeFields}
                    register={register}
                    errors={showError===2 ? errors : {}}
                  />
                );
              } else if (step === 3) {
                return (
                  <Religion
                    religiousInfoFields={religiousInfoFields}
                    register={register}
                    errors={showError===3 ? errors : {}}
                  />
                );
              } else if (step === 4) {
                return (
                  <Partner
                    partnerFields={partnerFields}
                    register={register}
                    errors={showError===4 ? errors : {}}
                  />
                );
              } else {
                return null;
              }
            })()}

            {step == 4 && (
              <div className="w-full  p-5 mt-5">
                <h1 className="text-xl font-semibold  ">Photos</h1>

                <div className="grid lg:grid-cols-6 md:grid-cols-5  mt-4 sm:grid-cols-5 xsm:grid-cols-3  ">
                  {galleryFields.map((field) => (
                    <div key={field}>
                      <GalleryPicture
                        control={control}
                        previewImage={previewImages[field]}
                        setPreviewImage={(file) =>
                          handleFileChange(field, file)
                        }
                        showPic={showPics[field]}
                        fieldName={field}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="btn text-center mx-auto space-x-3 mb-20 ">
            {step != 0 && (
              <button
                type="button"
                className="bg-[#fb1086]  rounded-md px-4 p-2 mt-10 cursor-pointer text-white"
                onClick={previous}
              >
                Previous
              </button>
            )}

            {step == 0 && (
              <button
                type="submit"
                className="bg-[#fb1086]  rounded-md px-4 p-2  cursor-pointer text-white"
                onClick={nextStep0}
              >
                Next
              </button>
            )}
            {step == 1 && (
              <button
                type="submit"
                className="bg-[#fb1086]  rounded-md px-4 p-2  cursor-pointer text-white"
                onClick={nextStep1}
              >
                Next
              </button>
            )}
            {step == 2 && (
              <button
                type="submit"
                className="bg-[#fb1086]  rounded-md px-4 p-2  cursor-pointer text-white"
                onClick={nextStep2}
              >
                Next
              </button>
            )}
            {step == 3 && (
              <button
                type="submit"
                className="bg-[#fb1086]  rounded-md px-4 p-2  cursor-pointer text-white"
                onClick={nextStep3}
              >
                Next
              </button>
            )}

            {step == 4 && (
              <button
                type="submit"
                className="bg-[#fb1086] text-white p-2 rounded-md px-5"
                onClick={nextStep4}
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
