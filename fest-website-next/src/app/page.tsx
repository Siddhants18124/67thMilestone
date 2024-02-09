import HeroSection from "./HeroSection";
import {
  EducateImg,
  HeroChlng,
  ParllaxImg,
  MileStone,
  day1,
  day2,
  day3,
} from "../assets";
import EventsPageGrid from "./EventsPageGrid";
import ExploreCard from "./ExploreCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="min-h-screen">
        <div
          id="deepdive"
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
              <EventsPageGrid
                url="/events/67milestone"
                logo={MileStone}
                bg={
                  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
              <EventsPageGrid
                url="/events/heros-challenge"
                logo={HeroChlng}
                bg={
                  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-3 lg:gap-3">
              <ExploreCard image={day1} text="Star Night" />
              <ExploreCard image={day2} text="Star Night" />
              <ExploreCard image={day3} text="Star Night" />
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
                className="object-cover w-full max-w-[30rem] my-8"
              />
              <p className="font-['Poppins'] max-w-[30rem] w-full text-left text-white leading-relaxed font-[1.15rem]">
                At BMU, in our unwavering commitment to theme:Enthusiasmo -
                Embrace Openness, Ignite Happiness we are thrilled to announce
                our dedicated support for the profound social cause of Openness.
                This cause encapsulates the very essence of happiness.
              </p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/13Y67o2gCwTncargWqmLVQvnUPhc9TXQV/view"
            className="flex w-fit mt-16 cursor-pointer transition-all duration-700 hover:bg-white hover:text-black mx-auto justify-center items-center border-white border-2 px-16 py-4 text-white font-[1.1rem]"
          >
            <p className="m-0">Sponsor Us</p>
          </a>
        </div>
      </section>
    </>
  );
}
