
import '../Css/UserDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile } from '@fortawesome/free-solid-svg-icons'
import StationHeadProfile from './StationHeadProfile'
import OfficerTable from './OfficerTable'
import { useContext, useEffect } from 'react'
import { AuthContext } from './service/AuthProvider'
import IncidentTable from './IncidentTable'
import StationHeadService from '../services/StationHeadService'
export default function StationHeadDashboard()
{ const {auth} =useContext(AuthContext)
console.log(auth)

useEffect(()=>{
StationHeadService.getAllIncident(auth).then((response)=>{
        console.log(response.data)
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
            
            
            <div className="NonSlideBar">
                <p className ="text"style={{alignSelf:'center'}}>Dashboard</p>
            <div className="UserDetails">
            
            <StationHeadProfile value={auth?.userDto}/>
           {/* <IncidentTypeComponent/> */}
           <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
           <div className="Block"/>
           {/* <IncidentTable/> */}
           <div className="Block" ></div>
           </div>
          
            </div>
            <div className='DashBoardTable'>
            <OfficerTable/>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
          
            </div>
            </div>
            </div>
            </div>

        </div>
    )

}