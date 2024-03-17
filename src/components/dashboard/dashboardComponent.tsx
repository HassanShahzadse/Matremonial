"use client";
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Image from "next/image";
import Soulmate from "/public/icons/LOGO-soulmate.png";
import useDashboardEffects from "@/utils/hooks/dashboardEffects";
import Link from "next/link";

export default function DashboardComponent() {
  const [filters, setFilters] = useState<any>({
    locationFilter: null,
    ageRangeFilter: 0,
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
        <div className="container mx-auto flex flex-col bg-[#ffff] justify-center items-center md:mt-40 xl:mt-32  mt-32 text-center">
          <Image
            className="text-center"
            src={Soulmate}
            alt=""
            width={120}
            height={120}
          />
          <h2 className="text-center text-2xl font-bold">Find Your Soulmate</h2>
          <p className="text-center">Find Your Perfect Match</p>
        </div>
        <div className="bg-[#ffff] mt-10 font-serif  mb-12">
          <div className="card-body mt-5 p-2">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 mx-5 gap-7 ">
              {filterCards.map((card) => (
                <Link href={`/dashboard/viewProfile/${card.id}`} key={card.id}>
                <div
                  key={card.id}
                  className=" bg-[#ffff] w-full"
                >
                  <div className="flex flex-col space-x-5 shadow-md rounded-md text-center hover:scale-105 duration-300">
                    <div className=" ">
                      <Image
                        width={200}
                        height={140}
                        src={card.image}
                        alt="My Image"
                        className="rounded h-36"
                        style={{ objectFit: "cover", width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between  w-full">
                    <div className="flex flex-column ">
                      <h2 className="text-[#0e0c0f]  font-black mb-2">
                        {card.name}
                      </h2>
                    </div>
                    <span className="text-xs">{card.age}</span>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
      <div className="bg-[#FD307A] h-[5vh] fixed left-0 w-full bottom-0 z-10 "></div>
    </>
  );
}

