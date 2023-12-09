import React from 'react'
import Link from 'next/link'


const layout = ({children}) => {
  return (
    <div className='bg-white flex w-full '>
            <div className=" border border-r-[#EBF1F8] flex-[0.2] flex flex-col gap-6 text-lg p-6 font-semibold ">
            <Link href={'/patients/settings/'}>Patient Information</Link>
            <Link href={'/patients/settings/emergency'}>Emergency Information</Link>
            </div>


            <div className="flex-[0.8] p-6">
            {children}
            </div>


    </div>
  )
}

export default layout