import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/imgs/resturantLogo.png";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileDropdown, setIsMobileDropdown] = useState(false);
  const location = useLocation();

  // Check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Restaurant Logo" className="h-12 w-auto" />
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileOpen ? (
                <X size={24} className="block" />
              ) : (
                <Menu size={24} className="block" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-orange-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-orange-600'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/menu" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-orange-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-orange-600'
                }`
              }
            >
              Menu
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-orange-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-orange-600'
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-orange-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-orange-600'
                }`
              }
            >
              Gallery
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-orange-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-orange-600'
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/reservations"
              className={({ isActive }) => 
                `ml-4 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 ${
                  isActive ? 'bg-orange-700 text-white' : 'bg-orange-600 text-white hover:bg-orange-700'
                }`
              }
            >
              Make Reservation
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100">
          <NavLink
            to="/"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/reservations"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => 
              `block w-full mt-2 px-4 py-2 rounded-md text-base font-medium text-center shadow-sm transition-colors ${
                isActive ? 'bg-orange-700 text-white' : 'bg-orange-600 text-white hover:bg-orange-700'
              }`
            }
          >
            Make An Order
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;