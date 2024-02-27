import { EventType } from "@/types";
import { Events } from "../../../../constants/data";
import Image from "next/image";
import Link from "next/link";

function EventDetails({
  params,
}: {
  params: { eventType: EventType; id: string };
}) {
  const currEvent = Events[params.eventType][params.id];

  return (
    <div className="main-bg register">
      <div className="flex justify-center  pt-[8rem] lg:pt-24">
        <div className="p-8 w-fit bg-[#ffffff19] text-white rounded-xl mt-12">
          <div className="flex flex-wrap justify-center gap-8 w-[80vw]">
            <Image
              src={currEvent.image}
              width={400}
              height={800}
              alt="current event image"
              className="lg:w-[25rem] object-cover min-w-[15rem] max-w-[25rem] w-10vw rounded-xl flex-grow-0"
            />
            <div className="flex flex-col gap-4 w-[30rem] flex-grow">
              <p className="text-[2rem] br">{currEvent.name}</p>
              {currEvent.name === "Catch Me If You Can" && (
                <p className="text-[1.15rem] leading-relaxed">
                  {currEvent.desc}{" "}
                  <Link
                    href="https://m.youtube.com/watch?v=C46oyQvyRlk&pp=ygUQV29ybGQgY2hhc2UgdGFnIA%3D%3D"
                    className="text-red-500"
                  >
                    Check this Video
                  </Link>
                </p>
              )}
              {currEvent.name !== "Catch Me If You Can" && (
                <p className="text-[1.15rem] leading-relaxed">
                  {currEvent.desc}
                </p>
              )}
              <p className="text-[2rem]">Rules</p>
              <ol className="list-decimal list-inside flex flex-col gap-2">
                {currEvent.rules.map((rule, i) => {
                  if (rule.startsWith("https")) {
                    return (
                      <li key={i}>
                        Check more rules
                        <Link
                          href={rule}
                          target="_blank"
                          className="text-red-500"
                        >
                          {" "}
                          here.
                        </Link>
                      </li>
                    );
                  }
                  return <li key={i}>{rule}</li>;
                })}
                {params.eventType === "hero" ? (
                  <li>
                    For guidelines and payment details. Click
                    <Link
                      href="https://docs.google.com/document/d/1zgs0lmroIqAkR357tYckSF02ldWBgSVY/edit?usp=drive_link&ouid=104421089986991689196&rtpof=true&sd=true"
                      target="_blank"
                      className="text-red-500"
                    >
                      {" "}
                      here.
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ol>
              <div className="flex flex-row gap-x-2 mt-3">
                <h1 className="font-semibold text-xl">Event Date:</h1>
                <p className="mb-0 text-xl">{currEvent.date}</p>
              </div>
              <div className="flex flex-wrap gap-8 md:gap-16 my-8">
                {currEvent.pocs.map((poc, i) => {
                  return (
                    <div
                      className="flex flex-col gap-1 text-[1rem] md:text-[1.15rem] "
                      key={i}
                    >
                      <p>{poc.name}</p>
                      <p>{poc.contact}</p>
                      <p>{poc.mailId}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row gap-6 flex-wrap gap-y-4">
                {currEvent.customLink ? (
                  <Link
                    href={currEvent.registerLink}
                    className="bg-transparent border-4 border-white w-fit px-16 my-4 py-4"
                  >
                    Register
                  </Link>
                ) : (
                  <Link
                    href={
                      currEvent.eventType === "hero"
                        ? "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link"
                        : "https://maitri.bmu.edu.in/asd_EventPublicUserMaster.htm?eventID=23"
                    }
                    className="bg-transparent border-4 border-white w-fit px-16 my-4 py-4"
                  >
                    Register
                  </Link>
                )}
                
                {params.eventType === "hero" ? (
                  <Link
                    href="https://drive.google.com/file/d/11AgQY1lYO_D0qwFZ4TZo_hb4KCZgYkJF/view"
                    className="bg-transparent border-4 border-white w-fit px-16 my-4 py-4"
                  >
                    Brochure
                  </Link>
                ) : (
                  ""
                )}
              </div>
              <a className=" abcde  flex justify-end left-0">*Registration fees are non-refundable unless the event is cancelled.</a>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default EventDetails;
