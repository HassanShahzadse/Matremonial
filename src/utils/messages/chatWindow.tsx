import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Woman from '/public/member3.png';
import { createMessage } from '@/sharedService/users/chat';

export const ChatWindow: React.FC<any> = ({ selectedChat, onSendMessage }) => {
  const [inputText, setInputText] = useState('');
  const [localUser, setLocalUser] = useState<any>([]);
useEffect(()=>{
  const localuser: any = localStorage.getItem('user');
  const user = JSON.parse(localuser);
  setLocalUser(user)
},[])
  if (!selectedChat || !selectedChat.userInfo) {
    // Handle the case where selectedChat or userInfo is null
    return null; // or render a loading state or an error message
  }

  const handleSendMessage = async() => {
    await createMessage(selectedChat.userId, localUser.id, inputText);
    setInputText('');
    onSendMessage();
  };

  const { userId, userInfo, chats } = selectedChat || { userId: null, userInfo: null, chats: [] };
  const sortedChats = chats.length >= 0 ? chats?.slice().sort((a: any, b: any) => a.timestamp.seconds - b.timestamp.seconds) : [];
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
                  <Image width={100} height={100} src={userInfo?.imageUrls?.[0] || Woman} alt={userInfo?.username || 'User'} />
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
                  <Image className='rounded-full' width={100} height={100} src={localUser?.imageUrls?.[0] || Woman} alt={localUser?.username || 'User'} />
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
