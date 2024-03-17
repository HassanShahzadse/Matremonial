"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import { acceptFriendRequest, checkFriendRequest, fetchUserInfoFromFirebase, rejectFriendRequest, sendFriendRequest, unfriend } from "@/sharedService/users/user";
import styles from "./messagesComponent.module.css";
import Link from "next/link";
import { getLoggedInUserInfo } from "@/utils/userProfile/loggedInUserInfo";

// ... (previous imports)

interface ViewProfileProps {
  userId: any | any[] | undefined;
}

export default function ViewProfile({ userId }: ViewProfileProps) {
  const [userProfile, setUserProfile] = useState<any | undefined>();
  const [RequestStatus,setRequestStatus] = useState<any>('Add Friend')

  const user = getLoggedInUserInfo()
  const handleFriendRequest = async () =>{
    if(RequestStatus === 'Add Friend') await sendFriendRequest(user.id,userId)
    if(RequestStatus === 'Accept Request') await acceptFriendRequest(user.id,userId)
    if(RequestStatus === 'UnFrined') await unfriend(user.id,userId)
    fetchData()
  }
  const handleRejectFriendRequest = async () =>{
        await rejectFriendRequest(user.id,userId)
        fetchData()
  }
  const checkFriendReq = async (user2:any) =>{
    if (user.id ===user2.userId ){
      setRequestStatus('OwnProfile')
      return
    }
    const check:any = await checkFriendRequest(user.id,user2)
   const { LoggedInUserHasFriendRequestFromUser2,user2HasFriendRequestFromLoggedInUser,LoggedInUserIsFriendWithUser2} = check
   if(LoggedInUserHasFriendRequestFromUser2) setRequestStatus('Accept Request')
  else if(user2HasFriendRequestFromLoggedInUser) setRequestStatus('Request Sent')
  else if(LoggedInUserIsFriendWithUser2) setRequestStatus('UnFrined')
   else setRequestStatus('Add Friend')
  }
  const fetchData = async () => {
    try {
      const user: any | undefined = await fetchUserInfoFromFirebase(userId);
      setUserProfile(user);
      checkFriendReq({...user,userId})
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  if(!userProfile) return <Layout><h1>Please Wait...</h1></Layout>

  return (
    <Layout>
      <div className="mx-auto mt-32 mb-32 lg:me-72">
        <div className="flex  flex-row">
          <div className="image-wrapper ">
            <Image
              src={ userProfile?.imageUrls &&
                userProfile?.imageUrls[0]?.startsWith("https")
                  ? userProfile?.imageUrls[0]
                  : "https://www.w3schools.com/w3images/avatar2.png"}
              alt="Preview"
              width={130}
              height={130}
              className="rounded-full h-[130px] border border-2  border-[#FF2271] "
            />
          </div>
          <div className="flex flex-col ms-4 ">
            <h1 className="text-[#000000] text-2xl font-bold">{userProfile.userName}</h1>
            <div className="flex flex-row mt-1">
              <h2 className="text-sm text-[#000000] font-semibold opacity-100">
                Profile
              </h2>
              <i className="text-lg mx-3">
                  {user.gender === "Male" && <i className="fas fa-mars text-blue" />}
                  {user.gender === "Female" && <i className="fas fa-venus text-[#FF2271]" />}
                  {user.gender !== "Male" && user.gender !== "Female" && <i className="fas fa-transgender-alt" />}
                </i>
              <span className="ms-3 textt-lg text-[#000000] font-semibold opacity-100">
                {user.location && user.country ? `${user.location}, ${user.country}` : "Location not available"}
              </span>
            </div>
            <div className="d-flex flex-row mt-8">
             {RequestStatus !== 'OwnProfile' && <button
                type="button"
                className="bg-[#F45F93] text-sm ps-2 pe-2 text-[#ffffff] rounded-s-xl rounded-e-xl border border-[#707070]"
                onClick={handleFriendRequest}
              >
                {RequestStatus}
              </button>}
             {RequestStatus === 'Accept Request' && <button
                type="button"
                className="bg-[#F45F93] text-sm ps-2 pe-2 text-[#ffffff] rounded-s-xl rounded-e-xl ms-2 border border-[#707070]"
                onClick={handleRejectFriendRequest}
              >
                Reject Request
              </button>}
              <Link href={`/dashboard/messages/${userId}`}>
              {RequestStatus !== 'OwnProfile' && <button
                type="button"
                className=" bg-[#F45F93] text-sm ms-1 ps-2 pe-2 text-[#ffffff] rounded-s-xl rounded-e-xl border border-[#707070]"
              >
                Message
              </button>}
              </Link>
            </div>
          </div>
        </div>
        <div className="grid  sm:grid-cols-2 mt-10">
          <div className=" border-[#707070] border  rounded-xl">
            <div className="ms-2 me-6">
              <h1 className="text-[#000000] font-bold text-lg text-center opacity-100">
                About me
              </h1>
              <p className="mt-4 text-[#000000] font-bold text-sm opacity-100">
               {userProfile.bio}
              </p>
              <div className="flex flex-row justify-between mt-4 mb-2">
                <ul>
                  <li className="text-[#000000] font-semibold text-md opacity-100">
                    Religon
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Cast
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Live
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Education
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Job
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Salary
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Living arrangement
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Martial Status
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Smoke
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Keep halal
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Do you want Kids
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Willing to relocate
                  </li>
                  <li className="text-[#000000] font-semibold text-md opacity-100 mt-2">
                    Pray Salah
                  </li>
                </ul>
                <ul className="text-center">
                  <li className="text-[#000000] font-bold text-md opacity-100 ">
                  {userProfile.religion ? `${userProfile.religion} ` : "NA"}
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                    Jutt
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                  {userProfile.country ? `${userProfile.country} ` : "NA"}
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                  {userProfile.education ? `${userProfile.education} ` : "NA"}
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                  {userProfile.profession ? `${userProfile.profession} ` : "NA"}
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                    {userProfile.income ? `${userProfile.income} ` : "NA"}
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                  {userProfile.livingArrange ? `${userProfile.livingArrange} ` : "NA"}
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                  {userProfile.maritalStatus ? `${userProfile.maritalStatus} ` : "NA"}
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                  
                    {userProfile.smokeFreq ? `${userProfile.smokeFreq} ` : "NA"}
                    
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                  {userProfile.smokeFreq ? `${userProfile.smokeFreq} ` : "NA"}
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                    
                    {userProfile.halal ? `${userProfile.halal} ` : "NA"}
                    
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                    
                    {userProfile.relocate ? `${userProfile.relocate} ` : "NA"}
                    
                  </li>
                  <li className="text-[#000000] font-bold text-md opacity-100 mt-2">
                  {userProfile.salah ? `${userProfile.salah} ` : "NA"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" border-[#707070] border mt-6 sm:mt-0 sm:ms-12 rounded-xl">
              <div className="ms-2 me-6">
                <h1 className="text-[#000000] font-bold text-lg text-center opacity-100">
                  Body Type
                </h1>
                <div className="flex flex-row justify-between mt-0 mb-6">
                  <ul>
                    <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                      Hair Color
                    </li>
                    <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                      Height
                    </li>
                    <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                      Body Build
                    </li>
                    <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                      Eyes Color
                    </li>
                    <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                      Prefer Hijab
                    </li>
                    <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                      Any Disability
                    </li>
                  </ul>
                  <ul className="text-center">
                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                    {userProfile. hair ? `${userProfile. hair} ` : "NA"}
                     
                    </li>
                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                    {userProfile. height ? `${userProfile. height} ` : "NA"}
                      
                    </li>
                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                    {userProfile. buildCont ? `${userProfile. buildCont} ` : "NA"}
                      
                    
                    </li>
                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                    {userProfile.eyes ? `${userProfile.eyes} ` : "NA"}

                    </li>
                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                    {userProfile.eyes ? `${userProfile.eyes} ` : "NA"}
                    </li>
                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                      {userProfile.hijab ? `${userProfile.hijab} ` : "NA"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" border-[#707070] border mt-5 sm:ms-12 rounded-xl">
              <div className="ms-2 me-6">
                <h1 className="text-[#000000] font-bold text-lg text-center opacity-100">
                  Looking For
                </h1>
                <p className="mt-2 text-center text-[#000000] font-bold text-sm opacity-100 mb-5">
                  I’m looking for a Boy who is cultural love to travel Should be
                  kind and caring respect elders.no skin color preferences just
                  a nice boy form a nice Family……
                </p>
              </div>
            </div>
            <div className=" border-[#707070] border mt-5 sm:ms-12 rounded-xl">
              <div className="ms-2 me-6">
                <h1 className="text-[rgb(0,0,0)] font-bold text-lg text-center opacity-100">
                  Type of Partner
                </h1>
                <div className="flex flex-row justify-between mt-0 mb-6">
                  <ul>
                  <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                    Partner Live
                  </li>   
                  <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                    Partner Religion 
                 </li>   
                 <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                    Partner Cast 
                 </li>   
                 <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                    Partner Education
                 </li>   
                 <li className="text-[#000000] font-semibold text-sm opacity-100 mt-2">
                    Partner Profession
                 </li>   
                  </ul>
                  <ul className="text-center">
                  <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                  {userProfile.partnerLocation ? `${userProfile.partnerLocation} ` : "NA"}
                    </li>
                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                    {userProfile.religion ? `${userProfile.religion} ` : "NA"}

                    </li>

                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                      Doesn't Matter
                    </li>

                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                    {userProfile.partnerEducation ? `${userProfile.partnerEducation} ` : "NA"}

                    </li>
                    <li className="text-[#000000] font-bold text-sm opacity-100 mt-2">
                    {userProfile.partnerProfession ? `${userProfile.partnerProfession} ` : "NA"}
                                                            
                    </li>
                  </ul>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="absolute  invisible lg:visible   -mt-[5rem]   -z-50 top-0  right-0  w-[250px] h-[100px]">
        <div className="bg-[#707070] / pt-36 pb-5">
            <h1 className="text-center text-[#FFFFFF]  text-lg ps-[5rem] pe-[5rem]">All Profile</h1>
            <h1 className="text-center text-[#FFFFFF] text-lg">Used To Connect</h1>
        </div>
        <div className="bg-black h-[3.5rem]">
        </div>
        <div className={styles.bgBanner}>
        </div>
     </div>
    </Layout>
  );
}

{
  /* {userProfile && (
        <div className="mt-14">
          <h1>User Profile Page</h1>
        <p>Hijab: {userProfile.hijab}</p>
        <p>Partner Location: {userProfile.partnerLocation}</p>
        <p>Phone Number: {userProfile.phone_number}</p>
        <p>Children: {userProfile.children}</p>
        <p>Country: {userProfile.country}</p>
        <p>Salah: {userProfile.salah}</p>
        <p>Partner Religion: {userProfile.partnerReligion}</p>
        <p>Revert: {userProfile.revert}</p>
        <p>Username: {userProfile.username}</p>
        <p>Citizenship: {userProfile.citizenship}</p>
        <p>Hair: {userProfile.hair}</p>
        <p>Partner Education: {userProfile.partnerEducation}</p>
        <p>Eyes: {userProfile.eyes}</p>
        <p>Halal: {userProfile.halal}</p>
        <p>Paid A: {userProfile.paidA}</p>
        <p>Birth Date: {userProfile.birth_date}</p>
        <p>Smoke Frequency: {userProfile.smokeFreq}</p>
        <p>Ramadan: {userProfile.ramadan}</p>
        <p>Email: {userProfile.email}</p>
        <p>Zakat: {userProfile.zakat}</p>
        <p>Partner Profession: {userProfile.partnerProfession}</p>
        <p>Partner Type: {userProfile.partnerType}</p>
        <p>Headline: {userProfile.headline}</p>
        <p>Paid B: {userProfile.paidB}</p>
        <p>Build Cont: {userProfile.buildCont}</p>
        <p>Height: {userProfile.height}</p>
        <p>Partner Sect: {userProfile.partnerSect}</p>
        <p>Slang: {userProfile.slang}</p>
        <p>Education: {userProfile.education}</p>
        <p>Marital Status: {userProfile.maritalStatus}</p>
        <p>Disability: {userProfile.disability}</p>
        <p>Reason for Registering: {userProfile.reason_for_registering}</p>
        <p>Heard About Us: {userProfile.heard_about_us}</p>
        <p>Job: {userProfile.job}</p>
     
        <p>Image URLs:</p>
        {userProfile.imageUrls.map((url: string, index: number) => (
          <p key={index}>{url}</p>
        ))}
        <p>Beard: {userProfile.beard}</p>
        <p>Profession: {userProfile.profession}</p>
        <p>Income: {userProfile.income}</p>
        <p>Religion: {userProfile.religion}</p>
        <p>Password: {userProfile.password}</p>
        <p>Living Arrange: {userProfile.livingArrange}</p>
        <p>Relocate: {userProfile.relocate}</p>
        <p>Sect: {userProfile.sect}</p>
        <p>Tongue: {userProfile.tongue}</p>
        <p>Gender: {userProfile.gender}</p>
        <p>Bio: {userProfile.bio}</p>
        <p>Marital Time: {userProfile.maritalTime}</p>
      
        <button className="p-5 bg-[#fb1086] hover:bg-pink-700 text-[#ffff]  p-1 rounded-2xl my-4 text-sm  ">Add friend</button>
      </div>
      )} */
}
