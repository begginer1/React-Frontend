import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'
import { Link, useParams } from 'react-router-dom'

export const User = () => {
    //const [state variable,function that can change the state variable]
    const {id}=useParams();
    const [UserArray, setUserArray] = useState([])
    const [IncidentArray, setIncidentArray] = useState([])
    useEffect(()=>{
        console.log("use effect....")
        UserService.generateReport(1).then((response)=>{
            console.log("response recieved from the api",response)
           setUserArray([response.data]);
           console.log('Response in UserArray ',response.data.incident)
           setIncidentArray([response.data.incident]);
        })
    },[])
    return (
        <div className='container'>
            {console.log("Application rendered")}
            <h2 className="text-center">User data</h2>
            
            <table className="table table-bordered table-info table-striped">
                <thead>
                    <tr className="table-dark">
                    <th>id</th>
                    <th>aadharNumber</th>
                    <th>name</th>
                    <th>panNumber</th>
                    <th>dateOfBirth</th>
                    <th>address</th>
                    <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        UserArray.map((Users,key)=><tr key={key}>
                            <td>{Users.id}</td>
                            <td>{Users.aadharNumber}</td>
                            <td>{Users.name}</td>
                            <td>{Users.panNumber}</td>
                            <td>{Users.dateOfBirth}</td>
                            <td>{Users.address}</td>
                            <td>{Users.age}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <table className="table table-bordered table-info table-striped">
                <thead>
                    <tr className="table-dark">
                    <th>incident_id</th>
creation_
description varchar(255) 
image varchar(255) 
incident_type varchar(255) 
item_amount varchar(255) 
item_name varchar(255) 
location varchar(255) 
status varchar(255</th>
                    <th>aadharNumber</th>
                    <th>name</th>
                    <th>panNumber</th>
                    <th>dateOfBirth</th>
                    <th>address</th>
                    <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        UserArray.map((Users,key)=><tr key={key}>
                            <td>{Users.id}</td>
                            <td>{Users.aadharNumber}</td>
                            <td>{Users.name}</td>
                            <td>{Users.panNumber}</td>
                            <td>{Users.dateOfBirth}</td>
                            <td>{Users.address}</td>
                            <td>{Users.age}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to="/addUsers" className='btn btn-primary mb-3'>Add User</Link>
        </div>
    )
}

