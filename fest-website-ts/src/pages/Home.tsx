import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  EducateImg,
  HeroChlng,
  HerosCardBg,
  HomeHeroBg,
  Logo,
  MilestoneCardBg,
  ParllaxImg,
} from "../assets";
import NextText from "../components/NextText";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExploreCard = ({
  link,
  text,
  image,
  containsImage,
}: {
  link: string;
  text: string;
  image: string;
  containsImage?: boolean;
}) => {
  useEffect(() => {
    AOS.init()
  }, []);
  
  return (
    <Link to={link}>
      <div className="h-[20rem] font-['Poppins'] relative rounded-lg bg-gray-200">
        <div className="overlay transition-all duration-500 bg-[#00000064] hover:bg-[#0000008f] absolute w-full h-full z-10 left-0 top-0"></div>
        <img src={image} alt="Image 1" className="w-full h-full object-cover" />
        {containsImage ? (
          <img
            src={text}
            className="w-[50%] min-w-[10rem] object-cover max-h-[75%] absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
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

function HomePage() {
  return (
    <>
      <section className="h-screen relative z-20">
        <div className="-z-10 absolute h-full w-full bg-black opacity-40" />
        <NextText />
        <img
          src={HomeHeroBg}
          alt=""
          className="absolute h-full w-full object-cover -z-20"
        />
        <section className="relative h-full w-full p-4 pt-32 text-white flex flex-col justify-between lg:w-11/12 lg:mx-auto">
          <div />
          <div>
            <h1 className="text-3xl mobile_m:text-5xl mobile_s:text-4xl mobile_l:text-6xl sm:text-7xl font-bold tracking-wider">
              <div className="mb-4">67th Milestone</div>
              <div>Hero’s Challenge</div>
            </h1>
            <div className="mt-8 bg-white h-20 w-20 sm:h-32 sm:w-32 flex flex-col uppercase font-bold text-xl sm:text-3xl justify-center items-center px-2 gap-2">
              <h2 className="mix-blend-difference text-center">01-03</h2>
              <div className="h-[2px] w-full bg-black"></div>
              <h2 className="mix-blend-difference text-center">MAR</h2>
            </div>
          </div>
          <Link
            to={"https://maps.app.goo.gl/k8dmbFxLpQkFm11F8"}
            className="text-lg flex flex-row items-center gap-1 sm:text-2xl mb-4"
          >
            <IoLocationOutline className="" />
            <span className="text-lg font-light">
              BML Munjal University, NH 48
            </span>
            <span className="hidden">, Kapriwas, Haryana 122413</span>
          </Link>
        </section>
      </section>
      <section className="min-h-screen">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="my-8 min-h-screen"
        >
          <div className="text-center mx-4 text-white xl:mt-16 mb-5 xl:mb-6 mt-10">
            <h1 className="xl:text-4xl text-2xl my-16">
              LET US TAKE A DEEP DIVE IN THE
            </h1>
          </div>
          <div className="w-[80vw] mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  lg:gap-3">
              <ExploreCard
                image={MilestoneCardBg}
                text={Logo}
                containsImage={true}
                link="/events/67milestone"
              />
              <ExploreCard
                image={HerosCardBg}
                text={HeroChlng}
                containsImage={true}
                link="/events/heros-challenge"
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
        <div className="text-['Poppins'] mt-16" data-aos="fade-up">
          <p className="text-center text-7xl uppercase text-transparent social font-bold">
            Social Cause
          </p>
          <div className="flex flex-row flex-wrap-reverse w-[80vw] gap-8 justify-center items-start mx-auto my-8 text-white">
            <img
              src={ParllaxImg}
              alt="Parallax Image"
              className="object-cover w-[28vw] min-w-[17rem] flex-grow"
            />
            <div className="flex flex-col sm:flex-grow gap-4 w-[25vw] h-full justify-center items-center min-w-[17rem] ">
              <img
                src={EducateImg}
                alt="educate Logo"
                className="object-cover w-full max-w-[30rem] h-28 my-8"
              />
              <p className="font-['Poppins'] max-w-[30rem] w-full text-justify text-white leading-relaxed font-[1.15rem]">
                Etiam nulla nulla bibendum et egestas. Tellus luctus duis
                pellentesque cursus consectetur luctus. Et sed semper ornare et
                luctus volutpat ipsum in faucibus.
              </p>
            </div>
          </div>
          <div className="flex w-fit mt-16 cursor-pointer transition-all duration-700 hover:bg-white hover:text-black mx-auto justify-center items-center border-white border-2 px-16 py-4 text-white font-[1.1rem]">
            <p className="m-0">Sponsor Us</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
