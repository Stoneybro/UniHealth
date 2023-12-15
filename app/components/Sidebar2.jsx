// Import necessary modules from React, Next.js, and custom components
'use client'
import React from 'react';
import Homeicon from './Homeicon';
import Settings from './Settings';
import Link from 'next/link';
import { useGlobalContext } from './utils/Provider';

// Define the Sidebar component
const Sidebar = () => {
  // Access global context variables and functions
  const { setData, data, setId, setWeb5, setDid, nav, setNav } = useGlobalContext();

  // Return the sidebar JSX
  return (
    <div className={`lg:sticky top-[3rem] lg:top-0 left-0 overflow-hidden absolute z-20 bg-white ${nav ? 'w-screen h-screen' : 'lg:w-auto lg:h-screen w-0 h-0'} lg:flex justify-center pt-8`}>
      {/* Sidebar items for larger screens */}
      <div className="lg:flex flex-col gap-8 hidden">
        <Link href={'/professionals'}><Homeicon /></Link>
        <Link href={'/professionals/settings'}><Settings /></Link>
      </div>

      {/* Responsive sidebar for smaller screens */}
      <div className={`lg:hidden flex-col ${nav ? 'opacity-100' : 'opacity-0'} bg-white text-3xl items-center pt-8 lg:pt-0 flex justify-center`}>
        <div className="w-full flex justify-center border-b-[1px] border-b-[#EBF1F8] py-4" onClick={() => setNav(false)}><Link href={'/professionals'}> Home</Link></div>
        <div className="w-full flex justify-center border-b-[1px] border-b-[#EBF1F8] py-4" onClick={() => setNav(false)}><Link href={'/professionals/settings'}>Personal Information</Link></div>
        <div className="w-full flex justify-center py-4" onClick={() => setNav(false)}><Link href={'/professionals/settings/emergency'}>Emergency Information</Link></div>
      </div>
    </div>
  );
}

// Export the Sidebar component as the default export
export default Sidebar;
