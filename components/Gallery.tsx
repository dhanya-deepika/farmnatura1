'use client';

/* eslint-disable @next/next/no-img-element */

import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";
import image from "../Assests/SVG/image.svg";

gsap.registerPlugin(ScrollTrigger);

type MediaItem = string | { type: 'video'; url: string };

const youtubeVideos: MediaItem[] = [
  { type: 'video', url: 'https://www.youtube.com/embed/C_XpxL-KpOs' },
  { type: 'video', url: 'https://www.youtube.com/embed/owtXLPUAH9g?si=dcX1JERLby_0U6ef' },
  { type: 'video', url: 'https://www.youtube.com/embed/mgT9ySCyooc?si=YoW1l3o0qcEsLqGV' },
  { type: 'video', url: 'https://www.youtube.com/embed/tDs5icKaxQQ?si=Votc8bvBv-ldvkHg' },
  { type: 'video', url: 'https://www.youtube.com/embed/BY2d9W9o3t8?si=vA8i0K32VB-KX1IB' },
  { type: 'video', url: 'https://www.youtube.com/embed/N7pTLiM0Zzo?si=NF4YGnKf_B-MB0YG' },
];

const images: string[] = [
  "/images/gallery/img1.svg",
  "/images/gallery/img2.svg",
  "/images/gallery/img3.svg",
  "/images/gallery/img4.svg",
  "/images/gallery/img5.svg",
  "/images/gallery/fnsi1.jpeg",
  "/images/gallery/fnsi2.jpeg",
  "/images/gallery/fnsi3.jpeg",
  "/images/gallery/fnsi4.jpg",
  "/images/gallery/fnsi5.jpeg",
  "/images/gallery/fnsi6.jpg",
  "/images/gallery/fnsi8.jpeg",
  "/images/gallery/fnsi9.jpeg",
  "/images/gallery/fnsi10.jpeg",
  "/images/gallery/fnsi11.jpg",
  "/images/gallery/fnsi12.jpg",
  "/images/gallery/fnsi13.jpg",
  "/images/gallery/fnsi14.jpg",
  "/images/gallery/fnsi15.jpg",
  "/images/gallery/fnsi16.jpg",
  "/images/gallery/fnsi17.jpg",
  "/images/gallery/fnsi18.jpg",
  "/images/gallery/fnsi19.jpg",
  "/images/gallery/fnsi20.jpg",
  "/images/gallery/fnsi21.jpg",
];

const Gallery = () => {
  const [showVideos, setShowVideos] = useState(true);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 100%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (galleryRef.current) {
        gsap.fromTo(
          galleryRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );

        const cells = Array.from(galleryRef.current.children);
        if (cells.length) {
          gsap.fromTo(
            cells,
            { opacity: 0, y: 20, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: "power2.out" }
          );
        }
      }
    }, galleryRef);

    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => ctx.revert();
  }, [showVideos]);

  const triggerPopUpAnimation = () => {
    if (galleryRef.current) {
      const cells = Array.from(galleryRef.current.children);
      gsap.fromTo(
        cells,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "power3.out" }
      );
    }
  };

  const mediaItems: MediaItem[] = showVideos ? youtubeVideos : images;

  return (
    <div className="bg-[#FFFDF2] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[396px] md:h-[684px]">
        <div
          ref={titleRef}
          className="absolute z-10 top-[40%] left-6 sm:left-10 md:left-16 lg:left-40 text-white"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold">
            Life at Farm Natura
          </h2>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
            Gallery
          </h1>
        </div>
        <img src={image.src} alt="Farm Natura Background" className="w-full h-full object-cover" />
      </div>

      {/* Gallery */}
      <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-2 md:px-6 mt-10">
        {mediaItems.map((item, idx) => (
          <div key={idx} className="gallery-cell w-full aspect-video overflow-hidden rounded-lg">
            {typeof item === "string" ? (
              <img
                src={item}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <iframe
                src={item.url}
                title={`Video ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-20 mt-10 lg:mb-20">
        <button
          onClick={() => { setShowVideos(true); triggerPopUpAnimation(); }}
          disabled={showVideos}
          className={`flex flex-col items-center transition-transform ${showVideos ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
        >
          <div className="w-16 h-16 border-2 border-green-700 rounded-full flex items-center justify-center relative">
            <span className="absolute w-12 h-12 border-l-2 border-t-2 border-green-700 rounded-full rotate-[-45deg]"></span>
            <span className="text-green-700 text-xl">&#8592;</span>
          </div>
          <span className="text-gray-700 mt-2">Prev</span>
        </button>

        <button
          onClick={() => { setShowVideos(false); triggerPopUpAnimation(); }}
          disabled={!showVideos}
          className={`flex flex-col items-center transition-transform ${!showVideos ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
        >
          <div className="w-16 h-16 border-2 border-green-700 rounded-full flex items-center justify-center relative">
            <span className="absolute w-12 h-12 border-r-2 border-b-2 border-green-700 rounded-full rotate-[45deg]"></span>
            <span className="text-green-700 text-xl">&#8594;</span>
          </div>
          <span className="text-gray-700 mt-2">Next</span>
        </button>
      </div>

      {/* MoveIn Section */}
      <MoveInSection bgColor="#FFFDF2" />

      {/* Footer */}
      <FarmNaturaFooter bgColor="#FFFDF2" />
    </div>
  );
};

export default Gallery;
