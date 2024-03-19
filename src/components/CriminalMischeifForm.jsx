import { useContext, useState } from 'react'
import '../Css/RegisterUserForm.css'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from 'bootstrap'
export  const CriminalMischeifForm=()=>
{
    const [imageUrl,SetImageUrl]=useState('')
    const [incidentDate ,SetIncidentDate]=useState('')
    const [itemName ,SetItemName]=useState('')
    const [description, SetDescription]=useState('')
  
    const [location ,SetLocation]=useState('')
    const navigate=useNavigate()
    const {auth,userId}=useContext(AuthContext)
    
    function validation()
    {
      // Validation checks
      if (incidentDate.trim().length===0 || description.trim().length===0 || location.trim().length===0) {
        toast.warning('* field cannot not be  empty.',
        {
            position:'top-center'
        });
        return false;
      }
      return true    
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        const incidentObj={"incidentType": "Criminal Mischief",
        "dateOfIncident":incidentDate,
        "itemName": itemName,
        "image": imageUrl,
        "description": description,
        "location": location};
        console.log(incidentObj);
        if(validation()){
        UserService.GenerateIncident(userId,incidentObj,auth).then((response)=>
        {
            console.log(response)
            navigate('/UserDashboard')
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}
    return(
        <div className="RegisterContainer">
        <div className="FormRegister">
        <h2>Register Here</h2>
        <h4>Criminal Mischeif</h4>
            <form id="FormId">
            <label >Incident Date *</label>
            <br/>
            <input type="date"  placeholder="Incident Date " max="2024-03-20" required onChange={(e)=>{SetIncidentDate(e.target.value)}}/>
            <br/><br/>
            <label >Item Name</label>
            <br/>
            <input type="text"  placeholder="Destoyed Item"   onChange={(e)=>{SetItemName(e.target.value)}}/>
            <br/><br/>
            <label >Image</label>
            <br/>
            <input type="text"  placeholder="Image of Mischief " onChange={(e)=>{SetImageUrl(e.target.value)}}/>
            <br/><br/>
            <label >Mischief *</label> 
            <br/>
            <input type="textbox"placeholder="what Mischief Done ?" required onChange={(e)=>{SetDescription(e.target.value)}}/>
            <br/><br/>
            <label >Location *</label> 
            <br/>
            <input type="text"placeholder=" Location" required onChange={(e)=>{SetLocation(e.target.value)}}/>  
            {/* form validation not working ex required */}
            <br/>
            <br/>
           <div><button className="btn btn-primary"  onClick={handleSubmit}>Submit</button><ToastContainer/></div>
           </form>
    </div>
    
</div>
    )
}