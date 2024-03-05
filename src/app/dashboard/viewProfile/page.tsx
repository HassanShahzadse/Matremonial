"use client"
import ViewProfile from '@/components/viewprofile/messagesComponent';
import React from 'react'
import { useEffect } from 'react';
export default function Page({ params }: { params: { userId: string } }) {
  useEffect(() => {
    //api call
  }, [params.userId])
  
  return (
    <div>
         <ViewProfile userId={params.userId}/>
    </div>
  )
}
