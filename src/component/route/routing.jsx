import React from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "../home-page/homepage"
import Loginbtn from "../login/login"
import Signbtn from "../login/signup"
import Catagory from "../catagory/catagory"
import Cart from "../cart/cart"


const Routing = () => {
    
    return(
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/catagory" element={<Catagory/>} />
           <Route path="/login" element={<Loginbtn/>} />
           <Route path="/signup" element={<Signbtn/>} />
           <Route path="/cart" element={<Cart/>} />
        </Routes>
     )
     
  }
  export default Routing;
  