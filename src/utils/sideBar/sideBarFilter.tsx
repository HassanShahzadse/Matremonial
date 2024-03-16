import { useState } from "react";

export default function SideBarFilter({ filters, updateFilters,setFilterVisible }:any) {
  if(!filters) setFilterVisible(false)
  if(!filters) return <h1>Nothing to display Here</h1>
  const { locationFilter, ageRangeFilter, genderFilter, professionFilter } = filters;
  const isGenderSelected = (gender: string) => genderFilter === gender;
  return (
    <>
      <div className="filter bg-white h-[90vh] mt-0 border-right-gray">
        <h1 className="py-10 ml-12 font-bold text-xl">Filters</h1>
        {/* Location */}
        <div className="ml-3 my-10">
          <label htmlFor="" className="font-semibold">
            Select Location
          </label>
          <br />
          <select
            className="w-40 h-6 rounded-sm border mt-3"
            value={locationFilter || ""}
            onChange={(e) => updateFilters({locationFilter: e.target.value})}
          >
            <option value="" disabled>
              Choose Location
            </option>
            <option value="Pakistan">Pakistan</option>
            <option value="New York">New York</option>
            <option value="England">England</option>
            <option value="UK">UK</option>
          </select>
        </div>
        {/* Age Range */}
        <div className="ml-3">
          <label htmlFor="" className="font-semibold">
            Choose Age
          </label>
          <input
            type="range"
            className="appearance-none w-[90%] h-6 rounded-lg bg-green-500"
            style={{
              /* Change the color to blue */
              WebkitAppearance: "none",
              height: "6px",
              borderRadius: "10px",
              background: "#F05F93",
              outline: "none",
              opacity: "0.7",
              transition: "opacity .2s",
            }}
            value={ageRangeFilter || 18}
            onChange={(e) => updateFilters({ageRangeFilter: parseInt(e.target.value)})}
          />
        </div>
        {/* Gender */}
        <div className="py-4 ml-3">
          <h3 className="font-semibold py-3">Looking for</h3>
          <button
            className={`border ml-3 rounded-lg px-3 ${isGenderSelected("Any") ? 'text-white bg-pink-500' : ''}`}
            onClick={() => updateFilters({ genderFilter: "Any" })}
          >
            Any 💑
          </button>
          <button
            className={`border ml-3 rounded-lg px-3 ${isGenderSelected("Male") ? 'text-white bg-pink-500' : ''}`}
            onClick={() => updateFilters({ genderFilter: "Male" })}
          >
            Male 🤵
          </button>
          <button
            className={`border ml-12 mt-2 rounded-lg px-3 ${isGenderSelected("Female") ? 'text-white bg-pink-500' : ''}`}
            onClick={() => updateFilters({ genderFilter: "Female" })}
          >
            Female 💃
          </button>
          {/* Profession */}
          <h3 className="font-semibold py-5">Profession</h3>
          <input
            type="text"
            className="border-2 w-44 rounded"
            value={professionFilter || ""}
            onChange={(e) => updateFilters({professionFilter: e.target.value})}
          />
          <button className="bg-[#F05F93] text-center ml-12 mt-8 px-5 text-white font-semibold rounded-lg">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
