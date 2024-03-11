import React, { useState } from 'react';
import SignInServices from '../services/AuthServices';

const SignUpForm = () => {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');

   const handleRegister=(e)=>
    {
      // console.log(e)
        // e.preventDefault();
        const LoginData={'email':email,'name':name,'password':password,'username':username}
        console.log(LoginData)
        SignInServices.Register(LoginData) .then( (response)=> {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          console.log(LoginData)
    }
  return (
    <div className='UserLoginForm'>
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
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
                <div style={{display:'flex',justifyContent:'center',marginTop:'2%'}}>
                <button type="submit" className="btn btn-primary btn-block mx-4" onClick={handleRegister}>Register</button>
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
