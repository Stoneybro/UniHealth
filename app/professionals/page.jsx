import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className="flex flex-col lg:flex-row  lg:-mt-0 w-full gap-8 ">
    <div className="lg:flex-[0.65] bg-white  h-full lg:min-h-[80vh]">
    <div className=" p-4 flex flex-col lg:gap-4 gap-6 min-h-[60vh] lg:min-h-[auto] ">
    <div className="text-2xl">Patients Medical Record</div>
    <div className="w-[95%] mx-auto">
      <div className="border px-4 py-2 border-[#E4E5E7] font-semibold ">Patient's DID</div>
      <div className="first:bg-red">

        <Link href={'/ljlj'}><div className="border border-[#E4E5E7] px-4 py-2"> lorem20</div></Link>
        <Link href={''}><div className="border border-[#E4E5E7] px-4 py-2"> lorem20</div></Link>
        <Link href={''}><div className="border border-[#E4E5E7] px-4 py-2"> lorem20</div></Link>
        <Link href={''}><div className="border border-[#E4E5E7] px-4 py-2"> lorem20</div></Link>
        <Link href={''}><div className="border border-[#E4E5E7] px-4 py-2"> lorem20</div></Link>
      </div>
    </div>
    </div>
    </div>
    <div className="lg:flex-[0.35] flex flex-col">
      <div className="bg-white w-full min-h-[40vh] p-4">
        <div className="text-2xl">History</div>
        <div className="">history not available</div>
      </div>
        </div>
      </div>



  )
}

export default page