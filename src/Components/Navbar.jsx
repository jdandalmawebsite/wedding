import React, { useState } from "react";
// import { close, menu } from "../assets";
import close from '/img/close.svg';
import menu from '/img/menu.svg';

// import { navLinks } from "../Constant";
import { navLinks } from './../Constant/index';

// flex container mx-auto px-6 py-4 items-center justify-center md:justify-between md:px-0

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full font-ovo font-bold px-5 md:px-[5rem] bg-rusty-brown  fixed z-[99]">
      <div  className=" flex container  mx-auto  py-2 items-center justify-between  md:px-0">
        <a href="#home">
          {/* <img src={logo} alt="logo" /> */}
          <h1 className="text-2xl text-skin-white">JD & ALMA</h1>
          
        </a>
        <ul className="hidden sm:flex items-center gap-4">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className="text-white font-thin hover:text-accent-200 hover:bg-skin-white hover:p-2 hover:rounded-sm"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className=" flex flex-1 justify-end items-center sm:hidden">
          {/* mobile menu icon */}
          <img
            // {/* if toggle is turn on then show close icon otherwise show menu*/}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[20px]  object-contain"
            // setToggle prev and then not prev
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : " hidden"
            } p-6 bg-rusty-brown absolute top-15 right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end p-2 mx-auto flex-col flex-1 text-skin-white ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-ovo font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-secondary hover:text-darkpurple `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;