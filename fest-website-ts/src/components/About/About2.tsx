import "./about2.css";

const About2 = () => {
  return (
    <div
      className="flex justify-center pt-[8rem] mx-2 md:mx-6 md:py-4 box-border min-h-[100vh] text-white"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div className="grid md:w-[73vw] w-[80vw] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="grid grid-cols-1 gap-3 lg:grid-row-2">
          <div className="h-auto rounded-lg flex justify-end">
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              alt="alt image"
              className="h-full max-h-[20rem] w-full max-w-[600px] object-cover"
            />
          </div>
          <div className="h-auto rounded-lg flex justify-end">
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              alt="Image 1"
              className="h-full max-h-[20rem] w-full max-w-[600px] object-cover"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="row-span-full py-4 md:px-4 sm:px-4 lg:px-8 flex flex-col items-center">
            <h1 className="text-white font-extrabold text-5xl mt-8 mb-16">
              About Fest
            </h1>
            <p className="text-white flex-grow font-[20px] lg:text-justify leading-[36px] font-['Poppins']">
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
