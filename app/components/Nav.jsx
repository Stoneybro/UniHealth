'use client'
import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { BiX} from 'react-icons/bi'
import { BiMenu} from 'react-icons/bi'
import { useGlobalContext } from './utils/Provider'
const Nav = () => {
  const {nav,setNav}=useGlobalContext()
  return (
    <div className="w-full bg-white">
    <div className='bg-white sticky top-0 w-full py-4 flex justify-between items-center max-w-[1250px] mx-auto px-4'>
        <div className="2">
          <Link href={'/'}>
          <Image src={logo} width={150} height={150} />
          </Link>
        </div>

        <div className="lg:hidden" onClick={()=>setNav(!nav)}>
        {nav?<BiX size={40} />:<BiMenu size={40} />}

        </div>
    </div>
    </div>
  )
}

export default Nav