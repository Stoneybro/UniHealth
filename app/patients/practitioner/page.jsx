'use client'
import Link from "next/link"
const page = () => {



return(
  <div className="flex flex-col lg:flex-row  lg:-mt-0 w-full gap-8 ">
    <div className="lg:flex-[0.65] bg-white  h-full lg:min-h-[80vh]">
    {<div className=" p-4 flex flex-col lg:gap-4 gap-6 min-h-[60vh] lg:min-h-[auto] ">
      <div className="text-2xl">Healthcare Consultant</div>
      <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
      
        <button className="text-white border border-[#97A3B0] rounded-full py-1 px-4 bg-[#3263CF]">Doctors</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Pharmacist</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Dermatologists</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Oncologist</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Physiotherapist</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Opthamologist</button>
     
      </div>
      <div className="flex flex-wrap gap-2">
        
        <div className="text-[#97A3B0]">Filter:</div>
        <button className="text-white border border-[#97A3B0] rounded-full py-1 px-4 bg-[#3263CF]">Free</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Paid</button>

      </div>
      <div className="w-[95%] mx-auto">
      <div className="border px-4 py-2 flex rounded w-full border-[#E4E5E7] font-semibold">
        <div className="flex-[0.5]">Name</div>
        <div className="flex-[0.3]">Specialty</div>
        <div className="flex-[0.2]">Service fee</div>
        </div>
      <div className=" text-[#808080]">

        <Link href={'/patients/practitioner/professional'}><div className="border border-[#E4E5E7] text-black px-4 py-2 flex w-full"> 
        <div className="flex-[0.5]">Dr. Emily Johnson</div>
        <div className="flex-[0.3]">Cardiologist</div>
        <div className="flex-[0.2]">Free</div>
        </div></Link>
        <Link href={'/patients/practitioner/professional'}><div className="border bg-[#EBF1F8] border-[#E4E5E7] px-4 py-2 flex w-full text-black">
        <div className="flex-[0.5]">Dr. Tunde Adams</div>
        <div className="flex-[0.3]">Pharmacist</div>
        <div className="flex-[0.2]">Paid</div>
        </div></Link>

      </div>
    </div>
      </div>


    </div>}
    </div>
    <div className="lg:flex-[0.35] flex flex-col">
    <div className="bg-white mb-8 h-full min-h-[35vh] lg:min-h-[35vh] ">
    <div className="">
    <div className="  py-4">
      <div className="flex flex-col gap-4">


        <div className=" text-2xl px-4">
        History
        </div>

      </div>
    </div></div>
    </div>



    </div>
  </div>
)

}

export default page