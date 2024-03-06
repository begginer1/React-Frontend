import  {Header} from './Header' 
import  Footer  from "./Footer"
import '../Css/UserDashboard.css'
import brandImage from '../images/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge,faHouse,faFile } from '@fortawesome/free-solid-svg-icons'
import { IncidentTypeComponent } from './IncidentTypeComponent'
import ProfileCard from './ProfileCard'
export default function UserDashboard()
{
    return (
        <div >
            
            <div className="userPanel">
            <div className="SlideBar">
                <div className="SlideBarChild ">
                <FontAwesomeIcon icon={faGauge}  />
                <FontAwesomeIcon icon={faHouse} />
                <FontAwesomeIcon icon={faFile} />          
                </div>
                </div>
            
            
            <div className="NonSlideBar">
                <p className ="text"style={{alignSelf:'center'}}>Dashboard</p>
            <div className="UserDetails">
            
            <ProfileCard/>
           <IncidentTypeComponent/>

            </div>
            <div className='DashBoardTable'>
            <table className='table table-hover'>
                <head>
                    <tr>
                    <th>status</th>
                    <th> incidentType</th>
             <th> itemName</th>
                <th> itemAmount</th>
            <th> image</th>
             <th> description</th>
            <th>location</th>
                   
                    </tr>
                </head>
                <body></body>

            </table>
            </div>
            </div>
            </div>

        </div>
    )

}