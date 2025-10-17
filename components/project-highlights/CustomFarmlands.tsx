"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../Common/Formmodal";

// Register ScrollTrigger once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CustomFarmlands = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const gridItemsRef = useRef<HTMLDivElement[]>([]);
  const leavetreeRef = useRef<HTMLImageElement>(null); // Ref for leavetree.svg

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title, paragraph, and leaf animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Animation starts when 80% of section is visible
          end: "bottom 50%", // Animation reverses when scrolling up
          toggleActions: "play none none reset"
        },
      });

      tl.from(
        titleRef.current,
        { x: -100, opacity: 0, duration: 1, ease: "power5.out" },
        "-=1"
      )
        .from(
          paragraphRef.current,
          { x: -100, opacity: 0, duration: 1, ease: "power5.out" },
          "-=0.5"
        )
        .from(
          leavetreeRef.current,
          { x: -100, opacity: 0, duration: 1, ease: "power5.out" },
          "-=0.5"
        );

      // Animating grid items from the left
      gridItemsRef.current.forEach((item) => {
        gsap.from(item, {
          x: -100, // Start the animation from the left
          opacity: 0, // Make it invisible initially
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%", // Trigger the animation when the item is 80% in view
            end: "top 70%", // Reverse when 70% of the item leaves the viewport
            toggleActions: "play none none reset",
 // Play on enter and reverse on leave
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F2E6] py-0 md:py-12 lg:py-14 px-0 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="w-full md:max-w-4xl text-left md:w-[70%] px-4 md:px-0">
        {/* Animated Title */}
        <h2
          ref={titleRef}
          className="text-[#404040] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[47px] font-bold text-left mb-4 md:mb-0"
          style={{
            fontFamily: "Jost",
            fontWeight: 600,
            lineHeight: "1.3"
          }}
        >
          <span>YOUR FARMLAND.<br/> YOUR WAY.</span>
        </h2>
      </div>

      {/* Animated Paragraphs */}
      <div ref={paragraphRef} className="mb-4 md:mb-12 lg:w-2/3 z-10 text-left mt-4 md:mt-5 px-4 md:px-0">
        <p
          className="text-left md:text-justify"
          style={{
            fontFamily: "Josefin Sans, sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "1.7",
            color: "#4a4a4a",
            letterSpacing: "0%",
            marginBottom: "1rem",
          }}
        >
          When you build your farmhouse at Farm Natura, you&rsquo;re creating a sanctuary
          for your family, rooted in nature. <br/>

          Wake up to the sounds of birds, sip chai in your own green courtyard, grow
          vegetables just steps from your kitchen, and spend evenings under open skies.<br/>
          With fully maintained farmlands, chemical-free soil, and fresh air all around,
          your farmhouse becomes your personal space of health and happiness.
        </p>

  {/* <p
    style={{
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "28px",
      color: "#4A4A4A",
      letterSpacing: "0%",
      marginBottom: "1rem",
    }}
  >
    Wake up to the sounds of birds, sip chai in your own green courtyard, grow
    vegetables just steps from your kitchen, and spend evenings under open skies.
  </p>

  <p
    style={{
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "28px",
      color: "#4A4A4A",
      letterSpacing: "0%",
    }}
  >
    With fully maintained farmlands, chemical-free soil, and fresh air all around,
    your farmhouse becomes your personal space of health and happiness.
  </p> */}
</div>


      {/* Grid Section with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-6 lg:gap-8 max-w-6xl mt-0 md:mt-8 px-0">
        {[
          { src: "/images/highlights/cucumber.svg", title: "" },
          { src: "/images/highlights/greenland.svg", title: "" },
          { src: "/images/highlights/house.svg", title: "" },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              gridItemsRef.current[index] = el as HTMLDivElement;
            }}
          >
            <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default CustomFarmlands;

// Building Your Farmland

// Design Options

// Costs
