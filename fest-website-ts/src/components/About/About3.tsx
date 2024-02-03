import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { MouseEventHandler } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Social } from "../../assets";
import "./About4.css";

const About3 = () => {
  const [sm, setSm] = useState(false);

  const CustomArrow = ({ onClick }: { onClick: MouseEventHandler }) => (
    <div
      onClick={onClick}
      className="w-[30%] min-w-[10rem]  cursor-pointer h-full before:opacity-0 absolute right-0 top-[50%] translate-y-[-50%] text-white"
    >
      <div className="absolute justify-center items-center flex bg-[#00000064] w-full h-full">
        <FaArrowRight />
      </div>
    </div>
  );
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSm(true);
    } else {
      setSm(false);
    }
    window.onresize = () => {
      if (window.innerWidth < 1024) {
        setSm(true);
      } else {
        setSm(false);
      }
    };
  }, []);

  const noOfSlides = () => {
    if (window.innerWidth > 900) {
      return 2;
    } else if (window.innerWidth < 750 && window.innerWidth > 725) {
      return 1;
    } else if (window.innerWidth < 725 && window.innerWidth > 400) {
      return 2;
    } else if (window.innerWidth < 400) {
      return 1;
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: noOfSlides(),
    slidesToScroll: 1,
    cssEase: "ease-in",
    autoplay: false,
    prevArrow: <></>,
    nextArrow: <CustomArrow onClick={() => {}} />,
  };

  return (
    <div
      className={
        sm
          ? "w-[84vw] my-16 mx-auto text-white"
          : "lg:w-[95vw] xl:w-[84vw] mt-16 mx-auto text-white"
      }
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="lg:grid grid-cols-5 place-content-center gap-4 gap-y-6  mx-auto w-fit h-lvh hidden justify-start flex-wrap ">
        <div className="h-auto col-span-1 w-full rounded-lg">
          <div className="mr-4 mt-1 text-wrap  ">
            <h1 className="font-extrabold mb-8 text-[2rem] font-['Poppins'] ">
              Meet The Core
            </h1>
            <p className=" text-justify leading-relaxed  text-lg mt-3">
              The one's who have made this all possible and made our fest a
              grand success
            </p>
          </div>
        </div>
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
        <img
          src={Social}
          alt="Image 1"
          className=" col-span-1 h-[15rem] w-full object-cover object-top "
        />
      </div>
      {sm ? (
        <div className="flex flex-wrap items-start justify-start gap-8">
          {" "}
          <div className="h-auto rounded-lg w-[17rem] max-w-[85vw]">
            <div className=" mt-1 text-wrap">
              <h1 className="font-extrabold mb-8 text-[2rem] font-['Poppins'] ">
                Meet The Core
              </h1>
              <p className=" text-justify leading-relaxed  text-lg mt-3">
                The one's who have made this all possible and made our fest a
                grand success
              </p>
            </div>
          </div>
          <Slider
            {...settings}
            className="rounded-xl translate-x-[-1rem] w-[50%] space-x-4 overflow-hidden min-w-[12rem]  max-h-[20rem] flex-grow"
          >
            <img src={Social} alt="" />
            <img src={Social} alt="" />
            <img src={Social} alt="" />
            <img src={Social} alt="" />
            <img src={Social} alt="" />
          </Slider>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default About3;
