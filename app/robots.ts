import { MetadataRoute } from 'next';

// ⚡ Force this route to be static for next export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private', // example if you want to block a folder
    },
    sitemap: 'https://www.farmnatura.in/sitemap.xml',
  };
}
