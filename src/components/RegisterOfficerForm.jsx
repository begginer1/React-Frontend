import { useContext, useState } from 'react'
import '../Css/RegisterUserForm.css'
import { AuthContext } from './service/AuthProvider'
import StationHeadService from '../services/StationHeadService'
import { useNavigate } from 'react-router-dom'
export const RegisterOfficerForm=()=>
{ const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [rank,setRank]=useState('')
const [badgeNo,setBadgeNo]=useState('')
    const {auth}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSubmit=()=>
    {
        const officer={"badgeNumber":badgeNo,
        "name":name,
        "rank":rank,
        "email":email}
        StationHeadService.RegisterOfficer(officer,auth).then((response)=>{
        navigate('/SationHeadDashboard')
    })
        .catch(error=>console.log(error))
    }
    return(
        <div className="RegisterContainer">
        <div className="FormRegister">
            <h2>Register Here</h2>
            <form id="FormId">
            <label >Name</label>
            <br/>
            <input type="text"  placeholder="Enter your name " onChange={(e)=>setName(e.target.value)}/>
            <br/><br/>
            <label >Batch Number</label>
            <br/>
            <input type="text"  placeholder="Enter your batch Number " onChange={(e)=>setBadgeNo(e.target.value)}/>
            <br/><br/>
            <label >Rank</label> 
            <br/>
            <input type="textbox"placeholder="Enter your rank" onChange={(e)=>setRank(e.target.value)}/>
            <br/><br/>
            <label >Email</label> 
            <br/>
            <input type="email"placeholder=" Email Address" onChange={(e)=>setEmail(e.target.value)} />
           <br/><br/>
            <span style={{'display':'flex',justifyContent:'center',backgroundColor:'green'}}>
           <input className="btn btn-primary" type="submit" onClick={handleSubmit}/>
           <input className="btn btn-danger" type="cancel" />
           </span>
           </form>
        </div>
       </div>
    )
}