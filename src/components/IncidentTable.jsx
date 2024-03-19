import React, { useContext } from 'react';
import '../Css/Table.css'
import IncidentService from '../services/IncidentService';
import { AuthContext } from './context/AuthProvider';

import OfficerService from '../services/OfficerService';
import StationHeadService from '../services/StationHeadService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const IncidentTable = (props) => {
  // console.log(props.value.incident)
  const navigate=useNavigate()
  const {incId,auth,setIncId}=useContext(AuthContext)

  const deleteEvent=(incidentId)=>{
    
    
    IncidentService.deleteIncident(incidentId,auth).then((response)=>{
      
    })
    .catch((error)=>
    {
      console.log(error)
    })
  }
  const handleCloseStatus=(incidentId)=>{
    OfficerService.closeIncident(incidentId,auth).then((response)=>{
    console.log(response.data)})
    .catch((error)=>
    {
      console.log(error)
    })
  }

  const handleVerify=(incidentId)=>{
    StationHeadService.VerifyIncident(incidentId,auth)
    .then((response)=>{
      console.log(response.data)})
      .catch((error)=>
      {
        console.log(error)
      })
  }
  const handleDownload=(incidentId)=>
  {
    
    console.log(incidentId)
    setIncId(incidentId)
    navigate("/downloadreport")
  }
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr >
          <th className='Head'>id</th>
          <th>status</th>
          <th>Incident date</th>
          <th>type</th>
          <th>item Name</th>
          <th>item Amount</th>
          <th>image</th>
          <th>Description</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>{auth.userDto?.role==='ROLE_USER'?
      props.value?.incident?.map((incident,key)=> <tr key={key}>
                            <td>{incident.id}</td>
                            <td>{incident.status}</td>
                            <td>{incident.dateOfIncident}</td>
                            <td>{incident.incidentType}</td>
                            <td>{incident.itemName}</td>
                            <td>{incident.itemAmount}</td>
                            <td>{incident.image}</td>
                            <td>{incident.description}</td>
                            <td>{incident.location}</td>
                          
                            <td><button className='btn btn-danger' onClick={()=>deleteEvent(incident.id)}>Delete</button> </td>
                            <td><button className='btn btn-primary'  onClick={(e)=>handleDownload(incident.id)}>Download</button></td>
                        </tr>):
                        props.value?.map((incident,key)=> <tr key={key}>
                        <td>{incident.id}</td>
                        <td>{incident.status}</td>
                        <td>{incident.dateOfIncident}</td>
                        <td>{incident.incidentType}</td>
                        <td>{incident.itemName}</td>
                        <td>{incident.itemAmount}</td>
                        <td>{incident.image}</td>
                        <td>{incident.description}</td>
                        <td>{incident.location}</td>
                        {auth.userDto?.role === 'ROLE_STATION_HEAD' ? (
                            incident.status === "Initiated" ? (
                          <td><button className='btn btn-primary' onClick={() => handleVerify(incident.id)}>Verify</button></td>
                          ) : (<td><button className='btn btn-secondary' >Verified</button></td>)) :
                           (
                            <>
                          <td><button className='btn btn-danger' onClick={() => handleCloseStatus(incident.id)}>Close Case</button></td>
                          <td><button className='btn btn-primary'  onClick={(e)=>handleDownload(incident.id)}>Download</button></td>
                          </>
                            )}</tr>)

                    

      }
       

      </tbody>
    </table>
  );
};

export default IncidentTable;
