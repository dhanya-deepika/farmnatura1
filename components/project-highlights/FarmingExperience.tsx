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
        className="w-full bg-[#F5F2E6]  px-4 md:px-8 lg:pl-10 xl:pl-20 lg:pr-0 flex flex-col  z-10"
        style={{ fontFamily: "Jost" }}
      >
        {/* Title */}
        <div className="mb-8 lg:w-2/3 z-10 mx-auto lg:ml-0">
  <h2
    ref={titleRef}
    className="text-[#404040] text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold flex items-center md:items-start text-center md:text-left"
    style={{
      fontFamily: "Josefin Sans, sans-serif",
      fontSize:"47px",
    }}
  >
    THE FARM LIFE EXPERIENCE
  </h2>
</div>

{/* Description */}
<div
  ref={descriptionRef}
  className="mb-12 lg:w-2/3 z-10 text-center lg:text-left"
  style={{
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "28px",
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
    Whether you’re here every weekend or once a month, your land stays active,
    fertile, and toxin-free, so you can enjoy the benefits without the burden.
  <br />
  It’s not just land. It’s peace of mind, rooted in nature.
</div>


        {/* Feature Icons */}
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div
            ref={featureIconsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center w-full lg:w-2/3 mb-12"
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
        className="w-[133px] h-[133px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
                >
                  <Image src={feature.icon} alt={feature.title} width={133} height={133} />
                </div>
                <p 
        className="text-[15px] font-[400] text-center text-gray-700 max-w-[120px] break-words"
                >
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Farm Image */}
    <section className="bg-[#F5F2E6] ">
  <div
    ref={farmImageRef}
    className="w-[90%] h-96 md:h-[500px] bg-cover bg-center rounded-lg shadow-lg mx-auto"
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
