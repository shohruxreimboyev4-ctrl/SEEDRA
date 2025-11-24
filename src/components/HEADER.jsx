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

  const links = [
    { path: "/", label: "ALL PRODUCTS" },
    { path: "/about", label: "ABOUT SEEDRA" },
    { path: "/blog", label: "OUR BLOG" },
    { path: "/contact", label: "CONTACTS" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto w-[90%] flex items-center justify-between py-4">

        <img src={Logo} className="w-28 cursor-pointer" alt="logo" />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-lg text-gray-500">
            <FaInstagram className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-72">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>

          <FaRegHeart className="text-green-600 text-xl cursor-pointer" />
          <FaShoppingCart className="text-green-600 text-xl cursor-pointer" />
        </div>

        <div className="flex items-center gap-4 lg:hidden text-2xl">
          <FaRegHeart className="text-green-600" />
          <FaShoppingCart className="text-green-600" />
          <FaBars onClick={() => setOpen(true)} className="cursor-pointer" />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 text-2xl">
          <FaTimes onClick={() => setOpen(false)} className="cursor-pointer" />
        </div>

        <nav className="flex flex-col gap-6 px-6 text-lg">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-6 text-xl pt-4">
            <FaRegHeart className="text-green-500" />
            <FaShoppingCart className="text-green-500" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HEADER;
