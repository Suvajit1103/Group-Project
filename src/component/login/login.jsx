import React, { useRef, useState } from "react";
import './login.css';

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
      <h2>Login</h2>
      <div className="box">
        <input 
          type="text" 
          id="userinput" 
          placeholder="Enter Your Email" 
          ref={emailRef}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <div>
          <input 
            type={showPassword ? "text" : "password"} 
            id="passinput" 
            onChange={(e) => checkPasswordStrength(e.target.value)}
            placeholder="Enter your password" 
            ref={passwordRef}
          />
          <button className="show-btn" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {passwordStrength && <p className="error">{passwordStrength}</p>}
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="label">
        <label className="remember">
          Remember me
          <input type="checkbox" id="check" />
        </label>
        <label className="forget"> Forget Password? </label>
      </div>
      <button className="btn" onClick={handleLogin}> Login </button>

    </div>
  );
}

export default Loginbtn;