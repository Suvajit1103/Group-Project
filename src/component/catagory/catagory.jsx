import React, { useEffect, useState } from "react";
import CNavbar from "./c-navbar";
import "./catagory.css"; 
import Card from "../card/card";
import axios from "axios";

const Catagory = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function fetchProductsData(url) {
    return axios.get(url);
  }

  function setCategoryFn(data) {
    const allCategory = data.map((elem) => elem.category);
    setCategory([...new Set(allCategory)]);
  }

  const filterProductsByCategory = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const url = "https://fakestoreapi.com/products/";
        const response = await fetchProductsData(url);
        setProducts(response.data);
        setFilteredProducts(response.data);
        setCategoryFn(response.data);
      } catch (error) {
        console.log("Error : ", error.message);
      }
    })();
  }, []);

  return (
    <>
      <CNavbar category={category} onCategorySelect={filterProductsByCategory} />
      <div className="home-container">
        {filteredProducts.length > 0 &&
          filteredProducts.map((elem) => {
            return <Card key={elem.id} productData={elem} />;
          })}
      </div>
    </>
  );
};

export default Catagory;