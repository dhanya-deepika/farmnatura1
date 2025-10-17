"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";
import Modal from "./Common/Formmodal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const evolutionRef = useRef<HTMLDivElement | null>(null);
  const researchRef = useRef<HTMLDivElement | null>(null);
  const inspiredBy = useRef<HTMLDivElement | null>(null);
  const vision = useRef<HTMLDivElement | null>(null);
  const About = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const anim = gsap.fromTo(
          textRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2.5,
            ease: "power3.out",
            paused: true,
          }
        );

        ScrollTrigger.create({
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => anim.play(),
          onLeave: () => anim.reverse(),
          onEnterBack: () => anim.play(),
          onLeaveBack: () => anim.reverse(),
        });
      }
    });

    if (evolutionRef.current) {
      gsap.fromTo(
        evolutionRef.current.querySelectorAll("h2, p"),
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: evolutionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
          },
        }
      );
    }

    if (researchRef.current) {
      gsap.fromTo(
        researchRef.current.querySelectorAll(".fade-in"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: researchRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }

    if (inspiredBy.current) {
      gsap.fromTo(
        inspiredBy.current,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: inspiredBy.current,
            start: "top 80%",
            end: "top 54%",
            toggleActions: "play none none reset",
            scrub: 0.5,
          },
        }
      );
    }

    if (vision.current) {
      gsap.fromTo(
        vision.current,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: vision.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
            markers: false,
          },
        }
      );
    }

    if (About.current) {
      gsap.fromTo(
        About.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: About.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
            markers: false,
          },
        }
      );
    }

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#FFFDF2]">
      {/* Hero Section */}


      <div
                  className="
                    relative w-full
                    h-[300px]        /* default mobile height */
                    sm:h-[400px]     /* tablets */
                    md:h-[550px]     /* small laptops */
                    lg:h-[684px]     /* desktops */
                    overflow-hidden
                  "
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                     src="/images/about/abouthero.png"
                      alt="About Us"
                      fill
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>

                  {/* Overlay Text */}
                  <div
                    ref={textRef}
                   className="absolute left-2 md:left-14 top-1/2 -translate-y-1/2 text-white"

                  >
                    <h2
                      className="font-bold"
                      style={{
                        fontFamily: "Jost",
                        fontSize: "clamp(22px, 5vw, 50px)",
                        fontWeight: 600,
                        lineHeight: "1.2",
                        color: "#fff",
                      }}
                    >
                      About Us
                    </h2>
                  </div>

                </div>

 {/* Evolution Natural Farming Section */}
<section className="bg-[#FFFDF2] py-0 md:py-2 lg:py-0 overflow-hidden">
  <div className="flex flex-col lg:flex-row items-center justify-between w-full">
    {/* Left - Text */}
    <div className="w-full lg:w-1/2 px-2 md:px-12 lg:px-16 flex flex-col justify-center">
      <h2
        className="mt-0 text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[47px] font-bold text-[#404040] leading-tight"
        style={{ fontFamily: "Jost", fontWeight: 600 }}
      >
        Evolution Natural
        <br />
        Farming
      </h2>
      <p
        className="mt-2 text-[15px] md:text-[16px] leading-relaxed text-[#282828]"
        style={{
          fontFamily: "Sofia Pro, sans-serif",
          fontWeight: 400,
          lineHeight: "1.7",
        }}
      >
        Farm Natura was started with a mission to reconnect people with nature
        through natural farming. Our vision is to create chemical-free,
        self-sufficient communities that harmonize human life with nature&apos;s
        rhythms. We believe in transforming farmland into living spaces that
        nourish both body and soul. By combining traditional farming wisdom with
        modern ecological practices, we aim to build a blueprint for holistic,
        sustainable living. Farm Natura is more than a project — it&apos;s a
        movement towards a healthier, more connected way of life.
      </p>
    </div>

    {/* Right - Image */}
    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] flex justify-center lg:justify-end">
      <div className="relative w-full h-full">
        <Image
          src="/images/about/cow.png"
          alt="Cow"
          fill
          className="object-contain object-center"
          priority
        />
      </div>
    </div>
  </div>
</section>

