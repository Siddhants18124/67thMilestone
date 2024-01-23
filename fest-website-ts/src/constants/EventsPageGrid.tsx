import { Link } from "react-router-dom";

type Props = {
  bg: string;
  logo: string;
  url: string;
};

function EventsPageGrid(props: Props) {
  return (
    <Link to={props.url}>
      <div className="h-64 relative w-full rounded-[30px] group overflow-hidden bg-black lg:h-80 xl:h-96 transition-all duration-300 ease-in-out hover:rounded-none">
        <img
          src={props.bg}
          className="absolute w-full h-full object-cover z-0 transition-all duration-500 ease-in-out scale-125 group-hover:scale-100"
        />
        <div className="absolute w-full h-full z-10 bg-black opacity-35 transition-all duration-300 ease-in-out group-hover:opacity-60" />
        <img
          src={props.logo}
          className="absolute object-contain scale-75 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-100"
        />
      </div>
    </Link>
  );
}

export default EventsPageGrid;
