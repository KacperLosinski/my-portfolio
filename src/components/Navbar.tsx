"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBreakpoint = 150; // Wysokość przewinięcia
      if (window.scrollY > scrollBreakpoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full ${
          isScrolled ? "md:bg-third md:shadow-md" : "md:bg-black/0"
        } bg-third text-white z-50 transition-colors duration-300`}
        style={{ height: "100px" }} // Stała wysokość nawigacji
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="text-2xl sm:text-4xl font-semibold">
            <a href="#" className="flex items-center">
              <span className="material-icons pr-2 !text-4xl sm:!text-5xl text-secondary hover:text-primary">
                gamepad
              </span>
              Kacpe.
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-8 text-lg sm:text-2xl font-regular">
            <a href="#about" className="hover:text-secondary">
              About me
            </a>
            <a href="#tool" className="hover:text-secondary">
              Tool kit
            </a>
            <a href="#projects" className="hover:text-secondary">
              Projects
            </a>
            <a
              href="#contact"
              className="border text-secondary border-secondary px-3 sm:px-5 py-2 sm:py-3 rounded-lg hover:text-white hover:bg-secondary transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>

          {/* Hamburger menu (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed md:hidden text-center w-full bg-gradientStart">
          <a
            href="#about"
            className="block py-2 text-white "
            onClick={() => setIsOpen(false)}
          >
            About me
          </a>
          <a
            href="#tool"
            className="block py-2 text-white "
            onClick={() => setIsOpen(false)}
          >
            Tool kit
          </a>
          <a
            href="#projects"
            className="block py-2 text-white "
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-white py-2 "
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
