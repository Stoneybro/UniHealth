 'use client'
import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar1';
import Provider from '../components/utils/Provider';

const layout = ({ children }) => {
  // State variables for Web5, DID, new DID, records, and record ID
  const [web5, setWeb5] = useState();
  const [myDid, setMyDid] = useState();
  const [newDid, setNewDid] = useState(false);
  const [records, setRecords] = useState();
  const [recordId, setRecordId] = useState();

  useEffect(() => {
    // Function to initialize Web5
    async function web5Init() {
      const { Web5 } = await import("@web5/api");
      try {
        const { web5, did } = await Web5.connect({ sync: '2s' });
        if (web5 && did) {
          setWeb5(web5);
          setMyDid(did);
          await configureProtocol(web5, did);
        }

        // Check if there is a stored record ID
        if (localStorage.getItem('recordId')) {
          try {
            const recordObject = localStorage.getItem('recordId');
            const recordNo = JSON.parse(recordObject);

            // Read the record from Web5
            const { record } = await web5.dwn.records.read({
              from: did,
              message: {
                filter: {
                  recordId: recordNo.recordId,
                },
              },
            });

            // Parse the record data
            const newRecord = await record.data.json();
            console.log(newRecord);

            if (record) {
              // Set records and record ID
              const data = await record.data.json();
              setRecords(data);
              setRecordId(recordNo.recordId);
              console.log(recordNo.recordId);
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          // If no record ID found, create new records
          console.log('No records found, creating new records');
          const { record } = await web5.dwn.records.write({
            "data": {
              "message": {
                "dataFormat": "application/json",
                "published": true,
                "schema": "https://schema.org/unihealth/medicalrecords",
                "protocol": "https://schema.org/unihealth"
              },
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
              "emergencyInformation": {
                "Nok": "",
                "Nokphone": "",
                "relationship": "",
                "Nokaddress": "",
              }
            }
          });

          // Parse the data and set records and record ID
          const data = await record.data.json();
          setRecordId(record.id);

          if (data) {
            setRecords(data);
            console.log(data, 'records created and set');
          }

          // Send the record to the DID
          const { status } = await record.send(did);
          console.log(status);

          // Store the record ID locally
          localStorage.setItem('recordId', JSON.stringify(record));
        }
      } catch (error) {
        console.log(error);
      }
    }

    // Call the Web5 initialization function
    web5Init();
  }, []);

  // Function to create protocol definition
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
        },
        "emergencylInformation": {
          "schema": "https://schema.org/unihealth/emergencyinformation",
          "dataFormats": ["application/json"]
        }
      },
      "structure": {
        "medicalrecords": {
          "$actions": [
            { "who": "anyone", "can": "read" },
            { "who": "recipient", "of": "medicalrecords", "can": "write" },
            { "who": "recipient", "of": "medicalrecords", "can": "read" }
          ]
        },
        "personalInformation": {
          "$actions": [
            { "who": "author", "of": "personalInformation", "can": "read" },
            { "who": "author", "of": "personalInformation", "can": "write" },
            { "who": "recipient", "of": "personalinformation", "can": "read" }
          ]
        },
        "emergencyInformation": {
          "$actions": [
            { "who": "author", "of": "personalInformation", "can": "write" },
            { "who": "anyone", "can": "read" }
          ]
        }
      }
    };

    return unihealthProtocolDefinition;
  };

  // Function to query for the protocol
  const queryForProtocol = async (web5) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: "https://schema.org/unihealth",
        },
      },
    });
  };

  // Function to install the protocol locally
  const installProtocolLocally = async (web5, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  // Function to configure the protocol
  const configureProtocol = async (web5, did) => {
    const protocolDefinition = await createProtocolDefinition();

    const { protocols: localProtocol, status: localProtocolStatus } =
      await queryForProtocol(web5);
    console.log({ localProtocol, localProtocolStatus });

    if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
      // Install the protocol locally if not already installed
      const { protocol, status } = await installProtocolLocally(web5, protocolDefinition);
      //console.log("Protocol installed locally", protocol, status);

      // Send the protocol to the remote DWN
      const { status: configureRemoteStatus } = await protocol.send(did);
      // console.log("Did the protocol install on the remote DWN?", configureRemoteStatus);
    } else {
      console.log("Protocol already installed");
    }
  };

  return (
    <Provider>
      <div className='bg-[#F6F7FA] h-full min-h-[100vh] lg:min-h-[auto]'>
        <Nav />
        <div className="lg:grid  lg:grid-cols-[5%,95%]">
          <div className="">
            <Sidebar records={records} id={recordId} web5={web5} mydid={myDid} />
          </div>
          <div className="m-3 lg:m-6">
            {children}
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default layout;
