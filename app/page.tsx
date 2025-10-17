// src/app/page.tsx
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import KeyHighlights from "@/components/Home/KeyHighlights";
import Choose from "@/components/Home/Choose";
import TestimonialSection from "@/components/project-highlights/TestimonialSection";
import MoveInSection from "@/components/project-highlights/MoveInSection";
import FarmNaturaFooter from "@/components/project-highlights/FarmNaturaFooter";

// ✅ Server-side metadata (for SEO)
export const metadata = {
  title: "India’s First Natural Farming Estates | Farm Land for Sale",
  description:
    "Discover 110+ acres of natural farm land for sale at Farm Natura, India’s first natural farming estates in Hyderabad. Invest in soil, peace & community.",
  robots:
    "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  keywords: [
    "Farm land for sale",
    "Natural Farming",
    "organic farm land for sale",
  ],

  alternates: {
    canonical: "https://www.farmnatura.in/",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo-530x530.png",
  },
};

export default function Page() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero bgColor="#FFFDF2"/>
      <About />
      <KeyHighlights bgColor="#FFFDF2" />
      <Choose bgColor="#FFFDF2"/>

      {/* { *//* ✅ Decorative vertical rotated text *//* }
      <div className="relative h-full">
        <p className="font-poppins text-[50px] md:text-[70px] lg:text-[90px] xl:text-[90px] 2xl:text-[90px] text-[#2433551F] -rotate-90 absolute -top-10 lg:top-15 -right-40 md:-right-83 lg:-right-110 xl:-right-155 2xl:-right-275 w-full h-full flex items-center justify-center whitespace-nowrap leading-none z-10">
          Farm Natura
        </p>
      </div> */}

      <TestimonialSection bgColor="#FFFDF2" />
      <MoveInSection bgColor="#FFFDF2" />
      <FarmNaturaFooter bgColor="#FFFDF2"/>
    </main>
  );
}






