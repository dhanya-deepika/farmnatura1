"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";
import bgImage from "../Assests/SVG/image.svg";

gsap.registerPlugin(ScrollTrigger);

type VideoItem = { url: string };

const youtubeVideos: string[] = [
  "https://www.youtube.com/embed/C_XpxL-KpOs",
  "https://www.youtube.com/embed/owtXLPUAH9g?si=dcX1JERLby_0U6ef",
  "https://www.youtube.com/embed/mgT9ySCyooc?si=YoW1l3o0qcEsLqGV",
  "https://www.youtube.com/embed/tDs5icKaxQQ?si=Votc8bvBv-ldvkHg",
  "https://www.youtube.com/embed/BY2d9W9o3t8?si=vA8i0K32VB-KX1IB",
  "https://www.youtube.com/embed/N7pTLiM0Zzo?si=NF4YGnKf_B-MB0YG",
];

const imageSet: string[] = [
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
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [showAll, setShowAll] = useState(false);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const isPhotosTab = activeTab === "photos";
  const data: (string | VideoItem)[] = isPhotosTab
    ? imageSet
    : youtubeVideos.map((url) => ({ url }));

  const visibleData = showAll ? data : data.slice(0, 6);

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
        const cells = Array.from(
          galleryRef.current.querySelectorAll(".gallery-cell")
        );
        gsap.fromTo(
          cells,
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: "power2.out" }
        );
      }
    }, galleryRef);

    setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => ctx.revert();
  }, [visibleData]);

  return (
    <div className="bg-[#FFFDF2] min-h-screen m-0 p-0">
      {/* Hero Section */}
      <div className="relative w-full h-[396px] md:h-[684px] m-0 p-0">
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
        <Image
          src={bgImage}
          alt="Farm Natura Background"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
        />
      </div>

      {/* Tabs */}
      <div className="max-w-8xl mx-auto mt-12 text-center">
        <div className="inline-flex bg-[#f9f9f9] border border-gray-300 rounded-full overflow-hidden mb-6">
          <button
            onClick={() => {
              setActiveTab("photos");
              setShowAll(false);
            }}
            className={`px-5 py-1.5 text-sm font-medium transition ${
              isPhotosTab
                ? "bg-[#2f3e46] text-white"
                : "text-[#2f3e46] hover:bg-gray-200"
            }`}
          >
            PHOTOS
          </button>
          <button
            onClick={() => {
              setActiveTab("videos");
              setShowAll(false);
            }}
            className={`px-5 py-1.5 text-sm font-medium transition ${
              !isPhotosTab
                ? "bg-[#2f3e46] text-white"
                : "text-[#2f3e46] hover:bg-gray-200"
            }`}
          >
            VIDEOS
          </button>
        </div>

        {/* Gallery Grid */}
        <div
          ref={galleryRef}
          className="
            mt-20
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-x-6
            gap-y-10
            justify-items-center
            px-4
            w-full
            max-w-[98vw]
            mx-auto
          "
        >
          {visibleData.map((item, idx) => (
            <div
              key={idx}
              className="
                gallery-cell
                relative
                rounded-xl
                overflow-hidden
                bg-white
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
                w-full
                max-w-[600px]
                h-[300px]
                sm:h-[320px]
                md:h-[360px]
                lg:h-[400px]
                xl:h-[480px]
              "
            >
              {isPhotosTab ? (
                <Image
                  src={item as string}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 768px) 50vw,
                         (max-width: 1024px) 33vw,
                         (max-width: 1920px) 33vw,
                         33vw"
                  priority={idx < 6}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                />
              ) : (
                <iframe
                  src={(item as VideoItem).url}
                  title={`Video ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          ))}
        </div>

        {/* See All / Collapse Button */}
        {data.length > 6 && (
          <div className="mt-6 mb-0">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2.5 bg-[#2f3e46] text-white text-sm rounded-full hover:bg-[#1e2a2f] transition flex items-center gap-2 mx-auto"
            >
              {showAll ? "Collapse" : "See All"}{" "}
              <span className="text-base">{showAll ? "↑" : "→"}</span>
            </button>
          </div>
        )}
      </div>

      {/* Additional Sections */}
      <MoveInSection bgColor="#FFFDF2" />
      <FarmNaturaFooter bgColor="#FFFDF2" />
    </div>
  );
};

export default Gallery;
