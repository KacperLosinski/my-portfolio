"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(90); // Domyślna wysokość nawigacji

  useEffect(() => {
    const handleScroll = () => {
      const scrollBreakpoint = 150;
      setIsScrolled(window.scrollY > scrollBreakpoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  // Oblicz dynamicznie wysokość nawigacji
  useEffect(() => {
    const updateNavHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setNavHeight(navbar.clientHeight);
        document.documentElement.style.setProperty("--nav-height", `${navbar.clientHeight}px`);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 text-white
          ${isScrolled ? "md:bg-third md:shadow-md" : "md:bg-black/0"} bg-third
          flex items-center`}
        style={{ height: `${navHeight}px` }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center w-full">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-semibold whitespace-nowrap">
            <a href="#" className="flex items-center">
              <span className="material-icons pr-2 !text-4xl sm:!text-5xl text-secondary hover:text-primary">
                gamepad
              </span>
              Kacpe.
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-base lg:text-xl font-regular min-w-[500px]">
            <a href="#about" className="hover:text-secondary whitespace-nowrap">
              About me
            </a>
            <a href="#tool" className="hover:text-secondary whitespace-nowrap">
              Tool kit
            </a>
            <a href="#projects" className="hover:text-secondary whitespace-nowrap">
              Projects
            </a>

            {/* Nowy przycisk Contact */}
            <div className="relative group">
              <a
                href="#contact"
                className="relative inline-block p-px leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-buttonGradient1 via-buttonGradient2 to-secondary p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-5 py-2 rounded-xl bg-gradientStart text-base lg:text-xl">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Contact
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </a>
            </div>
          </div>

          {/* Hamburger menu (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Przyklejone do nawigacji */}
      {isOpen && (
        <div className="fixed left-0 w-full bg-third text-center shadow-md transition-all duration-300 md:hidden z-40"
             style={{ top: `${navHeight}px` }}>
          <a href="#about" className="block py-4 text-white" onClick={() => setIsOpen(false)}>
            About me
          </a>
          <a href="#tool" className="block py-4 text-white" onClick={() => setIsOpen(false)}>
            Tool kit
          </a>
          <a href="#projects" className="block py-4 text-white" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="block py-4 text-white" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
