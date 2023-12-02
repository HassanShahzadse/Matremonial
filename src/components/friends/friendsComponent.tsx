"use client";
import React from 'react'
import Layout from "../mainLayout/layout";
import { useState } from 'react';
export default function FriendsComponent() {
  const [show, setShow] = useState(false);
  return (
    <Layout show={show} setShow={setShow} >
    <div>friendsComponent</div>

    </Layout>
  )
}
