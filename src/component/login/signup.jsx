import React, { useRef, useState } from "react";
import './signup.css';
import { Link } from 'react-router-dom';

function Signbtn() {
  
  const lnameRef = useRef(null);
  const lemailRef = useRef(null);
  const lpasswordRef = useRef(null);
  const [userData, setUserData] = useState({ lemail: '', lpassword: '',lname:'' });
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

 


  const handleSign = () => {
    const lname = lnameRef.current.value;
    const lemail = lemailRef.current.value;
    const lpassword = lpasswordRef.current.value;
    

    const validationErrors = validateInputs(lname, lemail, lpassword);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUserData({ lemail, lpassword,lname});
    console.log("Name:", lname);
    console.log("Email:", lemail);
    console.log("Password:", lpassword);
  };

  const validateInputs = (lname, lemail, lpassword) => {
    const errors = {};
    if (!lname) {
      errors.name = 'Username is required !!';
    }
    if (!lemail) {
      errors.email = 'Email is required !!';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(lemail)) {
      errors.email = 'Invalid email address !!';
    }
    if (!lpassword) {
      errors.password = 'Password is required !!';
    } 
    return errors;
  };

  const checkPasswordStrength = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+]/.test(password);

    if (password.length < minLength) {
      setPasswordStrength('Password must be at least 8 characters long.');
    } else if (!hasUpperCase) {
      setPasswordStrength('Password must contain at least one uppercase letter.');
    } else if (!hasLowerCase) {
      setPasswordStrength('Password must contain at least one lowercase letter.');
    } else if (!hasNumbers) {
      setPasswordStrength('Password must contain at least one number.');
    } else if (!hasSpecialChars) {
      setPasswordStrength('Password must contain at least one special character.');
    } else {
      setPasswordStrength('Password is strong.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


    return (
      <div className="signup-container">
        <div className="signup-box">
          <div className="signup-left">
            <h2>WELCOME BACK!</h2>
            <p>
              Please Sign Up !
            </p>
          </div>
          <div className="signup-right">
            <h2>Sign Up</h2>
            <div>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your username" ref={lnameRef}/>
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" ref={lemailRef}/>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="pas-in">
                <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" ref={lpasswordRef} onChange={(e) => checkPasswordStrength(e.target.value)}/><button id="show-pass" onClick={togglePasswordVisibility}> {showPassword ? <i className="fa fa-eye-slash"/> : <i className="fa fa-eye"/>}</button>
                </div>
                {passwordStrength && <p className="error">{passwordStrength}</p>}
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <button  className="signup-btn" onClick={handleSign}>Sign Up</button>
            </div>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Signbtn;