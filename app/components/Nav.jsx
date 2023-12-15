// Import necessary modules from React, Next.js, and external libraries
'use client'
import React from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { BiX } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { useGlobalContext } from './utils/Provider';

// Define the Nav component
const Nav = () => {
  // Access the 'nav' state and 'setNav' function from the global context
  const { nav, setNav } = useGlobalContext();

  // Return the navigation bar JSX
  return (
    <div className="w-full bg-white">
      <div className='bg-white sticky top-0 w-full py-4 flex justify-between items-center max-w-[1250px] mx-auto px-4'>
        {/* Logo section with a link to the home page */}
        <div className="2">
          <Link href={'/'}>
            <Image src={logo} width={150} height={150} />
          </Link>
        </div>

        {/* Responsive menu icon */}
        <div className="lg:hidden" onClick={() => setNav(!nav)}>
          {nav ? <BiX size={40} /> : <BiMenu size={40} />}
        </div>
      </div>
    </div>
  );
}

// Export the Nav component as the default export
export default Nav;
