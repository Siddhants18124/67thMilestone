import React from "react";
import Slider from "react-slick";

const About5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="container flex  ">
      <h2>Fade</h2>
      <Slider {...settings}>
        <div className="">
          <img
            className="w-20 h-20 "
            src="https://blog.stucred.com/wp-content/uploads/2019/04/david-calderon-973699-unsplash.jpg"
          />
        </div>
        <div>
          <img
            className="w-20 h-20 "
            src="https://blog.stucred.com/wp-content/uploads/2019/04/david-calderon-973699-unsplash.jpg"
          />
        </div>
        <div>
          <img
            className="w-20 h-20 "
            src="https://blog.stucred.com/wp-content/uploads/2019/04/david-calderon-973699-unsplash.jpg"
          />
        </div>
        <div>
          <img
            className="w-20 h-20 "
            src="https://blog.stucred.com/wp-content/uploads/2019/04/david-calderon-973699-unsplash.jpg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default About5;
