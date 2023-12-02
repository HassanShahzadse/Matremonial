"use client";
import React from 'react'
import { useState } from 'react';
import Layout from "../mainLayout/layout";
export default function SettingsComponent() {
  const [show, setShow] = useState(false);
  return (

    <Layout show={show} setShow={setShow} >
    <div>settingsComponent</div>
    </Layout>
 
    )
}
