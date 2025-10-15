"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // 👇 Hide navbar on scroll down, show on scroll up or top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
   <nav
     className={`relative transition-transform duration-500 ease-in-out bg-[#FFFDF2] ${
       showNavbar ? "translate-y-0" : "-translate-y-full"
     } w-full z-50`}
   >
     <div className="max-w-[1800px] mx-auto flex items-center justify-between py-4 px-3 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32">
       {/* Logo */}
       <Link href="/" onClick={handleLinkClick} className="flex-shrink-0">
         <Image
           src="/images/logo.svg"
           alt="Farm Natura Logo"
           width={180}
           height={50}
           className="cursor-pointer w-[70px] sm:w-[90px] md:w-[140px] lg:w-[160px] xl:w-[180px] max-w-full"
           priority
         />
       </Link>

       {/* Desktop Menu */}
       <ul className="hidden md:flex space-x-8 lg:space-x-12 text-[#5C5C5C] font-semibold ml-auto">
         {["Home", "About", "Highlights", "Gallery"].map((item) => (
           <li key={item}>
             <Link
               href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
               onClick={handleLinkClick}
               className="hover:text-green-700 transition"
             >
               {item}
             </Link>
           </li>
         ))}
       </ul>

       {/* Desktop Contact Button */}
       <Link href="/contact" onClick={handleLinkClick}>
         <span className="hidden md:block border border-green-600 text-green-700 px-4 py-2 lg:px-5 lg:py-2.5 rounded-md hover:bg-green-100 transition ml-6 lg:ml-10 xl:ml-14 cursor-pointer">
           Contact Us
         </span>
       </Link>

       {/* Hamburger Menu */}
       <button
         className="md:hidden text-2xl text-[#333] ml-auto"
         onClick={() => setMenuOpen((prev) => !prev)}
         aria-label={menuOpen ? "Close Menu" : "Open Menu"}
       >
         {menuOpen ? <FiX /> : <FiMenu />}
       </button>
     </div>

     {/* Mobile Menu */}
     {menuOpen && (
       <div className="md:hidden bg-[#FFFDF2] shadow-md absolute left-0 w-full top-[100%] z-50">
         <ul className="flex flex-col space-y-4 text-[#333] font-semibold text-base sm:text-lg py-4 px-6">
           {["Home", "About", "Highlights", "Gallery"].map((item) => (
             <li key={item}>
               <Link
                 href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                 onClick={handleLinkClick}
                 className="block hover:text-green-700 transition"
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
