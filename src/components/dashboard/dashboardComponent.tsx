"use client"
import { useState } from "react";
import Layout from "../mainLayout/layout";
import Image from 'next/image'
import Button from "@/utils/shared/button";
import Modal from "@/utils/profileModal/profileModal";
import fetchData  from "@/sharedService/dashboardService/page";
type CardProps = {
  title: string;
  content: string;
  imageUrl: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card: React.FC<CardProps> = ({ title, content, imageUrl,setIsModalOpen }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4 mt-10 flex items-center">
    <Image width={500} height={500} src={imageUrl} alt={title} className="card-image rounded" />
    <div className="ml-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <Button children={"view Profile"} css="bg-pink-500 p-4 rounded-md shadow-md mb-4 mt-10 flex items-center"
       onClick={() => {
        setIsModalOpen(true);
      }}></Button>
    </div>
    
  </div>
);


export default function DashboardComponent() {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardData = [
    { title: 'Ahmed', content: 'Good to work', imageUrl: "/img1.jpg",setIsModalOpen },
    { title: 'Muneeb', content: 'Looking Good', imageUrl: "/img2.jpeg",setIsModalOpen },
    { title: 'Aslam', content: 'Having good business', imageUrl: "/img1.jpg",setIsModalOpen },
  ];

  const handleGoogleLogin = async () => {
    try {
      const userId = 'someUserId';

      let data = fetchData(userId);
    
      console.log('dashboard data', data);
     
    } catch (error) {
      console.error('dashboard data error:', error);
      
    }
  };
  return (
    <Layout show={show} setShow={setShow}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card isModalOpen={false} key={index} {...card} />
        ))};
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const userId = '1IW1JRGm3WSzErc6mPrT'; 
  const userData = await fetchData(userId);
  console.log('dashboard data', userData);
  return {
    props: {
      userData,
    },
  };
}