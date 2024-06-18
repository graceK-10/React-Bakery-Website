import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { MdBakeryDining } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RxEyeClosed } from "react-icons/rx";
import "../index.css";
import { useCart } from "../CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const location = useLocation();
  const { cartCount } = useCart();

  const handleClick = () => {
    setMenu(!menu);
  };

  // Used to show the active page on the navbar
  const handleNavClick = (index) => {
    setActiveContentIndex(index);
  };

  // Using use effect to set the activeContentIndex based on the current path.
  useEffect(() => {
    // Set active index based on the current path
    switch (location.pathname) {
      case "/about":
        setActiveContentIndex(1);
        break;
      case "/contact":
        setActiveContentIndex(2);
        break;
      case "/menu":
        setActiveContentIndex(3);
        break;
      case "/cart":
        setActiveContentIndex(4);
        break;
      default:
        setActiveContentIndex(0);
        break;
    }
  }, [location.pathname]);

  return (
    <header className="fixed w-full z-10">
      <nav className="container bg-white flex justify-between items-center  p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2 text-3xl text-white">
          <MdBakeryDining size={65} className="text-secondary" />
          <a href="/logo" className="href ">
            Baked Bliss
          </a>
        </div>

        <div
          id="tabs"
          className="hidden lg:flex items-center gap-8 font-medium text-xl text-white"
        >
          <Link
            to="/"
            className={`nav-link hover:text-white hover:border-b-secondary border-r-secondary hover:btn-shadow px-5 py-1 rounded-full 
                ${activeContentIndex === 0 ? "active" : ""}`}
            onClick={() => handleNavClick(0)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-link hover:text-white hover:border-b-secondary border-r-secondary hover:btn-shadow px-5 py-1 rounded-full 
                ${activeContentIndex === 1 ? "active" : ""}`}
            onClick={() => handleNavClick(1)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`nav-link hover:text-white hover:border-b-secondary border-r-secondary hover:btn-shadow px-5 py-1 rounded-full 
                ${activeContentIndex === 2 ? "active" : ""}`}
            onClick={() => handleNavClick(2)}
          >
            Contact Us
          </Link>
          <Link
            to="/menu"
            className={`nav-link hover:text-white hover:border-b-secondary border-r-secondary hover:btn-shadow px-5 py-1 rounded-full 
                ${activeContentIndex === 3 ? "active" : ""}`}
            onClick={() => handleNavClick(3)}
          >
            Baked Menu
          </Link>
          <Link
            to="/cart"
            className={`px-4 py-2 bg-secondary border-fourthColor text-white rounded-full hover:bg-tertiary btn-shadow transition duration-200 ease-linear text-lg 
            ${activeContentIndex === 4 ? "active" : ""}`}
            onClick={() => handleNavClick(4)}
          >
            Baked Cart
            {cartCount > 0 && (
              <span className="ml-2 bg-fourthColor text-white rounded-full px-2 py-1 text-sm">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* navbar open and close responsive icon */}
        <div className="lg:hidden pr-[5rem] sm:pr-[5rem] flex items-center">
          {menu ? (
            <FaEye size={25} onClick={handleClick} />
          ) : (
            <RxEyeClosed size={25} onClick={handleClick} />
          )}
        </div>
      </nav>

      {/* Responsive section */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col fixed bg-secondary text-white left-0 top-20 w-full h-fit font-semibold text-2xl text-center pt-8 pb-4 gap-8 transition-transform duration-300 ease-in-out`}
      >
        <Link
          to="/"
          className="hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary text-outline-tertiary"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary text-outline-tertiary"
        >
          About Us
        </Link>
        <Link
          to="/menu"
          className="hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary text-outline-tertiary"
        >
          Baked Menu
        </Link>
        <Link
          to="/cart"
          className="hover:text-secondary transition duration-200 ease-linear hover:border-b-2 hover:border-r-2 px-2 rounded-lg hover:border-secondary text-outline-tertiary"
        >
          Baked Cart
          {cartCount > 0 && (
            <span className="ml-2 bg-fourthColor text-white rounded-full px-2 py-1 text-sm">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
