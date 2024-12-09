import React from "react";
import "./c-navbar.css";

const CNavbar = ({ category = [], onCategorySelect }) => {
    console.log(category);
  
    if (!Array.isArray(category)) {
      return <div>Error: Category is not an array</div>;
    }
  
    const handleCategoryClick = (category) => {
      onCategorySelect(category);
    };
  
    return (
      <nav className="cnavbar">
        <button className="add-product-link">Add New Product</button>
        <hr className="separator" />
        <h1 className="category-header" onClick={() => handleCategoryClick("All")}>Category Filter</h1>
        <ul className="category-list">
          {category.length > 0 ? (
            category.map((elem, idx) => (
              <li key={idx} className="category-item" onClick={() => handleCategoryClick(elem)}>
                <span className="category-indicator"></span>
                {elem}
              </li>
            ))
          ) : (
            <li>No categories available</li>
          )}
        </ul>
      </nav>
    );
  };

export default CNavbar;