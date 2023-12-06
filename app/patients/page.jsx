'use client'
import { Web5 } from '@web5/api'
import React,{ useState,useEffect} from 'react'

const page = () => {
  const [web5,setWeb5]=useState()
  const [myDid,setMyDid]=useState()
  const [newDid,setNewDid]=useState(false)
  const [records,setRecords]=useState('')

const didInit = async () => {
    const { web5, did } = await Web5.connect();
    if (web5 && did) {
        setWeb5(web5);
        setMyDid(did);
    }
    const response = await web5.dwn.records.query({
        from: did,
        message: {
          filter: {
            schema: 'https://schema.org/medicalrecords',
            dataFormat: 'application/json',
          },
        },
      });
      if (response.records.length===0) {
        const { record } = await web5.dwn.records.write({
          data:{
            content:{
              title:'medical records',
              content:{
                diagnosis:'headache'
              }
            }
          },
          message: {
            dataFormat: 'application/json',
            published:true,
            schema: 'https://schema.org/medicalrecords',
          },
        });
        console.log(record);
        
        console.log('created a new record');
        console.log(record.data);
      }else{

        const newrecord=await response.records[0].data.json()

        if (newrecord) {
          setRecords(newrecord)
        }

        
        response.records.forEach((record) => {
          setRecords(record.data.json())
          console.log(record.data.json()); 
        });
        console.log('i ran the query data code');
      }

      if (newrecord==records) {
        console.log(records);
      }
      if (records) {
        console.log(records);
      }
}


  return (
    <>
    <div className="flex h-screen flex-col justify-center items-center">
        <div className="">Welcome</div>
        <div className="flex flex-col gap-8">
          <div className="">
          <button className="bg-blue-400 rounded px-5 py-2"  >Use Existing DID</button>
          {newDid&&<div className="border border-black rounded-md overflow-hidden w-full"><input type="text" onChange={(e)=>setMyDid(e.target.value)} value={myDid} className='w-full' /><button  className='px-4 py-1 bg-blue-400'>submit</button></div>}
          </div>
            <button className="bg-blue-400 rounded px-5 py-2" onClick={()=>didInit()}>Sign-in</button>
        </div>
        
    </div>
    </>
  )
}

export default page