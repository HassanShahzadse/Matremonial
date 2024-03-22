import React from "react";
import Image from "next/image";

const ContactPublic = () => {
  return (
    <>
      <section className="bg-[#ED147D]">
        <div className="container mx-auto p-6 h-[10vh]  items-center">
          <h1 className="text-3xl text-white font-bold">Contact Us</h1>
        </div>
      </section>
      <section className="container mx-auto shadow-md p-7 h-[85vh]">
        <div className="pt-20">
          <p>
            If you have any questions or concerns, please don't hesitate to
            contact us at.
          </p>
          <p className="pt-2"> Tel: +44 (0800) 7999 643</p>
          <p className="my-5">
            WhatsApp: <a href="">+44 788888 2776</a>
          </p>

          <p>
            Customer Care:
            <a className="text-blue-500" href="">
              customercare@muslimmarriageonline.com
            </a>
          </p>

          <p className="my-5">
            Tech Support:
            <a className="text-blue-500" href="">
              support@muslimmarriageonline.com
            </a>
          </p>
        </div>
      </section>
      <div className="h-[3vh] bg-[#ED147D] ">
        <Image
          src="/Navbar/NavbarThin1.png"
          alt="Description"
          className="rounded-lg"
          objectFit="cover"
          fill
        />
      </div>
    </>
  );
};

export default ContactPublic;
