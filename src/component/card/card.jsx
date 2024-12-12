import React from "react";

import "./card.css";
import { NavLink, Link } from "react-router-dom";
function Card({ productData }) {
  return (
    <div className="container-card">
    <div className="card">
      <Link to={`/details/${productData.title}`}>
        <div className="card-image">
          <img src={productData?.image} alt="amazon-box" />
        </div>
        <div className="card-content">
          <h3>{productData?.title}</h3>
          <div className="price">
            <h3>price :  ${productData?.price}</h3>
          </div>
          <Link>Add TO Cart</Link>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Card;
