// Import necessary modules from React
'use client'
import React, { createContext, useContext, useState } from 'react';

// Create a context for managing global state
const context = createContext();

// Create a provider component to wrap around your app
const Provider = ({ children }) => {
  // Define state variables using the useState hook
  const [data, setData] = useState('');
  const [id, setId] = useState('');
  const [web5, setWeb5] = useState(); 
  const [did, setDid] = useState();
  const [nav, setNav] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    Dob: '',
    Phone: '',
    Address: '',
    Email: '',
    Height: '',
    Weight: '',
    Gender: ''
  });

  // Provide the state variables to the context
  return (
    <context.Provider value={{ data, setData, personalInfo, setPersonalInfo, id, setId, setWeb5, web5, did, setDid, nav, setNav }}>
      {children}
    </context.Provider>
  );
}

// Create a custom hook for using the global context
export const useGlobalContext = () => useContext(context);

// Export the provider component as the default export
export default Provider;
