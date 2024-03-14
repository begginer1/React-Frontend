import React, { useContext, useEffect } from 'react';
import '../Css/Table.css'
import { AuthContext } from './service/AuthProvider';
const UserTable = () => {
  const {auth}=useContext(AuthContext)
console.log(auth)
  useEffect(()=>
  {

  },[])
  return (
    <table className="table table-striped table-hover" style={{backgroundColor:'green'}}>
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>@gmail</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Mark</td>
          <td style={{backgroundColor:'white'}}><button className='btn btn-primary mx-5'>Change Status</button> <button className='btn btn-primary'>Assign Officer</button></td>
        </tr>
        <tr>
        <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>

        </tr>
        <tr>
         
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
