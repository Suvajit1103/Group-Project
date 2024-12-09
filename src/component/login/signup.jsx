import React, { useRef, useState } from "react";
import './signup.css';
// import Fromdata from "./from";

function Signbtn() {
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const [userDate, setUserData] = useState({ email:'', password: '' });

  const handleLogin = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneno = phoneRef.current.value;
    const password = passwordRef.current.value;

    setUserData({ email, password });

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone no:", phoneno);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <h2>Sign-up</h2>
      <div className="box">
        <input 
            type="text"
            id="nameinput"
            placeholder="Enter Your Full Name"
            ref={nameRef}
        />
        <input 
          type="email" 
          id="userinput" 
          placeholder="Enter Your Email" 
          ref={emailRef}
        />
        <input 
            type="text"
            id="numberinput"
            placeholder="Enter Your Phone No." 
            ref={phoneRef}
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
      <button className="btn" onClick={handleLogin}> Sign-up </button>

      {/* <Fromdata userDate={userDate}/>  */}
    </div>
  );
}

export default Signbtn;