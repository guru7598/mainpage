import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio Builder</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Education</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
