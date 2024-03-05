import React, { useEffect, useState } from 'react'
import StationHeadService from '../services/StationHeadService'
import { Link } from 'react-router-dom'

export const StationHead = () => {
    //const [state variable,function that can change the state variable]
    const [StationHeadArray, setStationHeadArray] = useState([])
    useEffect(()=>{
        console.log("use effect....")
        StationHeadService.getAllIncident().then((response)=>{
            console.log("response recieved from the api",response.data)
           setStationHeadArray(response.data);
           console.log('Response recieved from API ',response.data)
        })
    },[])
    const viewOfficer = ()=>{
        console.log("use effect....")
        StationHeadService.getAllOfficers().then((response)=>{
            console.log("response recieved from the api",response.data)
           setStationHeadArray(response.data);
           console.log('Response recieved from API ',response.data)
    })}
    return (
        <div className='container'>
            {console.log("Application rendered")}
            <button className='btn btn-danger' onClick={viewOfficer}>View Officers</button>
            <h2 className="text-center">StationHead data</h2>
            <Link to="/addStationHeads" className='btn btn-primary mb-3'>Add StationHead</Link>
            <table className="table table-bordered table-info table-striped">
                <thead>
                    <tr className="table-dark">
                    <th>id</th>
                    <th>name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        StationHeadArray.map((StationHeads,key)=><tr key={key}>
                            <td>{StationHeads.id}</td>
                            <td>{StationHeads.name}</td>
                            <td>{StationHeads.age}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

