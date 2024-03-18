import React, { useContext, useState } from 'react'
import '../Css/AssignOfficer.css'
import StationHeadService from '../services/StationHeadService'
import { AuthContext } from './context/AuthProvider'
import { Navigate, useNavigate } from 'react-router-dom'
export const AssignOfficer=()=>
{
    const {auth}=useContext(AuthContext)
    const [officerId,setOfficerId]=useState(0)
    const [incidentId,setIncidentId]=useState(0)
    const navigate=useNavigate()
    const handleAssignOfficer=(e)=>
    { e.preventDefault()
        StationHeadService.AssignIncidentToOfficer(incidentId,officerId,auth).then(response=>{
           
            console.log(response.data)
        navigate("/Dashboard")
        })
            .catch(error=>console.log(error))
    }
    return(
        <div className="AssignOfficer">
        <div className="FormAssign">
        <h2>Assign Officer</h2>
       
            <form id="AssignFormId">
            <label >Officer Id</label>
            <br/>
            <input type="text"  placeholder="Officer Id " onChange={(e)=>setOfficerId(e.target.value)}/>
            <br/><br/>
            <label >Incident Id</label>
            <br/>
            <input type="text"  placeholder="Incident Id " onChange={(e)=>setIncidentId(e.target.value)}/>
            
            <br/><br/>
           <input className="btn btn-primary" type="submit" onClick={handleAssignOfficer}/>
           </form>
    </div>
    
</div>
    )
}