import React from 'react'
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <>
       <div className="search flex my-5">
            <button className="bg-[#F10086]  active:scale-95 font-semibold p-3  rounded ">
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="search or start new chat"
              className="w-[100%] p-2 rounded-md border bg-gray-100"
            />
          </div>
    </>
  )
}
