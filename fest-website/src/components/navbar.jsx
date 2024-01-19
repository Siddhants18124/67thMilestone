// Navbar.js
import { useState } from "react";
import logoImage from "../assets/navbarimg.png"; // Import the image
import { Link } from "react-router-dom";

const Navbar = ({ black }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed bg-transparent top-0 left-0 right-0 z-50 p-8">
      <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div className="px-4">
            <img src={logoImage} alt="Logo" className="h-12" />
          </div>
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
            isMenuOpen ? "flex flex-col items-start py-4" : "hidden"
          } lg:items-center`}
        >
          <Link to="/" className="text-white px-4 py-2">
            Home
          </Link>
          <Link to="/about" className="text-white px-4 py-2">
            About
          </Link>
          <Link to="/contact" className="text-white px-4 py-2">
            Contact
          </Link>
          <Link to="/events" className="text-white px-4 py-2">
            Events
          </Link>
          <Link to="/sponsors" className="text-white px-4 py-2">
            Sponsors
          </Link>
          <Link to="/register" className="text-white px-4 py-2">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
