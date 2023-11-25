// components/PersonCard.tsx
import React from 'react';
import Image from 'next/image';
import { Card } from "flowbite-react";
import PersonCardProps from './../../../types/Home/PersonCardProps';
const PersonCard: React.FC<PersonCardProps> = ({ para,name, role, imageUrl }) => (
  <Card className="min-w-4xl bg-[#ed147d] p-5 ms-4 me-4  border-[#f9acd1] 2xl:min-h-[520px] xl:min-h-[500px] sm:min-h-[480px]  lg:min-h-[540px] md:min-h-[520px] ">
    <div className="flex flex-col items-center  pb-10">
      <Image
        alt={`${name} image`}
        height="96"
        src={imageUrl}
        width="96"
        className="mb-3 rounded-full shadow-lg"
      />
      <p className="mb-1 mt-7 text-2xl font-medium text-[#ffffff] dark:text-white">
        {para}
      </p>
      <h1 className='mt-8 text-[#ffffff] font-bold'>
        {name}
      </h1>

      <span className="text-sm  mt-1  text-[#f9acd1]">
        {role}
      </span>
    </div>
  </Card>
);
export default PersonCard;
