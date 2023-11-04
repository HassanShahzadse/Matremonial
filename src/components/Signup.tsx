"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
type Props = {}

const SignUp = (props: Props) => {
    const router=useRouter()
  return (
    <div><button onClick={()=>router.push('/login')}>Sign Up</button></div>
  )
}
export default SignUp