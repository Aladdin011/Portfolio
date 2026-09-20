import type { MetadataRoute } from 'next';

const site = 'https://aladdincode.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site, changeFrequency: 'monthly', priority: 1 },
    { url: `${site}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site}/work/operations-platform`, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
