import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex h-screen flex-col justify-center items-center">
        <div className="">Welcome</div>

        <div className="flex flex-col gap-8">
            <button className="bg-blue-400 rounded px-5 py-2">Create A New DID</button>
            <button className="bg-blue-400 rounded px-5 py-2">Use Existing DID</button>
        </div>
        
    </div>
    </>
  )
}

export default page