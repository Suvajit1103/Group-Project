import React from "react";

import "./card.css";
import { NavLink, Link } from "react-router-dom";
function Card({ productData }) {
  return (
    <div className="card">
      <Link to={`/details/${productData.title}`}>
        <div className="card-image">
          <img src={productData?.image} alt="amazon-box" />
        </div>
        <div className="card-content">
          <h3>{productData?.title}</h3>
          <p>{productData?.description}</p>
          <p>Rs{productData?.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
