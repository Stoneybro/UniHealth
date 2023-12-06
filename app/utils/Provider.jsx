'use client'
import { Web5 } from '@web5/api'
import React,{createContext, useContext, useState,useEffect} from 'react'
const context=createContext('')

const Provider = ({children}) => {
    const [web5,setWeb5]=useState()
    const [myDid,setMyDid]=useState()
    const [web5Init,setWeb5Init]=useState(()=>web5init())
        async function web5init(params) {
            const {web5,did}= await Web5.connect()
            if (web5&&did) {
                setWeb5(web5);
                setMyDid(did);
            }
        }
        

  return (
    <context.Provider value={{web5,myDid,web5Init}} >
        {children}
    </context.Provider>
  )
}

export const useGlobalContext=()=>useContext(context)
export default Provider
