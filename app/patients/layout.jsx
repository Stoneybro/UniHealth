'use client'
import { Web5 } from '@web5/api'
import React,{ useEffect, useState} from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar1'

const layout = ({children}) => {
    const [web5,setWeb5]=useState()
    const [myDid,setMyDid]=useState()
    const [newDid,setNewDid]=useState(false)
    const [records,setRecords]=useState()

//   useEffect(()=>{
//     async function web5Init(params) {
//         try {
//           const { web5, did } = await Web5.connect();
//           if (web5&&did) {
//             setWeb5(web5)
//             setMyDid(did)
//           }
//           const response = await web5.dwn.records.query({
//             from: myDid,
//             message: {
//               filter: {
//                 schema: 'https://schema.org/unihealth/medicalrecords',
//                 dataFormat: 'application/json',
//               },
//             },
//           });
//           console.log(response.records);
          
//           if (response.records.length === 0) {
//             const { record } = await web5.dwn.records.write({
//               data: {
//                 medicalRecords: {
//                   general: {
//                     diagnosis: [
//                       { date: '', condition: '' }
//                     ],
//                     medication: [
//                       {
//                         drug: '',
//                         dose: ''
//                       }
//                     ]
//                   },
//                   prescription: {},
//                   vaccination: {},
//                   surgery: {}
//                 },
//                 personalInformation: {
//                   Dob: {},
//                   Phone: {},
//                   Email: {},
//                   Address: {},
//                   Gender: {},
//                   Height: {},
//                   Weight: {}
//                 }
//               },
              
//               message: {
//                 dataFormat: 'application/json',
//                 published: true,
//                 schema: 'https://schema.org/unihealth/medicalrecords',
//               },
//             })
//           console.log('records created');
//           }else{

//                 const newRecord = await response.records[0].data.json();
//                   console.log(newRecord);
//                 setRecords(newRecord.content);
//                 console.log('records queried');

//             }

//         } catch (error) {
//           console.log(error);
//         }

// }
// web5Init()
//   },[])
   







  return (
    <div className='bg-[#F6F7FA] h-full'>
    <Nav />
    <div className="grid  grid-cols-[5%,95%]">
    <div className="">
    <Sidebar />
   
    </div>
    <div className=" m-6">
    {children}
    </div>
    </div>
    </div>
  )
}

export default layout