"use client"
import MessagesComponent from '@/components/messages/messagesComponent'
import React from 'react'
import { useEffect } from 'react';
export default function Page({ params }: { params: { userId: string } }) {
  useEffect(() => {
    //api call
  }, [params.userId])
  
  return (
    <div>
         <MessagesComponent userId={params.userId}/>
    </div>
  )
}
