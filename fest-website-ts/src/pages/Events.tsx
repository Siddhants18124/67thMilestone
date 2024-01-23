import { CulturalBg, HomeHeroBg, MgmtBg, MileStone, TechBg } from "../assets";
import EventCategory from "../components/EventCategory";
import NextText from "../components/NextText";
import { generateFakeData } from "../constants/generate_data";

function EventsPage() {
  return (
    <>
      <section className="h-screen relative z-20">
        <NextText />
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
      <EventCategory
        heading="Cultural Events"
        bgImg={CulturalBg}
        events={generateFakeData("cultural")}
      />
      <EventCategory
        heading="Technical Events"
        bgImg={TechBg}
        events={generateFakeData("technical")}
      />
      <EventCategory
        heading="Management Events"
        bgImg={MgmtBg}
        events={generateFakeData("management")}
      />
    </>
  );
}

export default EventsPage;
