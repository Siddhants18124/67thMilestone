import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./About5.css";

const About5 = () => {
  return (
    <div className="pt-6">
      <div className="slider">
        <div className="slide-track">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
      <div className="slider">
        <div className="slide-track slide-track2">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="slide">
      <img src="https://blog.stucred.com/wp-content/uploads/2019/04/david-calderon-973699-unsplash.jpg" />
    </div>
  );
};

export default About5;
