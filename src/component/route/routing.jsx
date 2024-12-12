import React from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "../home-page/homepage"
import Loginbtn from "../login/login"
import Signbtn from "../login/signup"
import Catagory from "../catagory/catagory"


const Routing = () => {
    
    return(
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/catagory" element={<Catagory/>} />
           <Route path="/login" element={<Loginbtn/>} />
           <Route path="/signup" element={<Signbtn/>} />
        </Routes>
     )
     
  }
  export default Routing;
  