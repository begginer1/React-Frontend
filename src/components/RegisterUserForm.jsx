import { createContext, useContext, useState } from 'react';
import '../Css/RegisterUserForm.css'
import UserService from '../services/UserService';
import { AuthContext } from './context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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

    function validation()
    {
        if (!name.trim() || !address.trim() || !aadNo.trim() || !panNo.trim() || !dob.trim() || !email.trim()) {
            toast.warning('Please fill in all fields.',
            {
                position:'top-center'
            });
            return false;
          }
          if (isNaN(aadNo)) {
            toast.warning('Aadhar must be numeric',
            {
                position:'top-center'
            });
            return false;
          }
          return true;
    }
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
    if(validation()){
        UserService.addUser(UserData,auth).then((response)=>{
            console.log(response.data)
            setUserId(response.data.id)
            // console.log("userId",userId)
            navigate('/UserDashboard')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
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
                <input type="text"placeholder=" Pan Card Number" max="2007-01-01" onChange={(e)=>setPanNo(e.target.value)}/>
                <br /> <br />
                <label >Date of birth</label> 
                <br />
                <input type="date"placeholder=" Date of birth" onChange={(e)=>setDob(e.target.value)}/>
                <br /> <br />
                <label >Email</label> 
                <br />
                <input type="email"placeholder=" Email Address" onChange={(e)=>setEmail(e.target.value)}/>
                <br /> <br />
               <div><button className="btn btn-primary"  onClick={HandleUserRegister}>Submit</button><ToastContainer/></div>
            </form>
        </div>
    </div>
    )
}