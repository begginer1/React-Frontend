import { useContext, useState } from 'react'
import '../Css/RegisterUserForm.css'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
export const LostPropertyForm=()=>
{
    const [incidentDate ,SetIncidentDate]=useState('')
    const [itemName ,SetItemName]=useState('')
    const [description, SetDescription]=useState('')
    const [itemAmount, SetItemAmount]=useState('')
    const [location ,SetLocation]=useState('')
    const navigate=useNavigate()
    const {auth,userId}=useContext(AuthContext)
    console.log(auth);

    function validation()
    {
         
    if (!incidentDate || !itemName || !description || !itemAmount || !location) {
       toast.warning('Please fill in all fields.',
       {
        position:'top-center'
       });
        return false;
      }
  
      // Check if Item Amount is numeric
      if (isNaN(itemAmount)) {
        toast.warning('Item Amount must Be numeric',
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
        const incidentObj={"incidentType": "Lost Property",
        "dateOfIncident":incidentDate,
        "itemName": itemName,
        "itemAmount": itemAmount,
        "image": "item.jpg",
        "description": description,
        "location": location};
        console.log(incidentObj);
        if(validation()){
        UserService.GenerateIncident(userId,incidentObj,auth).then((response)=>
        {
           
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
        <h4>Lost Property</h4>
            <form id="FormId">
            <label >Incident Date</label>
            <br/>
            <input type="date"  placeholder="Incident Date " max="2024-03-20" required  onChange={(e)=>SetIncidentDate(e.target.value)}/>
            <br/><br/>
            <label >Item Name</label>
            <br/>
            <input type="text"  placeholder="Item Name " required onChange={(e)=>SetItemName(e.target.value)}/>
            <br/><br/>
            <label >Description</label> 
            <br/>
            <input type="textbox"placeholder="Description" required onChange={(e)=>SetDescription(e.target.value)}/>
            <br/><br/>
            <label >Item Amount</label> 
            <br/>
            <input type="textbox"placeholder="Item Amount" required onChange={(e)=>SetItemAmount(e.target.value)}/>
            <br/><br/>
            <label >Location</label> 
            <br/>
            <input type="text"placeholder=" Location" required onChange={(e)=>SetLocation(e.target.value)}/>
            <br/>
            <br/>
           <div><button className="btn btn-primary"  onClick={handleSubmit}>Submit</button><ToastContainer/></div>
        </form>
    </div>
    
</div>
    )
}
