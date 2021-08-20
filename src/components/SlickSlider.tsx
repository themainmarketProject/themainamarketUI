import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/

https: interface Products {
  id: string;
  avatarUrl: string;
  name: string;
  price: number;
}

interface Prod {
  products: Products[];
}

const SlickDisplay = (props: Prod) => {
  const { products } = props;
  const content = products?.map((product) => (
    <div className="slick-slide" key={product.id}>
      <img className="slick-slide-image" src={product.avatarUrl} alt="" />
      <p className="slick-slide-title">{product.name}</p>
      <p className="slick-slide-title">${product.price}</p>
    </div>
  ));
  console.log(content);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">⫸</div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">⫷</div>
      </div>
    ),
  };
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>{content}</Slider>
    </div>
  );
};

export default SlickDisplay;
