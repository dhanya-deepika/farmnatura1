"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-[#FFFDF2] relative top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/images/logo.svg"
            alt="Farm Natura Logo"
            width={150}
            height={40}
            className="cursor-pointer w-[80px] sm:w-[100px] md:w-[150px] max-w-full"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#5C5C5C] font-semibold ml-auto">
         {["Home", "About", "Highlights", "Gallery"].map((item) => (
           <li key={item}>
             <Link
               href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
               onClick={handleLinkClick}
             >
               {item}
             </Link>
           </li>
         ))}

        </ul>

        {/* Desktop Contact Button */}
        <Link href="/contact" onClick={handleLinkClick}>
          <span className="hidden md:block border border-green-600 text-green-700 px-5 py-2 rounded-md hover:bg-green-100 transition lg:ml-22 md:ml-10 cursor-pointer">
            Contact Us
          </span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-2xl text-[#333] ml-auto"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFFDF2] shadow-lg absolute top-16 left-0 w-full py-4 px-6 z-40">
          <ul className="flex flex-col space-y-4 text-[#333] font-semibold text-lg">
           {["Home", "About", "Highlights", "Gallery"].map((item) => (
             <li key={item}>
               <Link
                 href={item === "Home" ? "/" : `/${
                  item.toLowerCase()}`}
                 onClick={handleLinkClick}
               >
                 {item}
               </Link>
             </li>
           ))}

            <li>
              <Link href="/contact" onClick={handleLinkClick}>
                <span className="w-full block border border-green-600 text-green-700 px-4 py-2 rounded-md hover:bg-green-100 transition text-center cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
