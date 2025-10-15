"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo1 from "../assest/image/logo1.png";
import { HiMenu, HiX } from "react-icons/hi";

const Hedear = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white px-6 py-4 flex items-center justify-between shadow-lg z-50">
      {/* Left Section (Logo + Title) */}
      <div className="flex items-center gap-3">
        <Image src={logo1} alt="logo" className="h-12 w-20 object-contain" />
        <p className="text-2xl font-bold">DODGE</p>
      </div>

      {/* Desktop Menu */}
      <div className="flex gap-5 items-center">
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#Home" className="hover:text-orange-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#blog" className="hover:text-orange-400 transition">
            Blog
          </a>
        </li>
        {/* <li>
          <a href="#about" className="hover:text-orange-400 transition">
            About
          </a>
        </li> */}
        <li>
          <a href="#contact" className="hover:text-orange-400 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition">
        Subscribe
      </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-center md:hidden py-6 space-y-4 shadow-lg transition-all duration-300">
          <a
            href="#home"
            className="block hover:text-orange-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#blog"
            className="block hover:text-orange-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          
          <a
            href="#contact"
            className="block hover:text-orange-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition">
            Subscribe
          </button>
        </div>
      )}
    </nav>
  );
};

export default Hedear;
