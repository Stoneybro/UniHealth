import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row  lg:-mt-0 w-full gap-8 ">
    <div className="lg:flex-[0.65] bg-white  h-full lg:min-h-[80vh]">
    {<div className=" p-4 flex flex-col lg:gap-4 gap-6 min-h-[60vh] lg:min-h-[auto] ">
      <div className="w-full flex justify-between"><span className='text-2xl'>Patient's Medical Record</span><span><button className='bg-[#3263CF] px-4 py-1'>Edit Medical Record</button></span></div>
      <div className="flex flex-wrap gap-2">
        <button className="text-white border border-[#97A3B0] rounded-full py-1 px-4 bg-[#3263CF]">General</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">prescription</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Vaccination</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Sugery</button>
      </div>

      <div className=" flex flex-col gap-4">
        <div className="text-xl font-medium">Diagnosis</div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap  gap-4 lg:gap-[auto] lg:items-center">
       {!data?<RotatingLines  height={40} width={40} strokeColor="#3263CF" />: <div className="flex flex-wrap gap-4">
        {data?.medicalRecords.general.diagnosis.map((data)=>{
          if (data?.date==='') {
            return 'See your health professional for more information'
          }
          return(
<div className="bg-[#FCFDFF] border rounded-md min-h-[5rem] flex flex-col justify-start w-[95%] lg:w-[45%] border-[#97A3B030] px-3 py-2">
            <div className="flex justify-between">
              <div className="w-5 h-3 rounded-full bg-orange-400"></div>
              <div className=" text-sm">{data?.date}</div>
            </div>
            <div className="font-semibold">{data?.condition}</div>
          </div>
          )
        })}
       
        </div>}

      </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">Medication</div>
        <div className="flex :flex-row flex-wrap  lg:items-center gap-4 lg:gap-[auto] ">
       {!data?<RotatingLines  height={40} width={40} strokeColor="#3263CF" />: <div className="flex flex-wrap gap-4">
        {data?.medicalRecords.general.medication.map((data)=>{
                    if (data.drug==='') {
                      return 'See your health professional for more information'
                    }
          return(
<div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[45%] lg:w-[23%]  border-[#97A3B030] px-3 py-2">
            <div className="font-semibold text-lg">{data?.drug}</div>
            <div className="text-[#97A3B0]">{data?.dose}</div>
          </div>
          )
        })}
        </div>}



      </div>
      </div>
    </div>}
    </div>
    <div className="lg:flex-[0.35] flex flex-col">
    <div className="bg-white mb-8 h-full  ">
    <div className="">
    <div className="  py-4">
      <div className="flex flex-col gap-4">


        <div className=" text-2xl px-4">
        Personal Information
        </div>
        <div className="flex justify-center items-center w-full">
        {/*  */}
        {!data?<RotatingLines  height={40} width={40} strokeColor="#3263CF" />:<div className="flex w-full flex-col gap-4">
        <div className="bg-[#EBF1F8] w-full px-4 py-4">
          <div className="text-[#808080]">DID</div>
          <div className="text-lg truncate flex gap-1 items-center"><span>8WG2983e29....</span>  <span>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_101_1634)">
<path d="M4.71899 4.14386V2.60417C4.71899 2.08641 5.13871 1.66667 5.65649 1.66667H13.7815C14.2993 1.66667 14.719 2.08641 14.719 2.60417V10.7292C14.719 11.247 14.2993 11.6667 13.7815 11.6667H12.2244" stroke="#3263CF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1147 4.33334H2.98975C2.47198 4.33334 2.05225 4.75308 2.05225 5.27084V13.3958C2.05225 13.9136 2.47198 14.3333 2.98975 14.3333H11.1147C11.6325 14.3333 12.0522 13.9136 12.0522 13.3958V5.27084C12.0522 4.75308 11.6325 4.33334 11.1147 4.33334Z" stroke="#3263CF" stroke-width="1.33333" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_101_1634">
<rect width="16" height="16" fill="white" transform="translate(0.38562)"/>
</clipPath>
</defs>
</svg>
</span></div>
        </div>
        <div className="flex w-full justify-between  px-4">
          <div className="flex flex-1 flex-col">
            <div className="">
              <div className="text-[#808080]">Date of birth</div>
              <div className="font-semibold">{`${data?.personalInformation.Dob}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Gender</div>
              <div className="font-semibold">{`${data?.personalInformation.Gender}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Height</div>
              <div className="font-semibold">{`${data?.personalInformation.Height} cm`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Weight</div>
              <div className="font-semibold">{`${data?.personalInformation.Weight} kg`}</div>
            </div>
          </div>


          <div className="flex flex-1 flex-col">
            <div className="">
              <div className="text-[#808080]">Phone number</div>
              <div className="font-semibold">{`${data?.personalInformation.Phone}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Email</div>
              <div className="font-semibold">{`${data?.personalInformation.Email}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Address</div>
              <div className="font-semibold">{`${data?.personalInformation.Address}`}</div>
            </div>
          </div>


        </div>




        </div>}
        </div>
      </div>
    </div></div>
    </div>


    <div className="bg-white mb-8 h-full ">
    <div className="">
    <div className="  py-4">
      <div className="flex flex-col gap-4">


        <div className=" text-2xl px-4 ">
        Emergency Information
        </div>
        <div className="flex justify-center items-center w-full">

        {!data?<RotatingLines  height={40} width={40} strokeColor="#3263CF" />:<div className="flex w-full flex-col gap-4">
        <div className="flex w-full justify-between  px-4">
          <div className="flex flex-1 flex-col">
            <div className="">
              <div className="text-[#808080]">Emergency contact</div>
              <div className="font-semibold">{`${data?.emergencyInformation.Nok}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">phone</div>
              <div className="font-semibold">{`${data?.emergencyInformation.Nokphone}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">address</div>
              <div className="font-semibold">{`${data?.emergencyInformation.Nokaddress} `}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">relationship</div>
              <div className="font-semibold">{`${data?.emergencyInformation.relationship} `}</div>
            </div>
          </div>





        </div>




        </div>}
        </div>
      </div>
    </div></div>
    </div>
    </div>
  </div>
  )
}

export default page