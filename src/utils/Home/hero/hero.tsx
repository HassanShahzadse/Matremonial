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
const cardsData = [
  {
    imageSrc: "/member1.png",
    altText: "My Image",
    name: "Maisha Reid",
    role: "Marketing",
    description:
      "Quisque sit amet ante vehicula risus pharetra sagittis ac sit amet justo. Duis eu sapien nisl condimentum vitae.",
  },
  {
    imageSrc: "/member2.png",
    altText: "My Image",
    name: "Carter Bridges",
    role: "Brand Manager",
    description:
      "Quisque sit amet ante vehicula risus pharetra sagittis ac sit amet justo. Duis eu sapien nisl Quisque sit",
  },
  {
    imageSrc: "/member3.png",
    altText: "My Image",
    name: "Bella Williams",
    role: "General Manager",
    description:
      "Pellentesque aliquet mi in leo tempus fringilla. Donec convallis libero risus, non varius augue condimentum vitae.",
  },
  {
    imageSrc: "/member4.png",
    altText: "My Image",
    name: "George Andone",
    role: "Dating Expert",
    description:
      "Morbi tortor purus, efficitur in lobortis vitae, varius nec turpis. Aliquam eu pellentesque dolor, nec faucibus nisl.",
  },
];

function Hero() {
  return (
    <>
      <div className={styles.heroBanner}></div>

      <div className="mx-auto relative ">
        <div className="text-center pe-4 ps-4 lg:mt-[22rem]  mt-[10rem]">
          <h1 className="text-[#FFFFFF]  lg:text-6xl sm:text-5xl  text-4xl  font-bold   2xl:ps-[24rem] 2xl:pe-[24rem]   xl:ps-[18rem] lg:ps-[8rem]  xl:pe-[18rem] lg:pe-[8rem]   ">
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

      <div className="mx-auto relative   ">
        <div className="grid lg:grid-cols-2  grid-cols-1">
          <Image
            src="/Video-Banner.jpg"
            alt="My Image"
            width={1020}
            height={1020}
          />
          <div className="ps-[10rem] pe-[10rem]  pt-14 pb-14 lg:pt-0 lg:pb-0 flex flex-col justify-center items-center">
            <div className="text-center  justify-center items-center flex flex-col">
              <h1 className="text-[#1F2F49]  font-semibold text-4xl ">
                Explore Dating Advice
              </h1>
              <p className="text-[#1F2F49] font-bold mt-2">
                Be calm. Be kind. Be yourself.
              </p>
              <div className="ps-[3rem] lg:mt-1 xl:mt-5 mt-5 mb-5">
                <p className="mt-6 rounded-t-[28px] rounded-r-[28px] bg-[#ffff] pt-4 ps-4 pb-4 pe-8 text-start text-sm text-shadow   font-bold       text-[#676770]">
                  Hello, I’m Sarah and I’m the first Dating AI for Qiupid. What
                  are your preferences?
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Button
                  children="Men"
                  css="bg-[#ED147D] sm:pe-52 sm:ps-52 pe-44 ps-44 shadow-[#ED147D]  xl:pt-3 xl:pb-3 pt-3 pb-3  lg:pt-2 lg:pb-2 text-[#fff] rounded-[30px] text-[13px] font-bold "
                />
                <Button
                  children="Men"
                  css="bg-[#ED147D] sm:pe-52 sm:ps-52 pe-44 ps-44 mt-5 mb-5  shadow-[#ED147D]

                  xl:pt-3 xl:pb-3 lg:t-2 lg:pb-2 pt-3 pb-3 text-[#fff] rounded-[30px] text-[13px] font-bold "
                />
                <Button
                  children="Men"
                  css="bg-[#ED147D] sm:pe-52 sm:ps-52  pe-44 ps-44 shadow-[#ED147D]

                  xl:pt-3 xl:pb-3 lg:pt-2 lg:pb-2    pt-3 pb-3 text-[#fff] rounded-[30px] text-[13px] font-bold "
                />
              </div>
            </div>
          </div>
        </div>
      </div>



   <div className="bg-[#ffffff]">
      <div className="  container mx-auto relative pt-24 pb-24   text-center bg-[#ffffff]">
        <h1 className="text-[#ed147d] font-bold">Our Groups</h1>
        <p className="text-[#1F2F49] text-4xl font-semibold mb-10">
          Start your Search Here
        </p>
        <div className="flex  md:flex-row flex-col / justify-center  ">
          {cardsData.map((card, index) => (
            <div className="max-w-fit       bg-white ">
              <Image
                src={card.imageSrc}
                alt={card.altText}
                width={750}
                height={750}
                className="md:p-4 mt-2"
              />

              <div className="pe-7 ps-7 pt-5 pb-5">
                <h1 className="mt-5 text-[#222] font-semibold text-xl">
                  {card.name}
                </h1>
                <h2 className="mt-2 text-[#888] ">{card.role}</h2>
                <p className="mt-2 text-[#888] text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Hero;
