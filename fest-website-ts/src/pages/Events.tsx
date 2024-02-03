import { HeroChlng, HerosCardBg, MileStone, MilestoneCardBg } from "../assets";
import EventsPageGrid from "../components/EventsPageGrid";

function EventsPage() {
  return (
    <section className="min-h-[690px] pt-32 ">
      <div className="my-4 grid gap-5 w-full place-content-center grid-cols-1 px-4 sm:w-11/12 sm:mx-auto sm:grid-cols-2">
        <EventsPageGrid
          url="/events/67milestone"
          logo={MileStone}
          bg={MilestoneCardBg}
        />
        <EventsPageGrid
          url="/events/heros-challenge"
          logo={HeroChlng}
          bg={HerosCardBg}
        />
      </div>
      <p className="text-xl mt-12 text-white text-center w-11/12 mx-auto">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
    </section>
  );
}

export default EventsPage;
