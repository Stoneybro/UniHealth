import React from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image';

// Define a layout component for the home page
const Homelayout = ({ children }) => {
  return (
    <div className='h-screen'>
      <div className="flex h-full">
        {/* Left section with logo and text */}
        <div className="lg:flex-1 lg:max-w-[50vw] hidden lg:flex flex-col justify-between items-start p-8 bg-[url:'/bg.jpg'] bg-cover bg-center h-full" style={{"backgroundImage": 'url(/bg.jpg)'}}>
          <div className="flex gap-1">
            <Image src={logo} width={150} height={150} />
          </div>
          <div className="text-4xl text-white">
            Revolutionising Healthcare with Decentralized Records and Access to Healthcare.
          </div>
        </div>
        
        {/* Right section for content */}
        <div className="lg:flex-1 w-full lg:max-w-[50vw]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Homelayout;
