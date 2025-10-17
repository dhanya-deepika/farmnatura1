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
  const leavetreeRef = useRef<HTMLImageElement>(null);

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reset"
        },
      });

      tl.from(titleRef.current, { x: -100, opacity: 0, duration: 1, ease: "power5.out" })
        .from(paragraphRef.current, { x: -100, opacity: 0, duration: 1, ease: "power5.out" }, "-=0.5")
        .from(leavetreeRef.current, { x: -100, opacity: 0, duration: 1, ease: "power5.out" }, "-=0.5");

      gridItemsRef.current.forEach((item) => {
        gsap.from(item, {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none reset",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F2E6] py-0 md:py-8 lg:py-14 px-2 md:px-8 lg:px-16"
    >
      <div className="w-full text-left">
        {/* Animated Title */}
        <h2
          ref={titleRef}
          className="text-[#404040] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[47px] font-bold mb-4"
          style={{ fontFamily: "Jost", fontWeight: 600, lineHeight: "1.3" }}
        >
          <span>YOUR FARMLAND.<br /> YOUR WAY.</span>
        </h2>

        {/* Animated Paragraph */}
        <div ref={paragraphRef} className="mb-4 md:mb-12">
          <p
            className="text-left md:text-justify"
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#4a4a4a",
              marginBottom: "1rem",
            }}
          >
            When you build your farmhouse at Farm Natura, you’re creating a sanctuary
            for your family, rooted in nature. <br />
            Wake up to the sounds of birds, sip chai in your own green courtyard, grow
            vegetables just steps from your kitchen, and spend evenings under open skies.<br />
            With fully maintained farmlands, chemical-free soil, and fresh air all around,
            your farmhouse becomes your personal space of health and happiness.
          </p>
        </div>
      </div>

      {/* Grid Section with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {[
          { src: "/images/highlights/cucumber.svg", title: "" },
          { src: "/images/highlights/greenland.svg", title: "" },
          { src: "/images/highlights/house.svg", title: "" },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => { gridItemsRef.current[index] = el as HTMLDivElement; }}
            className=""
          >
            <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden rounded-lg">
              <Image src={item.src} alt={item.title} fill className="object-cover" />
            </div>
            <div className="text-left mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default CustomFarmlands;
