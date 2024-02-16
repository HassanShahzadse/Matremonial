import React from 'react'
import Image from 'next/image';
import Message from "/public/Icons/message.png";
import Woman from "/public/member3.png";
import Filter from "/public/Icons/filter.png";
import Batch from "/public/Icons/batch.png";
import Soulmate from "/public/Icons/LOGO-soulmate.png";
import SearchLove from "/public/Icons/search-love.png";
const TopHeader = () => {
    return (
        <>
            <div className="flex bg-[#FD307A] fixed left-0 w-full top-0 h-[10vh] items-center z-10 justify-between px-5">
                <div className="search flex sm:space-x-28 items-center justify-center relative">
                    <div>
                        <p className="text-2xl text-white">☰</p>
                    </div>
                    <div className="flex space-x-2">
                        {/* <button className="text-[#F10086] rounded-full bg-white active:scale-95 font-semibold p-3 px-3   ">
          <FaSearch />
        </button> */}
                        <div className="icon">
                            <Image
                                className=""
                                src={SearchLove}
                                alt="Message"
                                width={30}
                                height={30}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-[20vw] p-1 rounded-full focus:outline-0 border-t-2  border-b-2 border-s-2 border-gray-500 "
                        />
                    </div>
                </div>
                <div className="right-side flex space-x-5 items-center">
                    <div className="icon">
                        <Image
                            className=""
                            src={Message}
                            alt="Message"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="icon">
                        <Image
                            className=""
                            src={Batch}
                            alt="Message"
                            width={30}
                            height={30}
                        />
                    </div>

                    <div className=" flex-col py-2 items-center">
                        <Image
                            className="rounded-full"
                            src={Woman}
                            alt=""
                            width={40}
                            height={40}
                        />
                        <h3 className="font-semibold text-sm text-white">Mahanor</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader