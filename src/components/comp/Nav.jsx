import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <div className="max-w-7xl mx-auto  sm:px-0 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute top-10 min-w-full  bg-gray-300 ">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
