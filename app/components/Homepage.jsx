'use client'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
const Home = () => {

  return(
    <div className="flex lg:justify-end justify-center lg:pb-4 lg:pt-0 pt-4  items-center h-screen gap-8 flex-col ">
                  <div className="flex lg:hidden mb-8">
                <Image src={logo} width={200} height={200} />

            </div>
      <div className="flex flex-col shadow-md items-center justify-center max-w-[90%] lg:max-w-[70%] h-[45%] lg:h-[60%] rounded-md gap-6 py-3 px-8 lg:px-16 border border-[#EBECEC]">
        <div className=" text-xl font-semibold text-center">Welcome to UniHealth</div>
        <div className="text-[#808080] text-sm text-center">Select your account type to begin accessing your personalized healthcare experience.</div>
        <div className="flex flex-col gap-4 text-white w-full text-sm">
  <Link href="/patients">
    <button className='bg-[#3263CF] rounded px-9 py-2 w-full'>
      Personal
    </button>
  </Link>

  <Link href="/professionals">
    <button className='bg-[#3263CF] rounded px-9 py-2 w-full'>
      Healthcare Professional
    </button>
  </Link>

  <Link href="/facilities">
    <button className='bg-[#3263CF] rounded px-9 py-2 w-full'>
      Healthcare Facility
    </button>
  </Link>
</div>

      </div>
      <div className="bg-[#F5F5F5]  max-w-[90%] p-4 lg:max-w-[70%] text-xs text-[#404040] rounded-lg ">
      <div className=""><span className='font-semibold '>Personal Account:</span> Sign in if you are an individual seeking personal healthcare services. Manage your health records, appointments, and more.</div>
      <div className=""><span className='font-semibold'>Healthcare Account:</span> If you are a healthcare provider or practitioner, sign in to access patient records, streamline your workflow, and provide top-notch care.</div>
      <div className=""><span className='font-semibold'>Healthcare Facility Account:</span> Healthcare institutions, hospitals, and organizations can sign in to manage patient data, coordinate care, and enhance overall healthcare delivery.</div>
      </div>
    </div>
  )
}

export default Home