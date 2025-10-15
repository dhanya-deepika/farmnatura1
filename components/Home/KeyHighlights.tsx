"use client";
import { HIGHLIGHTS } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Modal from "../Common/Formmodal";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const KeyHighlights = () => {
  const [activeItem, setActiveItem] = useState(HIGHLIGHTS[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const listItemRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Animate the header
    gsap.fromTo(
      "#highlights-header",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#highlights-header",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Animate list items
    const items = listItemRef.current.filter((el) => el !== null);
    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#highlights-section",
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  const handleItemClick = (item: (typeof HIGHLIGHTS)[number]) => {
    if (activeItem.id !== item.id) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        onComplete: () => {
          setActiveItem(item);
        },
      });

      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => {
          gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.3 });
        },
      });
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 }
      );
    }
  }, [activeItem]);

  return (
    <div
      className="relative w-full min-h-screen py-10 md:py-16 lg:py-20 xl:py-24 bg-primary-bg bg-cover bg-no-repeat bg-center"
      id="highlights-section"
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-7">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 2xl:gap-16">
          {/* Left Column - Highlights List */}
          <div className="w-full lg:w-1/3 xl:w-2/5 pl-4 sm:pl-6 md:pl-8 lg:pl-0">
            <div
              className="flex items-center mb-6 md:mb-8 lg:mb-10"
              id="highlights-header"
            >
              <h3 className="font-jost text-[24px] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-primary-text">
                Key Highlights
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 md:ml-1">
              {HIGHLIGHTS.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center cursor-pointer group"
                  onClick={() => handleItemClick(item)}
                  ref={(el) => {
                    listItemRef.current[index] = el;
                  }}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-9 lg:h-9 xl:w-10 xl:h-10 border rounded-full transition-colors ${
                      activeItem.id === item.id
                        ? "border-black"
                        : "border-gray-300 group-hover:border-gray-400"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                        activeItem.id === item.id
                          ? "bg-black"
                          : "bg-gray-400 group-hover:bg-gray-500"
                      }`}
                    />
                  </div>
                  <p
                    className={`ml-3 sm:ml-4 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-jost font-medium transition-colors ${
                      activeItem.id === item.id
                        ? "text-primary-text"
                        : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Active Content */}
          {activeItem && (
            <div className="relative w-full lg:w-2/3 xl:w-4/5 flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 xl:gap-10 mt-8 lg:mt-20 pb-[150px] sm:pb-[180px] md:pb-[200px]">
              <div
                ref={imageRef}
                className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-4/5 aspect-video rounded-[20px] 2xl:rounded-[26px] overflow-hidden p-5"
              >
                <Image
                  src={activeItem.img}
                  alt={activeItem.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-[16px] 2xl:rounded-[24px]"
                />
              </div>

              <div
                ref={contentRef}
                className="w-full lg:w-1/2 xl:w-3/5 space-y-3 sm:space-y-4 md:space-y-5 pl-4 sm:pl-6 md:pl-8 lg:pl-0"
              >
                <h3 className="font-jost text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold text-primary-text">
                  {activeItem.contentTitle}
                </h3>
                <p className="font-sofia-pro-regular text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-gray-700">
                  {activeItem.content}
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button
                    className="mt-4 sm:mt-6 w-fit"
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
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <Image
          src="/home/greengrass.png"
          width={2560}
          height={400}
          alt="Green Grass"
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default KeyHighlights;