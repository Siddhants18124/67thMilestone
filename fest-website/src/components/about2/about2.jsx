import React from "react";

const About2 = () => {
  return (
    <div
      className="flex justify-center my-16 mx-6 sm:my-12 text-white"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div className="grid w-[73vw] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-row-2 lg:gap-8">
          <div className="h-auto rounded-lg ">
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              alt="alt image"
              className="h-full max-h-[20rem] w-full object-cover"
            />
          </div>
          <div className="h-auto rounded-lg ">
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              alt="Image 1"
              className="h-full max-h-[20rem] w-full object-cover"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="row-span-full border border-white py-4 px-8 flex flex-col items-center">
            <h1 className="text-white font-extrabold text-5xl mt-8 mb-16">
              About Fest
            </h1>
            <p className="text-white flex-grow font-[20px] text-justify leading-[36px] font-['Poppins']">
              Tristique quis arcu egestas donec risus platea adipiscing. Turpis
              arcu commodo orci lectus odio lorem. Enim, commodo, volutpat
              facilisi odio nulla eu senectus dolor. Commodo, amet ultricies
              nullam purus. Feugiat sed consequat fermentum purus consectetur
              praesent purus. Dictum at quam habitant rutrum condimentum
              praesent erat lorem. Sit eget nunc lacinia eu metus. Mauris purus
              posuere egestas elementum in blandit ipsum vitae sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
