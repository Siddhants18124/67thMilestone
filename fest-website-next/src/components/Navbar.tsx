"use client";

import { useRouter } from "next/router";
import { Logo } from "../assets";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarLink from "./NavbarLink";
import { usePathname } from "next/navigation";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  return (
    <>
      <nav className="absolute bg-transparent top-0 left-0 right-0 z-50 md:p-8 py-8 pr-8 pl-3">
        <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <div className="pr-4  xl:px-11">
                <Image src={Logo} alt="Logo" className="h-[4rem]" />
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
                ? "fixed top-0 left-0 flex-row flex justify-center items-center w-[100vw] bg-[#000000ff] h-[100vh]  py-4"
                : "hidden"
            } lg:items-center`}
          >
            <ul
              className={`${
                toggle
                  ? "flex-col justify-center text-center gap-8 md:gap-8"
                  : "flex-row"
              } flex justify-center items-center gap-4 md:gap-16 text-white text-left text-[1.25rem] lg:text-[1.15rem] lg:mr-16`}
            >
              <NavbarLink link="/" name="Home"></NavbarLink>
              <NavbarLink link="/about" name="About"></NavbarLink>
              <NavbarLink link="/events" name="Events"></NavbarLink>
              <Link
                href="https://maitri.bmu.edu.in/asd_EventPublicUserMaster.htm?eventID=23"
                target="_blank"
                className="border-2 border-white py-2 px-4 text-black bg-white transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:text-white"
              >
                Register
              </Link>
              {/* <NavbarLink link="/sponsors" name="Sponsors"></NavbarLink> */}
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
