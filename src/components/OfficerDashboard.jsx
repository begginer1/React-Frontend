
import '../Css/UserDashboard.css'
import brandImage from '../images/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { IncidentTypeComponent } from './IncidentTypeComponent'
import OfficerProfileCard from './OfficerProfileCard'
import Table from './IncidentTable'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import OfficerService from '../services/OfficerService'
import IncidentTable from './IncidentTable'
import { Link, useNavigate } from 'react-router-dom'

export default function OfficerDashboard()
{
    const {auth,userId,setAuth,setUserId, setIncId}=useContext(AuthContext)
    const [officerObj,setOfficerObj]= useState({})
    const [incident,setIncident]=useState([])
    const navigate=useNavigate()
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
        setIncident(response.data)
})
.catch((error)=>{
console.log(error)
})
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