import { useContext, useEffect, useState } from "react"
import UserService from "../services/UserService"
import { AuthContext } from "./context/AuthProvider"
import { RegisterUserForm } from "./RegisterUserForm"
import UserDashboard from "./UserDashboard"
import { useNavigate } from "react-router-dom"
import OfficerService from "../services/OfficerService"

export const Dashboard=()=>{
const {auth,setUserId,userId}=useContext(AuthContext)

const navigate=useNavigate()  
useEffect(()=>{
    if(auth.userDto.role==="ROLE_USER"){
        UserService.getIdByEmail(auth).then((response)=>
       { // console.log('auth',auth)
            setUserId(response.data.id)
        //    console.log(auth)
        console.log(auth.userDto.role)
           navigate('/UserDashboard')
       })
       .catch((error)=>{
        console.log("User Not registered")
        navigate('/RegisterUser')
    })
}
        else if(auth.userDto.role==="ROLE_OFFICER")
        {
            OfficerService.getOfficerByEmail(auth).then((response)=>
       { // console.log('auth',auth)
            setUserId(response.data.id)
        //    console.log(auth)
        console.log("userId off",userId)
        console.log(auth.userDto.role)
        navigate('/OfficerDashboard')
       })
       .catch((error)=>{
        console.log("Officer Not registered In database")
    })
        }
        else if(auth.userDto.role==="ROLE_STATION_HEAD")
            navigate('/SationHeadDashboard')
        },[])
        //UserService.GetUser();
    }
   