
import '../Css/UserDashboard.css'
import brandImage from '../images/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile } from '@fortawesome/free-solid-svg-icons'
import { IncidentTypeComponent } from './IncidentTypeComponent'
import StationHeadProfile from './StationHeadProfile'
import UserTable from './UserTable'
export default function StationHeadDashboard()
{
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
            
            <StationHeadProfile/>
           <IncidentTypeComponent/>

            </div>
            <div className='DashBoardTable'>
            <UserTable/>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
          
            </div>
            </div>
            </div>
            </div>

        </div>
    )

}