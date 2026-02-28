import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import prerender from '@prerenderer/rollup-plugin';

const routes = [
  '/',
  '/about',
  '/experience',
  '/projects',
  '/reading',
  '/contact',
  '/product-imagery-gallery',
  '/krutrim-demos',
  '/projects/ai-investment-research/guide',
  '/projects/bbmp-tracker/guide',
  '/projects/company-news-digest/guide',
  '/projects/say-it-in-india/guide',
  '/projects/searching-for-food/guide',
  '/projects/vaani',
  '/projects/attention-vs-tech',
  '/projects/searching-for-food',
  '/projects/twitter-bookmarks',
  '/projects/ai-investment-research',
  '/projects/company-news-digest',
  '/projects/say-it-in-india',
  '/projects/cinemagic',
  '/projects/nestor-ai',
  '/projects/bbmp-tracker',
  '/projects/tally-prime-assistant',
  '/projects/books-2025',
  '/projects/visual-cookbook',
  '/projects/product-imagery-fashion',
  '/projects/marketing-toolkit',
];

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        headless: true,
        renderAfterTime: 3000,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      postProcess(route) {
        // Inject dark class on <html> so pre-rendered pages default to dark
        route.html = route.html.replace(
          '<html lang="en">',
          '<html lang="en" class="dark">'
        );
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
});
