import { HeroChlng, HerosChallengeBg } from "../assets";
import EventCategory from "../components/EventCategory";
import NextText from "../components/NextText";
import { generateFakeData } from "../constants/generate_data";

function HerosChallenge() {
  return (
    <>
      <section className="h-screen relative z-20">
        <NextText />
        <div className="-z-10 absolute h-full w-full bg-black opacity-40" />
        <img
          src={HerosChallengeBg}
          alt=""
          className="absolute h-full w-full object-cover -z-20"
        />
        <section className="h-full w-full p-4 pt-32 text-white flex flex-col justify-center items-center">
          <img src={HeroChlng} alt="" className="" />
        </section>
      </section>
      <EventCategory bgImg="none" events={generateFakeData("hero")} />
    </>
  );
}

export default HerosChallenge;
