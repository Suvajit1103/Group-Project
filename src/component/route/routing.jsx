import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../home-page/homepage";
import Loginbtn from "../login/login";
import Signbtn from "../login/signup";
import Catagory from "../catagory/catagory";
import Cart from "../cart/cart";

const Routing = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <Routes>
      <Route path="/" element={<Homepage onAddToCart={handleAddToCart}/>} />
      <Route path="/catagory" element={<Catagory onAddToCart={handleAddToCart} />} />
      <Route path="/login" element={<Loginbtn />} />
      <Route path="/signup" element={<Signbtn />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
    </Routes>
  );
};

export default Routing;