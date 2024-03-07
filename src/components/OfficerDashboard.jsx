
import '../Css/UserDashboard.css'
import brandImage from '../images/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile } from '@fortawesome/free-solid-svg-icons'
import { IncidentTypeComponent } from './IncidentTypeComponent'
import OfficerProfileCard from './OfficerProfileCard'
import Table from './IncidentTable'
export default function OfficerDashboard()
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
            
            <OfficerProfileCard/>
           <IncidentTypeComponent/>

            </div>
            <div className='DashBoardTable'>
            <Table/>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
          
            </div>
            </div>
            </div>
            </div>

        </div>
    )

}