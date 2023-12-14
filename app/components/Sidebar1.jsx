'use client'
import React, { useEffect } from 'react'
import Homeicon from './Homeicon'
import Settings from './Settings'
import Facility from './Facility'
import Doctor from './Doctor'

import Link from 'next/link'
import { useGlobalContext } from './utils/Provider'

const Sidebar = ({records,id,web5,mydid}) => {
const {setData,data,setId,setWeb5,setDid,nav,setNav}=useGlobalContext()
  useEffect(()=>{
    setData(records)
    setId(id)
    setWeb5(web5)
    setDid(mydid)
  },[records])
  return (
    <div className=  {`lg:sticky top-[3rem] lg:top-0 left-0 overflow-hidden absolute z-20  bg-white ${nav?'w-screen h-screen':'lg:w-auto lg:h-screen w-0 h-0'}   lg:flex justify-center pt-8`}>
      <div className="lg:flex flex-col gap-8 hidden">
        <Link href={'/patients'}><Homeicon /></Link>
        <Link href={'/patients/practitioner'}><Doctor /></Link>
        <Link href={'/patients/facilities'}><Facility /></Link>
        <Link href={'/patients/settings'}><Settings /></Link>
      </div>
      <div className={`lg:hidden  flex-col  ${nav?' opacity-100':'opacity-0'} bg-white text-3xl items-center pt-8 lg:pt-0  flex justify-center`}>
        <div  className="w-full flex justify-center border-b-[1px] border-b-[#EBF1F8] py-4 " onClick={()=>setNav(false)}><Link href={'/patients'}> Home</Link></div>
        <div className="w-full flex justify-center border-b-[1px] border-b-[#EBF1F8] py-4 " onClick={()=>setNav(false)} ><Link href={'/patients/practitioner'}>Health Practicioners</Link></div>
        <div className="w-full flex justify-center border-b-[1px] border-b-[#EBF1F8] py-4 " onClick={()=>setNav(false)}><Link href={'/patients/facilities'}>Health facilities</Link></div>
        <div className="w-full flex justify-center border-b-[1px] border-b-[#EBF1F8] py-4 " onClick={()=>setNav(false)}><Link href={'/patients/settings'}>personal Information</Link></div>
        <div className="w-full flex justify-center py-4 " onClick={()=>setNav(false)}><Link href={'/patients/settings/emergency'}>Emergency Information</Link></div>
      </div>
    </div>
  )
}

export default Sidebar