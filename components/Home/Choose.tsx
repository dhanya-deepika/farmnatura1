"use client";
import {  useState, useEffect } from "react";
import Modal from "../Common/Formmodal";
import { Button } from "../ui/button";
import Image from "next/image";

const Choose = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <div className="mt-8 md:mt-12 px-4 sm:px-6 md:px-8 lg:px-[100px] xl:px-[24x]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-0">
          {/* Left Column Heading */}
          <div className="w-auto">


          <h2
            id="about-heading"
            className="font-jost font-semibold text-primary-text
            text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[52px]
            leading-tight"
          >
            Reason to Choose <br/>Us!
          </h2>

          </div>

          {/* Right Column - Farmland Image + Text */}
          <div className="flex flex-col sm:flex-row items-center justify-center w-full text-center sm:text-left gap-0 px-4 sm:px-6 md:px-12 lg:px--16">
            <Image
              src="/home/choose-farmland.png"
              width={isMobile ? 220 : 200}
              height={isMobile ? 220 : 200}
              alt="farmland"
              className="object-contain w-[220px] sm:w-[180px] md:w-[500px] h-auto sm:h-[180px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
            />
            <div className="mt-3 sm:mt-0 sm:ml-6 md:ml-8">
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

        {/* Main Image (No animation) */}
        <div className="relative z-10 mt-5 md:mt-5">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/home/choose-img-1.png"
              width={1904}
              height={700}
              alt="img-1"
              className="w-full h-auto object-cover rounded-[10px]"
            />
          </div>

          <div className="relative pt-0 left-0 w-full lg:w-[70%] xl:w-[110%] 2xl:w-[100%]">


              <h4
                                    id="about-heading"
                                    className="font-jost font-semibold text-primary-text
                                    sm:text-xl md:text-2xl lg:text-[24px] xl:text-[28px] 2xl:text-[30px]
                                    leading-tight"
                                  >
                                   <br/> KANDUKUR
                                  </h4>

              <h2
                        id="about-heading"
                        className="font-jost font-semibold text-primary-text
                        sm:text-xl md:text-2xl lg:text-[24px] xl:text-[28px] 2xl:text-[30px]
                        leading-tight"
                      >
                         THE FUTURE CITY OF HYDERABAD
                      </h2>

            <p className="font-sofia-pro-regular text-sm sm:text-base md:text-lg xl:text-md 2xl:text-xl mt-2 w-full lg:max-w-[100%] xl:max-w-[65%] 2xl:max-w-[68%] text-left">
              Located in Hyderabad’s fastest-growing zone, Farm Natura offers you the best
              of both worlds - peaceful countryside living with the promise of booming
              infrastructure, upcoming developments, and seamless connectivity to the
              city. Just 25 minutes from the RGI Airport, this is where nature meets next.
              25 Minutes From RGI Airport · 20 Minutes From ORR · Upcoming 200-Acre AI
              City · Proposed Young India Skills University
            </p>

            <div className="flex justify-center md:justify-start">
              <Button
                className="mt-3 ml-0 sm:ml-0 sm:mt-4 w-fit"
                variant="outline"
                onClick={() => setModalOpen(true)}
              >
                <span className="text-primary-green text-sm sm:text-base">
                  Download Brochure
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

     {/* Bottom Image */}
     <div className="relative w-full lg:-mt-100">
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
     </div>


      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Choose;