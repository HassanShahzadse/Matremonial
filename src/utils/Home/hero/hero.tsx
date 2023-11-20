import React from "react";
import styles from "./hero.module.css";
import Button from "@/utils/shared/button";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
const datingSiteFeatures = [
  {
    title: "Awesome Community",
    description: "Caramels pie cake pie marshmallow soufflé donut biscuit.",
    image: "/community.jpg", // Replace with the actual path to your image
  },
  {
    title: "Million Members",
    description: "Caramels pie cake pie marshmallow soufflé donut biscuit.",
    image: "/members.jpg", // Replace with the actual path to your image
  },
  {
    title: "Private Groups",
    description: "Caramels pie cake pie marshmallow soufflé donut biscuit.",
    image: "/groups.jpg", // Replace with the actual path to your image
  },
  {
    title: "Friendly Forums",
    description: "Caramels pie cake pie marshmallow soufflé donut biscuit.",
    image: "/forums.jpg", // Replace with the actual path to your image
  },
];

function Hero() {
  return (
    <>
      <div className={styles.heroBanner}></div>

      <div className="mx-auto relative ">
        <div className="text-center pe-4 ps-4 lg:mt-[22rem]  mt-[10rem]">
          <h1 className="text-[#FFFFFF]  lg:text-6xl sm:text-5xl  text-4xl  font-bold  xl:ps-[18rem] lg:ps-[8rem]  xl:pe-[18rem] lg:pe-[8rem]   ">
            Dating for Grown Ups Make a Real Connection
          </h1>
          <p className="text-[#FFFFFF] sm:mt-9 mt-6 text-2xl">
            Start meeting singles who are ready to commit today.
          </p>
          <Button
            children="Get Started"
            css="bg-[#ED147D] pe-7 ps-7   pt-2 pb-2 text-[#fff] rounded-[30px] text-[16px] font-bold mt-6 sm:mt-8 mb-2"
          />
        </div>
        <div className="flex pt-10 pb-10  lg:pt-0 lg:pb-0   lg:flex-row   flex-col  pe-16 ps-16  lg:justify-between  items-center justify-center lg:mt-[3.25rem] mt-12  bg-[#ED147D] ">
          <Image
            src="/Explore-Image.png"
            alt="My Image"
            width={250}
            height={250}
          />
          <div className="text-center ">
            <h1 className="text-[#ffff] text-3xl  font-bold">
              Start your love story
            </h1>
            <p className="text-[#FFFFFFBD] mt-1">
              Qiupid: find love with our dating site!
            </p>
          </div>
          <Button
            children="Register Now"
            css="bg-[#FFF] pe-7 ps-7   pt-2 pb-2 text-[#ED147D] rounded-[30px] text-[16px] font-bold mt-6 sm:mt-8 mb-2"
          />
        </div>

        <div className="bg-[#fff] text-center md:pt-20 lg:pb-[5rem]  pt-[2rem] pb-[2rem]">
          <h1 className="text-[#1F2F49]  text-5xl font-semibold  ">
            The No.1 Trusted Dating Site
          </h1>
          <div className="grid lg:grid-cols-4   md:grid-cols-2 grid-cols-1    ">
            {datingSiteFeatures.map((feature, index) => (
              <div key={index} className=" mt-14">
                <h2 className="text-[#1F2F49] font-semibold">
                  {feature.title}
                </h2>
                <p className="mt-3 lg:ps-10 lg:pe-10 text-[#676770]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto relative">
        <div className="grid md:grid-cols-2  grid-cols-1">
          <Image
            src="/Video-Banner.jpg"
            alt="My Image"
            width={750}
            height={750}
          />
          <div className="text-center / justify-center flex flex-col">
            <h1 className="text-[#1F2F49]  font-semibold text-3xl ">Explore Dating Advice</h1>
            <p className="text-[#1F2F49] font-semibold mt-1">Be calm. Be kind. Be yourself.</p>
            <p className="mt-6 ">
              Hello, I’m Sarah and I’m the first Dating AI for Qiupid. What are
              your preferences?
            </p>
           <div className="flex flex-col items-center"> 
            <Button
              children="Men"
              css="bg-[#ED147D] pe-52 ps-52   pt-3 pb-3 text-[#fff] rounded-[30px] text-[13px] font-bold "
            />
            <Button
              children="Men"
              css="bg-[#ED147D] pe-52 ps-52 mt-5 mb-5   pt-3 pb-3 text-[#fff] rounded-[30px] text-[13px] font-bold "
            />
            <Button
              children="Men"
              css="bg-[#ED147D] pe-52 ps-52    pt-3 pb-3 text-[#fff] rounded-[30px] text-[13px] font-bold "
            />
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
