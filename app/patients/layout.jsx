'use client'
import { Web5 } from '@web5/api'
import React,{ useEffect, useState} from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar1'
import Provider from '../components/utils/Provider'


const layout = ({children}) => {
    const [web5,setWeb5]=useState()
    const [myDid,setMyDid]=useState()
    const [newDid,setNewDid]=useState(false)
    const [records,setRecords]=useState()
    const [recordId,setRecordId]=useState()

    useEffect(() => {
      async function web5Init() {
        try {
          const { web5, did } = await Web5.connect();
          if (web5 && did) {
            setWeb5(web5);
            setMyDid(did);
            await configureProtocol(web5, did);
          }
    
          const response = await web5.dwn.records.query({
            from:did,
            message: {
              filter: {
                schema: 'https://schema.org/unihealth/medicalrecords',
                dataFormat: 'application/json'
              }
            }
          });
          response.records.forEach(record => {
            console.log(record.id);
          });
    
          const newRecord = response.records.length > 0 ? await response.records[0].data.json() : null;
         console.log(response);
          if (newRecord) {
            console.log(newRecord);
            setRecords(newRecord);
          }
    
          if (response.records.length === 0) {
            console.log('No records found, creating new records');
            const { record } = await web5.dwn.records.write({"data":{
              "medicalRecords": {
                "general": {
                  "diagnosis": [
                    { "date": "", "condition": "" }
                  ],
                  "medication": [
                    {
                      "drug": "",
                      "dose": ""
                    }
                  ]
                },
                "prescription": {},
                "vaccination": {},
                "surgery": {}
              },
              "personalInformation": {
                "Dob": "",
                "Phone": "",
                "Email": "",
                "Address": "",
                "Gender": "",
                "Height": "",
                "Weight": ""
              },
              "message": {
                "dataFormat": "application/json",
                "published": true,
                "schema": "https://schema.org/unihealth/medicalrecords",
                "protocol": "https://schema.org/unihealth",
                "protocolPath": "medicalrecords"
              }
            }
          });
            const data=await record.data.json()
            setRecordId(record.id)
            if (data) {
              setRecords(data);
              console.log(data ,'records created and set');
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    
      web5Init();
    }, [myDid]);
    

    const createProtocolDefinition = () => {
      const unihealthProtocolDefinition = {
        "protocol": "https://schema.org/unihealth",
        "published": true,
        "types": {
          "medicalRecords": {
            "schema": "https://schema.org/unihealth/medicalrecords",
            "dataFormats": ["application/json"]
          },
          "personalInformation": {
            "schema": "https://schema.org/unihealth/personalinformation",
            "dataFormats": ["application/json"]
          }
        },
        "structure": {
          "medicalrecords": {
            "$actions": [
              { "who": "author", "of": "medicalrecords", "can": "read" },
              { "who": "recipient", "of": "medicalrecords", "can": "write" },
              { "who": "recipient", "of": "medicalrecords", "can": "read" }
            ]
          },
          "personalInformation": {
            "$actions": [
              { "who": "author", "of": "personalinformation", "can": "read" },
              { "who": "author", "of": "personalinformation", "can": "write" },
              { "who": "recipient", "of": "personalinformation", "can": "read" }
            ]
          }
        }
      }
      
      return unihealthProtocolDefinition;
    };
    const queryForProtocol = async (web5) => {
      return await web5.dwn.protocols.query({
        message: {
          filter: {
            protocol: "https://health-dapp-protocol.xyz",
          },
        },
      });
    };
  
    const installProtocolLocally = async (web5, protocolDefinition) => {
      return await web5.dwn.protocols.configure({
        message: {
          definition: protocolDefinition,
        },
      });
    };
  
    const configureProtocol = async (web5, did) => {
      const protocolDefinition = await createProtocolDefinition();
  
      const { protocols: localProtocol, status: localProtocolStatus } =
        await queryForProtocol(web5);
      //console.log({ localProtocol, localProtocolStatus });
      if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
  
        const { protocol, status } = await installProtocolLocally(web5, protocolDefinition);
        //console.log("Protocol installed locally", protocol, status);
  
        const { status: configureRemoteStatus } = await protocol.send(did);
        //console.log("Did the protocol install on the remote DWN?", configureRemoteStatus);
      } else {
        //console.log("Protocol already installed");
      }
    };
  return (
    <Provider>
    <div className='bg-[#F6F7FA] h-full'>
    <Nav />
    <div className="grid  grid-cols-[5%,95%]">
    <div className="">
    <Sidebar records={records} id={recordId} web5={web5} mydid={myDid} />
    </div>
    <div className=" m-6">
    {children}
    </div>
    </div>
    </div>
    </Provider>
  )
}

export default layout





