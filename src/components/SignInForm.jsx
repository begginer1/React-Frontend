import React, { useContext, useState } from 'react';
import '../Css/SignInForm.css'
import AuthServices from '../services/AuthServices';
import { AuthContext } from './context/AuthProvider';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SignInForm = () => {
  const{auth,setAuth}=useContext(AuthContext)
  console.log("signIn",auth)
  const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate()
  const  handleSubmit=async (e)=>
  {
    e.preventDefault()
    const LoginData={'userName':username,'password':password}
    console.log(LoginData)
      AuthServices.Login(LoginData).then((response)=>{
  //  console.log(response.data.accessToken)
 
  const accessToken=response.data.accessToken;
  const userDto=response.data.userDto
      setAuth({accessToken,userDto})
      // console.log("auth",auth)
      navigate('/dashboard')
  })
    .catch((error)=>{
    console.log(error)
    toast.warning("Wrong Password",
    {
      position:'top-center'
    })
  })
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
                <div><button type="submit" className="btn btn-primary btn-block mt-4  mx-4 " onClick={handleSubmit}>Sign In</button>  <ToastContainer /></div>
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
