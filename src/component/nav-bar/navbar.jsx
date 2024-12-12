import React, { useState, useEffect } from "react";
import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const allSuggestions = ['mens cloth', 'jewelery', 'electronics', 'womens clothing', 'shirt','t-shirt','tsirt','shoes','mans cloth','womans clothing','ledies bag','ledies watch','boys shirt','boys shoes'];

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
             <Link to="">Home</Link>
             <div id="search">
            <input 
            type="text" 
            placeholder="Search" 
            value={searchInput} 
            onChange={handleSearchChange} 
            />
            {suggestions.length > 0 && (
            <ul className="suggestions">
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
                )}
             </div>
             <Link to="/catagory">Catagory</Link>
             <button className="themebtn" onClick={ToggleTheme}>Theme</button>
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