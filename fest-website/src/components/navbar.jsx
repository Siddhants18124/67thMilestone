// Navbar.js
import { useState } from "react";
import blackLogo from "../assets/footer.png";
import logoImage from "../assets/navbarimg.png"; // Import the image
import { Link } from "react-router-dom";

const Navbar = ({ black }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4">
      <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div>
            {black ? (
              <img src={blackLogo} alt="Logo" className="h-12" />
            ) : (
              <img src={logoImage} alt="Logo" className="h-12" />
            )}
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={
                black
                  ? "text-black focus:outline-none"
                  : "text-white focus:outline-none"
              }
            >
              &#9776;
            </button>
          </div>
        </div>
        <div
          className={`lg:flex ${
            isMenuOpen ? "flex flex-col items-end" : "hidden"
          } lg:items-center`}
        >
          <Link
            to="/"
            className={black ? "text-black px-4 py-2" : "text-white px-4 py-2"}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={black ? "text-black px-4 py-2" : "text-white px-4 py-2"}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={black ? "text-black px-4 py-2" : "text-white px-4 py-2"}
          >
            Contact
          </Link>
          <Link
            to="/events"
            className={black ? "text-black px-4 py-2" : "text-white px-4 py-2"}
          >
            Events
          </Link>
          <Link
            to="/sponsors"
            className={black ? "text-black px-4 py-2" : "text-white px-4 py-2"}
          >
            Sponsors
          </Link>
          <Link
            to="#"
            className={
              black
                ? "text-black px-4 py-2 font-bold"
                : "text-white px-4 py-2 font-bold"
            }
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
