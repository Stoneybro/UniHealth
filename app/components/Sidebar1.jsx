'use client'
import React, { useEffect } from 'react'
import Homeicon from './Homeicon'
import Settings from './Settings'
import Facility from './Facility'
import Doctor from './Doctor'

import Link from 'next/link'
import { useGlobalContext } from './utils/Provider'

const Sidebar = ({records,id,web5,mydid}) => {
const {setData,data,setId,setWeb5,setDid}=useGlobalContext()
  useEffect(()=>{
    setData(records)
    setId(id)
    setWeb5(web5)
    setDid(mydid)
  },[records])
  return (
    <div className="sticky top-0 left-0 bg-white h-screen  flex justify-center pt-8">
      <div className="flex flex-col gap-8">
        <Link href={'/patients'}><Homeicon /></Link>
        <Link href={'/patients/practitioner'}><Doctor /></Link>
        <Link href={'/patients/facilities'}><Facility /></Link>
        <Link href={'/patients/settings'}><Settings /></Link>
      </div>
    </div>
  )
}

export default Sidebar