import  {Header} from './Header' 
import  Footer  from "./Footer"
import '../Css/UserDashboard.css'
import brandImage from '../images/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile } from '@fortawesome/free-solid-svg-icons'
import { IncidentTypeComponent } from './IncidentTypeComponent'
import ProfileCard from './ProfileCard'
import Table from './IncidentTable'
import { Link } from 'react-router-dom'
export default function UserDashboard()
{
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
            
            <ProfileCard/>
           <IncidentTypeComponent/>

            </div>
            <div className='DashBoardTable'>
            <Table/>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                <button className='btn btn-primary'>Report Incident</button>
            </div>
            </div>
            </div>
            </div>

        </div>
    )

}