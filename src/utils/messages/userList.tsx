import React, { useEffect, useState } from "react";
import Image from "next/image";

export const UserList = ({
  onCardClick,
  filteredChats
}: {
  onCardClick: (chat: any) => void;
  filteredChats:any;
}) => {

  return (
    <div className="bg-white h-[90vh] border-right-gray">
      <div className="flex flex-col md:flex-row justify-between p-4 py-6">
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
            className="card1 mx-2 rounded-full active:bg-green-200 cursor-pointer  bg-white my-3 shadow-md p-0 md:py-3 md:px-2 border-black"
            onClick={() => onCardClick(user)}
          >
            <div className="flex">
              <div className="img me-md-3">
                <Image
                  src={
                    user?.userInfo?.imageUrls &&
                    user?.userInfo?.imageUrls[0]?.startsWith("https")
                      ? user?.userInfo?.imageUrls[0]
                      : "https://www.w3schools.com/w3images/avatar2.png"
                  }
                  alt="My Image"
                  height={40}
                  width={40}
                  className="rounded-full-image"
                />
              </div>

              <div>
                <h2 className="font-semibold text-gray-400 hidden md:block">
                  {user?.userInfo?.userName}
                </h2>
                {latestMessage && (
                  <>
                    <p className="text-sm my-1 hidden md:block">{latestMessage.text}</p>
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
