// Import necessary modules from React and custom components
'use client'
import { useState, useCallback } from 'react';
import React from 'react';
import { useGlobalContext } from '@/app/components/utils/Provider';

// Define the Page component
const Page = () => {
  // Access global context variables and functions
  const { web5, did, setData } = useGlobalContext();

  // State to manage emergency information form fields
  const [personalInfox, setPersonalInfox] = useState({
    Nok: "",
    Nokphone: "",
    relationship: "",
    Nokaddress: "",
  });

  // Handler function for input field changes
  const handleInputChange = useCallback(
    (fieldName) => (e) => {
      setPersonalInfox((prevPersonalInfox) => ({
        ...prevPersonalInfox,
        [fieldName]: e.target.value,
      }));
    },
    []
  );

  // Handler function for form submission
  async function handleSubmit(e) {
    e.preventDefault();
    if (web5) {
      try {
        // Retrieve recordId from localStorage
        const recordobject = localStorage.getItem('recordId');
        const recordno = JSON.parse(recordobject);

        // Read the record using web5
        const { record } = await web5.dwn.records.read({
          from: did,
          message: {
            filter: {
              recordId: recordno.recordId,
            },
          },
        });

        // Parse the existing record data
        const newrecord = await record.data.json();

        // Update emergencyInformation field in the record
        const updatedData = {
          ...newrecord,
          emergencyInformation: personalInfox,
        };

        // Log the updated data
        console.log(updatedData);

        // Update the record with the new data
        const response = await record.update({ data: updatedData });

        // Log the status of the update
        console.log(response.status.detail);

        // Check if the update was successful
        if (response.status.code === 202) {
          // Data has been updated successfully
          const { record } = await web5.dwn.records.read({
            message: {
              filter: {
                recordId: recordno.recordId,
              },
            },
          });
          const data = await record.data.json();

          // Log the updated data
          console.log(data);

          // Set the updated data in the global context
          setData(data);

          // Send the updated record
          const { status } = await record.send(did);
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

  // Return the JSX for the page
  return (
    <div className=' lg:pl-6 lg:pr-12 min-h-[80vh]'>
      <div className="text-xl lg:hidden">Emergency Information</div>
      <form onSubmit={handleSubmit}>
        {/* Input fields for emergency information */}
        {/* Next of Kin name */}
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

        {/* Next of Kin Phone */}
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

        {/* Relationship */}
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

        {/* Next of Kin address */}
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

        {/* ... (other fields) */}
        
        {/* Submit button */}
        <div className="flex justify-end py-4">
          <button className='bg-[#3263CF] px-3 py-1 text-white'>Submit</button>
        </div>
      </form>
    </div>
  );
}

// Export the Page component as the default export
export default Page;
