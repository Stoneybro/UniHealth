'use client'
import React from 'react'
import { usePathname} from 'next/navigation'


const Homeicon = () => {
  const currentroute=usePathname()
  return (
    <div >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${currentroute==='/patients'?'fill-[#3263CF] stroke-[#3263CF]':'fill-[#97A3B0] stroke-[#97A3B0]'} hover:fill-[#3263CF]  transition-all hover:stroke-[#3263CF]`}>
<path d="M11.4167 9.66667L11.4167 1.5L1.50008 1.5L1.50008 9.66667L11.4167 9.66667Z"  stroke-width="2.32258" stroke-linejoin="round"/>
<path d="M22.5 22.5V14.3333L12.5833 14.3333L12.5833 22.5H22.5Z"  stroke-width="2.32258" stroke-linejoin="round"/>
<path d="M16.0834 1.49999V9.66666H22.5V1.49999H16.0834Z"  stroke-width="2.32258" stroke-linejoin="round"/>
<path d="M1.5 14.3333L1.5 22.5H7.91667L7.91667 14.3333H1.5Z"  stroke-width="2.32258" stroke-linejoin="round"/>
</svg>
    </div>
  )
}

export default Homeicon