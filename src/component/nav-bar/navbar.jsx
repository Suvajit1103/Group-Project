import React, { useState, useEffect } from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const allSuggestions = ['mens cloth', 'jewelery', 'electronics', 'womens clothing', 'shirt','t-shirt','tsirt','shoes','mans cloth','womans clothing','ladies bag','ladies watch','boys shirt','boys shoes'];

    const [isLightMode, setIsLightMode] = useState(true);

    const ToggleTheme = () => {
      setIsLightMode(!isLightMode);
    };
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        if (value) {
            const filteredSuggestions = allSuggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
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
             <Link to="" className="Home"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0-960 960 960" width="25px" fill="black"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></Link>
             <div id="search">

            <div>
            <input 
            type="text" 
            placeholder="Search" 
            value={searchInput} 
            onChange={handleSearchChange} 
            />
            </div>
            {suggestions.length > 0 && (
            <ul className="suggestions">
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
                )}
             </div>
             <Link to="/catagory" className="catagory" >Catagory</Link>
             <button className="themebtn" onClick={ToggleTheme}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg></button>
             <Link to="/cart">
                        <i className="fas fa-shopping-cart" style={{ fontSize: '24px', marginLeft: '10px' }}></i>
                    </Link>
         </div>
                <div className="login">
                    <Link to="login"><button id="btn1">Login</button></Link>
                    <Link to="signup"><button id="btn2">Sign up</button></Link>

                </div>
             </div>
        </div>
    )
}

export default Navbar;