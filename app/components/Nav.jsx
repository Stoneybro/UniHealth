import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className="w-full bg-white">
    <div className='bg-white sticky top-0 w-full py-4 max-w-[1250px] mx-auto px-4'>
        <div className="">
            <Image src={logo} width={120} height={120} />
        </div>
    </div>
    </div>
  )
}

export default Nav