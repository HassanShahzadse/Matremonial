import React from "react";
import Image from "next/image";

export const UserList = ({
  chat,
  onCardClick,
}: {
  chat: any;
  onCardClick: (chat: any) => void;
}) => {
  return (
    <>
      {/* <div className="flex justify-between py-3">
        <div className="">All Chats</div>
        <div className="">Read</div>
        <div className="">Unread</div>
      </div> */}
      <hr />
      {chat.map((user: any) => {
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
            onClick={() => onCardClick(user)}
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
    </>
  );
};
