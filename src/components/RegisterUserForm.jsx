import { createContext, useContext, useState } from 'react';
import '../Css/RegisterUserForm.css'
import UserService from '../services/UserService';
import { AuthContext } from './context/AuthProvider';
import { useNavigate } from 'react-router-dom';
export const RegisterUserForm=()=>
{
    const {auth,userId,setUserId}=useContext(AuthContext);
    console.log("auth",auth)
    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
    const[aadNo,setAadNo]=useState('');
    const[panNo,setPanNo]=useState('');
    const[dob,setDob]=useState('');
    const[email,setEmail]=useState('');
    const navigate=useNavigate()
    const HandleUserRegister=(e)=>
    { 
        e.preventDefault()
        console.log(auth?.token)
        const UserData={"name": name,
        "aadharNumber": aadNo,
        "panNumber": panNo,
        "dateOfBirth": dob,
        "address": address,
        "email":email
    }
    console.log(UserData)
        UserService.addUser(UserData,auth).then((response)=>{
            console.log(response.data)
            setUserId(response.data.id)
            console.log("userId",userId)
            navigate('/UserDashboard')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className="RegisterContainer">
        <div className="FormRegister">
            <h2>Register Here</h2>
            <form id="FormId">
                <label >Name</label>
                <br />
                <input type="text"  placeholder=" Enter your Name" onChange={(e)=>setName(e.target.value)}/>
                <br /><br />
                <label >Address</label> 
                <br />
                <input type="textbox"placeholder=" Address" onChange={(e)=>setAddress(e.target.value)}/>
               <br /><br />
                <label >Aadhar Number</label> 
                <br />
                <input type="text"placeholder=" Aadhar Number"  onChange={(e)=>setAadNo(e.target.value)}/>
                <br /><br />
                <label >Pan Card Number</label> 
                <br />
                <input type="text"placeholder=" Pan Card Number" onChange={(e)=>setPanNo(e.target.value)}/>
                <br /> <br />
                <label >Date of birth</label> 
                <br />
                <input type="date"placeholder=" Date of birth" onChange={(e)=>setDob(e.target.value)}/>
                <br /> <br />
                <label >Email</label> 
                <br />
                <input type="email"placeholder=" Email Address" onChange={(e)=>setEmail(e.target.value)}/>
                <br /> <br />
               <input className="btn btn-primary" type="submit" onClick={HandleUserRegister}/>
            </form>
        </div>
    </div>
    )
}