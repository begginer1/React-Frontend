import { useState } from 'react'
import '../Css/RegisterUserForm.css'
import UserService from '../services/UserService'
export  const CriminalMischeifForm=()=>
{
    const [imageUrl,SetImageUrl]=useState('')
    const [incidentDate ,SetIncidentDate]=useState('')
    const [itemName ,SetItemName]=useState('')
    const [description, SetDescription]=useState('')
  
    const [location ,SetLocation]=useState('')

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
        UserService.GenerateIncident(1,incidentObj,"").then((response)=>
        {
            console.log(response)
        })
        .catch((error)=>{
            console.log(error);
        })
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
           <input className="btn btn-primary" type="submit" onClick={handleSubmit}/>
           </form>
    </div>
    
</div>
    )
}