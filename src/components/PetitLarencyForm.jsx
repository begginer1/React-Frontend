import { useContext, useState } from 'react'
import '../Css/RegisterUserForm.css'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
export const PetitLarencyForm=()=>
{
    const [incidentDate ,SetIncidentDate]=useState('')
    const [itemName ,SetItemName]=useState('')
    const [description, SetDescription]=useState('')
    const [itemAmount, SetItemAmount]=useState('')
    const [location ,SetLocation]=useState('')
    const navigate=useNavigate()
    const {auth,userId}=useContext(AuthContext)
  
    function validation()
    {
        if (incidentDate.trim().length===0 || itemName.trim().length===0 || description.trim().length===0 || itemAmount.trim().length===0 || location.trim().length===0) {
            toast.warning('* field cannot Be Empty',
            {
                position:'top-center'
            });
            return false;
          }
      
          if (parseInt(itemAmount) >1000) {
            toast.warning('Item Amount should be less than or equal to 1000.',
            {
            position:'top-center'
            });
            return false;
          }
          return true;
    }
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
            <h4>Petit Larency</h4>
            <form id="FormId">
            <label >Incident Date*</label>
            <br/>
            <input type="date"  placeholder="Incident Date " max="2024-03-20" onChange={(e)=>SetIncidentDate(e.target.value)} />
            <br/><br/>
            <label >Item Name*</label>
            <br/>
            <input type="text"  placeholder="Name " onChange={(e)=>SetItemName(e.target.value)}/>
            <br/><br/>
            <label >Description*</label> 
            <br/>
            <input type="textbox"placeholder="Description" onChange={(e)=>SetDescription(e.target.value)}/>
            <br/><br/>
            <label >Item Amount*</label> 
            <br/>
            <input type="textbox"placeholder="Item Amount" onChange={(e)=>SetItemAmount(e.target.value)}/>
            <br/><br/>
            <label >Location*</label> 
            <br/>
            <input type="text"placeholder=" Location" onChange={(e)=>SetLocation(e.target.value)}/>
            <br/>
            <br/>
           <div><button className="btn btn-primary" onClick={handleSubmit}>Submit</button><ToastContainer/></div>
           </form>
        </div>      
    </div>
    )
}