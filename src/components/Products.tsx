import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, SUB_CATEGORIES, PRODUCTS } from "../lib/graphQlQuery";
import Header from "./header/Header";
import Loader from "./Loader";
import Slider from "./Slider";
import Reviews from "./Reviews";
import SlickDisplay from "./SlickSlider";
import Featured from "./FeatureProducts";
import Newsletter from "./NewsLetter";
import Footer from "./footer/Footer";
import { CategoryRounded } from "@material-ui/icons";
import { ApolloError } from "apollo-client";

interface Category {
  id: string;
  name: string;
  subCategories: [{ id: string; name: string }];
}

interface subCategory {
  id: string;
  name: string;
  products: [{ id: string; name: string; avatarUrl: string }];
}

interface Cat {
  loading1: boolean;
  error1: string;
  data1: Category;
}

interface Products {
  id: string;
  name: string;
  price: number;
  avatarUrl: string;
}

interface Data {
  category: {
    loading1: boolean;
    error1: ApolloError | undefined;
    data1: Categories;
  };
  subCategory: {
    loading2: boolean;
    error2: ApolloError | undefined;
    data2: Categories;
  };

  product: {
    loading3: boolean;
    error3: ApolloError | undefined;
    data3: Categories;
  };
}

type Categories = {
  categories: Category[];
  subCategories: subCategory[];
  products: Products[];
}

const Products = (props: Data) => {
  const { category, subCategory, product } = props;
  const retreiving = category?.loading1
    ? true
    : subCategory?.loading2
    ? true
    : product?.loading3
    ? true
    : false;
  return (
    <>
      <Header { ...category }/>
      {retreiving ? (
        <Loader />
      ) : (
        <div className="product-background">
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
              {subCategory?.data2?.subCategories.map((item: subCategory) => (
                <div className="cat-sales" key={item.id}>
                  <img src={item.products[0].avatarUrl} alt="" />
                </div>
              ))}
            </div>
            <div className="category-list">
              {category?.data1?.categories.map((category: Category) => (
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
            <SlickDisplay products={product?.data3?.products} />
            <div className="content-hot-sales">
              <div className="hot-sales2"></div>
              <div className="hot-sales2"></div>
            </div>
            <h2 className="category-header">Featured Products</h2>
            <Featured products={product?.data3?.products} />
          </div>
          <Reviews />
          <Newsletter />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Products;
