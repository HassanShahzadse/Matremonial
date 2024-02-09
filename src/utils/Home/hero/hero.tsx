"use client";
import React from "react";
import { useState } from "react";
import styles from "./hero.module.css";
import Button from "@/utils/shared/button";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
import Slider from "react-slick";
import { Card, Dropdown, Label } from "flowbite-react";
import PersonCard from "../personCard/personCard";
import { Navbar } from "flowbite-react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SlSocialTwitter } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
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
    id: 1,
    imageSrc: "/member1.png",
    altText: "My Image",
    name: "Maisha Reid",
    role: "Marketing",
    description:
      "Quisque sit amet ante vehicula risus pharetra sagittis ac sit amet justo. Duis eu sapien nisl condimentum vitae.",
  },
  {
    id: 2,
    imageSrc: "/member2.png",
    altText: "My Image",
    name: "Carter Bridges",
    role: "Brand Manager",
    description:
      "Quisque sit amet ante vehicula risus pharetra sagittis ac sit amet justo. Duis eu sapien nisl Quisque sit",
  },
  {
    id: 3,
    imageSrc: "/member3.png",
    altText: "My Image",
    name: "Bella Williams",
    role: "General Manager",
    description:
      "Pellentesque aliquet mi in leo tempus fringilla. Donec convallis libero risus, non varius augue condimentum vitae.",
  },
  {
    id: 4,
    imageSrc: "/member4.png",
    altText: "My Image",
    name: "George Andone",
    role: "Dating Expert",
    description:
      "Morbi tortor purus, efficitur in lobortis vitae, varius nec turpis. Aliquam eu pellentesque dolor, nec faucibus nisl.",
  },
];

const peopleData = [
  {
    id: 1,
    para: `"Love ac nunc laoreet, lobortis libero nec, semper velit sollicitudin nec lingula ut, aliquet volutpat eros"`,
    name: "Devon Larret",
    role: "FOUNDER, SOME COMPANY",
    imageUrl: "/avatar1.jpg",
  },
  {
    id: 2,
    para: `"Matrimonial et nim quam, viverra sit amet purus eget, tempus pulvinar sollicitudin enim ac justo commodo dapibus"`,
    name: "Jenna Smith",
    role: "FOUNDER, SOME COMPANY",
    imageUrl: "/avatar2.jpg",
  },
  {
    id: 3,
    para: `"Quis Love ipsum suspendisse ultrices gravida viverra maecenas accumsan lacus vel facilisis"`,
    name: "Devon Larret",
    role: "FOUNDER, SOME COMPANY",
    imageUrl: "/avatar3.jpg",
  },
  {
    id: 4,
    para: `"Vestibulum egestas fringilla hendrerit.Nam sodales nulla arcu, ac ecuismod elit tristique love"`,
    name: "Withney Austin",
    role: "FOUNDER, SOME COMPANY",
    imageUrl: "/avatar1.jpg",
  },
];
const footerData = [
  { label: " Member Login" },
  { label: " Muslim Marriage Online" },
  { label: " Signed Up" },
  { label: " Member Support" },
];

const footerCompany = [
  { label: " About Us" },
  { label: " Blog" },
  { label: " Helpful Tips" },
  { label: " Submit story" },
];

const footerPrivacy = [
  { label: " Terms of Use" },
  { label: " Privacy Policy" },
  { label: " Contact Us" },
  // { label: " Contact Us" },
];
const footerMore = [
  { label: " Top Ranking Cities" },
  { label: " Parent Involved" },
  { label: " Intimate Cozy Wadding" },
  { label: " Site Map" },
];
const navLinks = [
  { href: "/", text: "Home" },
  { href: "/subscription", text: "Subscription" },
  { href: "/contactUs", text: "Contact Us" },
  // { href: "/members", text: "Members" },
];

