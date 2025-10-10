"use client";

import React from "react";
import Image from "next/image";

const StickySocialIcons: React.FC = () => {
  return (
      <div
        className="fixed top-1/3 right-2 md:right-3 flex flex-col space-y-3 z-50"
        id="social-links"
      >

        <Image
          src="/images/instagram-icon.svg"
          width={37}
          height={37}
          alt="instagram"
          className="w-[25px] h-[25px] md:w-[37px] md:h-[37px] cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/farmnatura.in", "_blank")
          }
        />
        <Image
          src="/images/facebook-icon.svg"
          width={37}
          height={37}
          alt="facebook"
          className="w-[25px] h-[25px] md:w-[37px] md:h-[37px] cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/farmnatura.in", "_blank")
          }
        />
        <Image
          src="/images/youtube-icon.svg"
          width={37}
          height={37}
          alt="youtube"
          className="w-[25px] h-[25px] md:w-[37px] md:h-[37px] cursor-pointer"
          onClick={() =>
            window.open("https://www.youtube.com/@FarmNatura", "_blank")
          }
        />
      </div> 
  );
};

export default StickySocialIcons;