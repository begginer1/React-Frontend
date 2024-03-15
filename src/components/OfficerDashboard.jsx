
import '../Css/UserDashboard.css'
import brandImage from '../images/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile } from '@fortawesome/free-solid-svg-icons'
import { IncidentTypeComponent } from './IncidentTypeComponent'
import OfficerProfileCard from './OfficerProfileCard'
import Table from './IncidentTable'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './service/AuthProvider'
import OfficerService from '../services/OfficerService'
import IncidentTable from './IncidentTable'

export default function OfficerDashboard()
{
    const {auth,userId}=useContext(AuthContext)
    const [officerObj,setOfficerObj]= useState({})
    const [incident,setIncident]=useState([])
    console.log(userId)
    useEffect(()=>
{
    
    OfficerService.getOfficerByEmail(auth).then((response)=>{
    setOfficerObj(response.data)
})
.catch((error)=>{
console.log(error)
})
},[])

useEffect(()=>
{
    
    OfficerService.IncidentOfOfficer(userId,auth).then((response)=>{
    console.log(response.data)
        setIncident(response.data)
})
.catch((error)=>{
console.log(error)
})
},[])
    return (
        <div >
            
            <div className="userPanel">
            <div className="SlideBar">
                <div className="SlideBarChild ">
                <FontAwesomeIcon icon={faGauge} onClick={()=>console.log("dashboard")}/> 
                <FontAwesomeIcon icon={faHouse}  onClick={()=>console.log("Home")} />
                <FontAwesomeIcon icon={faFile}  onClick={()=>console.log("Register")}/>          
                </div>
                </div>
            
            
            <div className="NonSlideBar">
                <p className ="text"style={{alignSelf:'center'}}>Dashboard</p>
            <div className="UserDetails">
            
            <OfficerProfileCard value={officerObj}/>
           <IncidentTypeComponent/>

            </div>
            <div className='DashBoardTable'>
            <IncidentTable value={incident}/>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
          
            </div>
            </div>
            </div>
            </div>

        </div>
    )

}