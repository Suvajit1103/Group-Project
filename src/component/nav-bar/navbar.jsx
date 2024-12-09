import React, { useState, useEffect } from "react";
import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [isLightMode, setIsLightMode] = useState(true);

    const ToggleTheme = () => {
      setIsLightMode(!isLightMode);
    };

    useEffect(() => {
        if (isLightMode) {
            document.body.classList.add('lightmode');
            document.body.classList.remove('darkmode');
        } else {
            document.body.classList.add('darkmode');
            document.body.classList.remove('lightmode');
        }
    }, [isLightMode]);

    return(
        <div className={isLightMode ? 'lightmode' : 'darkmode'}>
             <div className="navbar">
            
                <div class="Heading">
                    <img src="./Ggroups.png" />
                    <h3>G</h3>
                    <p>groups</p>
                </div>

                <div className="nav-menu">
                     <Link to="">Home</Link>
                     <Link to="/Search">Search</Link>
                     <Link to="/catagory">Catagory</Link>
                    <button className="themebtn" onClick={ToggleTheme}>Theme</button>
                </div>

                <div className="login">
                    <Link to="login"><button id="btn1">Login</button></Link>
                    <Link to="signup"><button id="btn2">Signup</button></Link>

                </div>

             </div>
        </div>

    )
}

export default Navbar;