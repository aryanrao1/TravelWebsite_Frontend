import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Home</h2>
      </div>
      <div className="navbar-right">
        <span>Hello User</span>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '-' : '☰'}
        </div>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
