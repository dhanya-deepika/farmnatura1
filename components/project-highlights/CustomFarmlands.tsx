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
      className="relative bg-[#F5F2E6] py-10 md:py-13 px-6 md:px-16"
    >
       {/* <Image
        ref={leavetreeRef}
        src="/images/highlights/leavetree.svg"
        alt="Vine Decoration"
        width={330}
        height={698}
        className="absolute top-[5%] md:top-[10%] right-0 w-[50%] md:w-[35%] 2xl:w-[25%]"
      /> */}

      <div className=" w-full md:max-w-4xl text-center md:text-left md:w-[70%]">
        {/* Animated Title */}
        <h2
    ref={titleRef}
    className="text-[#404040] text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold flex items-center md:items-start text-center md:text-left"
    style={{
      fontFamily: "Jost" !,
      fontSize:"47px",
      lineHeight:"69px"
    }}
  >
          <span>YOUR FARMLAND.<br/> YOUR WAY.</span>
          {/* Animated Leaf Image */}
           {/* <Image
            // ref={leafRef}
            src="/images/highlights/leave.svg"
            alt="Leaf Icon"
            width={90}
            height={81}
            className="absolute -right-8 md:right-[-10] bottom-18 md:bottom-[-32] w-[22%] md:w-[90]"
          />*/}
        </h2>
        </div>

        {/* Animated Paragraphs */}
<div ref={paragraphRef} className="mb-12 lg:w-2/3 z-10 text-left mt-5">
  <p
    style={{
      fontFamily: "Josefin Sans, sans-serif",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "28px",
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mt-7 px-4">
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
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              {/* <button className="mt-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"  onClick={() => setModalOpen(true)}   >
                Download Brochure
              </button> */}
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
