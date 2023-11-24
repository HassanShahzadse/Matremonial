// components/PersonCard.tsx
import React from 'react';
import Image from 'next/image';
import { Card } from "flowbite-react";
import PersonCardProps from './../../../types/Home/PersonCardProps';
const PersonCard: React.FC<PersonCardProps> = ({ para,name, role, imageUrl }) => (
  <Card className="max-w-sm bg-[#ed147d]">
    <div className="flex flex-col items-center  pb-10">
      <Image
        alt={`${name} image`}
        height="96"
        src={imageUrl}
        width="96"
        className="mb-3 rounded-full shadow-lg"
      />
      <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {para}
      </p>
      <h1>
        {name}
      </h1>

      <span className="text-sm text-gray-500 dark:text-gray-400">
        {role}
      </span>
    </div>
  </Card>
);
export default PersonCard;
