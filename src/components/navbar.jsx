import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/newlogo.jpg";
import menuIcon from "../assets/icons8-menu-50.png";
import closeIcon from "../assets/close.png";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo_section">
        <img src={logo} alt="Company Logo" />
        <h1>WellFo.AI</h1>
      </div>

      {/* Mobile Menu Icon (Opens the menu) */}
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-links ${menuOpen ? "mobile-menu" : ""}`}>
        {/* Close Button inside menu */}
        <div className="close-icon" onClick={toggleMenu}>
          <img src={closeIcon} alt="Close" />
        </div>

        {/* Navigation Links */}
        {["home", "about","courses", "services", "contact"].map((item, index) => (
          <li key={index}>
            <Link 
              to={item} 
              smooth={true} 
              duration={500} 
              onClick={toggleMenu}  // Close menu when a link is clicked
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;