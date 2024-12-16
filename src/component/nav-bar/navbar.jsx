import React, { useState, useEffect } from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const allSuggestions = ['mens cloth', 'jewelery', 'electronics', 'womens clothing', 'shirt','t-shirt','tsirt','shoes','mans cloth','womans clothing','ladies bag','ladies watch','boys shirt','boys shoes','underwear','TV','fridge','ac','micro-wave','iron','bike','iphone 16','iphone 16 plus','iphone 16 pro','iphone 15','iphone 14','iphone 13','iqoo 13','iqoo mobile','Ear Rings','cosmetices','Laptop','Desktop','pampers','SSD','HDD','printer','CC-TV','Monitor',''];

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
             <Link to="" className="Home"><i className="fa fa-home" style={{ fontSize: '24px', marginLeft: '10px' }}></i></Link>
             
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
             <button className="themebtn" onClick={ToggleTheme}><i class="fa-solid fa-palette" style={{color: "#ffffff", fontSize: '24px', marginLeft: '10px'}}></i></button>
             
         </div>
                <div className="login">
                <Link id="cart" to="/cart">
                        <i className="fas fa-shopping-cart" style={{ fontSize: '24px', marginLeft: '10px' }}></i>
                    </Link>
                    <Link to="login"><button id="btn1">Login</button></Link>
                    {/* <Link to="signup"><button id="btn2">Sign up</button></Link> */}

                </div>
             </div>
        </div>
    )
}

export default Navbar;