"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MoveInSection from "./project-highlights/MoveInSection";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";
import Modal from "./Common/Formmodal";
import Image from "next/image";
import { Jost } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const evolutionRef = useRef<HTMLDivElement | null>(null);
  const researchRef = useRef<HTMLDivElement | null>(null);
  const inspiredBy = useRef<HTMLDivElement | null>(null); // For another section
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
          // markers: true, // uncomment for debug
        });
      }
    });
    if (evolutionRef.current) {
       gsap.fromTo(
        evolutionRef.current.querySelectorAll("h2, p, a"),
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
            // onEnter: () => anim.play(),
            // onLeave: () => anim.reverse(),
            // onEnterBack: () => anim.play(),
            // // onLeaveBack: () => anim.reverse(),
          },
        }
      );
    }
    if (researchRef.current) {
      gsap.fromTo(
        researchRef.current.querySelectorAll(".fade-in"), // Target specific elements
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
            toggleActions: "play none none reset", // 👈 this is key!
            scrub: 0.5,
          },
        }
      );
    }
    if (vision.current) {
      gsap.fromTo(
        vision.current,
        { opacity: 0, y: -100 }, // from above and invisible
        {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: vision.current,
            start: "top 80%", // when section enters
            end: "bottom 20%", // when bottom of section is leaving
            toggleActions: "play none none reset", // fade in on enter, fade out on leave
            markers: false, // change to true for debugging
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
            start: "top 80%", // Trigger when top enters 80% viewport
            end: "bottom 20%", // Ends when bottom reaches 20%
            toggleActions: "play none none reset", // show/hide
            markers: false, // set to true to debug
          },
        }
      );
    }
    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] mt-0">
        <Image
          src="/images/about/abouthero.png"
          alt="Farm Natura Hero Image"
          fill
          objectFit="cover"
          priority
          className="opacity-90"
        />

        <div
          ref={textRef}
          className="absolute left-6 sm:left-8 md:left-16 top-1/2 transform -translate-y-1/2 text-white text-24"
        >
          <h1 className="font-bold text-[50px]">About Us</h1>
        </div>
      </section>

      <section className="bg-[#FFFDF2] px-0 ">
        <div className="mr-0 space-y-28 relative">
          {/* Evolution Natural Farming Section */}
          <div
            ref={evolutionRef}
            className="flex flex-col md:flex-row items-center md:justify-between mx-auto w-full relative"
          >
            {/* Left - Text */}
            <div className="w-full md:w-[60%] z-10 px-20 md:px-20 lg:mt-9 -space-y-[20px] mt-12 flex flex-col md:items-start items-center">
              <h2
                className="text-3xl md:text-4xl mt-2 md:mb-0 lg:mt-5 lg:text-5xl font-bold  text-[#404040]"
                style={{
                  fontFamily: "Jost",
                  fontSize: "47px",
                  lineHeight: "40px",
                  fontWeight: 600
                }}
              >
                Founder’s Vision
              </h2>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl mt-2 md:mb-0 lg:mt-5 font-bold text-[#404040] flex items-center"
                style={{ fontFamily: "Jost",fontSize:"47px", fontWeight: 600 }}
              >
                Farming
                
              </h2>
              <p
                className="mt-9 w-full text-black text-sm lg:text-md xl:text-lg 2xl:text-xl"
                style={{
                  // fontFamily: "Sofia Pro"!,
                  fontSize:"16px" !,
                  fontWeight: 400,
                  lineHeight:"123.2%",
                  color:"#282828"
                }}
              >
                Farm Natura was started with a mission to reconnect people with
                nature through natural farming. Our vision is to create
                chemical-free, self-sufficient communities that harmonize human
                life with nature&rsquo;s rhythms. We believe in transforming
                farmland into living spaces that nourish both body and soul. By
                combining traditional farming wisdom with modern ecological
                practices, we aim to build a blueprint for holistic, sustainable
                living. Farm Natura is more than a project - it&rsquo;s a
                movement towards a healthier, more connected way of life.
              </p>

              {/* <a
                className="fade-in mt-13 inline-block border border-green-700 text-green-700 px-6 py-2 rounded-lg text-lg font-semibold transition duration-300 hover:bg-green-700 hover:text-white"
                onClick={() => setModalOpen(true)}
              >
                Download Brochure
              </a> */}
            </div>

            <div className="relative w-full md:w-[40%] h-[280px] sm:h-[320px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:w-[1163px] top-10 flex justify-center">
              <Image
                src="/images/about/cow.png"
                alt="Cow"
                width={1163}
                height={780}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Research & Development Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full relative mt-[-8%] lg:mt-[-4%] xl:mt-0">
            {/* Left - Image Full Width */}
            <div className="relative w-full md:w-1/1 flex flex-col ml-0">
              <Image
                src="/images/about/image76.PNG"
                alt="Pottery"
                width={550}
                height={400}
                className="object-cover w-[100%]"
              />
            </div>

            <div className="w-full md:w-1/.8 relative flex flex-col md:items-start items-center px-6">
              <div
                ref={researchRef}
                className="relative z-10 flex flex-col mt-4 font-bold text-[#404040] space-y-2 2xl:ml-[21%]"
                style={{
                  // fontFamily: "Jost"!,
                  fontWeight: 600,
                  fontSize: "clamp(28px, 5vw, 50px)",
                }}
              >
                <span className="fade-in"  style={{
                  fontFamily: "Jost"!,
                  fontWeight: 600,
                  lineHeight:"60px",
                  fontSize: "47px",
                }}
                >Research & <br/>
                  Development
                </span>


                {/* Paragraph */}
                <p
                  className="fade-in mt-4 lg:mt-[6%] w-full sm:max-w-[700px] text-black text-sm sm:text-base 2xl:text-lg"
                 style={{
                  // fontFamily: "Sofia Pro"!,
                  fontSize:"16px" !,
                  fontWeight: 400,
                  lineHeight:"123.2%",
                  color:"#282828"
                }}
                >
                  Farm Natura offers a community of like-minded families from
                  Hyderabad, where lifestyle is built basing on Natural Farming
                  with an intent to focus on Health & Happiness. <br />
                  
                  Respct Mother Nature And Land. &quot;We Are Part Of Nature;
                  Therefore, We Must Coexist With The Other Creatures That Live
                  Among Us.&quot; 
                  <br />
                  Our passion is to promote the &ldquo;Agri&rdquo; based Culture
                  and bringing back the Ecological balanced Lifestyle with
                  Health and Happiness. We respect the Mother Nature and nourish
                  the land by restoring its original fertility back into its
                  Natural State for the generations to come.
                </p>
              </div>

              {/* Download Button */}
              <a
                className="fade-in mt-10 inline-block border border-green-700 text-green-700 px-6 py-2 rounded-lg text-lg 2xl:ml-[21%] font-semibold transition duration-300 hover:bg-green-700 hover:text-white z-1 cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                Download Brochure
              </a>

              {/* Farm Image */}
              {/* <Image
  src="/images/farm-exp-2.svg"
  alt="home-img"
  width={900} // max width for 2xl
  height={500} // adjust as needed
  className="absolute z-0 -top-32 md:top-[-70] lg:top-[-110] xl:top-[-150] 2xl:top-[-280] right-0"
/> */}

            </div>
          </div>

          {/* Inspired By Section */}
         <div
    ref={inspiredBy}
    className="mb-6 -mt-30 md:-mt-21 xl:-mt-5 2xl:mt-40 flex flex-col items-center justify-center w-full"
    style={{
      fontFamily: "Jost"
    }}
  >
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 flex items-center justify-center space-x-2">
      <span>Inspired By</span>
     {/* <Image
        src="/images/about/leave.svg"
        alt="Leaf Icon"
        width={80}
        height={30}
        className="w-[60px] md:w-[70px]"
      />  */}
    </h2><br />
  </div>

  {/* Profile Section */}
  <div className="flex flex-col md:flex-row justify-center items-center pb-20 gap-5 md:gap-9 px-6 md:px-12">
    {/* Vinay Ram */}
    <div className="flex flex-col items-center">
      <Image
        src="/images/vinayram.svg"
        alt="Vinay Ram"
        width={362}
        height={362}
        className="rounded-full shadow-lg"
      />
      <p className="mt-4 text-lg font-semibold"
      style={{ fontFamily:"Jost",
       fontSize: "28px",
       color:"#404040" }}>
        Vinay Ram</p>
    </div>

    {/* Subhash Palekar */}
    <div className="flex flex-col items-center">
      <Image
        src="/images/about/subhashpalekar.svg"
        alt="Subhash Palekar"
        width={362}
        height={362}
        className="rounded-full shadow-lg"
      />
      <p className="mt-4 text-lg font-semibold"
                style={{
                  fontFamily:"Jost",
                  fontSize: "28px",
                  color:"#404040"
                }}
      >Subhash Palekar</p>
    </div>
            {/* Tree Image */}
           {/*  <div className="flex flex-col w-0 md:w-350 items-center ml-20 -mt-10">
              <Image
                src="/images/about/tree.svg"
                alt="Tree"
                width={625}
                height={100}
              />
            </div>*/}
          </div>
        </div>
      </section>
      

      {/* Vision & Mission Section */}
      <section className="relative py-16 px-6  bg-[#FFFDF2] sm:px-12 md:px-16 lg:px-24 min-h-screen">
        {/* Background Images */}
        {/* <div
          className="absolute top-150 md:top-25 left-0 w-1/2 h-[360px] md:h-[900px] bg-no-repeat bg-cover bg-left"
          style={{ backgroundImage: 'url("/images/left-bg.svg")' }}
        ></div>
        <div
          className="absolute top-0 right-0 w-[375px] 2xl:w-1/2 h-[450px] md:h-[900px] bg-no-repeat bg-cover bg-right z-[-20]"
          style={{ backgroundImage: 'url("/images/right-bg.svg")' }}
        ></div> */}

        {/* Content Wrapper */}
        <div ref={vision} className="relative">
          {/* Title with Creeper */}
          <div
            ref={vision}
            className="flex flex-col items-center text-center mb-8 space-y-3"
            style={{
              fontFamily: "Jost",
              fontWeight: 600,
              fontSize: "67px",
              color: "#404040",
            }}
          >
            <span className="text-4xl md:text-5xl font-bold z-2"
              style={{
                  fontFamily:"Jost",
                  fontSize: "47px",
                  color:"#404040"
                }}
            >Vision &  Mission </span>

               {/* <Image
                src="/images/about/leave.svg"
                alt="Leaf Icon"
                width={100}
                height={30}
                className="absolute -right-20 -top-10 z-0"
              />
            <div className="relative w-[160px] md:w-[580px] h-[250px] -mt-[25%] -ml-60 md:-mt-82 md:-ml-80 z-2">
              <Image
                src="/images/creeper.svg"
                alt="Creeper"
                width={580}
                height={250}
                className="object-cover w-full absolute top-0"
              />
            </div> */}
          </div>

    {/* Content Grid — reduced images, centered & professional */}
<div ref={vision} className="w-full p-0 m-0">
  <div className="mx-auto w-full max-w-5xl">

    {/* ---------- OUR VISION (Image Left / Text Right) ---------- */}
    <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 py-6">
      {/* Image (left on md+) */}
      <div className="w-full md:w-2/5 flex justify-center ">
        <Image
          src="/images/about/dewdrop.svg"
          alt="Dewdrop on leaf"
          width={400} 
          height={400}
          className="rounded-lg shadow-sm object-contain w-40 sm:w-48 md:w-56 lg:w-64 max-w-[315px] h-auto"
        />
      </div>

      {/* Text (right on md+) */}
      <div className="w-full md:w-3/5">
        <h3
          className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight"
          style={{ fontFamily: "Jost" !, 
              fontSize: "30px",
                  color:"#727272",
                  fontWeight: 500 }}
        >
          OUR VISION
        </h3>

        <p
          className="mt-2 text-sm sm:text-base md:text-lg"
          style={{ fontFamily: "Josefin Sans ",
            fontSize: "18px",
                  color:"#4a4a4a", fontWeight: 400 }}
        >
          To create India’s most inspiring model of natural living where urban
          families reconnect with nature, live consciously, and thrive in
          harmony with nature.
        </p>
      </div>
    </div>

    {/* ---------- Divider (optional) ---------- */}
    <div className="hidden md:block border-t border-gray-100 my-2" />

    {/* ---------- OUR MISSION (Text Left / Image Right + Button) ---------- */}
    <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 py-6">
      {/* Text (left on md+) */}
      <div className="w-full md:w-3/5">
        <h3
          className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight"
           style={{ fontFamily: "Jost" !, 
              fontSize: "30px",
                  color:"#727272",
                  fontWeight: 500 }}
        >
          OUR MISSION
        </h3>

        <p
          className="mt-2 text-sm sm:text-base md:text-lg"
 style={{ fontFamily: "Josefin Sans ",
            fontSize: "18px",
                  color:"#4a4a4a", fontWeight: 400 }}        >
          To build self-sustaining farming communities rooted in natural
          practices, mindful living, and collective well-being while preserving
          the environment, promoting local ecosystems, and offering a healthier
          way of life for generations to come.
        </p>

        {/* Button (compact, aligns naturally under text) */}
        <div className="mt-5">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-block border border-green-600 text-green-600 px-4 py-2 rounded-md text-sm transition-colors duration-200 hover:bg-green-600 hover:text-white cursor-pointer"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Image (right on md+) */}
      <div className="w-full md:w-2/5 flex justify-center">
        <Image
          src="/images/about/sprout.svg"
          alt="Sprout growing"
          width={360}
          height={360}
          className="rounded-lg shadow-sm object-contain w-36 sm:w-44 md:w-56 lg:w-64 max-w-[315px] h-auto"
        />
      </div>
    </div>




  </div>




          </div>
        </div>
      </section>
      <section className=" bg-[#FFFDF2] relative px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Background Image in Corner */}
          {/*  <div className="absolute -top-68 md:-right-32 lg:-right-15 w-0 md:w-[400px] h-[400px] lg:w-[400px] lg:h-[500px] z-[-1]">
          <Image
            src="/images/about/corner-plant.svg"
            alt="Corner Plant"
            width={500}
            height={300}
            className="object-contain w-120 h-110"
          />
        </div>*/}
        {/* About Section */}
        <div
          ref={About}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-0 md:mt-0"
        >
          {/* Left Side - Text */}
          <div ref={About} className="md:pr-0 text-center md:text-left">
            <h2
              ref={About}
              className="text-3xl md:text-4xl font-bold text-gray-900 -mt-10 md:mt-50"
              style={{ fontFamily: "Jost", 
               fontSize: "47px",
              //  lineHeight:"89px",
               color:"#404040", 
               fontWeight: 600 }}
               >
              About Planet
            </h2>
            <h2
              ref={About}
              className="relative text-3xl md:text-4xl font-bold text-gray-900 ml-30 mt-2"
 style={{ fontFamily: "Jost", 
               fontSize: "47px",
              //  lineHeight:"89px",
               color:"#404040", 
               fontWeight: 600 }}            >
              Green Infra
                {/* <Image
                src="/images/about/leave.svg"
                alt="Leaf Icon"
                width={90}
                height={30}
                className="absolute left-60 -top-4 md:-top-8 md:left-45 w-[60px] md:w-[90px]"
              /> */}
            </h2>
            <p
              className="text-gray-700 text-lg mt-6 md:mt-10"
              style={{
                fontFamily: "Josefin Sans",
                fontWeight: 400,
                fontSize: "18px",
                 color:"#4a4a4a", 
                 lineHeight:"28px"


              }}
            >
              Planet Green is built on an idea that reconnecting people with
              nature can transform the way we live, grow, and invest. At our
              core, we’re not just building projects; we’re restoring a lost
              relationship between urban life and the natural world. We aim to
              create environments where people don’t just reside — they belong,
              grow, and thrive in harmony with nature.
            </p>

            {/* Planet Green Logo */}
            <div ref={About} className="flex mt-6 space-x-7 items-center">
              <Image
                src="/images/about/planet-green-logo.svg"
                alt="Planet Green Logo"
                width={300}
                height={120}
                className="w-40 h-40 xl:w-70 xl:h-70"
              />
              {/*  <Image
                src="/images/about/planet-green-icon.svg"
                alt="Planet Green Icon"
                width={300}
                height={333}
                className="w-40 h-40 xl:w-70 xl:h-70"
              />  */}
            </div>
          </div>

          {/* Right Side - Image (FIXED) */}
          <div
            ref={About}
            className="relative md:w-screen  lg:h-[100px] rounded-lg shadow-lg overflow-hidden md:mt-42 mt-0"
          >
            <Image
              src="/images/about/farm-field.svg"
              alt="Farm Field"
              width={700}
              height={700}
              className="w-full  h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <MoveInSection bgColor={"white"} />
      <FarmNaturaFooter bgColor={"white"} />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default AboutSection;