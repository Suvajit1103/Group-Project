import React, { useRef, useState } from "react";
import './login.css';
// import Fromdata from "./from";

function Loginbtn() {
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [userDate, setUserData] = useState({ email:'', password: '' });

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setUserData({ email, password });

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="box">
        <input 
          type="text" 
          id="userinput" 
          placeholder="Enter Your Email" 
          ref={emailRef}
        />
        <input 
          type="password" 
          id="passinput" 
          placeholder="Enter your password" 
          ref={passwordRef}
        />
      </div>

      <div className="label">
        <label className="remember">
          Remember me
          <input type="checkbox" id="check" />
        </label>
        <label className="forget"> Forget Password? </label>
      </div>
      <button className="btn" onClick={handleLogin}> Login </button>

      {/* <Fromdata userDate={userDate}/>  */}
    </div>
  );
}

export default Loginbtn;