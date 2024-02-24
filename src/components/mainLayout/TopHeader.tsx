import React, { useState } from "react";
import Image from "next/image";
import Message from "/public/icons/message.png";
import Woman from "/public/member3.png";
import Filter from "/public/icons/filter.png";
import Batch from "/public/icons/batch.png";
import Soulmate from "/public/icons/LOGO-soulmate.png";
import SearchLove from "/public/icons/search-love.png";
import Link from "next/link";

const TopHeader = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  function handleFilterOpen({ filterOpen }: { filterOpen: any }) {
    setFilterOpen(filterOpen != filterOpen);
    alert("Filter");
  }
  
  return (
    <>
      <div className="flex bg-[#FD307A] fixed left-0 w-full top-0 h-[10vh] items-center z-10 justify-between px-5">
        <div className="search flex sm:space-x-28 items-center justify-center relative">
          <div>
            <p
              className="text-2xl text-white cursor-pointer"
              onClick={handleFilterOpen}
            >
              ☰
            </p>
          </div>
          <div className="flex space-x-2">
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
          <Link href="/dashboard/messages">
            <div className="icon">
              <Image
                className=""
                src={Message}
                alt="Message"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <div className="icon">
            <Image
              className=""
              src={Filter}
              alt="Message"
              width={30}
              height={30}
            />
          </div>
          <Link href="/dashboard/subscription">
            <div className="icon">
              <Image
                className=""
                src={Batch}
                alt="Message"
                width={30}
                height={30}
              />
            </div>
          </Link>

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
  );
};

export default TopHeader;
