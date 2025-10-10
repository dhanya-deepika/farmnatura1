"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalaryMoveInSectionProps {
  bgColor: string;
}

const GalaryMoveInSection: React.FC<GalaryMoveInSectionProps> = ({ bgColor }) => {
  const router = useRouter();
  const skyRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const treeRef = useRef<HTMLImageElement>(null);
  const leavesRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);


//     useEffect(() => {
//     // GSAP context
//     const ctx = gsap.context(() => {
//       // Animate Sky from left and Sun from right
//       gsap.from(skyRef.current, {
//         x: -200, // Sky comes from the left
//         opacity: 0,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: skyRef.current,
//           start: "top 80%", // Trigger when 80% of section is visible
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       gsap.from(sunRef.current, {
//         x: 200, // Sun comes from the right
//         opacity: 0,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sunRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       // Animate tree and leaves from left and right
//       gsap.from(treeRef.current, {
//         x: -200, // Tree comes from the left
//         opacity: 0,
//         duration: 1.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: treeRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       gsap.from(leavesRef.current, {
//         x: 200, // Leaves come from the right
//         opacity: 0,
//         duration: 1.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: leavesRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       // Animate h2, p, and button
//       gsap.from(h2Ref.current, {
//         x: -100, // h2 slides in from left
//         opacity: 0,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: h2Ref.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       gsap.from(pRef.current, {
//         x: 100, // p slides in from right
//         opacity: 0,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: pRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       gsap.from(buttonRef.current, {
//         opacity: 0, // Button fades in
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: buttonRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });
//     }, []);

//     return () => ctx.revert(); // Cleanup animations on unmount
//   }, []);


  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center items-center px-6 md:px-8 pt-20 md:pt-40 pb-15"
      style={{ backgroundColor: bgColor }}
    >
      {/* Animated Tree */}
      <div className="absolute top-[5] md:top-[-60] xl:top-[-60] left-0" ref={treeRef}>
        <Image src="/images/highlights/tree-img.svg" alt="Tree" width={500} height={300} className="w-[140] md:w-[280] xl:w-[400]"/>
      </div>

      {/* Animated Leaves */}
      <div className="absolute -top-8 md:-top-16 right-0" ref={leavesRef}>
        <Image
          src="/images/highlights/tree-leave-img.svg"
          alt="Leaves"
          width={200}
          height={200}
          className="w-[50] md:w-[120] xl:w-[160]"
        />
      </div>

      {/* Animated Sky and Sun */}
      <div className="absolute top-[20] md:top-[20] lg:top-[2]  xl:top-[-30] left-[38%] md:left-[30%] lg:left-[25%] xl:left-[27%] flex items-center ">
        <Image
          src="/images/highlights/sky-img.svg"
          alt="Cloud"
          width={340}
          height={80}
          className="z-1 w-[100] md:w-[250] lg:w-[300] xl:w-[340]"
          ref={skyRef}
        />
        <Image
          src="/images/highlights/sun-img.svg"
          alt="Sun"
          width={100}
          height={50}
          className="ml-[-40] md:ml-[-60] lg:ml-[-80] mt-[-14] md:mt-[-10] w-[30] md:w-[50] lg:w-[100]"
          ref={sunRef}
        />
      </div>

      {/* Content Box */}
      <div
        ref={contentRef}
        className="relative flex flex-col lg:flex-row items-center bg-[url('/images/highlights/Group.svg')] bg-cover bg-no-repeat bg-center rounded-xl p-6 md:p-10 w-full md:w-full lg:w-full xl:w-full 2xl:w-480 h-[100px] md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px]"
       >
        {/* Left Side (Text Content) */}
        <div className="flex-1 lg:ml-[15%] md:ml-[-30%] ml-[-6%] mt-[-1%]">
          <h2 className="text-[14px] mb-[9%] md:mb-[5%] md:text-xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-medium text-white">
            Ready To Move In Are You?
          </h2>
          <p className="mt-2 mb-[6%] lg:mb-[9%] md:mb-[5%] text-[8px] md:text-[10px] lg:text-[12px] xl:text-lg 2xl:text-2xl text-white opacity-80">
            Check out the new farms for sale in Hyderabad by Farm Natura.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="mt-6 ml-18 md:ml-0 bg-[#3D7B3B] md:bg-white text-white md:text-black font-medium px-4 py-2 2xl:py-4 2xl:px-4 lg:py-1  md:py-1 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl rounded-md shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="flex-1 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/images/farm-couple.svg"
            alt="Farm Couple"
            width={400}
            height={300}
            className="rounded-lg absolute top-[-20%] md:top-[-15%] w-[100px] right-[4%] md:w-[220px] md:right-[10%] xl:right-[10%] lg:w-[320px] lg:right-[7%] xl:w-[450px] 2xl:w-[450px]"
          />
        </div>
      </div>
    </section>
  );

}

export default GalaryMoveInSection;