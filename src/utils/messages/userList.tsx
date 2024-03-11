import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllChats } from "@/sharedService/users/chat";
import { fetchUserInfoFromFirebase } from "@/sharedService/users/user";

export const UserList = ({
  // onCardClick,
}: {
  // onCardClick: (chat: any) => void;
}) => {
  const [filteredChats, setFilteredChats] = useState<any>([]);
  const fetchData = async () => {
    try {
      const chatData: any = await getAllChats();
      const localuser: any = localStorage.getItem("user");
      const user = JSON.parse(localuser);
      const filteredData = chatData.filter(
        (chat: { sender: any; receiver: any }) =>
          chat.sender === user.id || chat.receiver === user.id
      );
      const combinedRecords: any = {};
      filteredData.forEach((chat: any) => {
        const otherUserId =
          chat.sender === user.id ? chat.receiver : chat.sender;
        if (combinedRecords[otherUserId]) {
          combinedRecords[otherUserId].push(chat);
        } else {
          combinedRecords[otherUserId] = [chat];
        }
      });

      // Check if the userId from props is not found in existing chats
      if (localuser.id && !combinedRecords[localuser.id]) {
        const newChatData = await fetchUserInfoFromFirebase(localuser.id);
        if (newChatData) {
          combinedRecords[localuser.id] = [];
        }
      }

      const usersArray = Object.keys(combinedRecords);
      const usersPromises = usersArray.map(async (userId) => {
        const userInfo = await fetchUserInfoFromFirebase(userId);
        return {
          userId,
          userInfo,
          chats: combinedRecords[userId],
        };
      });

      const usersData: any = await Promise.all(usersPromises);
      // const sortedUsersData = sortUsersData(usersData, userId);

      // setSelectedChat(sortedUsersData[0]);
      // setSelectedUser(sortedUsersData[0].userInfo);
      console.log(usersData)
      setFilteredChats(usersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white h-[90vh]">
      <div className="flex justify-between p-4 py-6">
        <div className="isActiveChatTab">All Chats</div>
        <div className="">Read</div>
        <div className="">Unread</div>
      </div>
      <hr />
      {filteredChats.map((user: any) => {
        // Sort messages by timestamp in descending order to get the latest message first
        const sortedChats = [...user.chats].sort(
          (a: any, b: any) => b.timestamp.seconds - a.timestamp.seconds
        );

        // Get the latest message
        const latestMessage = sortedChats.length > 0 ? sortedChats[0] : null;

        return (
          <div
            key={user.userId}
            className="card1 rounded-full active:bg-green-200 cursor-pointer  bg-white my-3 shadow-md p-3"
            // onClick={() => onCardClick(user)}
          >
            <div className="flex space-x-10">
              <div className="img">
                <Image
                  src={
                    user?.userInfo?.imageUrls &&
                    user?.userInfo?.imageUrls[0]?.startsWith("https")
                      ? user?.userInfo?.imageUrls[0]
                      : "https://www.w3schools.com/w3images/avatar2.png"
                  }
                  alt="My Image"
                  height={60}
                  width={60}
                  className="rounded-full"
                />
              </div>

              <div>
                <h2 className="font-semibold text-gray-400 mb-2">
                  {user?.userInfo?.username}
                </h2>
                {latestMessage && (
                  <>
                    <p className="text-sm my-1">{latestMessage.text}</p>
                    {/* <div className="flex divide-x-2 divide-black mt-4">
                      <div className="mr-3">
                        {new Date(
                          latestMessage.timestamp.seconds * 1000
                        ).toLocaleDateString()}
                      </div>
                      <div className="px-3">
                        {new Date(
                          latestMessage.timestamp.seconds * 1000
                        ).toLocaleTimeString()}
                      </div>
                    </div> */}
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
