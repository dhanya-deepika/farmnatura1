"use client";
import About from "@/components/Home/About";
import Choose from "@/components/Home/Choose";
import KeyHighlights from "@/components/Home/KeyHighlights";
import FarmNaturaFooter from "@/components/project-highlights/FarmNaturaFooter";
import MoveInSection from "@/components/project-highlights/MoveInSection";
import Hero from "../components/Home/Hero";
import Head from "next/head";
import TestimonialSection from "@/components/project-highlights/TestimonialSection";

const HomePage = () => {

  return (
    
    <main className="relative min-h-screen w-screen overflow-x-hidden">
         <Head>
        <link rel="icon" href="/images/logo.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-530x530.png" sizes="512x512" />
      </Head>
      <Hero />
      <About />
      <KeyHighlights />
      <Choose />
      <div className="relative h-full">
          <p className="font-poppins text-[50px] md:text-[70px] lg:text-[90px] xl-text-[90px] 2xl:text-[90px] text-[#2433551F] -rotate-90 absolute -top-10 lg:top-15 -right-40 md:-right-83 lg:-right-110 xl:-right-155 2xl:-right-275 w-full h-full flex items-center justify-center whitespace-nowrap leading-none z-10">
            Farm Natura
          </p>
      </div>
      <TestimonialSection bgColor={"white"} />
      <MoveInSection  bgColor={"white"} /> 
      <FarmNaturaFooter bgColor={"white"} />    
    </main>
  );
};

export default HomePage;
