'use client'
import React from 'react'
import Homeicon from './Homeicon'
import Settings from './Settings'
import Facility from './Facility'
import Doctor from './Doctor'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

const Sidebar = () => {
  const currentroute=usePathname()

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