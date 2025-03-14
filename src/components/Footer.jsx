import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Company Name */}
        <div className="footer-logo">
          <h2>Welfo</h2>
          <p>AI Solutions & Training</p>
        </div>

        {/* Middle Section - Navigation Links */}
        

        {/* Right Section - Social Media Icons */}
        <div className="footer-socials">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a> */}
          <a href="https://x.com/wellfo_ai?s=11" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/wellfo_ai_solutions?igsh=bmhjZnBqMG8ycTZv" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Welfo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;