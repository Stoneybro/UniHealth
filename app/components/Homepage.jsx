'use client'
import React, { useState } from 'react'
import Link from 'next/link'
const Home = () => {
  const [home,setHome]=useState(true)
  if (home) {
    return (
      <div className=' h-screen flex flex-col gap-6 justify-center items-center'>
              <div className="font-bold text-4xl">
                  UniHealth
              </div>
              <div className="">accessible and seamless healthcare</div>
              <button className='bg-blue-400 rounded px-5 py-2' onClick={()=>setHome(false)}>Get started</button>
      </div>
    )
  }
  return(
    <>
    <div className="h-screen flex flex-col justify-between items-center py-32">
      <div className="">UniHealth</div>
      <div className=' flex flex-col gap-8 '>
        <button className='bg-blue-400 rounded px-5 py-2'><Link href={'/patients'}>Patients</Link></button>
        <button className='bg-blue-400 rounded px-5 py-2'><Link href={'/facilities'}>Health </Link></button>
        <button className='bg-blue-400 rounded px-5 py-2'><Link href={"/practitioners"}>Health care facilities</Link></button>
      </div>

    </div>
    </>
  )
}

export default Home