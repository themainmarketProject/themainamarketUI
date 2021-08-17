import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../images/page1.jpeg";
import image2 from "../images/page2.jpeg";
import image3 from "../images/page3.jpeg";
import image4 from "../images/page4.jpeg";

export default function Slider() {
  const interval = 5000;
  return (
    <div className="App">
      <AliceCarousel autoPlay={true} autoPlayInterval={interval} infinite={true}>
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}
