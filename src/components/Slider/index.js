import React from "react";
import "./HeaderSlider.scss";
import { sliderImgs } from "../../utils/images";
import Sliders from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='slider'>
      <div className='container'>
        <div className='slider-content overflow-hidden'>
          <Sliders {...settings}>
            <div className="slider-item">
              <img src = {sliderImgs[0]} alt='img1' />
            </div>
            <div className="slider-item">
              <img src = {sliderImgs[1]} alt='img1' />
            </div>
          </Sliders>
          
        </div>
      </div>
    </div>
    );
};

export default Slider;
