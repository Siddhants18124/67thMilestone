"use client";

import { MouseEventHandler, useCallback } from "react";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import { Social } from "../../assets";
import {
  Core1,
  Core2,
  Core3,
  Core4,
  Core5,
  Core6,
  Core7,
  Core8,
} from "@/assets";
import Image, { StaticImageData } from "next/image";
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
  const images: StaticImageData[] = [
    Core1,
    Core2,
    Core3,
    Core4,
    Core5,
    Core6,
    Core7,
    Core8,
  ];

  const noOfSlides = useCallback(() => {
    return () => {
      if (window.innerWidth > 1000) {
        return 3;
      } else if (window.innerWidth > 900) {
        return 2;
      } else if (window.innerWidth < 750 && window.innerWidth > 725) {
        return 1;
      } else if (window.innerWidth < 725 && window.innerWidth > 500) {
        return 2;
      } else if (window.innerWidth < 500) {
        return 1;
      } else {
        return 1;
      }
    };
  }, []);

  const settings: any = {
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
      className=" w-[84vw] text-white mx-auto mb-16"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="flex  justify-between items-center flex-wrap-reverse  gap-x-4">
        <Slider
          {...settings}
          className="rounded-xl translate-x-[-1rem] w-[50%] space-x-4 overflow-hidden min-w-[12rem]  max-h-[20rem] flex-grow"
        >
          {images.map((img, i) => {
            return <Image width={300} height={300} src={img} key={i} alt="" />;
          })}
        </Slider>
        <div className="flex h-auto rounded-lg items-center my-8 w-[17rem]">
          <div className="mt-1 text-wrap">
            <h1 className="font-bold text-[2rem] mb-8">Meet The Heads</h1>
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
