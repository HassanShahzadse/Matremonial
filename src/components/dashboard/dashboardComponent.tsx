"use client";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Image from "next/image";
import Soulmate from "/public/icons/LOGO-soulmate.png";
import useDashboardEffects from "@/utils/hooks/dashboardEffects";

export default function DashboardComponent() {
  const [filters, setFilters] = useState<any>({
    locationFilter: null,
    ageRangeFilter: [18, 30],
    genderFilter: null,
    professionFilter: null
  });
  const [searchText, setSearchText] = useState(""); 
  const [show, setShow] = useState(false);


  const { userCards, filterCards } = useDashboardEffects(filters,searchText);
  const updateFilters = (newFilters:any) => {
    setFilters({...filters, ...newFilters});
  };

  return (
    <>
      <Layout show={show} setShow={setShow} updateFilters={updateFilters} filters={filters} searchText={searchText} setSearchText={setSearchText}>
        <div className="container mx-auto flex flex-col justify-center items-center mt-16 text-center">
          <Image
            className="text-center"
            src={Soulmate}
            alt=""
            width={80}
            height={80}
          />
          <h2 className="text-center text-2xl font-bold">Find Your Soulmate</h2>
          <p className="text-center">Find Your Perfect Match</p>
        </div>
        <div className="bg-[#ffff] mt-10 font-serif">
          <div className="card-body mt-5 p-2">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 mx-5 gap-7 ">
              {filterCards.map((card) => (
                <div
                  key={card.id}
                  className=" border  border-gray-300 bg-[#ffff] "
                >
                  <div className="flex flex-col space-x-5 shadow-md rounded-md text-center hover:scale-105 duration-300">
                    <div className=" ">
                      <Image
                        width={200}
                        height={140}
                        src={card.image}
                        alt="My Image"
                        className="rounded h-36"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="text-start p-2 ">
                    <div className="flex justify-between">
                      <h2 className="font-semibold text-gray-400 mb-2">
                        {card.name}
                      </h2>
                      <p>22 year old</p>
                    </div>
                    <span>{card.age}</span>
                    <p className="text-sm my-1">{card.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 "></div>
    </>
  );
}

