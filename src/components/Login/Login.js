import React,{useState,useContext} from "react";
import './Login.css'
import { LoginContext } from "../../Contexts/LoginContext";
import { Link } from "react-router-dom";
import { Redirect, useNavigate } from "react-router-dom";
const Login = (props) => {
  const {setUsername,setShowProfile}=useContext(LoginContext)
  const navigate = useNavigate();
  return (
    <section>
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
        <div className="d-grid">
          
          <button type="submit" className="btn btn-primary" onClick={()=>{
            setShowProfile(true);
            navigate('/blog')
          }}>
            Submit
          </button>
         
        </div>
      </form>
      </div>
      </div>
    </section>
  );
};
export default Login;
