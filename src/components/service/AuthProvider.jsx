import {createContext,useState } from "react";
import React from 'react'
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [auth,setAuth]=useState({})
    const [userId,setUserId]=useState(0);
   
  return ( 
    <AuthContext.Provider value={{auth,setAuth,userId,setUserId} }>  {children}</AuthContext.Provider>
  )
}
export default AuthProvider;