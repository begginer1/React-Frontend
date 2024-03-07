import React from 'react';
import '../Css/Table.css'
const Table = () => {
  return (
    <table className="table table-striped table-hover" >
      <thead>
        <tr >
          <th className='Head'>id</th>
          <th>status</th>
          <th>type</th>
          <th>item Name</th>
          <th>item Amount</th>
          <th>image</th>
          <th>Description</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark <button className='btn btn-danger'>Delete Incident</button></td>
        </tr>
        <tr>
        <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>

        </tr>
        <tr>
         
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
