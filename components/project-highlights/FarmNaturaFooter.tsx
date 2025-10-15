"use client";

import Image from "next/image";
import React from "react";

// Social media links configuration
const socialMediaLinks = [
  {
    name: "Facebook",
    icon: "/images/highlights/fb.svg",
    url: "https://www.facebook.com/farmnatura.in",
  },
  {
    name: "Twitter",
    icon: "/images/highlights/twitter.svg",
    url: "https://twitter.com/farmnatura",
  },
  {
    name: "LinkedIn",
    icon: "/images/highlights/linkedin.svg",
    url: "https://www.linkedin.com/company/farm-natura/",
  },
  {
    name: "YouTube",
    icon: "/images/highlights/youtube.svg",
    url: "https://www.youtube.com/@FarmNatura",
  },
  {
    name: "Instagram",
    icon: "/images/highlights/insta.svg",
    url: "https://www.instagram.com/farmnatura.in/",
  },
];

interface FarmNaturaFooterProps {
  bgColor: string;
}

const FarmNaturaFooter: React.FC<FarmNaturaFooterProps> = ({ bgColor }) => {
  return (
    <footer
      className="p-6 w-full relative px-4 md:px-20"
      style={{ backgroundColor: bgColor }}
    >
      {/* Top horizontal image */}
      <Image
        src="/images/highlights/horizontal-img.svg"
        alt="hr-img"
        width={1600}
        height={40}
        className="w-full h-auto mt-2"
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-16 2xl:mt-[5%]">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-5 w-full md:w-1/2">
          <Image
            src="/images/highlights/logo.svg"
            alt="Farm Natura Logo"
            width={130}
            height={40}
            className="object-contain"
          />
          <p
            className="text-center md:text-left text-sm md:text-base w-[90%] md:w-[65%]"
            style={{ fontFamily: "Glory", fontWeight: 300 }}
          >
            Come, embrace the privilege to experience life from every other
            angle. Welcome to the highest of high living.
          </p>
        </div>

        {/* Right Side - Contact Info */}
        <div
          className="flex flex-col space-y-4 w-full md:w-1/2 text-sm md:text-base"
          style={{ fontFamily: "Assistant", fontWeight: 400 }}
        >
          {/* Location */}
          <div className="flex flex-row items-center justify-center md:justify-start space-x-2 text-center md:text-left">
            <Image
              src="/images/highlights/location.svg"
              alt="Location"
              width={24}
              height={24}
              className="w-7 h-7"
            />
            <p className="w-[90%] md:w-auto leading-snug">
              Planet Green’s Farm Natura, Planet Green, Above Hyundai Show Room
              Building, Q-City Road, Financial District, Gowlidoddi, Hyderabad
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/phone.svg"
              alt="phone"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            <p>+91 9579555666</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-7 mt-5">
            <span className="text-gray-600 text-sm md:text-base">
              Social Media
            </span>
            <div className="flex space-x-4">
              {socialMediaLinks.map(({ name, icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <Image
                    src={icon}
                    alt={name}
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-5 md:h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom horizontal image */}
      <Image
        src="/images/highlights/horizontal-img2.svg"
        alt="hr-img"
        width={1600}
        height={40}
        className="w-full h-auto mt-10"
      />

      {/* Footer Links & Copyright */}
      <div className="container mx-auto pt-4 flex flex-col md:flex-row items-center justify-between">
        <div
          className="flex flex-wrap justify-center space-x-4 text-sm md:text-sm"
          style={{ fontFamily: "Lato", fontWeight: 400 }}
        ></div>
        <div
          className="text-gray-500 mt-4 md:mt-0 text-xs md:text-sm"
          style={{ fontFamily: "Assistant", fontWeight: 400 }}
        >
          Copyright © 2025 Farmnatura
        </div>
      </div>
    </footer>
  );
};

export default FarmNaturaFooter;
