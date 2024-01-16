import React from "react";

const About2 = () => {
  return (
    <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Left Column */}
      <div className="sm:col-span-1">
        {/* Nested Grid with 2 Rows */}
        <div className="grid grid-rows-2 gap-4">
          {/* First Row with Image */}
          <div>
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              alt="Image 1"
              className="w-full  object-cover"
            />
          </div>
          {/* Second Row with Image */}
          <div>
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              alt="Image 2"
              className="w-full  object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="sm:col-span-1 border border-black p-4">
        <p className="text-white">
          This is a box with a black border and text inside. It's designed to be responsive.
        </p>
      </div>
    </div>
  );
};

export default About2;
