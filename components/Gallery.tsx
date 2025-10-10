"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../Assests/SVG/image.svg";
import img1 from "../public/images/gallery/img 1.svg";
import img2 from "../public/images/gallery/img 2.svg";
import img3 from "../public/images/gallery/img 3.svg";
import img4 from "../public/images/gallery/img 4.svg";
import img5 from "../public/images/gallery/img 5.svg";

import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";

gsap.registerPlugin(ScrollTrigger);

const youtubeVideos = [
  <iframe
    key="1"
    src="https://www.youtube.com/embed/C_XpxL-KpOs"
    title="YouTube video 1"
    className="w-full h-full rounded-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />,
  <iframe
    key="2"
    src="https://www.youtube.com/embed/owtXLPUAH9g?si=dcX1JERLby_0U6ef"
    title="YouTube video 2"
    className="w-full h-full rounded-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />,
  <iframe
    key="3"
    src="https://www.youtube.com/embed/mgT9ySCyooc?si=YoW1l3o0qcEsLqGV"
    title="YouTube video 3"
    className="w-full h-full rounded-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />,
  <iframe
    key="4"
    src="https://www.youtube.com/embed/tDs5icKaxQQ?si=Votc8bvBv-ldvkHg"
    title="YouTube video 4"
    className="w-full h-full rounded-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />,
  <iframe
    key="5"
    src="https://www.youtube.com/embed/BY2d9W9o3t8?si=vA8i0K32VB-KX1IB"
    title="YouTube video 5"
    className="w-full h-full rounded-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />,
  <iframe
    key="6"
    src="https://www.youtube.com/embed/N7pTLiM0Zzo?si=NF4YGnKf_B-MB0YG"
    title="YouTube video 6"
    className="w-full h-full rounded-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />,
];

// 21 entries: 5 imported SVGs + 16 public images
const imageSet = [
  img1,
  img2,
  img3,
  img4,
  img5,

  // public images (adjust extensions/names to your actual files in /public/images/gallery)
  "/images/gallery/fnsi1.jpeg",
  "/images/gallery/fnsi2.jpeg",
  "/images/gallery/fnsi3.jpeg",
  "/images/gallery/fnsi4.jpg",
  "/images/gallery/fnsi5.jpeg",
  "/images/gallery/fnsi6.jpg",
  "/images/gallery/fnsi8.jpeg",
  "/images/gallery/fnsi9.jpeg",
  "/images/gallery/fnsi10.jpeg",
  "/images/gallery/fnsi11.jpeg",
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
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

useLayoutEffect(() => {
  let ctx: gsap.Context | null = null;

  try {
    ctx = gsap.context(() => {
      // ✅ Your existing animations stay untouched
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );

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
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );

      const cells = galleryRef.current
        ? Array.from(galleryRef.current.querySelectorAll(".gallery-cell"))
        : [];

      if (cells.length) {
        gsap.fromTo(
          cells,
          { opacity: 0, y: 18, scale: 0.995 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, galleryRef);
  } catch (e) {
    console.error("GSAP Init Error:", e);
  }

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 120);

  return () => {
    if (ctx) ctx.revert(); // ✅ Prevent crash if ctx is null
  };
}, []);


  const triggerPopUpAnimation = () => {
    const galleryChildren = galleryRef.current?.children;
    if (galleryChildren && galleryChildren.length > 0) {
      gsap.fromTo(
        Array.from(galleryChildren),
        { scale: 0.98, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.05,
        }
      );
    }
  };

  return (
    <div className="bg-[#FFFDF2] min-h-screen">
      <div className="lg:pt-[30px] pt-[40px] w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[396px] md:h-[684px]">
          <div
            ref={titleRef}
            className="absolute z-1 top-[40%] left-6 sm:left-10 md:left-16 lg:left-40 text-white"
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold">
              Life at Farm Natura
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
              Gallery
            </h1>
          </div>
          <Image
            src={image}
            alt="Farm Natura Background"
            layout="fill"
            className="object-cover"
          />
        </div>

        
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-2 md:px-6 mt-10"
        >
          {showVideos ? (
            youtubeVideos.map((iframe, index) => (
              <div key={index} className="gallery-cell w-full aspect-video overflow-hidden">
                <div className="w-full h-full">
                  {/* iframe already has full dims via class */}
                  {iframe}
                </div>
              </div>
            ))
          ) : (
            <>
              {/* Main tile spans two columns on md */}
              <div className="md:col-span-2 w-full gallery-cell aspect-video overflow-hidden">
                <Image
                  src={imageSet[0]}
                  alt="Main Image"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover block"
                  ref={(el) => {
                    if (el) imageRefs.current[0] = el;
                  }}
                />
              </div>

              {/* Remaining tiles */}
              {imageSet.slice(1).map((img, idx) => (
                <div key={idx} className="w-full gallery-cell aspect-video overflow-hidden">
                  <Image
                    src={img}
                    alt={`Small Image ${idx + 1}`}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                    ref={(el) => {
                      if (el) imageRefs.current[idx + 1] = el;
                    }}
                  />
                </div>
              ))}
            </>
          )}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center items-center gap-20 mt-10 lg:mb-20">
          <button
            onClick={() => {
              setShowVideos(true);
              triggerPopUpAnimation();
            }}
            disabled={showVideos}
            className={`flex flex-col items-center transition-transform ${
              showVideos ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
          >
            <div className="w-16 h-16 border-2 border-green-700 rounded-full flex items-center justify-center relative">
              <span className="absolute w-12 h-12 border-l-2 border-t-2 border-green-700 rounded-full rotate-[-45deg]"></span>
              <span className="text-green-700 text-xl">&#8592;</span>
            </div>
            <span className="text-gray-700 mt-2">Prev</span>
          </button>

          <button
            onClick={() => {
              setShowVideos(false);
              triggerPopUpAnimation();
            }}
            disabled={!showVideos}
            className={`flex flex-col items-center transition-transform ${
              !showVideos ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
          >
            <div className="w-16 h-16 border-2 border-green-700 rounded-full flex items-center justify-center relative">
              <span className="absolute w-12 h-12 border-r-2 border-b-2 border-green-700 rounded-full rotate-[45deg]"></span>
              <span className="text-green-700 text-xl">&#8594;</span>
            </div>
            <span className="text-gray-700 mt-2">Next</span>
          </button>
        </div>

        <MoveInSection bgColor="#FFFDF2" />
        <FarmNaturaFooter bgColor="#FFFDF2" />
      </div>
    </div>
  );
};

export default Gallery;
