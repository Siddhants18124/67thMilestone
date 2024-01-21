import { NavBarImg } from "../assets";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <nav className="w-full bg-black p-1 py-4 mobile_l:p-4 text-white flex flex-col justify-center gap-2 items-center md:flex-row md:justify-between md:px-6 lg:w-5/6 lg:mx-auto">
      <div className="">
        <img src={NavBarImg} alt="Logo" className="h-16" />
      </div>
      <ul className="flex flex-row gap-2 sm:gap-4 justify-center items-center text-sm mobile_m:text-lg mobile_l:text-xl">
        <NavbarLink name="Home" link="/" />
        <NavbarLink name="About" link="/about" />
        <NavbarLink name="Contact" link="/contact" />
        <NavbarLink name="Events" link="/events" />
        <NavbarLink name="Register" link="/register" />
      </ul>
    </nav>
  );
}

export default Navbar;
