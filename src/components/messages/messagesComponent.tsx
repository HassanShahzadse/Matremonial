"use client";
import React from 'react'
import { useState } from 'react';
import Layout from "../mainLayout/layout";
export default function MessagesComponent() {
  const [show, setShow] = useState(false);
  return (
    <Layout show={show} setShow={setShow} >
    <div>messagesComponent</div>
    </Layout>
  )
}
