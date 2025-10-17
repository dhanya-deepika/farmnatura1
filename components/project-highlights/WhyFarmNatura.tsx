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
    <section ref={containerRef} className="bg-[#F5F2E6] py-0 md:py-12 lg:py-14 px-0 md:px-12 lg:px-16 xl:px-20">
      <h2
        ref={headingRef}
        className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[47px] text-left font-bold text-[#404040] mb-4 md:mb-8 px-4 md:px-0"
        style={{ fontFamily: "Jost", fontWeight: 600, lineHeight: "1.3" }}
      >
        Why Farm Natura?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`relative rounded-lg overflow-hidden shadow-md ${
                index === 2 ? "md:-mt-12 lg:-mt-16" : index === 3 ? "md:mt-2 lg:mt-4" : ""
              }`}
              style={{
                height: "auto",
                aspectRatio: index === 0 || index === 3 ? "795/401" : "792/532"
              }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-opacity-40 flex flex-col justify-start p-4 sm:p-5 md:p-6 ${textColors[index]}`}>
                <h3
                  className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-left mb-2"
                  style={{
                    color: feature.title === "A Healthier Lifestyle" ? "#282828" : "#FFF",
                    fontFamily: "Jost",
                    fontWeight: 600,
                    lineHeight: "123.2%",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[13px] sm:text-[14px] md:text-[16px] text-left md:text-justify"
                  style={{
                    color: feature.title === "A Healthier Lifestyle" ? "#282828" : "#FFF",
                    fontFamily: "Sofia Pro, sans-serif",
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