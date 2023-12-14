'use client'
import React, { createContext, useContext, useState } from 'react'
const context=createContext()
const Provider = ({children}) => {
    const [data,setData]=useState('')
    const [id,setId]=useState('')
    const [web5,setWeb5]=useState() 
    const [did,setDid]=useState()
    const [nav,setNav]=useState(false)
    const [personalInfo, setPersonalInfo] = useState({
        Dob:'',Phone:'',Address:'',Email:'',Height:'',Weight:'',Gender:''
      })
  return (
    <context.Provider value={{data,setData,personalInfo,setPersonalInfo,id,setId,setWeb5,web5,did,setDid,nav,setNav}}>
        {children}
    </context.Provider>
  )
}
export const useGlobalContext=()=>useContext(context)
export default Provider


  