'use client'
import React, { useEffect,useState } from 'react';
import { useGlobalContext } from '@/app/components/utils/Provider';
const Page = () => {
  const { data,personalInfo,setPersonalInfo,id,web5,did } = useGlobalContext();
  const [personalInfox, setPersonalInfox] = useState({
    Dob: '',
    Phone: '',
    Address: '',
    Email: '',
    Height: '',
    Weight: '',
    Gender: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
    console.log(id);
    setPersonalInfo(personalInfox);
    // Get the record
const { record } = await web5.dwn.records.read({
  message: {
    filter: {
      recordId: id
    }
  }
});
console.log(record.data.json());
// Update the record
console.log(personalInfox,personalInfo);
const {status} = await record.update({ data: personalInfo});
const { record: updatedRecord } = await web5.dwn.records.read({
  message: {
    filter: {
      recordId: id
    }
  }
});
console.log(updatedRecord.data.json());
  }
  return (
    <div className=' pl-6 pr-12 min-h-[80vh]'>
      <form onSubmit={handleSubmit}>
      {/* Date of Birth */}
      <div className=" border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Date of birth</div>

       
       <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Dob:e.target.value})} value={personalInfox.Dob} type="text" name="" id="" className=' focus:bg-[#EBF1F8] bg-white outline-none text-black' placeholder='Date of Birth' /></div> 

      </div>

      {/* Phone Number */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4"> 
        <div className="text-[15px] text-[#808080]">Phone number</div>
       
       <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Phone:e.target.value})} value={personalInfox.Phone} type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>

      {/* Address */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Address</div>
       
       <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Address:e.target.value})} value={personalInfox.Address} type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>

      {/* Email */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Email</div>
       
       <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Email:e.target.value})} value={personalInfox.Email} type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>

      <div className="">
        {/* Nested Section for Height, Weight, and BMI */}
        <div className="flex gap-4 py-4 border-b-[1px] border-b-[#EBF1F8]">

          {/* Height */}
          <div className="">
            <div className="text-[15px] text-[#808080]">Height</div>
           
           <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Height:e.target.value})} value={personalInfox.Height} type="number"  name="" id="" className='bg-[#EBF1F8]' /></div> 

          </div>

          {/* Weight */}
          <div className="">
            <div className="text-[15px] text-[#808080]">Weight</div>
           
           <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Weight:e.target.value})} value={personalInfox.Weight} type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

          </div>



        </div>



        {/* Gender */}
        <div className=" py-4 flex flex-col gap-4 border-b-[1px] border-b-[#EBF1F8]">
          <div className="text-[15px] text-[#808080]">Gender</div>
         
         <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Gender:e.target.value})} value={personalInfox.Gender} type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

        </div>

      </div>

      <div className=" flex justify-end py-4"><button className='bg-[#3263CF] px-3 py-1 text-white '>Submit</button></div>
      </form>
    </div>
  );
}

export default Page;
