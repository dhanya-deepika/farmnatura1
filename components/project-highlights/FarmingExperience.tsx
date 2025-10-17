"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FarmingExperience: React.FC = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featureIconsRef = useRef<HTMLDivElement>(null);
  const farmImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Collect all elements that exist
    const elementsToAnimate = [
      titleRef.current,
      descriptionRef.current,
      farmImageRef.current,
      ...(featureIconsRef.current ? Array.from(featureIconsRef.current.children) : []),
    ].filter(Boolean); // Remove nulls

    // Initial state
    gsap.set(elementsToAnimate, { opacity: 0, x: -100 });

    // Timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reset",
      },
    });

    tl.to(
      elementsToAnimate,
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power5.out",
        stagger: 0.3,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="w-full bg-[#F5F2E6] py-0 md:py-12 lg:py-14 px-0 md:px-12 lg:px-16 xl:px-20 flex flex-col z-10"
        style={{ fontFamily: "Jost" }}
      >
        {/* Title */}
        <div className="mb-4 md:mb-8 lg:w-2/3 z-10 px-4 md:px-0">
          <h2
            ref={titleRef}
            className="text-[#404040] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[47px] font-bold text-left"
            style={{
              fontFamily: "Jost",
              fontWeight: 600,
              lineHeight: "1.3"
            }}
          >
            THE FARM LIFE EXPERIENCE
          </h2>
        </div>

        {/* Description */}
        <div
          ref={descriptionRef}
          className="mb-4 md:mb-12 lg:w-2/3 z-10 text-left md:text-justify px-4 md:px-0"
          style={{
            fontFamily: "Josefin Sans, sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "1.7",
            color: "#4A4A4A",
            letterSpacing: "0%",
          }}
        >
          At Farm Natura, your land is a living, breathing space that grows with you.
          <br />
          Each farmland plot is professionally maintained, naturally nurtured, and ready
          for you to start experiencing the joys of growing your own food, building your
          dream farmhouse, or simply escaping to nature whenever you choose.
          <br />
          Whether you're here every weekend or once a month, your land stays active,
          fertile, and toxin-free, so you can enjoy the benefits without the burden.
          <br />
          It's not just land. It's peace of mind, rooted in nature.
        </div>

        {/* Feature Icons */}
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between px-0 md:px-0">
          <div
            ref={featureIconsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center items-center w-full lg:w-2/3 mb-4 md:mb-12 px-4 md:px-0"
          >
            {[
              {
                icon: "/images/highlights/flower.svg",
                title: "Farm Land Within HMDA Limits",
                link: "/farm-land",
              },
              {
                icon: "/images/highlights/sunflower.svg",
                title: "Serene Natural Contours of Land",
                link: "/serene-land",
              },
              {
                icon: "/images/highlights/yard-work.svg",
                title: "Rich Black Cotton Soil Near to Village",
                link: "/black-soil",
              },
              {
                icon: "/images/highlights/farmer.svg",
                title: "Practicing Farming with Indigenous Seeds",
                link: "/indigenous-farming",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 w-full sm:w-[80%] md:w-full"
              >
                <div
                  onClick={() => handleRedirect(feature.link)}
                  className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[133px] md:h-[133px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
                >
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={133} 
                    height={133}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p 
                  className="text-[13px] sm:text-[14px] md:text-[15px] font-[400] text-center text-gray-700 max-w-[120px] break-words"
                  style={{ fontFamily: "Sofia Pro, sans-serif" }}
                >
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Farm Image */}
      <section className="bg-[#F5F2E6] pb-0 md:pb-12 px-0">
        <div
          ref={farmImageRef}
          className="w-full md:w-[90%] h-64 sm:h-80 md:h-96 lg:h-[500px] bg-cover bg-center md:rounded-lg md:shadow-lg mx-auto"
          style={{
            backgroundImage: `url("/images/highlights/farming-exp.svg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
    </>
  );
};

export default FarmingExperience;

