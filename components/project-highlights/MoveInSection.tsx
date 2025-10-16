// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRouter } from "next/navigation";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// interface MoveInSectionProps {
//   bgColor: string;
// }

// const MoveInSection: React.FC<MoveInSectionProps> = ({ bgColor }) => {
//   const router = useRouter();
//   const skyRef = useRef<HTMLImageElement>(null);
//   const sunRef = useRef<HTMLImageElement>(null);
//   const treeRef = useRef<HTMLImageElement>(null);
//   const leavesRef = useRef<HTMLImageElement>(null);
//   const h2Ref = useRef<HTMLHeadingElement>(null);
//   const pRef = useRef<HTMLParagraphElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

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

//   return (
//    <section
//   ref={sectionRef}
//   className="relative flex items-end justify-center px-6 md:px-8 -pt-4 -md:pt-50 pb-0 overflow-hidden min-h-[60vh] lg:min-h-[80vh]"
//   style={{ backgroundColor: bgColor }}
// >
//   {/* ✅ Background Green Grass (choose-bottom.svg) */}
//   <Image
//     src="/svg/garden.svg"
//     alt="Green Grass Background"
//     fill
//     className="absolute inset-0 w-full h-full object-cover z-0"
//     priority
//   />

//   {/* ✅ Content + Couple Image on top of SVG */}
//   <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 lg:px-8">

//     {/* Left Side (Text Content) */}
//     <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
//       <h2
//         ref={h2Ref}
//         className="text-sm md:text-xl lg:text-3xl xl:text-4xl font-medium text-white"
//       >
//         Ready to Own Your Piece of Land?
//       </h2>
//       <p
//         ref={pRef}
//         className="mt-2 mb-4 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-white opacity-80"
//       >
//         Check out the farmlands for sale in Hyderabad by Farm Natura.
//       </p>
//       <button
//         ref={buttonRef}
//         onClick={() => router.push("/contact")}
//         className="bg-[#3D7B3B] md:bg-white text-white md:text-black font-medium px-4 py-2 lg:px-6 text-sm md:text-md lg:text-lg xl:text-xl rounded-md shadow hover:bg-gray-100 transition"
//       >
//         Get in Touch
//       </button>
//     </div>

//     {/* Right Side (Couple Image) */}
//     <div className="flex-1 flex justify-center lg:justify-end relative">
//       <Image
//         src="/images/farm-couple.svg"
//         alt="Farm Couple"
//         width={500}
//         height={400}
//         className="relative bottom-0 w-[150px] md:w-[250px] lg:w-[350px] xl:w-[450px] 2xl:w-[500px]"
//       />
//     </div>
//   </div>
// </section>

//   );

// }

// export default MoveInSection;

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import Image from "next/image";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MoveInSectionProps {
  bgColor: string;
}

const MoveInSection: React.FC<MoveInSectionProps> = ({ bgColor }) => {
  const router = useRouter();
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(h2Ref.current, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(pRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className=" bg-[#FFFDF2] relative flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 pt-28 md:pt-40 lg:pt-80 pb-10 md:pb-16 lg:pb-0 overflow-hidden min-h-[60vh] lg:min-h-[65vh]"
      style={{ backgroundColor: bgColor }}
    >
      <Image
  src="/svg/garden.svg"
  alt="Green Grass Background"
  fill
  className="absolute top-0 left-0 object-cover z-0 scale-125 md:scale-140 lg:scale-150 -translate-y-10 md:-translate-y-20 lg:-translate-y-35"
/>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 lg:px-8 mt-4 md:mt-0 lg:-mt-24 gap-6 md:gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left mt-6 lg:mt-0">
          <h2
            ref={h2Ref}
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-snug md:leading-tight"
          >
            Ready To Move In Are You?
          </h2>
          <p
            ref={pRef}
            className="mt-3 mb-5 text-sm md:text-base lg:text-lg xl:text-xl text-white opacity-90"
          >
            Check out the new farms for sale in Hyderabad by Farm Natura.
          </p>
          <button
            ref={buttonRef}
            onClick={() => router.push("/contact")}
            className="bg-[#3D7B3B] md:bg-white text-white md:text-black font-medium px-6 py-2 md:py-3 text-sm md:text-lg rounded-md shadow hover:bg-green-600 hover:text-white transition cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* ✅ Right Couple Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative mt-4 md:mt-0 lg:-mt-12">
          <Image
            src="/images/farm-couple.svg"
            alt="Farm Couple"
            width={480}
            height={360}
            className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[400px] xl:w-[480px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MoveInSection;
