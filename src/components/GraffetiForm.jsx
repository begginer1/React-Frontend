import { useContext, useState } from 'react'
import '../Css/RegisterUserForm.css'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './service/AuthProvider'
export const GraffetiForm=()=>
{const [incidentDate ,SetIncidentDate]=useState('')
const [description, SetDescription]=useState('')
const[imageUrl,SetimageUrl]=useState('')
const [location ,SetLocation]=useState('')
const navigate=useNavigate()
const {auth,userId}=useContext(AuthContext)

const handleSubmit=(e)=>
{
    e.preventDefault()
    const incidentObj={"incidentType": "Graffeti",
    "dateOfIncident":incidentDate,
    "image": imageUrl,
    "description":description,
    "location": location};
    console.log(incidentObj);
    UserService.GenerateIncident(userId,incidentObj,auth).then((response)=>
    {
        console.log(response)
        navigate('/UserDashboard')
    })
    .catch((error)=>{
        console.log(error);
    })
}
    return(
        <div className="RegisterContainer">
        <div className="FormRegister">
        <h2>Register Here</h2>
        <h4>Graffeti</h4>
            <form id="FormId">
            <label >Incident Date</label>
            <br/>
            <input type="date"  placeholder="Incident Date " max="2024-03-20" required onChange={(e)=>SetIncidentDate(e.target.value)}/>
            <br/><br/>
            <label >Image</label>
            <br/>
            <input type="text"  placeholder="image url " required onChange={(e)=>{SetimageUrl(e.target.value)}}/>
            <br/><br/>
            <label >Description</label> 
            <br/>
            <input type="textbox"placeholder="Description" required onChange={(e)=>{SetDescription(e.target.value)}}/>
            <br/><br/>
            <label >Location</label> 
            <br/>
            <input type="text"placeholder=" Location" required onChange={(e)=>{SetLocation(e.target.value)}}/>
            <br/>
            <br/>
           <input className="btn btn-primary" type="submit" onClick={handleSubmit}/>
           </form>
        </div>

    </div>
    )
}