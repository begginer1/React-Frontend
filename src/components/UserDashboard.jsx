
import '../Css/UserDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { IncidentTypeComponent } from './IncidentTypeComponent'
import ProfileCard from './ProfileCard'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {  useContext, useEffect, useState } from 'react'
import { AuthContext} from './context/AuthProvider'
import UserService from '../services/UserService'
import IncidentTable from './IncidentTable'
 function UserDashboard(){

    const {auth,setAuth,userId,setUserId,setIncId}= useContext(AuthContext)

const [userObj,setUserObj]=useState({})
const [refreshCard,setRefreshCard]=useState(true)
// const[userId,SetUserId]=useState(1)
//    console.log(TokenObj.token)
const navigate=useNavigate()
// console.log("auth",userId)
useEffect(()=>
{
    
UserService.GetUser(userId,auth).then((response)=>{
    // console.log(response.data)
    setUserObj(response.data)
    setRefreshCard(!refreshCard)
})
.catch((error)=>{
console.log(error)
})
},[userObj])

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
            
            <ProfileCard value={userObj}/>
           <IncidentTypeComponent refresh={refreshCard}/>

            </div>
            <div className='DashBoardTable' >
            <IncidentTable  value={userObj}/>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                <Link to="/home"><button className='btn btn-primary'>Report Incident</button></Link>
            </div>
            </div>
            </div>
            </div>

        </div>
    )

}

export default UserDashboard