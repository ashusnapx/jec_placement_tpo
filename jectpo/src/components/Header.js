import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-blue-700 py-3 top-0 sticky shadow-md">
      <div className="container mx-auto px-1">
        <div className="flex flex-row items-center justify-evenly">
          <Link to="/home" className="flex items-center text-white text-xl font-bold">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/f2/Jabalpur_Engineering_College_%28JEC%29%27s_logo.png"
              alt="jec-logo"
              className="h-24 w-24 mr-2"
            />
            Jabalpur Engineering College
          </Link>

          <ul className="hidden md:flex space-x-4 text-white text-lg font-medium">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/principles-address">Principal’s Address</Link>
            </li>
            <li>
              <Link to="/training-placement">Training and Placement Cell</Link>
            </li>
            <li>
              <Link to="/platinum-jubilee">Platinum Jubilee</Link>
            </li>
            <li>
              <Link to="/academic-programs">Academic Programs</Link>
            </li>
            <li>
              <Link to="/faculty-students">Departments at JEC</Link>
            </li>
            <li>
              <Link to="/research-development">Research and Development</Link>
            </li>
            <li>
              <Link to="/major-recruiters">Our Major Recruiters</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>

          <div className="md:hidden">
            {/* Mobile menu icon goes here */}
            {/* You can add a hamburger icon here and implement a responsive mobile menu */}
          </div>
        </div>

        {/* Mobile menu goes here */}
        {/* You can implement a responsive mobile menu that appears when the screen size is smaller */}
      </div>
    </div>
  );
};

export default Header;
