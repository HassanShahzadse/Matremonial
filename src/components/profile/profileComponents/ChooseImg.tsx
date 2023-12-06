import React from 'react'
import Image from "next/image";
import Man from "/public/member2.png";

    const preferencesData: string[] = [
      'Girl',
      'From 21 to 30',
      'Frinidship',
      'Frinidship',
      // Add more preferences as needed
    ];

export const ChooseImg = () => {
  return (
    <>
      <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 gap-6 mt-28  bg-gray-100">
            <div className="sm:col-span-2 p-5 shadow-md bg-white rounded-md">
              <div className="flex">
                <div>
                  <Image
                    src={Man}
                    alt=""
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>

                <div className="ml-7 mt-6">
                  <h1 className="text-xl">Change Profile Picture</h1>
                  <label className="flex items-center justify-center w-28 mt-5 p-2 rounded-lg shadow-md cursor-pointer bg-green-300 hover:bg-[#fb1086] hover:text-white">
                    <span className="text-base leading-normal">
                      Select a file
                    </span>
                    <input type="file" className="hidden" />
                  </label>
                  <button className="w-28 mt-5 p-2 rounded-lg shadow-md cursor-pointer bg-green-300 hover:bg-[#fb1086] hover:text-white">
                    Upload
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="shadow-md rounded-md bg-white">
              <div className="msg leading-10 p-4">
                <h1>looking for</h1>
                <span className="bg-[#fb1086] text-white p-2 rounded-md">
                  Girl
                </span>
                <br />
                <span className="bg-[#fb1086] text-white p-2 rounded-md">
                  From 21 to 30{" "}
                </span>
                <span className="bg-[#fb1086] text-white p-2 rounded-md">
                  Frinidship
                </span>
                <br />
                <span className="bg-[#fb1086] text-white p-2 rounded-md">
                  Frinidship
                </span>
              </div>
            </div> */}


    <div className="shadow-md rounded-md bg-white">
      <div className="leading-10 p-4">
        <h1 className='text-xl'>looking for</h1>
        {preferencesData.map((preference, index) => (
          <span
            key={index}
            className="bg-[#fb1086] text-white p-2 rounded-md"
          >
            {preference}
            <br />
          </span>
        ))}
      </div>
    </div>

          </div>

    </>
  )
}
