// Import necessary libraries
import React, { useEffect, useState } from "react";
import { createMessage, getChatsByUserIds } from "@/sharedService/users/chat";
import EmojiSelector from "../EmojiSelector";

export const ChatWindow: React.FC<any> = ({ selectedChat, onSendMessage }) => {
  const [inputText, setInputText] = useState("");
  const [localUser, setLocalUser] = useState<any>([]);
  const [chatData, setChatData] = useState<any>([]);

  useEffect(() => {
    const localuser: any = localStorage.getItem("user");
    const user = JSON.parse(localuser);
    setLocalUser(user);
    setChatData(selectedChat?.chats)
    console.log(selectedChat)
  }, [selectedChat]);

  const handleKeyPress = async (e: any) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    await createMessage(selectedChat.userId, localUser.id, inputText);
    setInputText("");
  };

  if (!selectedChat || !selectedChat.userInfo) {
    return <div className="fs-1 fw-bold text-center">No chat to display</div>;
  }

  const { userId, userInfo } = selectedChat || { userId: null, userInfo: null };
  const sortedChats =
    chatData?.length >= 0
      ? chatData
          ?.slice()
          .sort((a: any, b: any) => a.timestamp.seconds - b.timestamp.seconds)
      : [];
  const isInputEmptyOrSpaces = inputText.trim() === "";
  
  return (
    <>
      <div className="flex-1 my-4 flex col-span-2 h-[75.5vh] ">
        <div className="flex-1 overflow-x-hidden overflow-y-auto  p-4 xsm:mb-20 xl:mb-16">
          {/* Render user information */}
          <div className="mb-4"></div>

          {/* Render messages */}
          {sortedChats?.map((message: any) => (
            <div
              key={message.timestamp.seconds}
              className={
                message.sender === userId
                  ? "mb-4 flex justify-start items-start"
                  : "mb-4 flex justify-end items-end "
              }
            >
              {message.sender === userId && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full ml-2"></div>
              )}
              <div className="ml-3">
                <div className="font-semibold">
                  {message.sender === userId ? userInfo.userName : "You"}
                </div>
                <div
                  className={`text-white p-5 rounded-lg ${
                    message.sender === userId ? "bg-[#f10086]" : "bg-[#6fcf97]"
                  }`}
                >
                  {message.text}
                </div>
                <div className="text-xs text-gray-500">  {new Date(message.timestamp.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
              {message.sender !== userId && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full ml-2"></div>
              )}
            </div>
          ))}

          {/* Input area for sending messages */}
        </div>
        <div className="p-4 xl:pe-[12rem] lg:pe-[16rem] m-8 mb-5 xsm:mb-6 pb-10 xsm:fixed bottom-0  xsm:w-[76vw] flex">
        <EmojiSelector setter={setInputText} />
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message"
            className="border w-full  rounded-full pl-4 p-2 outline-none mx-5"
          />
          {userId !== null && (
            <button
              onClick={handleSendMessage}
              className="bg-[#f10086] text-white rounded-full p-3"
              disabled={isInputEmptyOrSpaces}
            >
              Send
            </button>
          )}
        </div>
      </div>
    </>
  );
};
