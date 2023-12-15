// Import necessary modules from React and custom components
'use client'
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar2'; // Assuming Sidebar2 is your actual sidebar component
import Provider from '../components/utils/Provider';

// Define the layout component
const layout = ({ children }) => {
  // Return the layout JSX
  return (
    <Provider>
      {/* Outer container with background color */}
      <div className='bg-[#F6F7FA] h-full min-h-[100vh] lg:min-h-[auto]'>
        {/* Navigation bar */}
        <Nav />
        
        {/* Main content grid */}
        <div className="lg:grid lg:grid-cols-[5%,95%]">
          {/* Sidebar */}
          <div className="">
            <Sidebar />
          </div>

          {/* Main content area */}
          <div className="m-3 lg:m-6">
            {children}
          </div>
        </div>
      </div>
    </Provider>
  );
}

// Export the layout component as the default export
export default layout;
