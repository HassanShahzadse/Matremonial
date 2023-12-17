"use client"
import MessagesComponent from '@/components/messages/messagesComponent'
import React from 'react'
import { useEffect } from 'react';
export default function page() {
  return (
    <div>
         <MessagesComponent userId={undefined}/>
    </div>
  )
}
