import {
  CulturalBg,
  HomeHeroBg,
  MileStone,
  MilestoneCardBg,
  MilestoneGamingBg,
  TechBg,
} from "../../../assets";
import EventCategory from "../EventCategory";
import NextText from "../../../components/NextText";
import {
  technicalEvents,
  mgmtEvents,
  culturalEvents,
  gamingEvent,
} from "../../../constants/generate_data";
import Image from "next/image";

function MilestonePage() {
  return (
    <>
      <section className="h-screen relative z-20">
        <a href="#category" className="scroll-smooth">
          <NextText />
        </a>
        <div className="-z-10 absolute h-full w-full bg-black opacity-40" />
        <Image
          src={HomeHeroBg}
          alt=""
          width={1280}
          className="absolute h-full w-full object-cover -z-20"
        />
        <section className="h-full w-full p-4 pt-32 text-white flex flex-col justify-center items-center">
          <Image width={1000} src={MileStone} alt="" className="" />
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
        bgImg={MilestoneCardBg}
        events={mgmtEvents}
      />
      <EventCategory
        heading="Gaming Events"
        bgImg={MilestoneGamingBg}
        events={gamingEvent}
      />
    </>
  );
}

export default MilestonePage;
