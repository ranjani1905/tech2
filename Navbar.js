import React from "react";
import "../styles/Navbar.css"; // Ensure your CSS file has the proper styles
import companyLogo from "../assets/companyLogo.png"; // Adjust the path based on your project structure

const Navbar = ({ openPopup }) => {
  return (
    <nav className="navbar">
       <div className="navbar-left"></div>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={companyLogo} alt="Company Logo" className="navbar-logo" />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Find Jobs</li>
          <li>Find Talents</li>
          <li>About Us</li>
          <li>Testimonials</li>
        </ul>

        {/* Create Jobs Button */}
        <button className="create-job-btn" onClick={openPopup}>
          Create Jobs
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
