import { createContext, useState } from "react";

export const TokenContext=createContext(null);

export const TokenContextProvider=(props)=>{
const [token,setToken]=useState('')
const [email,setEmail]=useState('')
const [role,setRole]=useState({})
    return(
    <TokenContext.Provider value={{token,setToken,email,setEmail,role,setRole}}>
        {props.children}
    </TokenContext.Provider>
)
}
