import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className="flex flex-col lg:flex-row  lg:-mt-0 w-full gap-8 ">
    <div className="lg:flex-[0.65] bg-white  h-full lg:min-h-[80vh]">
    <div className=" p-4 flex flex-col  min-h-[60vh] lg:min-h-[auto] gap-3">
    <div className="text-lg">Consultant Info</div>
      <div className="flex justify-between items-end">
        <div className="gap-2">
        <div className="text-xl font-medium">Dr. Emily Johnson, MD, FACC</div>
        <div className="">Specialty: Cardiology</div>
        </div>

        <div className="flex flex-col bg-[#EBF1F8] gap-1 px-4 py-2 w-[35%]">
        <div className="font-medium">DID</div>
            <div className="text-sm flex gap-2 items-center"><div className="">79WGR....9823RG</div> <div className="">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_78_1603)">
<path d="M4.3335 4.14387V2.60419C4.3335 2.08642 4.75321 1.66669 5.271 1.66669H13.396C13.9138 1.66669 14.3335 2.08642 14.3335 2.60419V10.7292C14.3335 11.247 13.9138 11.6667 13.396 11.6667H11.8389" stroke="#3263CF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.729 4.33331H2.604C2.08624 4.33331 1.6665 4.75305 1.6665 5.27081V13.3958C1.6665 13.9136 2.08624 14.3333 2.604 14.3333H10.729C11.2468 14.3333 11.6665 13.9136 11.6665 13.3958V5.27081C11.6665 4.75305 11.2468 4.33331 10.729 4.33331Z" stroke="#3263CF" stroke-width="1.33333" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_78_1603">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

</div></div>  

        </div>
      </div>
      <div className="mt-4">
        <div className="font-medium">Professional Bio: </div>
        <div className="">Dr. Emily Johnson is a board-certified Cardiologist with over 15 years of experience in providing comprehensive cardiovascular care. She completed her medical degree at XYZ University School of Medicine and pursued her residency in Cardiology at City Hospital. 
Dr. Johnson is recognized for her commitment to excellence in patient care and has received accolades for her contributions to advancements in cardiac research.</div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 grid-flow-col mt-8">

        <div className="">
        <div className="font-medium flex-col flex">Hospital Affiliations:</div>
          <div className="">City General Hospital</div>
          <div className="">HeartCare Medical Center</div>
        </div>
        <div className="">
        <div className="font-medium">Language Spoken:</div>
          <div className="">English</div>
          <div className="">Pidgin Engish</div>
          <div className="">Yoruba</div>
        </div>
        <div className="">
      <div className="font-medium">Available Hours:</div>
    <div className="">Monday to Friday: 8:00 AM - 4:00 PM</div>
    <div className="">Saturday: 10:00 AM - 1:00 PM</div>
      </div>
<div className="">
  <div className="font-medium">Medical Licenses and Certifications:</div>
  <div className="flex flex-wrap">
    <div className="">Medical License:</div>
    <div className="">278289781371Y397E973</div>
  </div>
  <div className="flex flex-wrap">
    <div className="">Board Certification:</div>
    <div className=""> American Board of Internal Medicine (ABIM), Subspecialty Board in Cardiovascular Disease</div>
  </div>
</div>

      </div>


    <div className="flex justify-end"><button className='px-8 text-white py-2 bg-[#3263CF]'>Message</button></div>
    </div>
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