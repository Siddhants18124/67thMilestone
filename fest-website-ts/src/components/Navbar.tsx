import { Logo } from "../assets";
import NavbarLink from "./NavbarLink";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setToggle(false);
  }, [location]);

  return (
    <>
      <nav className="fixed bg-transparent top-0 left-0 right-0 z-50 p-8">
        <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <div className="pr-4 px-11">
                <img src={Logo} alt="Logo" className="h-[4rem]" />
              </div>
            </Link>

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                &#9776;
              </button>
            </div>
          </div>
          <div
            className={`lg:flex ${
              toggle
                ? "absolute top-0 left-0 flex-row flex justify-center items-center w-[100vw] bg-[#000000ff] h-[100vh]  py-4"
                : "hidden"
            } lg:items-center`}
          >
            <ul
              className={`${
                toggle
                  ? "flex-col justify-center text-center gap-8 md:gap-8"
                  : "flex-row"
              } flex gap-4 md:gap-16 text-white text-left text-sm mobile_m:text-lg mobile_l:text-xl1`}
            >
              <NavbarLink link="/" name="Home"></NavbarLink>
              <NavbarLink link="/about" name="About"></NavbarLink>
              <NavbarLink link="/events" name="Events"></NavbarLink>
              <NavbarLink link="/sponsors" name="Sponsors"></NavbarLink>
            </ul>
            <div
              className={
                toggle
                  ? "absolute top-[2rem] right-[2rem] w-[3rem] h-[3rem] rounded-full flex justify-center items-center text-white cursor-pointer bg-[#c3c3c364]"
                  : "hidden"
              }
              onClick={toggleMenu}
            >
              X
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
