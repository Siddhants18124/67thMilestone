import Navbar from "../../components/navbar";
import Homepage from "../../components/Homepage/homepage";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

import logo from "../../assets/navbarimg.png";
import challenge from "../../assets/challenge-bg.png";
import milestone from "../../assets/milestone-bg.png";
import challengeLogo from "../../assets/challenge.png";
import educate from "../../assets/educate.png";
import Parallaximg from "../../assets/image.png";

import "./index.css";

import { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main-bg">
      <Navbar />
      {/* TODO: Update Homepage hero section*/}
      <Homepage />
      <div data-aos="fade-up" data-aos-duration="1000" className="my-8">
        <div className="text-center text-white xl:mt-16 mb-5 xl:mb-6 mt-10">
          <h1 className="xl:text-4xl text-2xl my-16">
            LET US TAKE A DEEP DIVE IN THE
          </h1>
        </div>
        <div className="w-[80vw] mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  lg:gap-3">
            <ExploreCard
              image={milestone}
              text={logo}
              containsImage={true}
              link="/"
            />
            <ExploreCard
              image={challenge}
              text={challengeLogo}
              containsImage={true}
              link="/"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-3 lg:gap-3">
            <ExploreCard
              image="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              text="Challenge"
              link="/"
            />
            <ExploreCard
              image="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              text="Challenge"
              link="/"
            />
            <ExploreCard
              image="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
              text="Challenge"
              link="/"
            />
          </div>
        </div>
      </div>
      <div className="text-['Poppins'] mt-16">
        <p className="text-center text-[4rem]  uppercase text-transparent social text-bold">
          Social Cause
        </p>
        <div className="flex flex-row flex-wrap-reverse w-[80vw] gap-8 justify-center items-start mx-auto my-8 text-white">
          <img
            src={Parallaximg}
            alt="Parallax Image"
            className="object-cover w-[40vw] min-w-[17rem] flex-grow"
          />
          <div className="flex flex-col sm:flex-grow gap-4 w-[25vw] h-full justify-center items-center min-w-[17rem] ">
            <img
              src={educate}
              alt="educate Logo"
              className="object-cover w-full  max-w-[20rem] my-8"
            />
            <p className="font-['Poppins']  text-justify text-white leading-relaxed font-[1.15rem]">
              Etiam nulla nulla bibendum et egestas. Tellus luctus duis
              pellentesque cursus consectetur luctus. Et sed semper ornare et
              luctus volutpat ipsum in faucibus.
            </p>
          </div>
        </div>
        <div className="flex w-fit mt-16 cursor-pointer transition-all duration-700 hover:bg-white hover:text-black mx-auto justify-center items-center border-white border-2 px-16 py-4 text-white font-[1.1rem]">
          <p className="m-0">Contribute</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ExploreCard = ({ link, text, image, containsImage }) => {
  return (
    <Link to={link}>
      <div className="h-[20rem] font-['Poppins'] relative rounded-lg bg-gray-200">
        <div className="overlay transition-all duration-500 bg-[#00000064] hover:bg-[#0000008f] absolute w-full h-full z-10 left-0 top-0"></div>
        <img src={image} alt="Image 1" className="w-full h-full object-cover" />
        {containsImage ? (
          <img
            src={text}
            className="w-[50%] object-cover max-h-[75%] absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        ) : (
          <p className="absolute z-20 text-[1.15rem] uppercase text-white w-fit h-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {text}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Home;
