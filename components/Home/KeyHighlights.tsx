"use client";
import { HIGHLIGHTS } from "@/lib/constants";
import Image from "next/image";
import { useRef, useState } from "react";
import Modal from "../Common/Formmodal";
import { Button } from "../ui/button";

const KeyHighlights = () => {
  const [activeItem, setActiveItem] = useState(HIGHLIGHTS[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (item: (typeof HIGHLIGHTS)[number]) => {
    if (activeItem.id !== item.id) {
      setActiveItem(item);
    }
  };

  return (
    <div className="relative w-full min-h-screen py-14 md:py-20 lg:py-24 xl:py-28 pb-32 md:pb-40 lg:pb-48 bg-primary-bg bg-cover bg-no-repeat ">
      <div className="container mx-auto px-2 md:px-8 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16">
          {/* Left Column - Highlights List */}
          <div className="w-full lg:w-[35%] xl:w-[30%] flex flex-col gap-6 lg:gap-8">
            <h3 className="font-jost text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-primary-text mb-6">
              Key Highlights
            </h3>

            <div className="flex flex-col gap-4">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center cursor-pointer transition-colors ${
                    activeItem.id === item.id ? "text-primary-text" : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border rounded-full transition-colors ${
                      activeItem.id === item.id ? "border-black" : "border-gray-300"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                        activeItem.id === item.id ? "bg-black" : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <p className="ml-3 sm:ml-4 text-base md:text-lg font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Active Content */}
          {activeItem && (
            <div className="w-full lg:w-[65%] xl:w-[70%] flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-6 lg:gap-8 mt-8 lg:mt-0">
              {/* Image */}
              <div
                ref={imageRef}
                className="w-full md:w-[45%] lg:w-[48%] aspect-video rounded-[20px] overflow-hidden flex-shrink-0"
              >
                <Image
                  src={activeItem.img}
                  alt={activeItem.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>

              {/* Content */}
              <div
                ref={contentRef}
                className="w-full md:w-[55%] lg:w-[52%] flex flex-col gap-4"
              >
                <h3 className="font-jost text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold text-primary-text">
                  {activeItem.contentTitle}
                </h3>
                <p className="font-sofia-pro-regular text-base sm:text-lg md:text-lg lg:text-base xl:text-lg text-gray-700">
                  {activeItem.content}
                </p>
                <Button
                  className="mt-4 sm:mt-6 w-fit"
                  variant="outline"
                  onClick={() => setModalOpen(true)}
                >
                  <span className="text-primary-green text-base sm:text-lg">
                    Download Brochure
                  </span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Image */}
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
