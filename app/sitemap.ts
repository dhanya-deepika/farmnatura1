import { MetadataRoute } from 'next';

export const dynamic = 'force-static'; // ⚡ Add this line

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.farmnatura.in',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://www.farmnatura.in/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.farmnatura.in/highlight',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.farmnatura.in/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.farmnatura.in/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.farmnatura.in/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.farmnatura.in/blogs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
//     {
//       url: 'https://www.farmnatura.in/blogs/5-reasons-to-invest-in-kandukur/',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.5,
//     },
  ];
}
