import React from 'react';

const Page = () => {
  return (
    <div className=' pl-6 pr-12 min-h-[80vh]'>

      {/* Date of Birth */}
      <div className=" border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Date of birth</div>

       
       <div className=""><input type="text" name="" id="" className=' focus:bg-[#EBF1F8] bg-white outline-none text-black' placeholder='Date of Birth' /></div> 

      </div>

      {/* Phone Number */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4"> 
        <div className="text-[15px] text-[#808080]">Phone number</div>
       
       <div className=""><input type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>

      {/* Address */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Address</div>
       
       <div className=""><input type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>

      {/* Email */}
      <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
        <div className="text-[15px] text-[#808080]">Email</div>
       
       <div className=""><input type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

      </div>

      <div className="">
        {/* Nested Section for Height, Weight, and BMI */}
        <div className="flex gap-4 py-4 border-b-[1px] border-b-[#EBF1F8]">

          {/* Height */}
          <div className="">
            <div className="text-[15px] text-[#808080]">Height</div>
           
           <div className=""><input type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

          </div>

          {/* Weight */}
          <div className="">
            <div className="text-[15px] text-[#808080]">Weight</div>
           
           <div className=""><input type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

          </div>

          {/* BMI */}
          <div className="">
            <div className="text-[15px] text-[#808080]">BMI</div>
           
           <div className=""><input type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

          </div>

        </div>



        {/* Gender */}
        <div className=" py-4 flex flex-col gap-4 border-b-[1px] border-b-[#EBF1F8]">
          <div className="text-[15px] text-[#808080]">Gender</div>
         
         <div className=""><input type="text" name="" id="" className='bg-[#EBF1F8]' /></div> 

        </div>

      </div>

      <div className=" flex justify-end py-4"><button className='bg-[#3263CF] px-3 py-1 text-white '>Submit</button></div>

    </div>
  );
}

export default Page;
