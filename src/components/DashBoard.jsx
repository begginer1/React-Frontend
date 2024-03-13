import { useContext, useEffect, useState } from "react"
import UserService from "../services/UserService"
import { AuthContext } from "./service/AuthProvider"
import { RegisterUserForm } from "./RegisterUserForm"
import UserDashboard from "./UserDashboard"
import { useNavigate } from "react-router-dom"

export const Dashboard=()=>{
const {auth,setUserId}=useContext(AuthContext)
const navigate=useNavigate()  
useEffect(()=>{
        UserService.getIdByEmail(auth).then((response)=>
        {console.log('auth',auth)
            setUserId(response.data.id)
           console.log(auth)
           navigate('/UserDashboard')
        //setUsedId()
        })
        .catch((error)=>{
            console.log("User Not registered")
            navigate('/RegisterUser')
        })
        //UserService.GetUser();
    },[])
   
}