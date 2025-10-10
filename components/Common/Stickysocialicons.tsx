"use client";

import React from "react";
import Image from "next/image";

const StickySocialIcons: React.FC = () => {
  return (
    <div className="fixed bottom-3.5 right-2 md:right-3 flex flex-col space-y-3 z-50">
      {/* Instagram */}
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

      {/* Facebook */}
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

      {/* YouTube */}
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

      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=919100007368"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/whatsapp-icon.svg"
          alt="whatsapp"
          className="w-[25px] h-[25px] md:w-[37px] md:h-[37px] cursor-pointer"
        />
      </a>

      {/* Phone */}
      <a href="tel:919579555666">
        <Image
          src="/images/phone-icon.svg"
          alt="phone"
          width={37}
          height={37}
          className="w-[25px] h-[25px] md:w-[37px] md:h-[37px] cursor-pointer"
        />
      </a>
    </div>
  );
};

export default StickySocialIcons;
