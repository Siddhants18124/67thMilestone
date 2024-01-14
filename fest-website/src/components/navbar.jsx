// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-lg">Your Logo</div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            &#9776;
          </button>
        </div>
        <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <a href="#" className="text-white px-4 py-2">Home</a>
          <a href="#" className="text-white px-4 py-2">About</a>
          <a href="#" className="text-white px-4 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
