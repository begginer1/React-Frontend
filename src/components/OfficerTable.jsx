import React, { useContext, useEffect, useState } from 'react';
import '../Css/Table.css'
import { AuthContext } from './context/AuthProvider';
import StationHeadService from '../services/StationHeadService';
import { Link } from 'react-router-dom';
const OfficerTable = () => {
  const {auth}=useContext(AuthContext)
  const [OfficerList,setOfficerList]=useState([]);
  
  useEffect(()=>
  {
    StationHeadService.getAllOfficers(auth).then((response)=>
    {
    
      setOfficerList(response.data)
    })
    .catch(error=>console.log(error))
  },[OfficerList])

  const handleDeleteOfficer=(officerId)=>
  {
    StationHeadService.deleteOfficer(officerId,auth).then((response)=>
    console.log(response))
    .catch((error)=>console.log(error))
  }
  return (
    <table className="table table-striped table-hover" >
      <thead>
        <tr >
          <th className='Head'>OfficerId</th>
          <th>Name</th>
          <th>Email</th>
          <th>Rank</th>
          <th>BadgeNo</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>@gmail</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Mark</td>
          <td style={{backgroundColor:'white'}}><button className='btn btn-primary mx-5'>Change Status</button> <button className='btn btn-primary'>Assign Officer</button></td>
        </tr> */}
        
        {
          OfficerList.map((officer,key)=><tr key={key}>
            <td>{officer.id}</td>
            <td>{officer.name}</td>
            <td>{officer.email}</td>
            <td>{officer.rank}</td>
            <td>{officer.badgeNumber}</td>
            <td><Link to="/AssignOfficer"><button className='btn btn-primary'>Assign Incident</button></Link></td>
            <td><button className='btn btn-primary' onClick={()=>handleDeleteOfficer(officer.id)}>Delete </button></td>
          </tr>)
        }
      </tbody>
    </table>
  );
};

export default OfficerTable;
