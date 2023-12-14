'use client'

const page = () => {



return(
  <div className="flex flex-col lg:flex-row  lg:-mt-0 w-full gap-8 ">
    <div className="lg:flex-[0.65] bg-white  h-full lg:min-h-[80vh]">
    {<div className=" p-4 flex flex-col lg:gap-4 gap-6 min-h-[60vh] lg:min-h-[auto] ">
      <div className="text-2xl">Healthcare Facility</div>
      <div className="flex flex-wrap gap-2">
        <div className="text-[#97A3B0]">Filter:</div>
        <button className="text-white border border-[#97A3B0] rounded-full py-1 px-4 bg-[#3263CF]">Free</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Paid</button>

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