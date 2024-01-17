import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in",
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
  };

  return (
    <div className="w-100vw overflow-hidden p-8 box-border">
      <Slider {...settings}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Slider>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="flex justify-center p-4">
      <img
        className="w-33lvw  object-cover"
        src="https://blog.stucred.com/wp-content/uploads/2019/04/david-calderon-973699-unsplash.jpg"
      />
    </div>
  );
};

export default About5;
