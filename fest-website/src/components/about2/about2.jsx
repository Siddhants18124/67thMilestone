import React from "react";


const About2 = () => {
  return (
    // <div className="xl:mx-48 xl:mt-5  ">
    //   <div className="container mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
    //     {/* Left Column */}
    //     <div className="sm:col-span-1">
    //       {/* Nested Grid with 2 Rows */}
    //       <div className="grid grid-rows-2 gap-4">
    //         {/* First Row with Image */}
    //         <div>
    //   <img
    //     src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
    //     alt="Image 1"
    //     className="w-full object-cover"
    //   />
    //         </div>
    //         {/* Second Row with Image */}
    //         <div>
    //           <img
    //             src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
    //             alt="Image 2"
    //             className="w-full object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Column */}
    // <div className="col-span-1 border border-black p-4">
    //   <h1 className="text-black">gi</h1>
    //   <p className="text-black">
    //     This is a box with a black border and text inside. It's designed to be responsive.
    //   </p>
    // </div>
    //   </div>
    // </div>
    <div className="xl:mx-72 xl:my-36 mx-6 mt-4">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-row-2 lg:gap-8">
          <div class="h-auto rounded-lg bg-gray-200">
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              alt="alt image"
              className="w-full object-cover"
            />
          </div>
          <div class="h-auto rounded-lg bg-gray-200">
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              alt="Image 1"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="row-span-full border border-black p-4 flex flex-col items-center">
            <h1 className="text-black font-extrabold text-5xl mb-5">About Fest</h1>
            <p className="text-black flex-grow">
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
