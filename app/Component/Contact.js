"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b1c30] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Logo & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-10 h-10 bg-pink-400 rounded-full"></div>
            <span className="text-lg font-semibold">LOGO</span>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-gray-300">
            <li><a href="#Home" className="hover:text-white">Home</a></li>
            <li><a href="#Blog" className="hover:text-white">Blog</a></li>
            <li><a href="#About" className="hover:text-white">About us</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact us</a></li>
            <li><a href="#Privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[#2a2b43] rounded-xl py-10 px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold leading-snug">
              Subscribe to our newsletter to<br />get latest updates and news
            </h2>
          </div>

          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="example@email.com"
              className="px-4 py-3 rounded-l-lg border border-white outline-none w-full md:w-80 text-white placeholder-gray-300 bg-transparent"
              required
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-r-lg font-semibold flex items-center space-x-2"
            >
              <span>Subscribe</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25l6.75 6.75L21 3.75" />
              </svg>
            </button>
          </form>
        </div>

        {/* Contact Info & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>Finstreet 118, 2561 Abctown</p>
            <p>example@email.com | 001 21345 442</p>
          </div>

          <div className="flex space-x-5">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-white" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-white" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-white" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
