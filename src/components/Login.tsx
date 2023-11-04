"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
type Props = {}

const Login = (props: Props) => {
    const router=useRouter()
  return (
    <div><button onClick={()=>router.push('/dashboard')}>Login</button></div>
  )
}
export default Login