{/* Research & Development Section */}
<section className="bg-[#FFFDF2] py-2 md:py-10 lg:py-2 overflow-hidden">
  <div className="flex flex-col lg:flex-row items-center justify-between w-full">
    {/* Left - Image Full Edge */}
    <div className="w-full lg:w-1/2 h-[320px] sm:h-[400px] md:h-[450px] lg:h-[520px]">
      <div className="relative w-full h-full">
        <Image
          src="/images/about/image76.PNG"
          alt="Pottery"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>

    {/* Right - Text */}
    <div
      ref={researchRef}
      className="w-full lg:w-1/2 px-2 md:px-12 lg:px-16 flex flex-col justify-center"
    >

      <h2
        className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[47px] font-bold text-[#404040] leading-tight"
        style={{ fontFamily: "Jost", fontWeight: 600 }}
      >
        Research &<br />
        Development
      </h2>
      <p
        className="mt-5 text-[15px] md:text-[16px] leading-relaxed text-[#282828]"
        style={{
          fontFamily: "Sofia Pro, sans-serif",
          fontWeight: 400,
          lineHeight: "1.7",
        }}
      >
        Farm Natura offers a community of like-minded families from Hyderabad,
        where lifestyle is built basing on Natural Farming with an intent to
        focus on Health & Happiness.
        <br />
        <br />
        Respect Mother Nature And Land. &quot;We Are Part Of Nature; Therefore,
        We Must Coexist With The Other Creatures That Live Among Us.&quot;
        <br />
        <br />
        Our passion is to promote the &ldquo;Agri&rdquo; based Culture and bring
        back the Ecological balanced Lifestyle with Health and Happiness. We
        respect Mother Nature and nourish the land by restoring its original
        fertility back into its Natural State for the generations to come.
      </p>
<button
  className="mt-6 w-max border-2 border-green-700 text-green-700 px-4 py-2 rounded-lg text-[14px] font-semibold transition duration-300 hover:bg-green-700 hover:text-white cursor-pointer"
  onClick={() => setModalOpen(true)}
>
  Download Brochure
</button>



    </div>
  </div>
</section>




      {/* Inspired By Section */}
      <section className="bg-[#FFFDF2] py-2 md:py-10 lg:py-2">
        <div ref={inspiredBy} className="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
          <h2
            className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[47px] font-bold text-[#404040] text-center mb-4 md:mb-10"
            style={{ fontFamily: "Jost", fontWeight: 600 }}
          >
            Inspired By
          </h2>

          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Vinay Ram */}
            <div className="flex flex-col items-center">
              <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[362px] xl:h-[362px]">
                <Image
                  src="/images/vinayram.svg"
                  alt="Vinay Ram"
                  fill
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <p
                className="mt-4 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-semibold text-[#404040]"
                style={{ fontFamily: "Jost", fontWeight: 500 }}
              >
                Vinay Ram
              </p>
            </div>

            {/* Subhash Palekar */}
            <div className="flex flex-col items-center">
              <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[362px] xl:h-[362px]">
                <Image
                  src="/images/about/subhashpalekar.svg"
                  alt="Subhash Palekar"
                  fill
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <p
                className="mt-4 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-semibold text-[#404040]"
                style={{ fontFamily: "Jost", fontWeight: 500 }}
              >
                Subhash Palekar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-[#FFFDF2] py-2 md:py-10 lg:py-2">
       <div ref={vision} className="container mx-auto px-2 md:px-12 lg:px-16">

          <h2
            className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[47px] font-bold text-[#404040] text-center mb-4 md:mb-8"
            style={{ fontFamily: "Jost", fontWeight: 600 }}
          >
            Vision & Mission
          </h2>

          <div className="max-w-5xl mx-auto space-y-4 md:space-y-8">
            {/* Our Vision */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              {/* Image Left */}
              <div className="w-full md:w-2/5">
                <div className="relative w-full max-w-[280px] h-[280px] mx-auto md:mx-0">
                  <Image
                    src="/images/about/dewdrop.svg"
                    alt="Dewdrop on leaf"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="w-full md:w-3/5">
                <h3
                  className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold text-[#727272] mb-3 text-left"
                  style={{ fontFamily: "Jost", fontWeight: 500 }}
                >
                  OUR VISION
                </h3>
                <p
                  className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#4a4a4a] leading-relaxed text-left md:text-justify"
                  style={{ fontFamily: "Josefin Sans", fontWeight: 400, lineHeight: "1.7" }}
                >
                  To create India&apos;s most inspiring model of natural living where urban families
                  reconnect with nature, live consciously, and thrive in harmony with nature.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4 md:gap-6">
              {/* Image Right */}
              <div className="w-full md:w-2/5">
                <div className="relative w-full max-w-[280px] h-[280px] mx-auto md:mx-0 md:ml-auto">
                  <Image
                    src="/images/about/sprout.svg"
                    alt="Sprout growing"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Left */}
              <div className="w-full md:w-3/5">
                <h3
                  className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold text-[#727272] mb-3 text-left"
                  style={{ fontFamily: "Jost", fontWeight: 500 }}
                >
                  OUR MISSION
                </h3>
                <p
                  className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#4a4a4a] leading-relaxed mb-4 text-left md:text-justify"
                  style={{ fontFamily: "Josefin Sans", fontWeight: 400, lineHeight: "1.7" }}
                >
                  To build self-sustaining farming communities rooted in natural practices, mindful living,
                  and collective well-being while preserving the environment, promoting local ecosystems, and
                  offering a healthier way of life for generations to come.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-block border-2 border-green-700 text-green-700 px-5 py-2 rounded-lg text-[14px] font-semibold transition duration-300 hover:bg-green-700 hover:text-white cursor-pointer"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Planet Green Infra Section */}
      <section className="bg-[#FFFDF2] py-2 md:py-10 lg:py-2">
        <div ref={About} className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left - Text */}
          <div className="w-full lg:w-1/2 px-2 md:px-12 lg:px-16">

            <h2
              className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[47px] font-bold text-[#404040] leading-tight text-left"
              style={{ fontFamily: "Jost", fontWeight: 600 }}
            >
              About Planet
              <br />
              Green Infra
            </h2>
            <p
              className="mt-4 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#4a4a4a] leading-relaxed text-left"
              style={{ fontFamily: "Josefin Sans", fontWeight: 400, lineHeight: "1.7" }}
            >
              Planet Green is built on an idea that reconnecting people with nature can transform the way
              we live, grow, and invest. At our core, we&apos;re not just building projects; we&apos;re
              restoring a lost relationship between urban life and the natural world. We aim to create
              environments where people don&apos;t just reside — they belong, grow, and thrive in harmony
              with nature.
            </p>

            {/* Planet Green Logo */}
            <div className="mt-6">
              <Image
                src="/images/about/planet-green-logo.svg"
                alt="Planet Green Logo"
                width={200}
                height={80}
                className="w-[150px] sm:w-[180px] md:w-[200px] h-auto"
              />
            </div>
          </div>

          {/* Right - Image (Full Right) */}
          <div className="w-full lg:w-1/2 lg:pr-0 mt-[5px] lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
              <Image
                src="/images/about/farm-field.svg"
                alt="Farm Field"
                fill
                className="object-cover object-right"
              />
            </div>
          </div>
        </div>
      </section>

      <MoveInSection  />
      <FarmNaturaFooter  />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default AboutSection;

