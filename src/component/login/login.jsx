import React, { useRef, useState } from "react";
import './login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from 'react-router-dom';

function Loginbtn() {
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const validationErrors = validateInputs(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUserData({ email, password });

    console.log("Email:", email);
    console.log("Password:", password);
  };

  const validateInputs = (email, password) => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required !!';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = 'Invalid email address !!';
    }
    if (!password) {
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
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h2>Login</h2>
          <div>
            <div className="Sinput-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" ref={emailRef}/>

              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="Sinput-group">
              <label htmlFor="password">Password</label>
              <div className="pass-in">
              <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password"  onChange={(e) => checkPasswordStrength(e.target.value)} ref={passwordRef}/> <button id="show-pass" onClick={togglePasswordVisibility}> {showPassword ? <i className="fa fa-eye-slash"/> : <i className="fa fa-eye"/>}</button></div>
            {passwordStrength && <p className="error">{passwordStrength}</p>}
          {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button  className="login-btn" onClick={handleLogin}>Login</button>
          </div>
          <p>
            Don’t have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
        <div className="login-right">
          <h2>WELCOME BACK!</h2>
          <p>
            Please Login !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginbtn;


{/* <button className="show-btn" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
        </button> */}