import React from "react";
import { Carousel } from "@material-tailwind/react";

const About5 = () => {
  return (
    <div className="h-64 w-full">
      <Carousel transition={{ duration: 2 }} className="h-full space-x-8">
        <div className="flex w-auto">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-auto w-max object-cover"
          />
        </div>
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-auto w-full object-cover"
          />
          {/* Add more images as needed */}
        </div>
      </Carousel>
    </div>
  );
};

export default About5;