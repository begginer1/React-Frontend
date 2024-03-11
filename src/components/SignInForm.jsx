import React, { useContext, useState } from 'react';
import '../Css/SignInForm.css'
import AuthServices from '../services/AuthServices';
import { TokenContext } from './TokenContext';

const SignInForm = () => {
  const TokenObj=useContext(TokenContext);
  
  const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
  const  handleSubmit=async (e)=>
  {
    e.preventDefault()
    const LoginData={'userName':username,'password':password}
    console.log(LoginData)
    await AuthServices.Login(LoginData).then((response)=>{
  //  console.log(response.data.accessToken)
      TokenObj.setToken(response.data.accessToken)
      TokenObj.setEmail(response.data.userDto.email)
      TokenObj.setRole(response.data.userDto.role)
      console.log(TokenObj)
  })
    .catch((error)=>
    console.log(error))
  }
  return (
    <div className='UserLoginForm'>
      <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4,text">Sign In</h3>
              <form>
                <div className="form-group mt-2">
                  <label className='text'>Username</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
                <div className="form-group mt-2">
                  <label className='text'>Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button type="submit" className="btn btn-primary btn-block mt-4  mx-4 " onClick={handleSubmit}>Sign In</button>
                <button type="submit" className="btn btn-primary btn-block mt-4  text-center">Cancel</button>
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

export default SignInForm;
