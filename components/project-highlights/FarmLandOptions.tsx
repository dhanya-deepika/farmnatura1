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
      className="relative bg-white py-12 px-6 lg:px-16"
    >
      {/* Header */}
      <div ref={headingRef} className="flex flex-col items-center text-center relative z-10">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-800"
          style={{ fontFamily: "Jost", fontWeight: 600 }}
        >
          Farm Land Options
        </h2>

        {/* Tabs */}
        <div
          ref={buttonRef}
          className="flex items-center justify-center md:space-x-4 mt-6 text-sm lg:text-lg"
          style={{ fontFamily: "Sofia Pro", fontWeight: 400 }}
        >
          <button
  className={`transition font-medium text-sm lg:text-lg ${
    activeTab === "plot"
      ? "bg-[#358B6C] text-white"
      : "bg-transparent text-green-700 border"
  }`}
  style={{
    width: "280px",
    height: "50px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: activeTab === "plot" ? "transparent" : "#358B6C",
  }}
  onClick={() => setActiveTab("plot")}
>
  Plot Sizes
</button>

        </div>
      </div>

      {/* Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto mt-12 z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => { cardRefs.current[index] = el; }}
            className="flex flex-col items-center w-full max-w-[550px] mx-auto"
            style={{ fontFamily: "Sofia Pro, sans-serif", fontWeight: 400, fontSize: "19px" }}
          >
            {/* Card Image */}
            <div
              className="relative w-full rounded-[10px] overflow-hidden"
              style={{ aspectRatio: "553 / 627" }} // Maintain ratio
            >
              <Image
                src={card.image}
                alt="Farm Land"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Card Text */}
            <p
              className="text-gray-700 text-center mt-4 px-2 sm:px-0"
              style={{ fontFamily: "Sofia Pro, sans-serif", fontWeight: 400, fontSize: "19px" }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Image
      <div className="w-full mt-12">
        <div className="w-full relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            src="/home/choose-bottom.png"
            alt="choose"
            fill
            className="object-cover w-full h-full"
            sizes="100vw"
            priority
          />
        </div>
      </div> */}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default FarmLandOptions;
