import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/

const dummuReviews = [
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
  {
    post: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Lorem Ipsum",
  },
];

const Reviews = () => {
  const content = dummuReviews.map((review, i) => (
    <div className="slick-slide" key={i}>
      <p className="slick-slide-title">{review.post}</p>
      <h4 className="slick-slide-title">{review.name}</h4>
    </div>
  ));
  console.log(content);
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
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
      <div className="review-wrapper">
        <div className="slider-wrapper">
          <h1>""Lastest Reviews""</h1>
          <Slider {...settings}>{content}</Slider>
        </div>
      </div>
    );
};

export default Reviews;
