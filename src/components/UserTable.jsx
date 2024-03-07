import React from 'react';
import '../Css/Table.css'
const UserTable = () => {
  return (
    <table className="table table-striped table-hover" >
      <thead>
        <tr >
          <th className='Head'>id</th>
          <th>Aadhar No</th>
          <th>Pan Number</th>
          <th>Date-Of-Birth</th>
          <th>Address</th>
          <th>Age</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Mark </td>
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
