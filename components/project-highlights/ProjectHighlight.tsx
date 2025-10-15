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
            once: false,
          },
        }
      );
    }
  }, []);

  return (
    <div className="relative w-full h-[684px]">
      {/* Background Image */}
      <Image
        src="/images/highlights/highlights.svg"
        alt="Project Highlights"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Text */}
      <div
        ref={headingRef}
        className="absolute left-6 sm:left-8 md:left-16 top-1/2 -translate-y-1/2 text-white text-24"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-24"
        style={{
                  // fontFamily: "Sofia Pro"!,
                  fontSize:"80px" !,
                  fontWeight: 600,
                  lineHeight:"109px",
                  color:"#fff"
                }}
        >Project Highlights</h2>
      </div>
    </div>
  );
};

export default ProjectHighlight;
