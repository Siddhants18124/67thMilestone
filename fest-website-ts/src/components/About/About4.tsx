import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { MouseEventHandler } from "react";
import { Social } from "../../assets";
import "./About4.css";

const CustomArrow = ({ onClick }: { onClick: MouseEventHandler }) => (
  <div
    onClick={onClick}
    className="w-[30%] max-w-[10rem] cursor-pointer h-full before:opacity-0 absolute right-0 top-[50%] translate-y-[-50%] text-white"
  >
    <div className="absolute justify-center items-center flex bg-[#00000064] w-full h-full">
      <FaArrowRight />
    </div>
  </div>
);

export function About4() {
  const settings = {
    infinite: true,
    slidesToShow: window.innerWidth > 800 ? 3 : window.innerWidth > 600 ? 2 : 1,
    slidesToScroll: 1,
    cssEase: "ease-in",
    autoplay: false,
    prevArrow: <></>,
    nextArrow: <CustomArrow onClick={() => {}} />,
  };
  return (
    <div
      className=" w-[84vw] text-white mx-auto mb-16"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="flex  justify-between items-center flex-wrap-reverse gap-x-16">
        <Slider
          {...settings}
          className="rounded-xl space-x-4 translate-x-[-1rem] w-[30rem] max-w-[100%]  flex-grow"
        >
          <img
            src={Social}
            alt="image 1"
            className="h-[15rem] w-full object-cover  object-top"
          />
          <img
            src={Social}
            alt="image 2"
            className="h-[15rem] w-full object-cover object-top"
          />
          <img
            src={Social}
            alt="image 3"
            className="h-[15rem] w-full object-cover object-top"
          />
          <img
            src={Social}
            alt="image 3"
            className="h-[15rem] w-full object-cover object-top"
          />
        </Slider>
        <div className="lg:flex hidden h-auto rounded-lg items-center my-8 mx-4 w-[20rem]">
          <div className="mr-12 mt-1 text-wrap">
            <h1 className="font-bold text-[2rem] mb-8 font-['Poppins']">
              Meet The Heads
            </h1>
            <p className=" text-justify  text-lg mt-3">
              The one who have made this all possible and made our fest a grand
              success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About4;
