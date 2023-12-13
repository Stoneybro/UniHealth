import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'
const Homelayout = ({children}) => {
  return (
    <div className='h-screen'>
        <div className="flex h-full ">
        <div className="flex-1 max-w-[50vw] flex flex-col justify-between items-start p-8 bg-[url:'/bg.jpg'] bg-cover bg-center h-full" style={{"backgroundImage":'url(/bg.jpg)'}}>
            <div className="flex gap-1">
                <Image src={logo} width={150} height={150} />

            </div>
            <div className=" text-4xl text-white">
            Revolutionising Healthcare with Decentralized Records and Access to Healthcare.
            </div>
        </div>
        <div className="flex-1 max-w-[50vw]">{children}</div>
        </div>
    </div>
  )
}

export default Homelayout