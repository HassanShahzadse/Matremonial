import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Woman from '/public/member3.png';
import { createMessage, getChatsByUserIds } from '@/sharedService/users/chat';

export const ChatWindow: React.FC<any> = ({ selectedChat, onSendMessage }) => {
  const [inputText, setInputText] = useState('');
  const [localUser, setLocalUser] = useState<any>([]);
  const [chatData, setChatData] = useState<any>([]);
  useEffect(()=>{
  const localuser: any = localStorage.getItem('user');
  const user = JSON.parse(localuser);
  setLocalUser(user)
  fetchChats()
},[selectedChat])
const fetchChats = async() => {
  const chat:any = await getChatsByUserIds(selectedChat.userId, localUser.id);
  console.log(chat)
  setChatData(chat)
}
  if (!selectedChat || !selectedChat.userInfo) {
    // Handle the case where selectedChat or userInfo is null
    return null; // or render a loading state or an error message
  }

  const handleKeyPress = async(e:any) => {
     console.log("mehrab")


    if (e.key === 'Enter' && inputText.trim() !== '') {
      handleSendMessage();
    }
  };

  const handleSendMessage = async() => {
    await createMessage(selectedChat.userId, localUser.id, inputText);
    setInputText('');
    fetchChats()
  };

  const { userId, userInfo } = selectedChat || { userId: null, userInfo: null };
  const sortedChats = chatData.length >= 0 ? chatData?.slice().sort((a: any, b: any) => a.timestamp.seconds - b.timestamp.seconds) : [];
  return (
    <>
      <div className="flex-1 col-span-2 flex h-[74.5vh]">
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-white">
          {/* Render user information */}
          <div className="mb-4"></div>

          {/* Render messages */}
          {sortedChats?.map((message: any) => (
            <div key={message.timestamp.seconds} className={message.sender === userId ? 'mb-4 flex justify-start items-start' : 'mb-4 flex justify-end items-end'}>
              {message.sender === userId && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full ml-2">
                </div>
              )}
              <div className="ml-3">
                <div className="font-semibold">{message.sender === userId ? userInfo.username : 'You'}</div>
                <div className={`text-white p-5 rounded-lg ${message.sender === userId ? 'bg-[#f10086]' : 'bg-[#6fcf97]'}`}>
                  {message.text}
                </div>
              </div>
              {message.sender !== userId && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full ml-2">
               
                </div>
              )}
            </div>  
          ))}

          {/* Input area for sending messages */}
          <div className="bg-white p-4 -ml-4 lg:fixed bottom-0 lg:w-[58%] grid grid-cols-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="col-span-2 border rounded-l-md pl-4 p-2 outline-none"
            />
            {userId !== null && (
              <button onClick={handleSendMessage} className="col-span-1 bg-[#f10086] text-white rounded-r-md p-2">
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
