import { Fragment } from "react";
import {
  CulturalEvent1,
  CulturalEvent10,
  CulturalEvent11,
  CulturalEvent12,
  CulturalEvent2,
  CulturalEvent3,
  CulturalEvent4,
  CulturalEvent5,
  CulturalEvent6,
  CulturalEvent7,
  CulturalEvent8,
  CulturalEvent9,
  HomeHeroBg,
  MileStone,
} from "../assets";
import EventCard from "../components/EventCard";

function EventsPage() {
  const images = [
    CulturalEvent1,
    CulturalEvent2,
    CulturalEvent3,
    CulturalEvent4,
    CulturalEvent5,
    CulturalEvent6,
    CulturalEvent7,
    CulturalEvent8,
    CulturalEvent9,
    CulturalEvent10,
    CulturalEvent11,
    CulturalEvent12,
  ];
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
      <section className="bg-culturalPx bg-fixed bg-cover relative z-20">
        <div className="absolute w-full h-full bg-black -z-10 opacity-10" />
        <div className="h-screen flex flex-col justify-center items-center z-10">
          <h1 className="w-full text-center text-4xl mobile_m:text-5xl mobile_m:w-11/12 mobile_l:text-6xl sm:text-7xl lg:text-8xl text-white font-bold">
            Cultural Events
          </h1>
        </div>
        <div className="md:grid-cols-3 lg:grid-cols-4 py-12 grid grid-cols-1 w-full xl:w-11/12 xl:mx-auto px-4 gap-2 gap-y-6 mobile_l:grid-cols-2 mobile_l:gap-x-4">
          {[...new Array(12)].map((_item, idx) => {
            return (
              <Fragment key={idx}>
                <EventCard
                  name="Cultural"
                  id={`${idx + 1}`}
                  details=""
                  image={images[idx]}
                />
              </Fragment>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default EventsPage;
