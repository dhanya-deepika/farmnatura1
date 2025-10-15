"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 150,
        opacity: 0,
        duration: 2.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F2E6] py-8 md:py-16 px-0 md:px-0 overflow-hidden"
    >
      <div className="relative w-full">
        {/* Testimonial Header */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-20">
          <h5 className="text-gray-500 text-base md:text-lg tracking-wide font-light font-poppins">
            Testimonials
          </h5>
          <h6 className="text-2xl md:text-4xl font-medium text-gray-900 mt-2 leading-tight max-w-xs md:max-w-md font-jost">
            Where Dreams Find Their Perfect Address
          </h6>
        </div>

        {/* Testimonial Quote Box */}
        <div className="relative mt-6 md:mt-12 w-full">
          <div className="relative w-full bg-[#3D7B3B] text-white shadow-lg overflow-hidden">
            {/* User Image */}
            <div className="absolute -top-8 left-4 sm:left-6 md:-top-10 md:left-10 w-20 h-28 sm:w-24 sm:h-32 md:w-48 md:h-56 z-20 overflow-hidden border-4 border-white rounded-lg">
              <Image
                src="/images/girl-img.svg"
                alt="Testimonial User"
                width={200}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial Content */}
            <div className="pl-24 sm:pl-32 md:pl-64 pr-4 sm:pr-6 py-8 md:py-12">
              <p className="text-sm sm:text-base md:text-base leading-relaxed font-jost text-left">
                “I couldn&apost have asked for a better place to call home than FARM NATURA Urban One. From the moment I stepped into this vibrant community, I knew I had made the right choice. Everything here exceeded all my expectations, offering a perfect blend of comfort and elegance. What truly sets Farm Natura apart is the sense of belonging it provides – the friendly neighbours, the top-notch amenities, and the beautifully landscaped surroundings. Living here has been an incredible experience, and I can&apost imagine being anywhere else.”
              </p>

              {/* Name and Designation */}
              <div className="mt-6 text-left">
                <h3 className="text-lg md:text-2xl font-semibold text-white">
                  Excellency Of Living Standards
                </h3>
                <p className="text-sm md:text-base font-medium text-white mt-1">
                  Ridhira Sheik
                </p>
                <p className="text-xs md:text-sm text-white">Product Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Floral Decoration */}
        <div className="absolute right-0 top-10 w-24 md:w-44 opacity-70 hidden sm:block">
          <Image
            src="/images/flower-img.png"
            alt="Floral Decoration"
            width={180}
            height={240}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
