import React from "react";
import Image from "next/image";
import Woman from "/public/member3.png";

export const ChatWindow = () => {
  return (
    <>
      {/* <!-- Chat Window --> */}
      <div className="flex-1 flex flex-col h-full overflow-hidden ">
        {/* <!-- Chat Header --> */}
        <div className="flex items-center justify-between bg-[#FFDDEE] p-3 md:hidden sm:block">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
            <p className="text-lg font-semibold">Jasica</p>
          </div>
        </div>

        {/* <!-- Chat Messages --> */}

        <div className="flex-1 overflow-y-auto p-4 bg-white">
          {/* <!-- User 1 Message --> */}
          <div className="flex mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
            <div className="ml-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">Hello, how are you?</p>
            </div>
          </div>
          {/* <!-- User 2 Message --> */}
          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">good, thank you!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
          </div>
          {/* <!-- User 1 Message --> */}
          <div className="flex mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
            <div className="ml-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">Hello, how are you?</p>
            </div>
          </div>
          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">good, thank you!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
          </div>

          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">good, thank you!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
          </div>
          {/* <!-- Repeat for other messages --> */}
        </div>

        {/* <!-- Message Input --> */}
        <div className="bg-gray-200 p-3 flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 rounded border-none focus:outline-none"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>
    </>
  );
};
