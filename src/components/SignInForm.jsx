import React from 'react';
import '../Css/SignInForm.css'

const SignInForm = () => {
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
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group mt-2">
                  <label className='text'>Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button type="submit" className="btn btn-primary btn-block mt-4  mr -4 ">Sign In</button>
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
