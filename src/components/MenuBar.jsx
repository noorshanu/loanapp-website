import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LinkScroller from "./LinkScroller";

import AboutUsDropdown from "./AboutUsDropdown";

function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="">
      <div className="container-wrapper">
        <div className="flex justify-between items-center gap-6">
          <div>
            <Link to="/">
              <img
                src="images/logo.png"
                alt=""
                className="sm:h-[125px] h-[85px] p-3"
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 menu items-center">
              {/* Desktop Navigation */}
              <p className="text-black cursor-pointer hover:text-black underline text-sm uppercase">
                <Link to="/">Home</Link>
              </p>
          

              <p className=" text-black cursor-pointer hover:text-black  text-sm uppercase">
                <Link to="/about">About us</Link>
              </p>

              <p className=" text-black cursor-pointer hover:text-black  text-sm uppercase">
                <a href="#service">Our Services</a>
              </p>

              <p className=" text-black cursor-pointer hover:text-black  text-sm uppercase">
                <a href="#enquery">enquire now</a>
              </p>

              <p className=" text-black cursor-pointer hover:text-black  text-sm uppercase">
                <Link to="/contact-us">Contact us</Link>
              </p>
            </div>
            <div className="md:hidden">
              {/* Mobile Navigation with Hamburger Icon */}
              <button onClick={handleToggleMenu}>
                {isMenuOpen ? (
                  <FaTimes className="text-black text-2xl cursor-pointer" />
                ) : (
                  <FaBars className="text-black text-2xl cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className=" flex flex-col gap-4 menu">
              <p className="text-black cursor-pointer hover:text-black underline text-sm uppercase text-end">
                <Link to="/">Home</Link>
              </p>
          
            

            

              <p className=" text-black cursor-pointer hover:text-black  text-sm uppercase">
                <Link to="/about">About us</Link>
              </p>

              <p className=" text-black cursor-pointer hover:text-black  text-sm uppercase">
                <a href="#service">Our Services</a>
              </p>

              <p className=" text-black cursor-pointer hover:text-black  text-sm uppercase">
                <a href="#enquery">enquire now</a>
              </p>

              <p className=" text-black cursor-pointer hover:text-black  text-sm uppercase">
                <Link to="/contact-us">Contact us</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MenuBar;
