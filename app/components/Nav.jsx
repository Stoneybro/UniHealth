import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className="w-full bg-white">
    <div className='bg-white sticky top-0 w-full py-4 max-w-[1250px] mx-auto px-4'>
        <div className="2">
          <Link href={'/'}>
          <Image src={logo} width={120} height={120} />
          </Link>
        </div>
    </div>
    </div>
  )
}

export default Nav