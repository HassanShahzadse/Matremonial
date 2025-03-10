import React from 'react'

export default function Loading() {
  return (
    <div className='h-screen w-screen  flex items-center justify-center'>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#f46194]"></div>
    </div>
  )
}
