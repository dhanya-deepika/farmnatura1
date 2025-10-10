"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../Common/Formmodal";

// Register ScrollTrigger once globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FarmLandOptions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const leftDecorRef = useRef<HTMLImageElement>(null);
  const rightDecorRef = useRef<HTMLImageElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Store references for images


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
    const mm = gsap.matchMedia(); // Create a matchMedia instance
  
    mm.add("(min-width: 768px)", () => {
      // Desktop Animation
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
          .from(buttonRef.current, { y: -30, opacity: 0 }, "-=0.8")
          .from(leftDecorRef.current, { x: -100, opacity: 0 }, "-=0.6")
          .from(rightDecorRef.current, { x: 100, opacity: 0 }, "-=0.8");
  
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
  
      return () => ctx.revert(); // Cleanup
    });
  
    mm.add("(max-width: 767px)", () => {
      // Mobile Animation (adjusted timing and stagger)
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%", // Later trigger for mobile
            end: "top 40%",
            toggleActions: "play none none reset",
          },
          defaults: { ease: "power1.out", duration: 1 },
        });
  
        tl.from(headingRef.current, { y: -40, opacity: 0 }) // Smaller shift
          .from(buttonRef.current, { y: -20, opacity: 0 }, "-=0.6") // Faster appearance
          .from(leftDecorRef.current, { x: -80, opacity: 0 }, "-=0.4")
          .from(rightDecorRef.current, { x: 80, opacity: 0 }, "-=0.6");
  
        gsap.from(cardRefs.current, {
          opacity: 0,
          scale: 0.85, // Slightly larger initial scale
          duration: 1,
          ease: "power3.out",
          stagger: 0.4, // Slower stagger for mobile
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%", // Triggers later for better visibility
            end: "bottom 50%",
            toggleActions: "play none none reset",
          },
        });
      }, containerRef);
  
      return () => ctx.revert(); // Cleanup
    });
  
    return () => mm.revert(); // Cleanup matchMedia
  }, []);
  
  
  
  return (
    <section ref={containerRef} className="relative bg-white py-12 px-6 lg:px-16 h-[1600px] md:h-[850px] lg:h-[1050px] xl:h-[1200px] w-[2200px]:h-[1800px]">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] w-[2200px]:h-[600px] bg-no-repeat bg-cover bg-bottom" 
        style={{ backgroundImage: "url('/images/highlights/farmland-6.svg')" }}></div>

      {/* Left & Right Decor */}
     {/*   <Image src="/images/highlights/farmland-4.svg" alt="Left Decor" width={250} height={299} 
        ref={leftDecorRef} className="absolute top-0 w-0 md:w-[130px] lg:w-[180px] xl:w-[250px] w-[2200px]:w-[350px] left-[61px]"/>
      <Image src="/images/highlights/farmland-5.svg" alt="Right Decor" width={250} height={250} 
        ref={rightDecorRef} className="absolute top-0 w-0 md:w-[150px] lg:w-[190px] xl:w-[250px] w-[2200px]:w-[350px] right-0"/> */}

      {/* Header */}
      <div ref={headingRef} className="flex flex-col items-center text-center relative z-10">
        <h2 className="mt-[-40px] text-2xl md:text-3xl lg:text-4xl xl:text-6xl w-[2200px]:text-8xl font-bold text-gray-800 flex items-center justify-center"
          style={{ fontFamily: "Jost", fontWeight: 600 }}>
          Farm Land Options
            {/* <img src="/images/highlights/leave.svg" alt="leave-img" width={110} height={81} className="w-[50px] md:w-[80px] xl:w-[110px]"/>  */}
        </h2>

        {/* Tabs */}
        <div ref={buttonRef} className="flex items-center justify-center md:space-x-4 lg:mt-6 w-[2200px]:mt-18 text-sm lg:text-lg w-[2200px]:text-2xl"
          style={{ fontFamily: "Sofia Pro", fontWeight: 400 }}>
          <button className={`px-1 md:px-4 xl:px-6 py-2 w-[80px] md:w-[150px] lg:w-[240px] w-[2200px]:w-[450px] rounded-lg transition font-medium ${
              activeTab === "plot" ? "bg-[#358B6C] text-white" : "bg-transparent text-green-700"
            }`} onClick={() => setActiveTab("plot")}>
            Plot Sizes
          </button>
          {/* <div className="h-12 lg:h-15 w-[1px] bg-gray-400 mx-3"></div>
          <button className={`px-1 md:px-4 xl:px-6 py-2 w-[80px] md:w-[150px] lg:w-[240px] w-[2200px]:w-[450px] rounded-lg transition font-medium ${
              activeTab === "pricing" ? "bg-[#358B6C] text-white" : "bg-transparent text-green-700"
            }`} onClick={() => setActiveTab("pricing")}>
            Pricing
          </button> */}
        </div>
      </div>

      {/* Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-7 w-[2200px]:mt-24 z-10">
        {cards.map((card, index) => (
          <div key={index} ref={(el) => { cardRefs.current[index] = el; }} className="flex flex-col items-center"
            style={{ fontFamily: "Sofia Pro", fontWeight: 400, fontSize: "19px" }}>
            <div className="relative w-full h-[280px] lg:h-[350px] xl:h-[427px] w-[2200px]:h-[627px] rounded-lg overflow-hidden">
              <Image src={card.image} alt="Farm Land" layout="fill" objectFit="cover" />
            </div>
            <p className="text-gray-700 text-[12px] lg:text-sm w-[2200px]:text-xl mt-4 text-center">{card.text}</p>
            {/* <button className="mt-4 px-4 py-2 border border-green-600 text-green-600 text-[14px] lg:text-sm xl:text-lg w-[2200px]:text-2xl rounded-lg 
              hover:bg-green-600 hover:text-white transition"  onClick={() => setModalOpen(true)}  >
              Download Brochure
            </button> */}
          </div>  
        ))}
           <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};

export default FarmLandOptions;