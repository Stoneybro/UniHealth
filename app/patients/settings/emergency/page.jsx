'use client'
import { useState } from 'react';
import React from 'react';

const Page = () => {
  const [personalInfox, setPersonalInfox] = useState({
    Dob: '',
    Phone: '',
    Address: '',
    Email: '',
    Height: '',
    Weight: '',
    Gender: ''
  });
  function handleSubmit(params) {
    
  }
  return (
    <div className=' lg:pl-6 lg:pr-12 min-h-[80vh]'>
      <div className="text-xl lg:hidden">Emergency Information</div>
      <form onSubmit={handleSubmit}>
      {/* Date of Birth */}
      <div className=" border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Name of next of kin</div>

       
        <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Dob:e.target.value})} value={personalInfox.Dob} type="text" name="" id="" className='  bg-[#EBF1F8] outline-none text-black' placeholder='' /></div> 
      </div>

      {/* Phone Number */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4"> 
        <div className="text-[15px] text-[#808080]">Phone number of next kin</div>
       
       <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Phone:e.target.value})} value={personalInfox.Phone} type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>

      {/* Address */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Address of next kin</div>
       
       <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Address:e.target.value})} value={personalInfox.Address} type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>

      {/* Email */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Address</div>
       
       <div className=""><input onChange={(e)=>setPersonalInfox({...personalInfox,Email:e.target.value})} value={personalInfox.Email} type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>



      <div className=" flex justify-end py-4"><button className='bg-[#3263CF] px-3 py-1 text-white '>Submit</button></div>
      </form>
    </div>
  );
}

export default Page;
