"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../Assests/SVG/image.svg";

import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";

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
        <Image src={image} alt="Farm Natura Background" fill className="object-cover" />
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <div className="inline-flex bg-[#f9f9f9] border border-gray-300 rounded-full overflow-hidden mb-8">
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

        {/* Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 sm:px-4"
        >
          {visibleData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-white shadow gallery-cell"
            >
              {isPhotosTab ? (
                <img
                  src={item as string}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <iframe
                  src={(item as VideoItem).url}
                  title={`Video ${idx + 1}`}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          ))}
        </div>

        {/* See All / Collapse Button */}
        {data.length > 6 && (
          <div className="mt-8">
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

      {/* MoveIn Section */}
      <div className="mt-10">
        <MoveInSection bgColor="#FFFDF2" />
      </div>

      {/* Footer */}
      <FarmNaturaFooter bgColor="#FFFDF2" />
    </div>
  );
};

export default Gallery;
