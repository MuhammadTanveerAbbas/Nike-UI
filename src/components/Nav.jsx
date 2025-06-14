import React, { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <header className="padding-x py-8 relative w-full bg-transparent">
      <nav className="flex justify-between items-center max-container relative z-50">
        {/* Logo */}
        <a href="/" aria-label="Homepage">
          <img
            src={headerLogo}
            alt="Nike Logo"
            width={129}
            height={29}
            className="w-[129px] h-[29px] object-contain"
          />
        </a>

        {/* Navigation Links - Desktop */}
        <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-montserrat text-lg leading-normal text-gray-300 hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Links - Desktop */}
        <div className="flex gap-4 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 text-gray-300">
          <a
            href="/"
            className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
          >
            Sign in
          </a>
          <span>/</span>
          <a
            href="/"
            className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
          >
            Explore now
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleSidebar}
          aria-label={
            sidebarOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={sidebarOpen}
          className="max-lg:block hidden focus:outline-none"
        >
          <img
            src={hamburger}
            alt=""
            width={25}
            height={25}
            className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            aria-hidden="true"
          />
        </button>

        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleSidebar}
              aria-hidden="true"
            />
            <aside
              className="fixed top-0 right-0 w-64 h-full bg-[#111827] shadow-lg z-50 p-6 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <button
                onClick={toggleSidebar}
                aria-label="Close navigation menu"
                className="self-end mb-6 text-white font-bold text-xl focus:outline-none"
              >
                ×
              </button>
              <nav className="flex flex-col gap-6">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-white font-montserrat text-lg hover:text-coral-red transition-colors"
                    onClick={toggleSidebar}
                  >
                    {label}
                  </a>
                ))}
                <div className="mt-6 flex gap-4 text-white font-medium">
                  <a
                    href="/"
                    onClick={toggleSidebar}
                    className="hover:text-coral-red"
                  >
                    Sign in
                  </a>
                  <span>/</span>
                  <a
                    href="/"
                    onClick={toggleSidebar}
                    className="hover:text-coral-red"
                  >
                    Explore now
                  </a>
                </div>
              </nav>
            </aside>
          </>
        )}
      </nav>
    </header>
  );
};

export default Nav;
