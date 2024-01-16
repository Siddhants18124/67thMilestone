import React from "react";

const Aboutpage = () => {
  return (
    <div className="container md:container md:mx-auto mx-auto my-auto w-full ">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
            alt="Image 1"
            className="w-full object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
            alt="Image 2"
            className="w-full object-cover"
          />
        </div>
        </div>
        <div className="grid xl:grid-cols-3 mt-5 sm:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
            alt="Image 3"
            className="w-full h-9/12 object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
            alt="Image 4"
            className="w-full h-9/12 object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
            alt="Image 5"
            className="w-full h-9/12 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
