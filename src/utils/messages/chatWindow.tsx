import React from 'react';
import Image from 'next/image';
import Woman from '/public/member3.png';

export const ChatWindow: React.FC<any> = ({ selectedChat}) => {
  if (!selectedChat || !selectedChat.userInfo) {
    // Handle the case where selectedChat or userInfo is null
    return null; // or render a loading state or an error message
  }
  const { userId,userInfo, chats } = selectedChat;
  console.log("------------------------------------------",selectedChat)
  const sortedChats = chats.slice().sort((a:any, b:any) => a.timestamp.seconds - b.timestamp.seconds);
  return (
    <>
      <div className="flex-1 col-span-2 flex">
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-white">
          {/* Render user information */}
          <div className="mb-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full">
                <Image width={100} height={100} src={userInfo?.imageUrls?.[0] || Woman} alt={userInfo?.username || 'User'} />
              </div>
              <div className="ml-3">
                <div className="font-semibold">{userInfo?.username}</div>
                {/* Additional user information can be rendered here */}
              </div>
            </div>
          </div>

          {/* Render messages */}
          {sortedChats.map((message:any) => (
            <div key={message.timestamp.seconds} className={message.sender === userId ? 'mb-4 flex items-end' : 'mb-4 flex items-start'}>
              <div className="ml-3">
                <div className="font-semibold">{message.sender === userId ? 'You' : userInfo.username}</div>
                <div className={`text-white p-5 rounded-lg ${message.sender === userId ? 'bg-[#6fcf97]' : 'bg-[#f10086]'}`}>
                  {message.text}
                </div>
              </div>
              {message.sender !== userId && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full ml-2">
                  <Image width={100} height={100} src={userInfo?.imageUrls?.[0] || Woman} alt={userInfo?.username || 'User'} />
                </div>
              )}
            </div>
          ))}


          {/* Input area for sending messages */}
          <div className="bg-white p-4 lg:fixed bottom-0 lg:w-[50%] grid grid-cols-3">
            <input type="text" placeholder="Type a message" className="col-span-2 border rounded-l-md p-2 outline-none" />
            <button className="col-span-1 bg-[#f10086] text-white rounded-r-md p-2">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};
