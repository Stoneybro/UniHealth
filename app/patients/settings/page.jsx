'use client'
import React, { useEffect, useState, useCallback } from 'react';
import { useGlobalContext } from '@/app/components/utils/Provider';

const Page = () => {
  const { web5, did } = useGlobalContext();
  const [click, setClick] = useState(true);
  const [personalInfox, setPersonalInfox] = useState({
    Dob: '',
    Phone: '',
    Address: '',
    Email: '',
    Height: '',
    Weight: '',
    Gender: '',
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
            personalInformation: personalInfox,
          };
          console.log(updatedData);
          const response = await record.update({data:updatedData });
          console.log(response.status.detail);
          if (response.status.code === 202) {
            // Data has been updated successfully
            const { record } = await web5.dwn.records.read({
              message: {
                filter: {
                schema:''
                },
              },
            });
          
            console.log(record);
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
      <div className="text-xl lg:hidden">Personal Information</div>
      <form onSubmit={handleSubmit}>
        <div className=" border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
          <div className="text-[15px] text-[#808080]">Date of birth</div>
          <div className="">
            <input
              onChange={handleInputChange('Dob')}
              value={personalInfox.Dob}
              type="text"
              className='bg-[#EBF1F8] outline-none text-black'
            />
          </div>
        </div>

        <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
          <div className="text-[15px] text-[#808080]">Phone number</div>
          <div className="">
            <input
              onChange={handleInputChange('Phone')}
              value={personalInfox.Phone}
              type="text"
              className='bg-[#EBF1F8] outline-none'
            />
          </div>
        </div>

        <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
          <div className="text-[15px] text-[#808080]">Address</div>
          <div className="">
            <input
              onChange={handleInputChange('Address')}
              value={personalInfox.Address}
              type="text"
              className='bg-[#EBF1F8] outline-none'
            />
          </div>
        </div>

        <div className="border-b-[1px] border-b-[#EBF1F8] py-4 flex flex-col gap-4">
          <div className="text-[15px] text-[#808080]">Email</div>
          <div className="">
            <input
              onChange={handleInputChange('Email')}
              value={personalInfox.Email}
              type="text"
              className='bg-[#EBF1F8] outline-none'
            />
          </div>
        </div>

        <div className="">
          <div className="flex gap-4 py-4 border-b-[1px] border-b-[#EBF1F8] flex-col lg:flex-row">
            <div className="">
              <div className="text-[15px] text-[#808080]">Height</div>
              <div className="">
                <input
                  onChange={handleInputChange('Height')}
                  value={personalInfox.Height}
                  type="number"
                  className='bg-[#EBF1F8] outline-none'
                />
              </div>
            </div>

            <div className="">
              <div className="text-[15px] text-[#808080]">Weight</div>
              <div className="">
                <input
                  onChange={handleInputChange('Weight')}
                  value={personalInfox.Weight}
                  type="text"
                  className='bg-[#EBF1F8] outline-none'
                />
              </div>
            </div>
          </div>

          <div className=" py-4 flex flex-col gap-4 border-b-[1px] border-b-[#EBF1F8]">
            <div className="text-[15px] text-[#808080]">Gender</div>
            <div className="">
              <input
                onChange={handleInputChange('Gender')}
                value={personalInfox.Gender}
                type="text"
                className='bg-[#EBF1F8] outline-none'
              />
            </div>
          </div>
        </div>

        <div className=" flex justify-end py-4">
          <button
            className='bg-[#3263CF] px-3 py-1 text-white '
           
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
