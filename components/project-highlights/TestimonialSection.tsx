"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface TestimonialSectionProps {
  bgColor?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ bgColor }) => {
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
      className="relative py-0 md:py-12 lg:py-14 px-0 md:px-12 lg:px-16 xl:px-20 overflow-hidden"
      style={{ backgroundColor: bgColor || "transparent" }}
    >
      <div className="max-w-8xl mx-auto relative">
        {/* Testimonial Text */}
        <div className="relative z-10 px-4 md:px-0">
          <h3
            className="text-gray-500 text-[14px] sm:text-[15px] md:text-[16px] tracking-wide font-light text-left mb-2 md:mb-0"
            style={{ fontFamily: "Poppins" }}
          >
            Testimonials
          </h3>
          <h2
            className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium text-gray-900 mt-2 leading-tight max-w-xs md:max-w-md text-left mb-4 md:mb-0"
            style={{ fontFamily: "Jost" }}
          >
            Where Dreams Find Their Perfect Address
          </h2>

          {/* Image and User Info Container */}
          <div className="relative mt-4 md:mt-8 mb-4">
            <div className="absolute -bottom-5 left-4 md:-bottom-65 md:left-6 z-20 w-20 h-24 sm:w-24 sm:h-28 md:w-88 md:h-100">
              <div className="overflow-hidden">
                <Image
                  src="/images/girl-img.svg"
                  alt="Testimonial User"
                  width={501}
                  height={556}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="ml-24 sm:ml-28 md:ml-105 pt-4 md:pt-8 md:pb-5">
              <h3
                className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-gray-900 mb-1 md:mb-4 text-left"
                style={{ fontFamily: "Jost" }}
              >
                Excellency Of Living Standards
              </h3>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-black-700 mb-0 md:mb-1 text-left"
                style={{ fontFamily: "Jost" }}
              >
                Ridhira Sheik
              </p>
              <p
                className="text-[12px] sm:text-[13px] md:text-[14px] text-black-500 text-left"
                style={{ fontFamily: "Jost" }}
              >
                Product Manager
              </p>
            </div>
          </div>

          {/* Testimonial Quote Box */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#3D7B3B] text-white p-6 md:p-8 pt-20 md:pt-12 shadow-lg">
            <div className="absolute -top-4 left-4 md:-top-8 md:left-8 w-20 h-24 md:w-48 md:h-56 z-10"></div>

            <p
              className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed text-left md:text-justify px-4 sm:px-6 md:pl-115"
              style={{ fontFamily: "Jost", lineHeight: "1.7" }}
            >
              &ldquo;I couldn&apos;t have asked for a better place to call home
              than FARM NATURA Urban One. From the moment I 
              stepped into this vibrant community, I knew I had made the right
              choice. Everything here exceeded all my expectations,
              offering a perfect blend of comfort and elegance. What truly sets
              Farm Natura apart is the
               sense of belonging it provides &ndash; the friendly
              neighbours, the top-notch amenities, and the beautifully 
              landscaped surroundings. Living here has been an incredible
              experience, and I can&apos;t imagine being
              anywhere else.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

