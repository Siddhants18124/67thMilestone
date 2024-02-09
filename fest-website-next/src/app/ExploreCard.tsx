"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreCard = ({
  text,
  image,
  containsImage,
}: {
  text: string;
  image: string;
  containsImage?: boolean;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-[20rem] font-['Poppins'] group overflow-hidden transition-all duration-300 ease-in-out relative rounded-lg bg-gray-200">
      <div className="overlay transition-all  duration-500 bg-[#00000064] absolute w-full h-full z-10 left-0 top-0"></div>
      <img
        src={image}
        alt="Image 1"
        className="w-full transition-all duration-300 ease-in-out scale-125 group-hover:scale-100 h-full object-cover"
      />
      {containsImage ? (
        <img
          src={text}
          className="w-[50%] min-w-[10rem] object-cover max-h-[75%] absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      ) : (
        <p className="absolute transition-all duration-300 ease-in-out z-20 text-[1.25rem] group-hover:scale-125 scale-100 uppercase text-white w-fit h-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {text}
        </p>
      )}
    </div>
  );
};

export default ExploreCard;
