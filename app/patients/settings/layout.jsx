import React from 'react'
import Link from 'next/link'


const layout = ({children}) => {
  return (
    <div className='bg-white flex w-full '>
            <div className=" border hidden lg:flex border-r-[#EBF1F8] lg:flex-[0.2] flex-col gap-6 text-lg p-6 font-semibold ">
            <Link href={'/patients/settings/'}>Patient Information</Link>
            <Link href={'/patients/settings/emergency'}>Emergency Information</Link>
            </div>


            <div className="lg:flex-[0.8] w-full lg:w-auto  p-6">

            {children}
            </div>


    </div>
  )
}

export default layout