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
      y: 30,
      duration: 0.35, // ⚡ faster
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about-heading",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });

    const contentAnim = gsap.from("#about-content", {
      opacity: 0,
      y: 30,
      duration: 0.35, // ⚡ faster
      delay: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about-content",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });

    return () => {
      headingAnim.scrollTrigger?.kill();
      contentAnim.scrollTrigger?.kill();
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-primary-bg flex flex-col">
      {/* Content */}
      <div className="container px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-10 z-10 flex-1">
        <div className="pl-2 sm:pl-4 md:pl-6 lg:pl-10">
          <h2
            id="about-heading"
            className="font-jost font-semibold text-primary-text
            text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[52px]
            leading-tight"
          >
            Why Managed Farmland
          </h2>

          <div
            id="about-content"
            className="font-sofia-pro-regular mt-2 sm:mt-3 md:mt-4
            text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px]
            max-w-[60ch] leading-relaxed text-primary-text"
          >
            <p>
              Farm Natura offers a community of like-minded families from
              Hyderabad, where lifestyle is built on Natural Farming with an
              intent to focus on Health & Happiness.
            </p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-[250px] sm:h-[360px] md:h-[480px] lg:h-[520px] xl:h-[520px] -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14">
        <Image
          src="/home/about-bg.png"
          width={2560}
          height={1200}
          alt="about-bg"
          className="object-cover w-full h-full"
          priority
        />
      </div>

    </div>
  );
};

export default About;