import { useContext, useState } from 'react'
import '../Css/RegisterUserForm.css'
import { AuthContext } from './context/AuthProvider'
import StationHeadService from '../services/StationHeadService'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap'
export const RegisterOfficerForm=()=>
{ const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [rank,setRank]=useState('')
const [badgeNo,setBadgeNo]=useState('')
    const {auth}=useContext(AuthContext)
    const navigate=useNavigate()
    console.log(auth)
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        const officer={"badgeNumber":badgeNo,
        "name":name,
        "rank":rank,
        "email":email}
        StationHeadService.RegisterOfficer(officer,auth).then((response)=>{
            console.log(response)
            navigate('/dashboard')
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
            <span style={{'display':'flex',justifyContent:'center'}}>
           <button className="btn btn-primary mx-4"  onClick={handleSubmit}>Submit</button>
           <Link to='/dashboard'><button className="btn btn-danger"  >Cancel</button></Link>
           </span>
           </form>
        </div>
       </div>
    )
}