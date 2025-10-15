"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const MoveIn = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none", // ✅ only plays once, no reverse
        },
      });

      tl.from(".move-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      }).from(
        ".move-image",
        {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-auto w-full overflow-hidden bg-white flex flex-col justify-center items-center py-10 md:py-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[url(/svg/move-in-container.svg)] bg-no-repeat bg-cover bg-left"></div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-7xl px-4 sm:px-8 lg:px-16 z-10">
        {/* Left text */}
        <div className="flex flex-col text-left max-w-lg move-text">
          <p className="font-jost text-[26px] sm:text-[32px] lg:text-[46px] text-white leading-snug">
            Ready To Move In Are You?
          </p>
          <p className="font-jost text-[16px] sm:text-[18px] lg:text-[22px] text-white mt-4 sm:mt-5">
            Check out the new farms for sale in Hyderabad by Farm Natura.
          </p>

          <Button className="bg-white mt-6 w-[200px] sm:w-[220px] lg:w-[240px] move-text">
            <p className="font-poppins text-black font-medium">Get in Touch</p>
          </Button>
        </div>

        {/* Right image - ✅ removed shadow */}
        <div className="mt-10 lg:mt-0 move-image">
          <Image
            src="/home/move-in-ppl.png"
            width={600}
            height={450}
            alt="move-in"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Decorative Images */}
      <Image
        src="/home/move-in-left.png"
        width={800}
        height={800}
        alt="move-in-left"
        className="hidden md:block w-[600px] lg:w-[800px] object-cover absolute left-0 top-0 opacity-90"
      />
      <Image
        src="/home/move-in-clouds.png"
        width={450}
        height={300}
        alt="move-in-clouds"
        className="hidden sm:block w-[250px] sm:w-[350px] md:w-[450px] object-cover absolute left-[20%] top-0 opacity-90"
      />
      <Image
        src="/home/move-in-right.png"
        width={700}
        height={700}
        alt="move-in-right"
        className="hidden md:block w-[500px] lg:w-[700px] object-contain absolute -right-20 lg:-right-56 top-10"
      />
    </div>
  );
};

export default MoveIn;
