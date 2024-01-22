import { HomeHeroBg, MileStone } from "../assets";

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
      <section className="bg-culturalPx bg-fixed bg-cover relative -z-20">
        <div className="absolute w-full h-full bg-black -z-10 opacity-10" />
        <div className="h-screen flex flex-col justify-center items-center z-10">
          <h1 className="text-6xl text-white font-bold">Cultural Events</h1>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
