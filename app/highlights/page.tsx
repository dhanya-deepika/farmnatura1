// ProjectHighlights.tsx
import React from "react";
import CustomFarmlands from "@/components/project-highlights/CustomFarmlands";
import FarmingExperience from "@/components/project-highlights/FarmingExperience";
import FarmLandOptions from "@/components/project-highlights/FarmLandOptions";
import FarmNaturaFooter from "@/components/project-highlights/FarmNaturaFooter";
import MoveInSection from "@/components/project-highlights/MoveInSection";
import ProjectHighlight from "@/components/project-highlights/ProjectHighlight";
import TestimonialSection from "@/components/project-highlights/TestimonialSection";
import WhyFarmNatura from "@/components/project-highlights/WhyFarmNatura";

// ✅ Define a shared type for bgColor prop


const ProjectHighlights: React.FC = () => {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <ProjectHighlight />
        <WhyFarmNatura />
        <FarmLandOptions />
        <CustomFarmlands />
        <FarmingExperience />
        <div className="relative h-full">
          <p className="font-poppins text-[50px] md:text-[70px] lg:text-[90px] xl-text-[90px] 2xl:text-[90px] text-[#2433551F] -rotate-90 absolute -top-10 lg:top-15 -right-40 md:-right-83 lg:-right-110 xl:-right-155 2xl:-right-275 w-full h-full flex items-center justify-center whitespace-nowrap leading-none z-10">
            Farm Natura
          </p>
        </div>
        {/* Pass bgColor prop */}
        <TestimonialSection bgColor="#fffbe4" />
        <MoveInSection bgColor="#fffbe4" />
        <FarmNaturaFooter bgColor="#fffbe4" />
      </main>
    </>
  );
};

export default ProjectHighlights;
