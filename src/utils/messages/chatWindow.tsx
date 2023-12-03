import React from 'react'
import Image from "next/image";
import Woman from "/public/member3.png";

export const ChatWindow = () => {
  return (
    <>
    <div className="flex-1 col-span-2 flex ">
            <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-white">
             
                <div className="mb-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full ">
                          <Image src={Woman} alt=""/>
                          </div>  
                        <div className="ml-3">
                            <div className="font-semibold">User 1</div>
                            <div className="text-white p-5 bg-[#f10086] rounded-lg">Hello, how are you?</div>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-end justify-end">
                        <div className="ml-3">
                            <div className="font-semibold">You</div>
                            <div className="text-white p-5 bg-[#6fcf97] rounded-lg">I'm good, thank you!</div>
                        </div>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full ml-2 ">
                          <Image src={Woman} alt=""/>
                 </div> 
                   </div>
                </div>
        
            <div className="bg-white p-4 lg:fixed bottom-0 lg:w-[50%] grid grid-cols-3">
            <input type="text" placeholder="Type a message" className="col-span-2 border rounded-l-md p-2 outline-none"/>
                <button className="col-span-1 bg-[#f10086] text-white rounded-r-md p-2">Send</button>
                  </div>
                    </div>
                </div>
    </>
  )
}
