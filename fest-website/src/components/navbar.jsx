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
    <nav className="fixed shadow-#333 shadow-md bg-white top-0 left-0 right-0 z-50 p-4">
      <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div className="px-4">
            <img src={blackLogo} alt="Logo" className="h-12" />
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
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
          <Link to="/" className="text-black px-4 py-2">
            Home
          </Link>
          <Link to="/about" className="text-black px-4 py-2">
            About
          </Link>
          <Link to="/contact" className="text-black px-4 py-2">
            Contact
          </Link>
          <Link to="/events" className="text-black px-4 py-2">
            Events
          </Link>
          <Link to="/sponsors" className="text-black px-4 py-2">
            Sponsors
          </Link>
          <Link to="#" className="text-black px-4 py-2">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
