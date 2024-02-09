import Link from "next/link";
import { EventType } from "../../types";
import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  image: StaticImageData;
  id: string;
  eventType: EventType;
};

function EventCard(props: Props) {
  return (
    <Link href={`/events/${props.id}`}>
      <div className="h-56 w-full relative group overflow-hidden cursor-pointer rounded-xl hover:rounded-none transition-all duration-300 ease-in-out">
        <div className="absolute w-full h-full bg-black opacity-40 z-10 group-hover:opacity-40 transition-all duration-300 ease-in-out" />
        <Image
          src={props.image}
          width={350}
          height={250}
          alt=""
          className="z-0 absolute w-full h-full object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
        />
        <div className="z-10 absolute w-full h-full flex flex-col justify-center items-center p-2 text-white group-hover:top-0 duration-300 transition-all ease-in-out">
          <h2 className="text-4xl mobile_l:text-3xl text-center sm:text-4xl font-bold uppercase">
            {props.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
