import React, { useRef, useState, useEffect } from "react";
import './signup.css';

function Signbtn() {
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

 


  const handleLogin = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneno = phoneRef.current.value;
    const password = passwordRef.current.value;
    const password2 = password2Ref.current.value;

    const validationErrors = validateInputs(name, email, password, password2);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUserData({ email, password, phoneno,password});
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone no:", phoneno);
    console.log("Password:", password);
  };

  const validateInputs = (name, email, phone, password, password2) => {
    const errors = {};
    if (!name) {
      errors.name = 'Username is required !!';
    }
    if (!email) {
      errors.email = 'Email is required !!';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = 'Invalid email address !!';
    }
    if (!phone) {
      errors.phone = 'Phone number is required !!';
    }
    if (!password) {
      errors.password = 'Password is required !!';
    } 
    if (!password2) {
      errors.password2 = 'Please confirm your password!';
    } else if (password2 !== password) {
      errors.password2 = 'Passwords do not match !!';
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

  const togglePassword2Visibility = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input type="text" ref={nameRef} placeholder="Username" id="nameinput"/>
        {errors.name && <p className="error">{errors.name}</p>}
      <input type="email" ref={emailRef} placeholder="Email" 
      id="userinput" />
        {errors.email && <p className="error">{errors.email}</p>}
      <input type="tel" ref={phoneRef} placeholder="Phone Number" id="numberinput"/>
        {errors.phone && <p className="error">{errors.phone}</p>}
      <div>
      <input 
        type={showPassword ? "text" : "password"} 
        ref={passwordRef} 
        placeholder="Password" 
        onChange={(e) => checkPasswordStrength(e.target.value)}
        id="passinput" 
      />
      <button className="show-btn" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
      </div>
      {passwordStrength && <p className="error">{passwordStrength}</p>}
      {errors.password && <p className="error">{errors.password}</p>}
      <div>
      <input 
        type={showPassword2 ? "text" : "password"} 
        ref={password2Ref} 
        placeholder="Confirm Password" id="passinput"
      />
      <button className="show-btn" onClick={togglePassword2Visibility}>
        {showPassword2 ? 'Hide' : 'Show'}
      </button>
      </div>
      {errors.password2 && <p className="error">{errors.password2}</p>}
      <button className="btn" onClick={handleLogin}>Sign Up</button>
      
    </div>
  );
}

export default Signbtn;