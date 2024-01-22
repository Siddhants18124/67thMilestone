type Props = {
  name: string;
  details: string;
  image: string;
  id: string;
};

function EventCard(props: Props) {
  return (
    <div className="h-56 w-full relative group overflow-hidden cursor-pointer">
      <div className="absolute w-full h-full bg-black opacity-10 z-10 group-hover:opacity-40 transition-all duration-300 ease-in-out" />
      <img
        src={props.image}
        alt=""
        className="z-0 absolute w-full h-full object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
      />
      <div className="z-10 absolute w-full top-1/2 h-full flex flex-col justify-between items-center p-2 text-white group-hover:top-0 duration-300 transition-all ease-in-out">
        <h2 className="text-4xl -translate-y-1/2 font-bold uppercase group-hover:-translate-y-0 transition-all ease-in-out duraton-500">
          {props.name}
        </h2>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default EventCard;
