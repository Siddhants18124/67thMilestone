import React from "react";
import Parallaximg from "../../assets/image.png";
import { Parallax, Background } from "react-parallax";

const ParallaxComponent = () => {
  return (
    <div className="xl:mx-28 mx-5">
      <Parallax className="xl:h-96 h-52 " strength={900}>
        <Background className="w-auto h-screen ">
            <div className="flex item-center">
            <h1 className="xl:text-7xl text-xl xl:mt-8 mt-24 xl:font-semibold  ml-4  font-normal tracking-widest uppercase text-orange-500 ">
              Social Cause
            </h1>
            </div>
        </Background>
      </Parallax>
      <img
          src={Parallaximg}
          alt="Parallax Image"
          className=" "
        />
    </div>
  );
};

export default ParallaxComponent;
