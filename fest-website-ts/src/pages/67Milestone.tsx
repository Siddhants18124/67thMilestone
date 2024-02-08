import { CulturalBg, HomeHeroBg, MileStone, TechBg } from "../assets";
import EventCategory from "../components/EventCategory";
import NextText from "../components/NextText";
import { generateFakeData } from "../constants/generate_data";
import {
  technicalEvents,
  heroevent,
  mgmtEvents,
  culturalEvents,
} from "../constants/generate_data";

function MilestonePage() {
  return (
    <>
      <section className="h-screen relative z-20">
        <a href="#category" className="scroll-smooth">
          <NextText />
        </a>
        <div className="-z-10 absolute h-full w-full bg-black opacity-40" />
        <img
          src={HomeHeroBg}
          alt=""
          className="absolute h-full w-full object-cover -z-20"
        />
        <section className="h-full w-full p-4 pt-32 text-white flex flex-col justify-center items-center">
          <img src={MileStone} alt="" className="" />
        </section>
      </section>
      <div id="category"></div>
      <EventCategory
        heading="Cultural Events"
        bgImg={CulturalBg}
        events={culturalEvents}
      />
      <EventCategory
        heading="Technical Events"
        bgImg={TechBg}
        events={technicalEvents}
      />
      <EventCategory
        heading="Management Events"
        bgImg={
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        events={mgmtEvents}
      />
    </>
  );
}

export default MilestonePage;
