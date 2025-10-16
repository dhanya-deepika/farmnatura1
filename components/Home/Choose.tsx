"use client";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Modal from "../Common/Formmodal";
import { Button } from "../ui/button";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const containerRef = useRef(null);

  // Detect screen width to disable animation on small screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      if (isMobile) return; // disable animations on small screens

      const elements = [
        { id: "#header-heading", scrub: 0.6 },
        { id: "#header-explore", scrub: 0.6 },
        { id: "#infinity-img", scrub: 0.5 },
        { id: "#images", scrub: 0.2 },
        { id: "#images-content", scrub: 0.3 },
      ];

      elements.forEach(({ id, scrub }) => {
        gsap.from(id, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: id,
            start: "top 80%",
            end: "bottom 20%",
            scrub,
            once: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden bg-white">
      <div className="mt-8 md:mt-11 px-4 sm:px-6 md:px-8 lg:px-[30px] xl:px-[23px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 lg:gap-0">
  {/* Left Column Heading */}
  <div className="w-full lg:w-auto mb-6 lg:mb-0 lg:pl-8 xl:pl-12 2xl:pl-20 max-w-full lg:max-w-[500px] xl:max-w-[450px] 2xl:max-w-[550px] mx-auto lg:mx-0">
<h4
  id="header-heading"
  className="font-jost font-semibold text-primary-text leading-tight
    text-4xl sm:text-5xl md:text-4xl lg:text-[65px] xl:text-[50px] 2xl:text-[60px]
    text-center lg:text-left"
>
    Reason to <br /> Choose Us!
</h4>
</div>


  {/* Right Column - Farmland Image + Text */}
  <div
    id="header-explore"
    className="flex flex-col sm:flex-row items-center justify-center w-full text-center sm:text-left gap-4 lg:pl-8 xl:pl-12 2xl:pl-16"
  >
    <Image
      src="/home/choose-farmland.svg"
      width={isMobile ? 220 : 200} // slightly bigger on small screens
      height={isMobile ? 220 : 200}
      alt="farmland"
      className={`object-contain w-[220px] sm:w-[180px] md:w-[890px] h-auto sm:h-[180px] md:h-[700px]`}
    />
    <div className="mt-3 sm:mt-0 sm:ml-4 md:ml-6">
      <p className="font-jost font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[28px] 2xl:text-[30px] text-primary-text">
        Explore Farm Land Options
      </p>
      <p className="font-sofia-pro-regular text-sm sm:text-base md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-black mt-2 sm:mt-3">
        Farm Natura offers a community of like-minded families from Hyderabad,
        where lifestyle is built on Natural Farming focusing on Health & Happiness.
      </p>
    </div>
    </div>
        </div>


        {/* Main Image */}
        <div className="relative z-10 mt-5 md:mt-5" id="images">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/home/choose-img-1.png"
              width={1904}
              height={700}
              alt="img-1"
              className="w-full h-auto object-cover rounded-[10px]"
            />
          </div>

 <div
  className="relative pt-4 md:pt-6 lg:pt-8 xl:pt-10 2xl:pt-12 left-0 w-full mx-auto animate-slideDown"
  id="images-content"
>



            <p className="font-jost text-lg sm:text-xl md:text-2xl xl:text-2xl 2xl:text-[28px] text-primary-text font-semibold mt-5 mb-2 sm:mb-3 md:mb-3 ml-4 sm:ml-16 md:ml-20 text-center lg:text-left">
              KANDUKUR
            </p>
            <p className="font-jost text-lg sm:text-xl md:text-2xl xl:text-2xl 2xl:text-[30px] text-primary-text font-semibold  mt-5 mb-3 sm:mb-4 md:mb-4 ml-4 sm:ml-16 md:ml-20 text-center lg:text-left">
              THE FUTURE CITY OF HYDERABAD
            </p>
            <p className="font-sofia-pro-regular text-sm sm:text-base md:text-lg xl:text-md 2xl:text-xl mt-5 sm:mt-2 md:mt-2 w-full lg:max-w-[100%] xl:max-w-[65%] 2xl:max-w-[68%] ml-4 sm:ml-16 md:ml-20 text-center lg:text-left">
              Located in Hyderabad’s fastest-growing zone, Farm Natura offers you the best
              of both worlds - peaceful countryside living with the promise of booming
              infrastructure, upcoming developments, and seamless connectivity to the
              city. Just 25 minutes from the RGI Airport, this is where nature meets next.
              25 Minutes From RGI Airport · 20 Minutes From ORR · Upcoming 200-Acre AI
              City · Proposed Young India Skills University
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                className="mt-3 ml-0 sm:ml-20 sm:mt-4 w-fit"
                variant="outline"
                onClick={() => setModalOpen(true)}
              >
                <span className="text-primary-green text-sm sm:text-base cursor-pointer">
                  Download Brochure
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
<div className="relative mt-[-10px] sm:mt-[-20px] md:mt-[-30px] lg:mt-[-40px] w-full">
  <div className="w-full overflow-hidden">
    <Image
      src="/home/choose-bottom.png"
      width={2560}
      height={800}
      alt="choose"
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-cover"
      loading="lazy"  

    />
  </div>
        {/* <div className="absolute right-0 bottom-[10%] sm:bottom-[15%] md:bottom-[20%] w-[25%] sm:w-[20%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%]">
          <Image
            src="/home/choose-right.png"
            width={400}
            height={500}
            alt="choose-right"
            className="w-full h-auto object-contain"
          />
        </div> */}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Choose;
