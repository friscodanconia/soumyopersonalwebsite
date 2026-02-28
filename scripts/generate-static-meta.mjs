/**
 * Post-build script: generates per-route index.html files with correct
 * <title>, meta description, OG, and Twitter tags already baked in.
 *
 * No browser needed — reads the built dist/index.html as a template,
 * swaps the meta tags, and writes to dist/{route}/index.html.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const SITE = 'https://www.soumyosinha.com';

// All route meta — static pages + project detail pages
const routeMeta = {
  '/': {
    title: 'Soumyo Sinha | Marketing & Technology Executive',
    description: 'Leading digital transformation and growth initiatives at Apple, Disney, Amazon, Microsoft, and Nokia.',
  },
  '/about': {
    title: 'About | Soumyo Sinha',
    description: 'Marketing and technology executive with experience at Apple, Disney, Amazon, Microsoft, and Nokia.',
  },
  '/experience': {
    title: 'Experience | Soumyo Sinha',
    description: 'Professional experience spanning marketing, product, and technology roles at leading companies.',
  },
  '/projects': {
    title: 'Projects | Soumyo Sinha',
    description: 'A collection of side projects exploring AI, data visualization, and creative technology.',
  },
  '/reading': {
    title: 'Reading | Soumyo Sinha',
    description: 'Books and articles on marketing, technology, AI, and leadership.',
  },
  '/contact': {
    title: 'Contact | Soumyo Sinha',
    description: 'Get in touch with Soumyo Sinha for collaborations, speaking, or consulting.',
  },
  '/product-imagery-gallery': {
    title: 'Product Imagery Gallery | Soumyo Sinha',
    description: 'AI-generated product imagery showcase exploring creative applications of generative AI.',
  },
  '/krutrim-demos': {
    title: 'Krutrim Demos | Soumyo Sinha',
    description: 'Interactive demos showcasing Ola Krutrim AI capabilities.',
  },
  '/projects/ai-investment-research/guide': {
    title: 'AI Investment Research - Build Guide | Soumyo Sinha',
    description: 'How I built an AI-powered investment research assistant using Claude, web scraping, and financial APIs.',
  },
  '/projects/bbmp-tracker/guide': {
    title: 'BBMP Tracker - Build Guide | Soumyo Sinha',
    description: 'How I built a civic issue tracker for Bangalore using open data and geospatial visualization.',
  },
  '/projects/company-news-digest/guide': {
    title: 'Company News Digest - Build Guide | Soumyo Sinha',
    description: 'How I built an automated company news aggregator using AI summarization.',
  },
  '/projects/say-it-in-india/guide': {
    title: 'Say It In India - Build Guide | Soumyo Sinha',
    description: 'How I built an interactive showcase for Indian language AI models.',
  },
  '/projects/searching-for-food/guide': {
    title: 'How India Eats - Build Guide | Soumyo Sinha',
    description: 'How I built a scrollytelling data story exploring India\'s food culture through search data.',
  },
  // Project detail pages
  '/projects/vaani': {
    title: 'Vaani | Soumyo Sinha',
    description: 'Talk to any document in any Indian language',
  },
  '/projects/attention-vs-tech': {
    title: 'The Crossover | Soumyo Sinha',
    description: 'Your attention shrank. The machines grew. Watch twenty years of collision in two minutes.',
  },
  '/projects/searching-for-food': {
    title: 'Searching for Food | Soumyo Sinha',
    description: 'An interactive data story about what India searches for when it\'s hungry',
  },
  '/projects/twitter-bookmarks': {
    title: 'The Bookmark Library | Soumyo Sinha',
    description: '1,385 curated Twitter insights organized into 10 searchable categories',
  },
  '/projects/ai-investment-research': {
    title: 'AI Investment Research Platform | Soumyo Sinha',
    description: '4-agent AI pipeline analyzing 82 companies across the AI value chain',
  },
  '/projects/company-news-digest': {
    title: 'Company News Digest | Soumyo Sinha',
    description: 'AI-ranked company news digests delivered to Slack',
  },
  '/projects/say-it-in-india': {
    title: 'Say It In India | Soumyo Sinha',
    description: 'One story, thirty voices, eleven languages — hear India\'s emotions come alive',
  },
  '/projects/cinemagic': {
    title: 'CineMagic | Soumyo Sinha',
    description: 'Movie and TV discovery with curated collections and regional cinema',
  },
  '/projects/nestor-ai': {
    title: 'Nestor | Soumyo Sinha',
    description: 'Your guide to AI tools and resources',
  },
  '/projects/bbmp-tracker': {
    title: 'BBMP Work Tracker | Soumyo Sinha',
    description: 'Civic tech for transparency in Bangalore public works',
  },
  '/projects/tally-prime-assistant': {
    title: 'TallyPrime AI Assistant | Soumyo Sinha',
    description: 'AI-powered help for TallyPrime accounting software',
  },
  '/projects/books-2025': {
    title: '2025 Reading Log | Soumyo Sinha',
    description: 'Week-by-week reading tracker for 2025',
  },
  '/projects/visual-cookbook': {
    title: 'Chicken Atlas | Soumyo Sinha',
    description: 'Ad-free visual cookbook with rich infographics',
  },
  '/projects/product-imagery-fashion': {
    title: 'AI Product Imagery | Soumyo Sinha',
    description: 'Using AI to simplify fashion product photography',
  },
  '/projects/marketing-toolkit': {
    title: 'AI Marketing Toolkit | Soumyo Sinha',
    description: 'Building marketing assets entirely with AI tools',
  },
};

// Read the built index.html as template
const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

function injectMeta(html, route, { title, description }) {
  const url = `${SITE}${route}`;

  let out = html;

  // Replace title
  out = out.replace(
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`
  );

  // Replace meta description
  out = out.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${description}"`
  );

  // Replace OG tags
  out = out.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${title}"`
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${description}"`
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${url}"`
  );

  // Replace Twitter tags
  out = out.replace(
    /<meta property="twitter:title" content="[^"]*"/,
    `<meta property="twitter:title" content="${title}"`
  );
  out = out.replace(
    /<meta property="twitter:description" content="[^"]*"/,
    `<meta property="twitter:description" content="${description}"`
  );
  out = out.replace(
    /<meta property="twitter:url" content="[^"]*"/,
    `<meta property="twitter:url" content="${url}"`
  );

  // Add canonical link
  out = out.replace(
    '</head>',
    `  <link rel="canonical" href="${url}" />\n  </head>`
  );

  return out;
}

let count = 0;
for (const [route, meta] of Object.entries(routeMeta)) {
  if (route === '/') continue; // root index.html already exists with default meta

  const dir = join(distDir, route);
  const filePath = join(dir, 'index.html');

  // Skip if the file already exists (from a previous build step)
  if (existsSync(filePath)) continue;

  mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, injectMeta(template, route, meta));
  count++;
}

// Also update root index.html with canonical
const rootMeta = routeMeta['/'];
writeFileSync(
  join(distDir, 'index.html'),
  injectMeta(template, '/', rootMeta)
);

console.log(`Generated ${count} route HTML files with per-route meta tags`);
