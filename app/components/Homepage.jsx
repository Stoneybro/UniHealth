'use client'

import Link from 'next/link'
const Home = () => {

  return(
    <div className="flex justify-end pb-4 items-center h-screen gap-8 flex-col ">
      <div className="flex flex-col shadow-md items-center justify-center max-w-[70%] h-[60%] rounded-md gap-6 py-3 px-16">
        <div className=" text-xl font-semibold text-center">Welcome to UniHealth</div>
        <div className="text-[#808080] text-sm text-center">Select your account type to begin accessing your personalized healthcare experience.</div>
        <div className="flex flex-col   gap-4 text-white w-full text-sm">
        <button className='bg-[#3263CF] rounded px-9 py-2'><Link href={'/patients'}>Personal</Link></button>
        <button className='bg-[#3263CF] rounded px-9 py-2'><Link href={'/professionals'}>Healthcare professional </Link></button>
        <button className='bg-[#3263CF] rounded px-9 py-2'><Link href={"/facilities"}>Healthcare facilitiy</Link></button>
        </div>
      </div>
      <div className="bg-[#F5F5F5] p-4 max-w-[70%] text-xs text-[#404040] rounded-lg ">
      <div className=""><span className='font-semibold '>Personal Account:</span> Sign in if you are an individual seeking personal healthcare services. Manage your health records, appointments, and more.</div>
      <div className=""><span className='font-semibold'>Healthcare Account:</span> If you are a healthcare provider or practitioner, sign in to access patient records, streamline your workflow, and provide top-notch care.</div>
      <div className=""><span className='font-semibold'>Healthcare Facility Account:</span> Healthcare institutions, hospitals, and organizations can sign in to manage patient data, coordinate care, and enhance overall healthcare delivery.</div>
      </div>
    </div>
  )
}

export default Home