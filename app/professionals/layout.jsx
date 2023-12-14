'use client'
import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar2'
import Provider from '../components/utils/Provider'
const layout = ({children}) => {
  return (
    <Provider>
    <div className='bg-[#F6F7FA] h-full min-h-[100vh] lg:min-h-[auto]'>
    <Nav />
    <div className="lg:grid  lg:grid-cols-[5%,95%]">
    <div className="">
    <Sidebar />
    </div>
    <div className="m-3 lg:m-6">
    {children}
    </div>
    </div>
    </div>
    </Provider>
  )
}

export default layout