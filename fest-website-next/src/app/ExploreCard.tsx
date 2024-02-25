// import AOS from "aos";
// import { useEffect } from "react";
// import "aos/dist/aos.css";

import Image, { StaticImageData } from "next/image";

const ExploreCard = ({
  text,
  image,
  containsImage,
}: {
  text: string;
  image: StaticImageData;
  containsImage?: boolean;
}) => {
  return (
    <div className="h-[20rem] group overflow-hidden transition-all duration-300 ease-in-out relative rounded-lg bg-gray-200">
      <div className=""></div>
      <Image
        src={image}
        alt="Image 1"
        width={700}
        height={320}
        className="w-full transition-all duration-300 ease-in-out scale-125 group-hover:scale-100 h-full object-cover"
      />
      {containsImage ? (
        <Image
          src={text}
          width={700}
          height={320}
          alt="Image 2"
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
