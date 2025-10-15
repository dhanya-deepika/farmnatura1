import Gallery from '@/components/Gallery';
import React from 'react'
export const metadata = {
 title: "Gallery | Life at Farm Natura & Sustainable Living",
 description:
   "Explore the Farm Natura gallery — experience life at Farm Natura, sustainable living in nature, and a vibrant community living close to Hyderabad.",

  keywords: [
    'Life at Farm Natura',
    'Sustainable living',
    'Farm Natura community living',
  ],

  // ✅ Robots meta
robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",

  // ✅ Canonical URL
  alternates: {
    canonical: 'https://www.farmnatura.in/highlights',
  },


};
const GalleryPage = () => {
  return (
    <>
     <Gallery/>
    </>
  )
}

export default GalleryPage ;