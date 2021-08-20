import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, SUB_CATEGORIES, PRODUCTS } from "../lib/graphQlQuery";
import Header from "./header/Header";
import Loader from "./Loader";
import Slider from "./Slider";
import Reviews from "./Reviews";
import SlickDisplay from "./SlickSlider";
import Featured from "./FeatureProducts";

interface Category {
  id: string;
  name: string;
  subCategories: [{ id: string; name: string }];
}

interface subCatgory {
  id: string;
  name: string;
  products: [{ id: string; name: string; avatarUrl: string }];
}

const Products = () => {
  const {
    loading: loading1,
    error: error1,
    data: data1,
  } = useQuery(GET_CATEGORIES);
  const {
    loading: loading2,
    error: error2,
    data: data2,
  } = useQuery(SUB_CATEGORIES);
  const { loading: loading3, error: error3, data: data3 } = useQuery(PRODUCTS);
  console.log(loading1, loading2, loading3);
  const retreiving = loading1
    ? true
    : loading2
    ? true
    : loading3
    ? true
    : false;
  console.log(error1, data1);
  return (
    <>
      <Header />
      {retreiving ? (
        <Loader />
      ) : (
        <>
          <Slider />
          <div className="products-container">
            <div className="content-hot-sales">
              <div className="hot-sales"></div>
              <div className="hot-sales"></div>
              <div className="hot-sales"></div>
            </div>
            <h2 className="category-header">
              Check out most popular categories
            </h2>
            <div className="category-grid">
              {data2?.subCategories.map((item: subCatgory) => (
                <div className="cat-sales" key={item.id}>
                  <img src={item.products[0].avatarUrl} alt="" />
                </div>
              ))}
            </div>
            <div className="category-list">
              {data1?.categories.map((category: Category) => (
                <div className="category-column">
                  <h3 key={category.id}>{category.name}</h3>
                  <ul>
                    {category.subCategories.map((cat) => (
                      <li key={cat.id}>{cat.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <h2 className="category-header">
              Check out most popular categories
            </h2>
            <SlickDisplay products={data3?.products} />
            <div className="content-hot-sales">
              <div className="hot-sales2"></div>
              <div className="hot-sales2"></div>
            </div>
            <h2 className="category-header">Featured Products</h2>
            <Featured products={data3?.products} />
          </div>
          <Reviews />
        </>
      )}
    </>
  );
};

export default Products;
