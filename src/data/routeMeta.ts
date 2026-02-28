interface RouteMeta {
  title: string;
  description: string;
}

export const routeMeta: Record<string, RouteMeta> = {
  '/': {
    title: 'Soumyo Sinha | Marketing & Technology Executive',
    description: 'Leading digital transformation and growth initiatives at Apple, Disney, Amazon, Microsoft, and Nokia.',
  },
  '/about': {
    title: 'About',
    description: 'Marketing and technology executive with experience at Apple, Disney, Amazon, Microsoft, and Nokia.',
  },
  '/experience': {
    title: 'Experience',
    description: 'Professional experience spanning marketing, product, and technology roles at leading companies.',
  },
  '/projects': {
    title: 'Projects',
    description: 'A collection of side projects exploring AI, data visualization, and creative technology.',
  },
  '/reading': {
    title: 'Reading',
    description: 'Books and articles on marketing, technology, AI, and leadership.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Get in touch with Soumyo Sinha for collaborations, speaking, or consulting.',
  },
  '/product-imagery-gallery': {
    title: 'Product Imagery Gallery',
    description: 'AI-generated product imagery showcase exploring creative applications of generative AI.',
  },
  '/krutrim-demos': {
    title: 'Krutrim Demos',
    description: 'Interactive demos showcasing Ola Krutrim AI capabilities.',
  },
  '/projects/ai-investment-research/guide': {
    title: 'AI Investment Research - Build Guide',
    description: 'How I built an AI-powered investment research assistant using Claude, web scraping, and financial APIs.',
  },
  '/projects/bbmp-tracker/guide': {
    title: 'BBMP Tracker - Build Guide',
    description: 'How I built a civic issue tracker for Bangalore using open data and geospatial visualization.',
  },
  '/projects/company-news-digest/guide': {
    title: 'Company News Digest - Build Guide',
    description: 'How I built an automated company news aggregator using AI summarization.',
  },
  '/projects/say-it-in-india/guide': {
    title: 'Say It In India - Build Guide',
    description: 'How I built an interactive showcase for Indian language AI models.',
  },
  '/projects/searching-for-food/guide': {
    title: 'How India Eats - Build Guide',
    description: 'How I built a scrollytelling data story exploring India\'s food culture through search data.',
  },
};