function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for screens between 1024px and 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust settings for screens between 768px and 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust settings for screens below 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.heroBanner}></div>

      <nav className="flex items-center justify-between flex-wrap p-5   relative">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-12">
          <h1 className="font-bold text-3xl text-[#fffff] cursor-pointer -mt-2">
            Muslim Marriage Online
          </h1>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400   text-[#ffffff]"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block mt-4 lg:inline-block lg:mt-0 text-[#ffff] mr-4 font-bold"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/login">
              <Button
                css="bg-[#ED147D] pe-7 ps-7   pt-2 pb-2 text-[#fff] rounded-[30px] text-[16px] font-bold "
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              >
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                css="bg-[#ED147D] pe-7 ps-7  ms-3  pt-2 pb-2 text-[#fff] rounded-[30px] text-[16px] font-bold "
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              >
                Signup
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto relative ">
        <div className="text-center pe-4 ps-4 lg:mt-[14.5rem]  mt-[10rem] ">
          <h1 className="text-[#FFFFFF]  lg:text-6xl sm:text-5xl  text-4xl  font-bold   2xl:ps-[24rem] 2xl:pe-[24rem]   xl:ps-[18rem] lg:ps-[8rem]  xl:pe-[18rem] lg:pe-[8rem]   ">
            Marriage for Grown Ups Make a Real Connection
          </h1>
          <p className="text-[#FFFFFF] sm:mt-9 mt-6 text-2xl">
            Start meeting singles who are ready to commit today.
          </p>
          <Button
            css="bg-[#ED147D] pe-7 ps-7   pt-2 pb-2 text-[#fff] rounded-[30px] text-[16px] font-bold mt-6 sm:mt-8 mb-2"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="flex pt-10 pb-10  lg:pt-0 lg:pb-0   lg:flex-row   flex-col  pe-16 ps-16  lg:justify-between  items-center justify-center lg:mt-[1.2rem] xl:mt-[5rem]  2xl:mt-[9.3rem]   mt-12  bg-[#ED147D] ">
          <Image
            src="/Explore-Image.png"
            alt="My Image"
            className={styles.group}
            width={250}
            height={250}
          />
          <div className="text-center ">
            <h1 className="text-[#ffff] text-3xl  font-bold">
              Start your love story
            </h1>
            <p className="text-[#FFFFFFBD] mt-1">
              Muslim Marriage: find love with our Marriage site!
            </p>
          </div>
          <Button
            css="bg-[#FFF] pe-7 ps-7   pt-2 pb-2 text-[#ED147D] rounded-[30px] text-[16px] font-bold mt-6 sm:mt-8 mb-2"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            Register Now
          </Button>
        </div>

        <div className="bg-[#fff] text-center md:pt-20 lg:pb-[5rem]  pt-[2rem] pb-[2rem]">
          <h1 className="text-[#1F2F49]  text-5xl font-semibold  ">
            The No.1 Trusted Marriage Site
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
                Explore Marriage Advice
              </h1>
              <p className="text-[#1F2F49] font-bold mt-2">
                Be calm. Be kind. Be yourself.
              </p>
              <div className="ps-[3rem] lg:mt-1 xl:mt-5 mt-5 mb-5">
                <p className="mt-6 rounded-t-[28px] rounded-r-[28px] bg-[#ffff] pt-4 ps-4 pb-4 pe-8 text-start text-sm text-shadow   font-bold       text-[#676770]">
                  {/* Hello, I’m Sarah and I’m the first Marriage AI for
                  Matrimonial. What are your preferences? */}
                  Greetings, I am Sarah, the inaugural Marriage AI designed
                  exclusively for Matrimonial purposes. As an AI dedicated to
                  fostering lasting connections, I'm here to assist you in
                  finding your ideal match. What are your preferences?
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Button
                  css="bg-[#ED147D] sm:pe-52 sm:ps-52 pe-44 ps-44 shadow-[#ED147D]  xl:pt-3 xl:pb-3 pt-3 pb-3  lg:pt-2 lg:pb-2 text-[#fff] rounded-[30px] text-[13px] font-bold "
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                >
                  Men
                </Button>

                <Button
                  css="bg-[#ED147D] sm:pe-52 sm:ps-52 pe-44 ps-44 mt-5 mb-5  shadow-[#ED147D]
                  
                  xl:pt-3 xl:pb-3 lg:t-2 lg:pb-2 pt-3 pb-3 text-[#fff] rounded-[30px] text-[13px] font-bold "
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                >
                  Men"
                </Button>

                <Button
                  css="bg-[#ED147D] sm:pe-52 sm:ps-52  pe-44 ps-44 shadow-[#ED147D]
                  
                  xl:pt-3 xl:pb-3 lg:pt-2 lg:pb-2    pt-3 pb-3 text-[#fff] rounded-[30px] text-[13px] font-bold "
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                >
                  Men
                </Button>
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
              <div key={card.id} className="max-w-fit       bg-white ">
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

      <div className={styles.downloadBanner}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div className="text-center xl:pt-[10rem]  lg:pt-[8rem]  pt-[4rem]  xl:ps-20 xl:pe-20  lg:ps-12 lg:pe-12  ps-4 pe-4">
              <h1 className="text-[#1F2F49] font-semibold text-4xl">
                Over 30 Million Downloads
              </h1>
              <p className="mt-9 text-[#676770] text-sm">
                Download eAmo online dating app and you’re always ready to check
                out profiles near you & chat with real commited singles ready
                for a real relationship. It puts at the power of eAmo in the
                palm of your hand for a faster marriage experience.​
              </p>

              <button className="btn p-2  bg-black  rounded-md mt-8 me-4">
                <Image src="/Apple.png" alt="Apple" width={110} height={110} />
              </button>

              <button className="btn p-2   bg-black  rounded-md">
                <Image
                  src="/Playstore.png"
                  alt="Playstore"
                  width={125}
                  height={125}
                />
              </button>
            </div>

            <div className="flex  justify-center items-center  lg:justify-start">
              {" "}
              <Image
                src="/App.png"
                alt="Apple"
                width={480}
                height={480}
                className={styles.mobile}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ed147d]">
        <div className="  overflow-hidden text-center pt-12 pb-12">
          <h2 className="mb-10 text-[#ffff] font-bold text-4xl">
            Muslim Marriage Love Stories
          </h2>
          <Slider {...settings} className="flex justify-center">
            {peopleData.map((person, index) => (
              <div key={index}>
                <PersonCard {...person} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/*  ****Footer 1 *****  */}
      <div className="grid lg:grid-cols-6 items-center mx-8 py-8 font-medium gap-5">
        <div className="col-span-2">
          <h1 className="text-2xl text-[#ED147D] font-bold py-6">
            Muslim Marriage Online
          </h1>
          <p>
            Muslim Marriage Online is registered and trademark corporation based
            in the USA. We are a leading international matchmaking company for
            singles globally. Through our network we want to make the process of
            relationship journy relatively effortiess. All profiles are checked
            maually with phone verification to ensure a safe environment for the
            users.
          </p>
        </div>
        <div className=" items-center md:ml-4">
          <h1 className="text-xl  font-semibold py-6">NEED HELP?</h1>

          <ul>
            <FooterList footerData={footerData} />
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold py-6">COMPANY</h1>
          <ul>
            <FooterList footerData={footerCompany} />
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold py-6 -mt-10">PRIVACY & YOU</h1>
          <ul>
            <FooterList footerData={footerPrivacy} />
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold py-6">MORE</h1>
          <ul>
            <FooterList footerData={footerMore} />
          </ul>
        </div>
      </div>

      <footer className="">
        <div className="flex pt-4 pb-4     space-y-4 lg:space-y-0  lg:flex-row   flex-col  pe-16 ps-16  lg:justify-between  items-center justify-center   bg-[#ffffff] ">
          <div className="Logo text-3xl font-bold text-[#ed147d] flex items-center  justify-center">
            {" "}
            <Image
              src="/logo.png"
              alt="Description of your image"
              width={50}
              height={50}
            />{" "}
            <span className="ms-3 text-2xl"> Muslim Marriage Online</span>
          </div>

          <p className="text-sm text-[#ed147d] text-center">
            Copyright © 2023 Muslim Marriage Online. All Rights Reserved by
            Modeltheme.
          </p>
          <Link href="/privacyPolicy" className="cursor-pointer">
            Privacy Policy
          </Link>
          <Link href="/termsAndConditions" className="cursor-pointer">
            Term & Conditions
          </Link>
          <div className="flex space-x-2">
            <i className=" p-2 bg-[#ed147d]">
              <RiFacebookCircleLine className="fill-white" />
            </i>

            <i className=" p-2 bg-[#ed147d]">
              <SlSocialTwitter className="fill-white" />
            </i>

            <i className=" p-2 bg-[#ed147d]">
              <ImPinterest2 className="fill-white" />
            </i>

            <i className=" p-2 bg-[#ed147d]">
              <FaInstagramSquare className="fill-white" />
            </i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Hero;

function FooterList({ footerData }) {
  return (
    <>
      {/* {footerData.map((item) => (
        <li className="py-2" key={label}>
          {item}
        </li>
      ))} */}
      {footerData.map((item) => (
        <li className="py-2" key={item.label}>
          {item.label}
        </li>
      ))}
    </>
  );
}
