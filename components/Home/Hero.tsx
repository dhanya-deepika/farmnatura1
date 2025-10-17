"use client";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "../ui/button";
import Modal from "../Common/Formmodal";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from("#hero-heading", {
        opacity: 0,
        y: 40,
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.from("#hero-content", {
        opacity: 0,
        y: 40,
        duration: 0.45,
        delay: 0.1,
        ease: "power2.out",
      });

      gsap.from("#hero-btn", {
        opacity: 0,
        y: 40,
        duration: 0.45,
        delay: 0.2,
        ease: "power2.out",
      });

      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-screen bg-[#FFFDF2] overflow-x-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <h1
          id="hero-heading"
          className="font-jost font-semibold text-center leading-tight text-primary-text
             mt-4 sm:mt-4 md:mt-8 lg:mt-8 xl:mt-8
             text-[20px] sm:text-[30px] md:text-[42px] lg:text-[52px] xl:text-[68px]"
        >
          LIVE THE FARM LIFE,
          <br />
          ROOTED IN HEALTH AND HAPPINESS.
        </h1>

        <p
          id="hero-content"
          className="text-center mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] font-sofia-pro-regular mx-auto max-w-[55ch]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          Farm Natura offers a community of like-minded families from Hyderabad,
          where lifestyle is built on Natural Farming focusing on Health &
          Happiness.
        </p>

        <div
          id="hero-btn"
          className="relative z-20 flex items-center justify-center mt-5 sm:mt-6 md:mt-7 mb-8"
        >
          <Button
            className="relative z-30 text-sm sm:text-base md:text-lg px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
            onClick={() => setModalOpen(true)}
          >
            Book A Site Visit
          </Button>
        </div>
      </div>

      {/* Background SVG Line */}
      <Image
        src="/home/hero-line-bg.svg"
        width={200}
        height={200}
        alt="hero-line"
        className="w-full h-[350px] sm:h-[320px] md:h-[300px] lg:h-[380px] absolute top-[10px] sm:top-[20px] md:top-[30px] lg:top-[50px] left-0"
        priority
      />

      {/* Hero BG Image */}
      <Image
        src="/home/sunflower-img.svg"
        width={200}
        height={200}
        alt="hero-bg"
        className="w-screen h-[40%] sm:h-[45%] md:h-[50%] lg:h-[55%] xl:h-[60%] object-cover"
        priority
      />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Hero;