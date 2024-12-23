import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-md p-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <p className="text-3xl font-bold text-blue-500 hover:text-blue-700 transition duration-300">
              KLE-HubSpot
            </p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            className="text-lg text-gray-800 font-medium hover:text-blue-600 transition duration-300"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="text-lg text-gray-800 font-medium hover:text-blue-600 transition duration-300"
            to="/Clubs"
          >
            Clubs
          </Link>
          <Link
            className="text-lg text-gray-800 font-medium hover:text-blue-600 transition duration-300"
            to="/contact"
          >
            Contact Us
          </Link>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 rounded-md">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div onClick={handleOpen} className="md:hidden block">
          <button className="text-blue-500 text-2xl">
            <CiMenuBurger className="transition duration-300 transform hover:scale-125" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full mt-4 bg-white text-black rounded-lg shadow-md transition-all duration-300">
          <div className="font-bold flex flex-col">
            <Link
              className="p-4 border-b border-gray-200 hover:bg-gray-100 transition duration-300"
              onClick={handleClose}
              to="/about"
            >
              About
            </Link>
            <Link
              className="p-4 border-b border-gray-200 hover:bg-gray-100 transition duration-300"
              onClick={handleClose}
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="p-4 border-b border-gray-200 hover:bg-gray-100 transition duration-300"
              onClick={handleClose}
              to="/events"
            >
              Events
            </Link>
            <button
              onClick={handleClose}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full mt-4 transition duration-300 hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
