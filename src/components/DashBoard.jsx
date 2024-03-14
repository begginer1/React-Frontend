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
       { // console.log('auth',auth)
            setUserId(response.data.id)
        //    console.log(auth)
        if(auth.userDto.role==="ROLE_USER")
           navigate('/UserDashboard')
        else if(auth.userDto.role==="ROLE_OFFICER")
        navigate('/OfficerDashboard')
           
        //setUsedId()
        })
        .catch((error)=>{
            console.log("User Not registered")
            if(auth.userDto.role==="ROLE_USER")
            navigate('/RegisterUser')
            else if(auth.userDto.role==="ROLE_STATION_HEAD")
            navigate('/SationHeadDashboard')
        })
        //UserService.GetUser();
    },[])
   
}