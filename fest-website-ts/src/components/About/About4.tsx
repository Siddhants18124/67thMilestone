import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CustomArrow = () => (
  <div className="w-[30%] max-w-[10rem] cursor-pointer h-full before:opacity-0 absolute right-0 top-[50%] translate-y-[-50%] text-white">
    <div className="absolute justify-center items-center flex bg-[#00000064] w-full h-full">
      <i className="fa-solid fa-2x fa-arrow-right"></i>
    </div>
  </div>
);

export function About4() {
  const settings = {
    infinite: true,
    slidesToShow: window.innerWidth > 800 ? 3 : window.innerWidth > 600 ? 2 : 1,
    slidesToScroll: 1,
    cssEase: "ease-in",
    autoplay: false,
    prevArrow: <></>,
    nextArrow: <CustomArrow />,
  };
  return (
    <div
      className=" w-[74vw] text-white mx-auto my-16"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="flex justify-between items-center flex-wrap-reverse gap-x-16">
        <Slider
          {...settings}
          className="rounded-xl space-x-4 w-[30rem] max-w-[100%]  flex-grow"
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-[15rem] w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-[15rem] w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-[15rem] w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-[15rem] w-full object-cover"
          />
        </Slider>
        <div className="flex h-auto rounded-lg items-center my-8 mx-4 w-[20rem]">
          <div className="mr-12 mt-1 text-wrap">
            <h1 className="font-bold text-[2rem] mb-8 font-['Poppins']">
              Meet The Heads
            </h1>
            <p className=" text-justify  text-lg mt-3">
              The one who have made this all possible and made our fest a grand
              success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About4;
