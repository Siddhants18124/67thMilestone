import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const About5 = ({ duration }: { duration: number }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: window.innerWidth > 800 ? 3 : window.innerWidth > 600 ? 2 : 1,
    slidesToScroll: 1,
    cssEase: "ease-in",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 2000,
  };

  return (
    <div className="w-100vw overflow-hidden px-8 box-border">
      <Slider {...settings}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Slider>
      <Slider {...settings} autoplaySpeed={duration}>
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
        className=" min-w-[10rem] object-cover"
        src="https://blog.stucred.com/wp-content/uploads/2019/04/david-calderon-973699-unsplash.jpg"
      />
    </div>
  );
};

export default About5;
