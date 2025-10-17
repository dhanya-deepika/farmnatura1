"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProjectHighlight: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="
        relative w-full
        h-[300px]        /* default mobile height */
        sm:h-[400px]     /* tablets */
        md:h-[550px]     /* small laptops */
        lg:h-[684px]     /* desktops */
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/highlights/highlights.svg"
          alt="Project Highlights"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Overlay Text */}
      <div
        ref={headingRef}
       className="absolute left-6 sm:left-10 md:left-14 top-1/2 -translate-y-1/2 text-white"

      >
        <h2
          className="font-bold"
          style={{
            fontFamily: "Jost",
            fontSize: "clamp(22px, 5vw, 50px)",
            fontWeight: 600,
            lineHeight: "1.2",
            color: "#fff",
          }}
        >
          Project Highlights
        </h2>
      </div>

    </div>
  );
};

export default ProjectHighlight;
