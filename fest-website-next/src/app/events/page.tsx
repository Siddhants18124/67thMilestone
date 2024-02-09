import { HeroChlng, HomeCard1, HomeCard2, MileStone } from "../../assets";
import EventsPageGrid from "./EventsPageGrid";

function EventsPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-4 pt-0 ">
      <div className="my-4 grid gap-5 w-full place-content-center grid-cols-1 px-4 sm:w-11/12 sm:mx-auto sm:grid-cols-2">
        <EventsPageGrid
          url="/events/67milestone"
          logo={MileStone}
          events={true}
          bg={HomeCard1}
        />
        <EventsPageGrid
          events={true}
          url="/events/heros-challenge"
          logo={HeroChlng}
          bg={HomeCard2}
        />
      </div>
      <p className="text-xl mt-12 text-white text-center w-11/12 mx-auto">
        Our world where excitement ignites and euphoria thrives! Pulsating
        energy, timeless memories.
      </p>
    </section>
  );
}

export default EventsPage;
