import React from "react";
import Header from "./header/Header";
import Slider from "./Slider";

const Products = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className="products-container">
        <div className="content-hot-sales">
          <div className="hot-sales"></div>
          <div className="hot-sales"></div>
          <div className="hot-sales"></div>
        </div>
        <h2 className="category-header">Check out most popular categories</h2>
        <div className="category-grid">
          <div className="cat-sales"></div>
          <div className="cat-sales"></div>
          <div className="cat-sales"></div>
          <div className="cat-sales"></div>
          <div className="cat-sales"></div>
        </div>
      </div>
    </>
  );
};

export default Products;
