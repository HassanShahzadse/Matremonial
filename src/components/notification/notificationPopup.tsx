// NotificationPopup.js
import { fetchUserInfoFromFirebase } from '@/sharedService/users/user';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NotificationPopup: React.FC<any>  = ({ newProfileViews, newFriendRequests }) => {
  const [views,setViews] = useState<any>()
  const [friendRequestsInfo, setFriendRequestsInfo] = useState<any[]>([]);
  const fetchData=async ()=>{
    if(newProfileViews && newProfileViews[0]){
      const viewsProfileImage:any = await fetchUserInfoFromFirebase(newProfileViews[0])
      setViews(viewsProfileImage)
    }
  }
  const fetchFriendRequestsInfo = async () => {
    if (newFriendRequests && newFriendRequests.length > 0) {
      const infoPromises = newFriendRequests.map(async (userId: string) => {
        const userInfo = await fetchUserInfoFromFirebase(userId);
        return { userId, userInfo };
      });
      const friendRequestsInfo = await Promise.all(infoPromises);
      console.log(friendRequestsInfo)
      setFriendRequestsInfo(friendRequestsInfo);
    }
  };
  useEffect(()=>{
    fetchData()
    fetchFriendRequestsInfo();
  },[])
  console.log(newProfileViews?.length !== 0 , newFriendRequests?.length !== 0)
  if(newProfileViews?.length === 0 && newFriendRequests?.length === 0) return(
    <div className="absolute top-[60px] min-w-[300px] right-[-90px] h-[70px] bg-white border border-gray-300 shadow-md rounded-md align-center p-2">
      <h2>You have no new</h2>
      <h2> notifications</h2>
    </div>
  )
  return (
    <div className="absolute top-[60px] min-w-[300px] right-[-90px] bg-white border border-gray-300 shadow-md rounded-md p-2">
      <div className="notification-header">
        <h2>Notifications</h2>
      </div>
      <div className="notification-content">
      {newProfileViews?.length !== 0 &&  <div className="notification-item flex">
        <Image
                  className="rounded-full h-8 w-8 border border-2  border-[#FF2271]"
                  src={views?.userInfo?.imageUrls && views?.userInfo?.imageUrls[0]?.startsWith("https")
                  ? views.userInfo.imageUrls[0]
                  : "https://www.w3schools.com/w3images/avatar2.png"}
                  alt=""
                  width={20}
                  height={20}
                />
          <p>{newProfileViews?.length} {' '}new People viewed your profile</p>
        </div>}
        {newFriendRequests?.length !== 0  &&<div className="notification-item">
        {friendRequestsInfo.map(({ userId, userInfo }) => (
          <Link href={`/dashboard/viewProfile/${userId}`}  key={userId}>
          <div key={userId} className="notification-item flex">
            <Image
              className="rounded-full h-8 w-8 border border-2  border-[#FF2271]"
              src={userInfo?.imageUrls && userInfo?.imageUrls[0]?.startsWith("https")
                ? userInfo.imageUrls[0]
                : "https://www.w3schools.com/w3images/avatar2.png"}
              alt=""
              width={20}
              height={20}
            />
            <p className='ms-1'>{userInfo?.userName ? userInfo.userName :userInfo.name} sent you a Friend request</p>
          </div>
          </Link>
        ))}

        </div>}
      </div>
    </div>
  );
};

export default NotificationPopup;
