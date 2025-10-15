import AboutSection from '@/components/About';
import React from 'react'

export const metadata = {
 title: "About Us | India’s First Natural Farming Estates | Farm Natura",
 description:
   "Learn about Farm Natura — India’s first natural farming estates. An inspiring, eco-friendly farming model and one of the leading natural farm projects in India.",

  keywords: [
    'Farm Natura',
    'About Farm Natura',
    'Organic farm projects in India',
    'Eco-friendly farming',
  ],

  // ✅ Robots meta
robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",

  // ✅ Canonical URL
  alternates: {
    canonical: 'https://www.farmnatura.in/about',
  },


};

const AboutPage = () => {
  return (
   <>
   <AboutSection/>
   </>
  )
}

export default AboutPage ;