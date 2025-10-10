"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import client-only components
const Navbar = dynamic(() => import("./navbar"), { ssr: false });
const StickySocialIcons = dynamic(
  () => import("./Common/Stickysocialicons"),
  { ssr: false }
);

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Navbar />
      {children}
      <StickySocialIcons />
    </>
  );
}
