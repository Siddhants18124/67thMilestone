import { HomeHeroBg, MileStone } from "../assets";
import EventCategory from "../components/EventCategory";
import { generateFakeData } from "../constants/generate_data";

function EventsPage() {
  return (
    <>
      <section className="h-screen relative z-20">
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
        events={generateFakeData("cultural")}
      />
      <EventCategory
        heading="Technical Events"
        events={generateFakeData("cultural")}
      />
      <EventCategory
        heading="Management Events"
        events={generateFakeData("cultural")}
      />
    </>
  );
}

export default EventsPage;
