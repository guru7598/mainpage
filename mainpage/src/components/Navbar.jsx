import React from "react";
import "./Navbar.css";
// import "./home"

const Navbar = () => {
  return (
    <nav className="flex flex-row navbar bg-yellow-50 flex-justify-between  ">
   <h2><span className="text-2xl font-semibold text-blue-300 ">Free</span><span className="text-2xl font-semibold text-orange-400">will</span></h2>
     
    <div className="font-semibold text-blue-900 flex flex-row">
      <ul>
        <li><a href="#home" className="hover:text-blue-700">Home</a></li>
        <li><a href="#about" className="hover:text-blue-700">About Me</a></li>
        <li><a href="#skills" className="hover:text-blue-700">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-700">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
        <li><a href="#appointment"  className="hover:text-blue-700">Appointment</a></li>
      </ul>
    </div>
     </nav>
  );
};

export default Navbar;
