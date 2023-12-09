'use client'
import React from 'react'
import { usePathname} from 'next/navigation'

const Facility = () => {
  const currentroute=usePathname()
  return (
    <div>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${currentroute==='/patients/facilities'?'fill-[#3263CF] stroke-[#3263CF]':'fill-[#97A3B0] stroke-[#97A3B0]'} hover:fill-[#3263CF]  transition-all hover:stroke-[#3263CF]`}>
<path d="M18.25 1.91667H1.91663V24.0833H18.25V1.91667Z"   stroke-width="2.33333" stroke-linejoin="round"/>
<path d="M18.25 11.25H24.0833V24.0833H18.25"  stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.58325 11.25H13.5833" stroke="white" stroke-width="2.33333" stroke-linecap="round"/>
<path d="M10.0833 7.75V14.75" stroke="white" stroke-width="2.33333" stroke-linecap="round"/>
</svg>
    </div>
  )
}

export default Facility