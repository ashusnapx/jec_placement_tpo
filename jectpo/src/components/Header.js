import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'; // Import the hamburger icon

const Header = () => {
  const [ isMobileMenuOpen, setMobileMenuOpen ] = useState( false );

  const toggleMobileMenu = () => {
    setMobileMenuOpen( !isMobileMenuOpen );
  };

  return (
    <div className="bg-blue-700 py-3 top-0 sticky shadow-md">
      <div className="container mx-auto px-1">
        <div className="flex flex-row items-center justify-between">
          <Link to="/home" className="flex items-center text-white text-xl font-bold">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/f2/Jabalpur_Engineering_College_%28JEC%29%27s_logo.png"
              alt="jec-logo"
              className="h-24 w-24 mr-2"
            />
            Jabalpur Engineering College
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <AiOutlineMenu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden space-y-4 text-white text-lg font-medium">
            <li>
              <Link to="/home" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={toggleMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/principles-address" onClick={toggleMobileMenu}>
                Principal’s Address
              </Link>
            </li>
            <li>
              <Link to="/training-placement" onClick={toggleMobileMenu}>
                Training and Placement Cell
              </Link>
            </li>
            <li>
              <Link to="/platinum-jubilee" onClick={toggleMobileMenu}>
                Platinum Jubilee
              </Link>
            </li>
            <li>
              <Link to="/academic-programs" onClick={toggleMobileMenu}>
                Academic Programs
              </Link>
            </li>
            <li>
              <Link to="/faculty-students" onClick={toggleMobileMenu}>
                Departments at JEC
              </Link>
            </li>
            <li>
              <Link to="/research-development" onClick={toggleMobileMenu}>
                Research and Development
              </Link>
            </li>
            <li>
              <Link to="/major-recruiters" onClick={toggleMobileMenu}>
                Our Major Recruiters
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={toggleMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
