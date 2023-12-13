'use client'
import { useEffect } from "react"
import { useGlobalContext } from "../components/utils/Provider"
import {RotatingLines} from 'react-loader-spinner'
const page = () => {
const {data}=useGlobalContext()


return(
  <div className="flex w-full gap-8 ">
    <div className="flex-[0.65] bg-white  h-full min-h-[80vh]">
    {<div className=" p-4 flex flex-col gap-4 ">
      <div className="text-2xl">Medical Record</div>
      <div className="flex gap-2">
        <button className="text-white border border-[#97A3B0] rounded-full py-1 px-4 bg-[#3263CF]">General</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">prescription</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Vaccination</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Sugery</button>
      </div>

      <div className=" flex flex-col gap-4">
        <div className="text-xl font-medium">Diagnosis</div>
        <div className="flex justify-center items-center">
       {!data?<RotatingLines  height={40} width={40} strokeColor="#3263CF" />: <div className="flex flex-wrap gap-4">
        {data.medicalRecords.general.diagnosis.map((data)=>{
          if (data.date==='') {
            return 'See your health proffesional for more information'
          }
          return(
            <div className="bg-[#FCFDFF] border rounded-md min-h-[5rem] flex flex-col justify-start w-[45%] border-[#97A3B030] px-3 py-2">
            <div className="flex justify-between">
              <div className="w-5 h-3 rounded-full bg-orange-400"></div>
              <div className=" text-sm">{data.date}</div>
            </div>
            <div className="font-semibold">{data.condition}</div>
          </div>
          )
        })}
       
        </div>}
      </div></div>

      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">Medication</div>
        <div className="flex justify-center items-center">
       {!data?<RotatingLines  height={40} width={40} strokeColor="#3263CF" />: <div className="flex flex-wrap gap-4">
        {data.medicalRecords.general.medication.map((data)=>{
                    if (data.drug==='') {
                      return 'See your health proffesional for more information'
                    }
          return(
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
            <div className="font-semibold text-lg">{data.drug}</div>
            <div className="text-[#97A3B0]">{data.dose}</div>
          </div>
          )
        })}
        </div>}
      </div></div>
    </div>}
    </div>
    <div className="bg-white   h-full flex-[0.35] min-h-[40vh]">
    <div className="">
    <div className="  py-4">
      <div className="flex flex-col gap-4">


        <div className=" text-2xl px-4">
        Personal Information
        </div>
        <div className="flex justify-center items-center w-full">
        {!data?<RotatingLines  height={40} width={40} strokeColor="#3263CF" />:<div className="flex w-full flex-col gap-4">
        <div className="bg-[#EBF1F8] w-full px-4 py-4">
          <div className="text-[#808080]">DID</div>
          <div className="text-lg truncate">8WG2983e29</div>
        </div>



        <div className="flex w-full justify-between  px-4">
          <div className="flex flex-1 flex-col">
            <div className="">
              <div className="text-[#808080]">Date of birth</div>
              <div className="font-semibold">{`${data.personalInformation.Dob}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Gender</div>
              <div className="font-semibold">{`${data.personalInformation.Gender}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Height</div>
              <div className="font-semibold">{`${data.personalInformation.Height} cm`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Weight</div>
              <div className="font-semibold">{`${data.personalInformation.Weight} kg`}</div>
            </div>
          </div>


          <div className="flex flex-1 flex-col">
            <div className="">
              <div className="text-[#808080]">Phone number</div>
              <div className="font-semibold">{`${data.personalInformation.Phone}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Email</div>
              <div className="font-semibold">{`${data.personalInformation.Email}`}</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Address</div>
              <div className="font-semibold">{`${data.personalInformation.Address}`}</div>
            </div>
          </div>


        </div>

        </div>}
        </div>
      </div>
    </div></div>
    </div>
  </div>
)

}

export default page

