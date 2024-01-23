import { IEvent } from "../types";
import EventCard from "./EventCard";

type Props = {
  heading?: string;
  bgImg: string;
  events: IEvent[];
};

function EventCategory(props: Props) {
  return (
    <section
      className="bg-fixed bg-cover relative z-20"
      style={{
        backgroundImage: `url('${props.bgImg}')`,
        background: `url('${props.bgImg}')`,
        backgroundSize: "100vw 100vh",
      }}
    >
      {props.heading && (
        <>
          <div className="absolute w-full h-full bg-black -z-10 opacity-10" />
          <div className="relative h-screen flex flex-col justify-center items-center z-10">
            <h1 className="w-full text-center text-4xl mobile_m:text-5xl mobile_m:w-11/12 mobile_l:text-6xl sm:text-7xl lg:text-8xl text-white font-bold">
              {props.heading}
            </h1>
          </div>
        </>
      )}
      <div className="md:grid-cols-3 lg:grid-cols-4 py-12 grid grid-cols-1 w-full xl:w-11/12 xl:mx-auto px-4 gap-2 gap-y-6 mobile_l:grid-cols-2 mobile_l:gap-x-4">
        {props.events.map((event) => {
          return (
            <EventCard
              key={event.eventId}
              name={event.name}
              id={event.eventId}
              image={event.image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default EventCategory;
