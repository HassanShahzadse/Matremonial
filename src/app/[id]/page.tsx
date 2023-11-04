"use client"
import { useEffect } from 'react';

export default function Page({ params }: { params: { id: string } }) {

useEffect(() => {
  //api call
}, [params.id])

    return <div>My Post: {params.id}</div>
  }