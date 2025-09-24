import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { writeFile, readdir } from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://miden.xyz';

async function findFilesByPattern(directory: string, pattern: RegExp): Promise<string[]> {
  const files: string[] = [];
  
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        const subFiles = await findFilesByPattern(fullPath, pattern);
        files.push(...subFiles);
      } else if (entry.isFile() && pattern.test(entry.name)) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.warn(`Could not read directory ${directory}:`, error);
  }
  
  return files;
}
const STATIC_ROUTES = [
  { url: '/', priority: 1.0 },
  { url: '/testnet', priority: 0.8 },
  { url: '/roadmap', priority: 0.8 },
  { url: '/ecosystem', priority: 0.8 },
  { url: '/developers', priority: 0.8 },
  { url: '/about', priority: 0.8 },
  { url: '/careers', priority: 0.8 },
  { url: '/publications', priority: 0.8 },
];

async function generateSitemap() {
  console.log('Generating sitemap...');

  const sitemap = new SitemapStream({ hostname: BASE_URL });

  for (const route of STATIC_ROUTES) {
    sitemap.write({
      url: route.url,
      priority: route.priority,
      lastmod: new Date().toISOString(),
    });
  }

  try {
    const blogFiles = await findFilesByPattern('app/content', /^resource\.blog\..*\.mdx$/);
    for (const file of blogFiles) {
      const slug = path.basename(file, '.mdx').replace('resource.blog.', '');
      sitemap.write({
        url: `/resource/blog/${slug}`,
        priority: 0.64,
        lastmod: new Date().toISOString(),
      });
    }
    console.log(` Added ${blogFiles.length} blog posts`);
  } catch (error) {
    console.warn(' Could not process blog posts:', error);
  }

  try {
    const careerFiles = await findFilesByPattern('app/content/careers', /^career\..*\.mdx$/);
    for (const file of careerFiles) {
      const slug = path.basename(file, '.mdx').replace('career.', '');
      sitemap.write({
        url: `/career-details/${slug}`,
        priority: 0.64,
        lastmod: new Date().toISOString(),
      });
    }
    console.log(` Added ${careerFiles.length} career pages`);
  } catch (error) {
    console.warn(' Could not process career pages:', error);
  }

  try {
    const ecosystemFiles = await findFilesByPattern('app/content', /^ecosystem\.program\..*\.mdx$/);
    for (const file of ecosystemFiles) {
      const slug = path.basename(file, '.mdx').replace('ecosystem.program.', '');
      sitemap.write({
        url: `/ecosystem/program/${slug}`,
        priority: 0.64,
        lastmod: new Date().toISOString(),
      });
    }
    console.log(` Added ${ecosystemFiles.length} ecosystem program pages`);
  } catch (error) {
    console.warn(' Could not process ecosystem program pages:', error);
  }

  sitemap.end();

  const sitemapBuffer = await streamToPromise(sitemap);
  await writeFile('public/sitemap.xml', sitemapBuffer);

  console.log(' Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap().catch(console.error);
