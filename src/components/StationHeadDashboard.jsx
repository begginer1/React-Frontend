
import '../Css/UserDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile } from '@fortawesome/free-solid-svg-icons'
import StationHeadProfile from './StationHeadProfile'
import OfficerTable from './OfficerTable'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './service/AuthProvider'
import IncidentTable from './IncidentTable'
import StationHeadService from '../services/StationHeadService'
export default function StationHeadDashboard()
{ const {auth} =useContext(AuthContext)
const [incident,setIncident]=useState([])

useEffect(()=>{
StationHeadService.getAllIncident(auth).then((response)=>{
        setIncident(response.data)
    })
    .catch(error=>console.log(error)
)
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
            
            
            <div className="NonSlideBar" >
                <p className ="text"style={{alignSelf:'center'}}>Dashboard</p>
            <div className="UserDetails">
            
            <StationHeadProfile value={auth?.userDto}/>
           
           <div style={{display:'flex',flexDirection:'column',alignContent:'space-between',overflow:'scroll', width:'60%'}}>
           <OfficerTable/>
           </div>
          
            </div>
            <div className='DashBoardTable'>
            <IncidentTable value={incident}/>
            </div>
            </div>
            </div>

        </div>
    )

}