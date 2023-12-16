"use client"
import MessagesComponent from '@/components/messages/messagesComponent'
import React from 'react'
import { useEffect } from 'react';
export default function page({ params }: { params: { userId: string } }) {
  useEffect(() => {
    //api call
  }, [params.userId])
  
  return (
    <div>
      <h1>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</h1>
         <MessagesComponent userId={params.userId}/>

    </div>
  )
}
