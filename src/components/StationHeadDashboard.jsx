
import '../Css/UserDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import StationHeadProfile from './StationHeadProfile'
import OfficerTable from './OfficerTable'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './service/AuthProvider'
import IncidentTable from './IncidentTable'
import StationHeadService from '../services/StationHeadService'
import { Link, useNavigate } from 'react-router-dom'
export default function StationHeadDashboard()
{ const {auth,setAuth,setUserId,setIncId} =useContext(AuthContext)
const [incident,setIncident]=useState([])
const navigate=useNavigate()
useEffect(()=>{
StationHeadService.getAllIncident(auth).then((response)=>{
        setIncident(response.data)
    })
    .catch(error=>console.log(error)
)
},[incident])

const handleLogOut=()=>
{
    
    setAuth({})
    setUserId(0)
    setIncId(0)
    console.log("Logged Out")
    navigate("/home")
}
    return (
        <div >
            
            <div className="userPanel">
            <div className="SlideBar">
                <div className="SlideBarChild ">
                <Link to="/Dashboard" ><FontAwesomeIcon icon={faGauge} /></Link>
                <Link to="/Home" ><FontAwesomeIcon icon={faHouse}/></Link>
                <button onClick={handleLogOut}><FontAwesomeIcon icon={faRightFromBracket}/>  </button>           
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