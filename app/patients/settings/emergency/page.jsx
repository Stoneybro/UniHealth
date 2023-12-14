'use client'
import { useState,useCallback } from 'react';
import React from 'react';
import { useGlobalContext } from '@/app/components/utils/Provider';

const Page = () => {
  const { web5, did,setData } = useGlobalContext();
  const [personalInfox, setPersonalInfox] = useState({
    Nok: "",
    Nokphone: "",
    relationship: "",
    Nokaddress: "",
  });
  const handleInputChange = useCallback(
    (fieldName) => (e) => {
      setPersonalInfox((prevPersonalInfox) => ({
        ...prevPersonalInfox,
        [fieldName]: e.target.value,
      }));
    },
    []
  );
  async function handleSubmit(e) {
    e.preventDefault();
    if (web5) {
      try {
        const recordobject = localStorage.getItem('recordId');
        const recordno = JSON.parse(recordobject);
        const { record } = await web5.dwn.records.read({
          from: did,
          message: {
            filter: {
              recordId: recordno.recordId,
            },
          },
        });
      
        const newrecord=await record.data.json()
                
        const updatedData = {
          ...newrecord,
          emergencyInformation:personalInfox,
        };
        console.log(updatedData);
        const response = await record.update({data:updatedData });
        console.log(response.status.detail);
        if (response.status.code === 202) {
          // Data has been updated successfully
          const { record } = await web5.dwn.records.read({
            message: {
              filter: {
                recordId: recordno.recordId,
              },
            },
          });
          const data= await record.data.json()
          
          console.log(data);
          setData(data)
          const {status} =await record.send(did)
          console.log(status);
        } else {
          // Data update failed
          console.log("Failed to update record");
        }

        
      } catch (error) {
        console.log(error);
      }


    }
  }
  return (
    <div className=' lg:pl-6 lg:pr-12 min-h-[80vh]'>
      <div className="text-xl lg:hidden">Emergency Information</div>
      <form onSubmit={handleSubmit}>
      {/* Date of Birth */}
      <div className=" border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
          <div className="text-[15px] text-[#808080]">Next of Kin name</div>
          <div className="">
            <input
              onChange={handleInputChange('Nok')}
              value={personalInfox.Nok}
              type="text"
              className='bg-[#EBF1F8] outline-none text-black'
            />
          </div>
        </div>

      {/* Phone Number */}
      <div className=" border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
          <div className="text-[15px] text-[#808080]">Next of Kin Phone</div>
          <div className="">
            <input
              onChange={handleInputChange('Nokphone')}
              value={personalInfox.Nokphone}
              type="text"
              className='bg-[#EBF1F8] outline-none text-black'
            />
          </div>
        </div>


            {/* relationship */}
            <div className=" border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
          <div className="text-[15px] text-[#808080]">Relationship</div>
          <div className="">
            <input
              onChange={handleInputChange('relationship')}
              value={personalInfox.relationship}
              type="text"
              className='bg-[#EBF1F8] outline-none text-black'
            />
          </div>
        </div>

      {/* Address */}
      <div className=" border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
          <div className="text-[15px] text-[#808080]">Next of Kin address</div>
          <div className="">
            <input
              onChange={handleInputChange('Nokaddress')}
              value={personalInfox.Nokaddress}
              type="text"
              className='bg-[#EBF1F8] outline-none text-black'
            />
          </div>
        </div>





      <div className=" flex justify-end py-4"><button className='bg-[#3263CF] px-3 py-1 text-white '>Submit</button></div>
      </form>
    </div>
  );
}

export default Page;
