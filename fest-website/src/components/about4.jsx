import React from "react";
import { Carousel } from "@material-tailwind/react";

export function About4() {
  return (
    <div className="xl:mx-72 xl:my-36 mx-6 mt-4">
      {/* first row */}
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
        <div class="h-72 rounded-lg  lg:col-span-2 ">
          <Carousel transition={{ duration: 2 }} className="rounded-xl space-x-4">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>

        <div class="flex h-auto rounded-lg items-center ">
          <div className="mr-12 mt-1 text-wrap">
            <h1 className="font-extrabold text-xl  ">Meet The Core</h1>
            <p className=" text-justify  text-lg mt-3">
              the one who have made this all possible and made our fest a grand
              success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About4;
