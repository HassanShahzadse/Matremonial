import React, { useEffect, useState } from "react";
import Image from "next/image";

export const UserList = ({
  onCardClick,
  filteredChats
}: {
  onCardClick: (chat: any) => void;
  filteredChats: any;
}) => {
  const [storedChats, setStoredChats] = useState<any[]>([]);
  const [currentTab, setCurrentTab] = useState<string>("all");

  useEffect(() => {
    const savedChats = localStorage.getItem("userChats");
    if (savedChats) {
      setStoredChats(JSON.parse(savedChats));
    }
  }, []);

  useEffect(() => {
    const updatedChats = filteredChats.map((filteredChat: any) => {
      const storedChat = storedChats.find(
        (chat) => chat.userId === filteredChat.userId
      );

      if (storedChat) {
        const unreadMessagesExist = filteredChat.chats.some(
          (chat: any) =>
            !storedChat.chats.some(
              (storedChat: any) =>
                storedChat.timestamp.seconds === chat.timestamp.seconds
            )
        );

        return {
          ...filteredChat,
          read: !unreadMessagesExist
        };
      } else {
        return {
          ...filteredChat,
          read: false
        };
      }
    });

    setStoredChats(updatedChats);
  }, [filteredChats]);

  const getFilteredChats = () => {
    if (currentTab === "read") {
      return storedChats.filter((chat) => chat.read);
    } else if (currentTab === "unread") {
      return storedChats.filter((chat) => !chat.read);
    } else {
      return storedChats;
    }
  };

  const handleTabSwitch = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleCardClick = (user: any) => {
    const updatedChats = storedChats.map((chat) =>
      chat.userId === user.userId ? { ...chat, read: true } : chat
    );
    setStoredChats(updatedChats);
    localStorage.setItem("userChats", JSON.stringify(updatedChats));
    onCardClick(user);
  };

  return (
    <div className="bg-white h-[90vh] xl:w-[450px]  lg:w-[400px]   border-right-gray">
      <div className="flex flex-col md:flex-row justify-between p-4 py-6">
        <div
          className={` ${
            currentTab === "all" && "isActiveChatTab"
          }`}
          onClick={() => handleTabSwitch("all")}
        >
          All Chats
        </div>
        <div
          className={` ${
            currentTab === "read" && "isActiveChatTab"
          }`}
          onClick={() => handleTabSwitch("read")}
        >
          Read
        </div>
        <div
          className={` ${
            currentTab === "unread" && "isActiveChatTab"
          }`}
          onClick={() => handleTabSwitch("unread")}
        >
          Unread
        </div>
      </div>
      <hr />
      {getFilteredChats().map((user: any) => {
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
            onClick={() => handleCardClick(user)}
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
