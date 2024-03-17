
import '../Css/UserDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile } from '@fortawesome/free-solid-svg-icons'
import { IncidentTypeComponent } from './IncidentTypeComponent'
import ProfileCard from './ProfileCard'
import { Link } from 'react-router-dom'
import {  useContext, useEffect, useState } from 'react'
import { AuthContext} from './service/AuthProvider'
import UserService from '../services/UserService'
import IncidentTable from './IncidentTable'
 function UserDashboard(){

    const {auth,setAuth}= useContext(AuthContext)

const [userObj,setUserObj]=useState({})
const [refreshCard,setRefreshCard]=useState(true)
// const[userId,SetUserId]=useState(1)
//    console.log(TokenObj.token)
const {userId}=useContext(AuthContext)
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


   
    return (
        <div >
            
            <div className="userPanel">
            <div className="SlideBar">
                <div className="SlideBarChild ">
                <Link to="/Dashboard" ><FontAwesomeIcon icon={faGauge} /></Link>
                <Link to="/Home" ><FontAwesomeIcon icon={faHouse}/></Link>
                <Link to=""><FontAwesomeIcon icon={faFile}/> </Link>        
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