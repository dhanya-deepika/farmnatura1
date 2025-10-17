"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../Common/Formmodal";

// Register ScrollTrigger globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FarmLandOptions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeTab, setActiveTab] = useState<"plot" | "pricing">("plot");
  const [isModalOpen, setModalOpen] = useState(false);

  const cards = [
    {
      image: "/images/highlights/farmland-1.svg",
      text: "Quarter Acre [1210 Sq. Yards] | Farm Natura is located near the Airport, Srisailam highway & is prestigious Farmhouses For Sale in Hyderabad concept. It is located Near Maheshwaram",
    },
    {
      image: "/images/highlights/farmland-2.svg",
      text: "Half-Acre [2420 Sq. Yards] | Farm Natura is located near the Airport, Srisailam highway & is prestigious Farmhouses For Sale in Hyderabad concept. It is located Near Maheshwaram",
    },
    {
      image: "/images/highlights/farmland-3.svg",
      text: "One Acre [4840 Sq. Yards] | Farm Natura is located near the Airport, Srisailam highway & is prestigious Farmhouses For Sale in Hyderabad concept. It is located Near Maheshwaram",
    },
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 30%",
            toggleActions: "play none none reset",
          },
          defaults: { ease: "power1.out", duration: 1.5 },
        });

        tl.from(headingRef.current, { y: -50, opacity: 0 })
          .from(buttonRef.current, { y: -30, opacity: 0 }, "-=0.8");

        gsap.from(cardRefs.current, {
          opacity: 0,
          scale: 0.8,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 30%",
            toggleActions: "play none none reset",
          },
        });
      }, containerRef);

      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "top 40%",
            toggleActions: "play none none reset",
          },
          defaults: { ease: "power1.out", duration: 1 },
        });

        tl.from(headingRef.current, { y: -40, opacity: 0 })
          .from(buttonRef.current, { y: -20, opacity: 0 }, "-=0.6");

        gsap.from(cardRefs.current, {
          opacity: 0,
          scale: 0.85,
          duration: 1,
          ease: "power3.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "bottom 50%",
            toggleActions: "play none none reset",
          },
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F5F2E6] py-0 md:py-12 lg:py-14 px-0 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Header */}
      <div ref={headingRef} className="flex flex-col items-center text-center relative z-10 px-4 md:px-0">
        <h2
          className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[47px] font-bold text-gray-800 mb-4 md:mb-0"
          style={{ fontFamily: "Jost", fontWeight: 600, lineHeight: "1.3" }}
        >
          Farm Land Options
        </h2>

        {/* Tabs */}
        <div
          ref={buttonRef}
          className="flex items-center justify-center mt-4 md:mt-6"
          style={{ fontFamily: "Sofia Pro", fontWeight: 400 }}
        >
          <button
            className={`transition font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] ${
              activeTab === "plot"
                ? "bg-[#358B6C] text-white"
                : "bg-transparent text-green-700 border"
            }`}
            style={{
              width: "100%",
              maxWidth: "280px",
              height: "45px",
              borderRadius: "8px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: activeTab === "plot" ? "transparent" : "#358B6C",
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
            onClick={() => setActiveTab("plot")}
          >
            Plot Sizes
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-6 mx-auto mt-4 md:mt-12 z-10 px-0 md:px-0">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => { cardRefs.current[index] = el; }}
            className="flex flex-col items-start w-full max-w-[550px] mx-auto"
          >
            {/* Card Image */}
            <div
              className="relative w-full rounded-[10px] overflow-hidden group"
              style={{ aspectRatio: "553 / 627" }}
            >
              <Image
                src={card.image}
                alt="Farm Land"
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card Text */}
            <p
              className="text-gray-700 text-left md:text-justify mt-3 md:mt-4 px-0"
              style={{
                fontFamily: "Sofia Pro, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "1.6"
              }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>

    <div className="relative mt-[-10px] sm:mt-[-20px] md:mt-[-30px] lg:mt-[-40px] w-full">
      {/* Full-width overflow image */}
<div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 mt-[-10px] sm:mt-[-20px] md:mt-[-30px] lg:mt-[-40px] overflow-hidden">
  <Image
    src="/home/choose-bottom.png"
    width={2560}
    height={800}
    alt="choose"
    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-cover"
    loading="lazy"
  />
</div>

            {/* <div className="absolute right-0 bottom-[10%] sm:bottom-[15%] md:bottom-[20%] w-[25%] sm:w-[20%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%]">
              <Image
                src="/home/choose-right.png"
                width={400}
                height={500}
                alt="choose-right"
                className="w-full h-auto object-contain"
              />
            </div> */}
          </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default FarmLandOptions;
