"use client"
import { useEffect } from 'react';

export default function Page({ params }: { params: { tyreId: string } }) {

useEffect(() => {
  //api call
}, [params.tyreId])

    return <div>My Post: {params.tyreId}</div>
  }