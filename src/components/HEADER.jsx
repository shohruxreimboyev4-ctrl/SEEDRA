import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaRegHeart,
  FaShoppingCart,
  FaSearch,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import Logo from "../assets/svg/Logo.svg";

const HEADER = () => {
  const [open, setOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-medium"
      : "text-gray-600 hover:text-green-600 transition";

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto w-[90%] flex items-center justify-between py-4">
        <div className="cursor-pointer">
          <img src={Logo} alt="logo" className="w-28" />
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <NavLink to="/" className={navLinkStyle}>
            ALL PRODUCTS
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            ABOUT SEEDRA
          </NavLink>
          <NavLink to="/blog" className={navLinkStyle}>
            OUR BLOG
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            CONTACTS
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-500 text-lg">
            <FaInstagram className="cursor-pointer hover:text-green-600" />
            <FaFacebookF className="cursor-pointer hover:text-green-600" />
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-72">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>

          <FaRegHeart className="text-green-600 text-xl cursor-pointer hover:text-green-500" />
          <FaShoppingCart className="text-green-600 text-xl cursor-pointer hover:text-green-500" />
        </div>

        <div className="flex items-center gap-4 lg:hidden text-2xl relative">
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full z-0"></div>
            <FaRegHeart className="text-green-600 cursor-pointer hover:text-green-500 z-10 relative" />
          </div>

          <div className="relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full z-0"></div>
            <FaShoppingCart className="text-green-600 cursor-pointer hover:text-green-500 z-10 relative" />
          </div>

          <div onClick={() => setOpen(true)} className="cursor-pointer">
            <FaBars />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className="flex justify-end p-4 text-2xl cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </div>

        <nav className="flex flex-col gap-6 px-6 text-lg">
          <NavLink
            onClick={() => setOpen(false)}
            to="/"
            className={navLinkStyle}
          >
            ALL PRODUCTS
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={navLinkStyle}
          >
            ABOUT SEEDRA
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/blog"
            className={navLinkStyle}
          >
            OUR BLOG
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className={navLinkStyle}
          >
            CONTACTS
          </NavLink>

          <div className="flex items-center gap-6 text-xl pt-4 lg:hidden">
            <FaRegHeart className="text-green-400 cursor-pointer hover:text-green-500" />
            <FaShoppingCart className="text-green-400 cursor-pointer hover:text-green-500" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HEADER;
