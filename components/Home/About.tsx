"use client";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const headingAnim = gsap.from("#about-heading", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      scrollTrigger: {
        trigger: "#about-heading",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none reset",
      },
    });

    const contentAnim = gsap.from("#about-content", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      scrollTrigger: {
        trigger: "#about-heading",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none reset",
      },
    });

    // Cleanup animations on unmount
    return () => {
      headingAnim.scrollTrigger?.kill();
      contentAnim.scrollTrigger?.kill();
    };
  }, []);

  // Force ScrollTrigger refresh on page load/navigation
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
   <div className="relative w-full overflow-hidden bg-primary-bg flex flex-col">
  {/* Content Container */}
  <div className="container px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-16 sm:pt-20 md:pt-25 z-10 flex-1">
    <div className="pt-6 sm:pt-8 md:pt-25 pl-4 sm:pl-6 md:pl-8"> {/* valid padding, moved right and slightly down */}
      <h2
        className="font-jost font-semibold text-[24px] sm:text-4xl md:text-5xl lg:text-[50px] text-primary-text my-2"
        id="about-heading"
      >
        Why Managed Farmland
      </h2>
      <div
        className="font-sofia-pro-regular space-y-3 text-sm sm:text-lg md:text-xl xl:text-2xl mt-3 leading-relaxed"
        id="about-content"
      >
        <p>
          Farm Natura offers a community of like-minded families from Hyderabad,
          where lifestyle is built basing on Natural Farming with an intent to
          focus on Health & Happiness.
        </p>
      </div>
    </div>
  </div>

  {/* Background Images */}
  <div className="relative w-full h-[400px] md:h-[600px] xl:h-[900px] -mt-40"> {/* increased negative margin */}
    <Image
      src="/home/about-bg.png"
      width={2560}
      height={1200}
      alt="about-bg"
      className="object-cover w-full h-[400px] md:h-[600px] xl:h-[900px]"
      priority
    />
  </div>
</div>


  );
};

export default About;
