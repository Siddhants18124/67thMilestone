// Navbar.js
import React, { useState } from 'react';
import logoImage from '../assets/navbarimg.png'; // Import the image

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4">
      <div className="flex items-center justify-between">
        <div>
          {/* Use the imported image as the logo */}
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
        <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:items-center`}>
          <a href="#" className="text-white px-4 py-2">Home</a>
          <a href="#" className="text-white px-4 py-2">About</a>
          <a href="#" className="text-white px-4 py-2">Contact</a>
          <a href="#" className="text-white px-4 py-2">Events</a>
          <a href="#" className="text-white px-4 py-2">Sponsors</a>
          <a href="#" className="text-white px-4 py-2 font-bold">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
