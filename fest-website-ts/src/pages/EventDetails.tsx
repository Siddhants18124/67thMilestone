import { Link, Navigate, useParams } from "react-router-dom";
import { Events } from "../constants/data";
import { EventType } from "../types";

function EventDetails() {
  const { eventType, eventId } = useParams<{
    eventType: EventType;
    eventId: string;
  }>();

  if (!eventId || !eventType) return <Navigate to={"/not-found"} />;

  const currEvent = Events[eventType][eventId];

  return (
    <div className="main-bg register">
      <div className="flex justify-center  pt-[8rem] lg:pt-24">
        <div className="p-8 w-fit bg-[#ffffff19] text-white rounded-xl mt-12">
          <div className="flex flex-wrap justify-center gap-8 w-[80vw]">
            <img
              src={currEvent.image}
              className="lg:w-[25rem] object-cover min-w-[15rem] max-w-[25rem] w-10vw rounded-xl flex-grow-0"
            />
            <div className="flex flex-col gap-4 w-[30rem] flex-grow">
              <p className="text-[2rem] br">{currEvent.name}</p>
              <p className="text-[1.15rem] leading-relaxed">{currEvent.desc}</p>
              <p className="text-[2rem]">Rules</p>
              <ol className="list-decimal list-inside flex flex-col gap-2">
                {currEvent.rules.map((rule) => {
                  return <li>{rule}</li>;
                })}
              </ol>
              <Link
                to={currEvent.registerLink}
                className="bg-transparent border-4 border-white w-fit px-16 my-4 py-4"
              >
                Register
              </Link>
            </div>
          </div>
          <p className="text-[2rem] my-16 text-center">Person Of Contact</p>
          <div className="flex flex-wrap gap-16 justify-center">
            {currEvent.pocs.map((poc) => {
              return (
                <div className="flex gap-8">
                  <img
                    src={poc.image}
                    className="w-[15rem] rounded-xl"
                    alt=""
                  />
                  <div className="flex flex-col gap-3 text-[1.15rem] w-[10rem]">
                    <p>{poc.name}</p>
                    <p>{poc.position}</p>
                    <p>{poc.contact}</p>
                    <p>{poc.mailId}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
