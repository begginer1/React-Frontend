import React, { useContext, useState } from 'react';
import SignInServices from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const SignUpForm = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
  const navigate =useNavigate()
  const [selectedOption, setSelectedOption] = useState('');
  const {auth}=useContext(AuthContext)

  const validateForm = () => {
    if (username.trim().length === 0 || !isNaN(username)) {
      toast.error("Username must not be empty or only numeric",
      {
        position:'top-center'
      })
     
      return false;
    }
    if (name.trim().length === 0 || !isNaN(name)) {
     toast.error('Name must not be empty or only numeric.', {
      position:'top-center'
    });
      return false;
    }

    if (password.trim().length === 0 || password.length < 8) {
      toast.error('Password must not be empty and must be at least 8 characters long.', {
        position:'top-center'
      });
      return false;
    }
    if (!email.trim()) {
      toast.error('Email must not be empty.', {
        position:'top-center'
      });
      return false;
    }

    if (!email.includes('@')) {
      toast.error('Email must contain the "@" symbol.', {
        position:'top-center'
      });
      return false;
    }

    return true;
  };

 
    // Function to handle the change in the dropdown selection
    const handleDropdownChange = (event) => {
      console.log(event.target.value)
        setSelectedOption(event.target.value);
    };




   
   const handleRegister=(e)=>
    { const role="ROLE_STATION_HEAD"
     
      e.preventDefault()
        const LoginData={'email':email,'name':name,'password':password,'username':username,roles:[auth?.userDto?.role==='ROLE_STATION_HEAD'?role:selectedOption]}
      
        console.log(LoginData)
        if(validateForm()){
        SignInServices.Register(LoginData).then( (response)=> {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          console.log(LoginData)
          navigate('/SignIn')
    }
  }
  return (
    <div className='UserLoginForm'>
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register {auth?.userDto?.role==="ROLE_STATION_HEAD"?"Admin":<></>}</h3>
              <form >
                <div className="form-group mb-3">
                  <label >Name</label>
                  <input type="text" className="form-control"  placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                  <label>Username</label>
                  <input type="text" className="form-control" id="UserName" placeholder="Enter your UserName" onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className="form-group mb-3">
                  <label >Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div >
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {auth?.userDto?.role==="ROLE_STATION_HEAD"?<></>:
                <div className="mt-4">
                <label>Role</label>
           <select className="ml-3" value={selectedOption} onChange={handleDropdownChange} style={{marginLeft:'3%'}}>
              <option value="ROLE_USER">User</option>
              <option value="ROLE_OFFICER">Officer</option>
            </select>
              </div>}
                <div style={{display:'flex',justifyContent:'center',marginTop:'2%'}}>
               <div> <button type="submit" className="btn btn-primary btn-block mx-4" onClick={handleRegister}>Register</button>
               <ToastContainer  />
                </div>
                <button type="submit" className="btn btn-danger btn-block">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUpForm;
