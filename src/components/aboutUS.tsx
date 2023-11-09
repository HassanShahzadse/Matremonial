"use client"
import { useState } from "react";
import Layout from "./layout";


export default function About() {
  const [show, setShow] = useState(false);
  return (
    <Layout show={show} setShow={setShow}>
      <h1>Content</h1>
      {/* Add content specific to MainDashboard */}
    </Layout>
    // <div className='flex h-full flex-col justify-center items-center'>
    //   <h1 className='text-4xl mb-5 font-bold'>About</h1>
    //   <span className='text-7xl'>💬</span>
    // </div>

  );
}