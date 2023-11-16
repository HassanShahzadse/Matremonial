"use client"
import { useState } from "react";
import Layout from "./layout";
import Image from 'next/image'
type CardProps = {
  title: string;
  content: string;
  imageUrl: string;
};
const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4 mt-10 flex items-center">
    <Image width={500} height={500} src={imageUrl} alt={title} className="card-image object-cover rounded-full" />
    <div className="ml-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);


export default function DashboardComponent() {
  const [show, setShow] = useState(false);
  const cardData = [
    { title: 'Ahmed', content: 'Good to work', imageUrl: "/img1.jpg" },
    { title: 'Muneeb', content: 'Looking Good', imageUrl: "/img2.jpeg" },
    { title: 'Aslam', content: 'Having good business', imageUrl: "/img1.jpg" },
  ];
  return (
    <Layout show={show} setShow={setShow}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))};
      </div>
    </Layout>
  );
}