"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Chemical-Free Living",
    description: "Benefits of toxin-free soil for growing your own food.",
    image: "/images/highlights/chemical.svg",
    width: 795,
    height: 401,
  },
  {
    title: "Sustainable Practices",
    description:
      "Highlight composting, rainwater harvesting, and biodiversity efforts.",
    image: "/images/highlights/practies.svg",
    width: 795,
    height: 532,
  },
  {
    title: "A Healthier Lifestyle",
    description: "Benefits of living in a natural, pollution-free environment.",
    image: "/images/highlights/lifestyle.svg",
    width: 792,
    height: 532,
  },
  {
    title: "Community Living",
    description:
      "Focus on shared values, events and interactive spaces for residents.",
    image: "/images/highlights/living.svg",
    width: 795,
    height: 401,
  },
];

export default function WhyFarmNatura() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
    const mm = gsap.matchMedia(); // Create a matchMedia instance
  
    mm.add("(min-width: 768px)", () => {
      // Desktop animations
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reset"
            },
          }
        );
      }
  
      if (cardsRef.current) {
        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          console.log(card.getBoundingClientRect());


          const direction = index % 2 === 0 ? -100 : 100; // alternate slide directions
    
          gsap.fromTo(
            card,
            { x: direction, y: 50, opacity: 0 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reset",
              },
            }
          );
        });
      }
      });
  
    mm.add("(max-width: 767px)", () => {
      // Mobile animations (adjusted start position)
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 95%",
              toggleActions: "play none none reset",
            },
          }
        );
      }
  
      cardsRef.current.forEach((card) => {
        if (!card) return;
  
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "10px 95%",   // first for el second for scroller "50% 100%"
              end: "50% 50%",  // Adjust end value similarly
              toggleActions: "play none none reset",
              // markers: true,
            },
          }
        );
      });
    });
    })

    return () => ctx.revert();
  }, []);
  

  const textColors = [
    "text-white", // First card
    "text-white", // Second card
    "text-black", // Third card
    "text-white", // Fourth card
  ];

  return (
    <section ref={containerRef} className="bg-[#F5F2E6] py-8 md:py-12 px-4 md:px-12">
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl text-center md:text-left font-bold text-[#404040] mb-8"
        style={{ fontFamily: "Jost",fontSize:"67px", lineHeight:"89px",fontWeight: 600 }}
      >
        Why Farm Natura?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`relative rounded-lg overflow-hidden shadow-md ${
                index === 2 ? "md:-mt-20" : index === 3 ? "mt-4" : ""
              }`}
              style={{ height: `${feature.height}px`}}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={feature.width}
                height={feature.height}
                className="object-cover w-full h-full"
              />
              <div
                className={`absolute inset-0 bg-opacity-40 flex flex-col justify-start p-6 ${textColors[index]}`}>
                <h3
                  className="text-lg font-bold"
                  style={{
                    color: feature.title === "A Healthier Lifestyle" ? "#282828" : "#FFF",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "123.2%", // ~29.6px
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: feature.title === "A Healthier Lifestyle" ? "#282828" : "#FFF",
                    fontSize: "19px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "123.2%",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
      </div>

    </section>
  );
}