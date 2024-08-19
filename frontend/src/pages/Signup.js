import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handelError } from "../utils";


export default function Signup() {
  const [signupinfo, setSignupinfo] = useState({
    name:"",
    email:"",
    password:"",
  })
  const handelChange=(e)=>{
    const {name, value} = e.target
    const copysignupInfo = {...signupinfo}
      copysignupInfo[name] = value
      setSignupinfo(copysignupInfo)
  }
  const handelSignup=(e)=>{
    e.preventDefault();
    const {name, email, password} = signupinfo
    if(!name || !email || !password){
      return handelError('All field are requred')
    }
    console.log("--->", signupinfo);
  }
  
  return (
    <section className="cus-login-section d-flex justify-content-center align-items-center">
      <div className="form-container">
        <div className="title">Registration</div>
        <form onSubmit={handelSignup}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">Full Name</span>
              <input 
              type="text" 
              name="name"
              placeholder="E.g: John Smith" 
              // required 
              value={signupinfo.name}
              onChange={handelChange}/>
            </div>
            <div className="input__box">
              <span className="details">Email</span>
              <input
                type="email"
                name="email"
                placeholder="johnsmith@hotmail.com"
                // required
                value={signupinfo.email}
                onChange={handelChange}
              />
            </div>
            <div className="input__box">
              <span className="details">Password</span>
              <input 
              type="password" 
              name="password"
              placeholder="********" 
              // required  
              value={signupinfo.password}
              onChange={handelChange}/>
            </div>
          </div>
          <div className="button">
            <button className="btn register-btn" type="submit">
            Register
            </button>
            <p className="text-center">Already have an account ? 
              <Link to='/login'>Login</Link>
            </p>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </section>
  );
}
