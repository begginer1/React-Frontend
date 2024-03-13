import { useState } from 'react'
import '../Css/RegisterUserForm.css'
import UserService from '../services/UserService'
export const PetitLarencyForm=()=>
{
    const [incidentDate ,SetIncidentDate]=useState('')
    const [itemName ,SetItemName]=useState('')
    const [description, SetDescription]=useState('')
    const [itemAmount, SetItemAmount]=useState('')
    const [location ,SetLocation]=useState('')

    const handleSubmit=(e)=>
    {
        e.preventDefault()
        const incidentObj={"incidentType": "Petit Larceny",
        "dateOfIncident":incidentDate,
        "itemName": itemName,
        "itemAmount": itemAmount,
        "image": "item.jpg",
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
            <h4>Petit Larency</h4>
            <form id="FormId">
            <label >Incident Date</label>
            <br/>
            <input type="date"  placeholder="Incident Date " max="2024-03-20" onChange={(e)=>SetIncidentDate(e.target.value)} />
            <br/><br/>
            <label >Item Name</label>
            <br/>
            <input type="text"  placeholder="Name " onChange={(e)=>SetItemName(e.target.value)}/>
            <br/><br/>
            <label >Description</label> 
            <br/>
            <input type="textbox"placeholder="Description" onChange={(e)=>SetDescription(e.target.value)}/>
            <br/><br/>
            <label >Item Amount</label> 
            <br/>
            <input type="textbox"placeholder="Item Amount" onChange={(e)=>SetItemAmount(e.target.value)}/>
            <br/><br/>
            <label >Location</label> 
            <br/>
            <input type="text"placeholder=" Location" onChange={(e)=>SetLocation(e.target.value)}/>
            <br/>
            <br/>
           <input className="btn btn-primary" type="submit" onClick={handleSubmit}/>
           </form>
        </div>      
    </div>
    )
}