import React from 'react'
import Man from "/public/member2.png";
import Image from "next/image";
export const PhotosList = () => {
  return (
    <>
      <div className="photos bg-white shadow-md rounded-md p-7">
            <h1 className="text-xl font-semibold mb-5 ">Photos</h1>
            <div className="grid lg:grid-cols-9 md:grid-cols-5 gap-2 sm:grid-cols-5 xsm:grid-cols-3 ">
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="xsm:space-y-3">
                <Image
                  className="rounded-md"
                  src={Man}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <label className="bg-[#fb1086]  xsm:w-[90px] flex items-center rounded-md justify-center ">
                <span className="leading-normal text-4xl text-white ">+</span>
                <input type="file" className="hidden" />
              </label>
            </div>
        </div>
    </>
  )
}
