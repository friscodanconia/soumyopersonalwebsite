import type { Project, Section } from '../types/project';

export const projects: Project[] = [
  {
    id: "searching-for-food",
    slug: "searching-for-food",
    title: "Searching for Food",
    tagline: "An interactive data story about what India searches for when it's hungry",
    thumbnail: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80",
    links: {
      demo: "https://howindiaeats.soumyosinha.com",
      github: "https://github.com/friscodanconia/howIndiaeatsproject",
    },
    technologies: ["React", "D3.js", "TypeScript", "Vite", "Google Trends (pytrends)"],
    sections: [
      {
        type: 'heading',
        content: "What is this?"
      },
      {
        type: 'text',
        content: "India is a country that thinks about food constantly \u2014 and that obsession leaves a trail in Google search data. \"Searching for Food\" is an interactive story that follows that trail across 30+ dishes, 28 states, and five years of search history to reveal what India craves, when it craves it, and the surprising gap between what we search for and what we actually eat."
      },
      {
        type: 'heading',
        content: "What did we find?"
      },
      {
        type: 'text',
        content: "**Biryani rules everything.** It's not just the most searched food in India \u2014 it's the most searched food in virtually every single state. From Kashmir to Kerala, Tamil Nadu to Tripura, biryani beats local favorites on Google. The regional food map isn't a colorful patchwork of local champions. It's a biryani empire."
      },
      {
        type: 'text',
        content: "**But the real story is in the gaps.** Nobody Googles how to make roti or dal \u2014 you just make them. Search doesn't measure what people eat; it measures what they *aspire* to cook. Masala chai is consumed 800 million times a day across India, but it barely registers on Google. Biryani is a weekend project, not a weekday meal \u2014 and the search data proves it. Sunday is biryani day, Wednesday is dal rice day, and Thursday is when people start Googling butter chicken for the weekend."
      },
      {
        type: 'text',
        content: "**Festivals write themselves in search spikes.** Modak goes from invisible to peak search during Ganesh Chaturthi. Ladoo and gulab jamun surge for Diwali. Haleem explodes during Ramadan in Hyderabad. The calendar of Indian food is the calendar of Indian faith."
      },
      {
        type: 'text',
        content: "**The pandemic changed what we craved.** Locked at home in 2021, India searched for masala chai (+44%) and dal rice (+36%) more than ever \u2014 the comforts of home when home was all we had. Street food like samosa and pani puri dropped, not because people stopped wanting them, but because the streets were empty."
      },
      {
        type: 'heading',
        content: "Where does the data come from?"
      },
      {
        type: 'text',
        content: "All search data comes from **Google Trends**, pulled using Python's pytrends library. We compared 30+ dishes head-to-head at both national and state levels, using biryani as the anchor term, averaged over five years (accessed February 2026). For the \"what we actually eat\" comparison in Chapter 5, consumption rankings are estimated from India's **National Sample Survey (NSSO 68th round)** household expenditure data and **ICMR-NIN dietary guidelines** \u2014 there's no single source that ranks every dish by daily consumption, so these are informed approximations that capture the broad pattern: the foods India eats most (roti, dal, chai) are the ones it Googles least."
      },
      {
        type: 'heading',
        content: "Inspiration"
      },
      {
        type: 'text',
        content: "This project is inspired by Nadieh Bremer's beautiful <a href=\"https://searchingforbirds.visualcinnamon.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-amber-600 dark:text-amber-400 hover:underline\">Searching for Birds</a>, which used Dutch Google Trends data to tell the story of how the Netherlands searches for birds through the seasons. We wanted to do the same for Indian food \u2014 take the same idea of turning search data into a scrollable visual narrative, but apply it to a country where food is identity, geography, religion, and family all at once."
      },
    ]
  },
  {
    id: "twitter-bookmarks",
    slug: "twitter-bookmarks",
    title: "The Bookmark Library",
    tagline: "1,385 curated Twitter insights organized into 10 searchable categories",
    thumbnail: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80",
    links: {
      demo: "https://twitter.soumyosinha.com",
      github: "https://github.com/friscodanconia/twitter-bookmarks-website",
    },
    technologies: ["Python", "HTML/CSS/JS", "OpenAI API"],
    sections: [
      {
        type: 'text',
        content: "A searchable, categorized library of curated Twitter bookmarks spanning AI, development, business, and more \u2014 turning the chaos of social media saves into an organized knowledge base."
      },
      {
        type: 'stats',
        items: [
          { value: "1,385", label: "curated insights" },
          { value: "10", label: "categories" },
          { value: "261", label: "video resources" },
        ]
      },
      {
        type: 'heading',
        content: "The Why"
      },
      {
        type: 'text',
        content: "Twitter bookmarks are where good ideas go to die. You save a brilliant thread, a useful tool, a thought-provoking take \u2014 and never find it again. The Bookmark Library fixes that by processing nearly 3,000 bookmarks through AI categorization, extracting key insights, and presenting them in a filterable, searchable interface organized into 10 categories."
      },
      {
        type: 'heading',
        content: "Key Features"
      },
      {
        type: 'list',
        items: ["AI-powered categorization of bookmarks into 10 topic areas (LLMs, AI Agents, Dev Tools, Creative AI, Finance, Business, Web Dev, Learning, and more)", "Full-text search across all bookmarks and insights", "Year and content-type filters for quick discovery", "261 curated video resources from AI thought leaders", "Similar content recommendations using embeddings"]
      },
      {
        type: 'heading',
        content: "Tools Used"
      },
      {
        type: 'list',
        items: ["Python (bookmark processing and website generation)", "OpenAI API (categorization and insight extraction)", "Static HTML/CSS/JS (fast, no-framework frontend)", "Vercel (hosting and deployment)"]
      },
    ]
  },
  {
    id: "ai-investment-research",
    slug: "ai-investment-research",
    title: "AI Investment Research Platform",
    tagline: "4-agent AI pipeline analyzing 82 companies across the AI value chain",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    links: {
      demo: "https://investmentadvisor.soumyosinha.com",
      github: "https://github.com/friscodanconia/ai-investment-research",
    },
    technologies: ["Next.js", "TypeScript", "Python", "GitHub Actions", "Vercel"],
    sections: [
      {
        type: 'text',
        content: "A 4-agent AI research pipeline that analyzes the entire AI industry value chain \u2014 82 companies, 7 layers, 9 countries, $34.5T market cap \u2014 and presents findings as an interactive website with live daily prices. Check it out at <a href=\"https://investmentadvisor.soumyosinha.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-amber-600 dark:text-amber-400 hover:underline\">investmentadvisor.soumyosinha.com</a>."
      },
      {
        type: 'stats',
        items: [
          { value: "82", label: "companies tracked" },
          { value: "$34.5T", label: "market cap mapped" },
          { value: "7", label: "value chain layers" },
          { value: "4", label: "AI agents" },
        ]
      },
      {
        type: 'heading',
        content: "The Why"
      },
      {
        type: 'text',
        content: "I wanted to understand the AI industry as an investment landscape \u2014 who supplies what to whom, where the bottlenecks are, and which companies are best positioned. Instead of reading analyst reports, I built agents to do the research and a website to explore the findings."
      },
      {
        type: 'heading',
        content: "The 4-Agent Pipeline"
      },
      {
        type: 'list',
        items: ["Agent 1 \u2014 Value Chain Mapper: Maps 82 companies across 7 layers with supply chain dependencies", "Agent 2 \u2014 Financial Metrics Analyzer: 61 financial profiles with peer group comparisons", "Agent 3 \u2014 Portfolio Constructor: $100K model portfolio with 15 stocks + 4 ETFs", "Council of Judges: Multi-model deliberation (GPT-4, Gemini, Claude, Llama) produces consensus portfolio"]
      },
      {
        type: 'heading',
        content: "Key Features"
      },
      {
        type: 'list',
        items: ["Interactive AI value chain infographic with bubble charts", "Side-by-side portfolio comparison: Original vs Council consensus", "Live daily stock prices via Alpha Vantage + GitHub Actions", "Critical chokepoint analysis (ASML 100% EUV, TSMC 90%+ advanced fab)"]
      },
      {
        type: 'heading',
        content: "Tools Used"
      },
      {
        type: 'list',
        items: ["Next.js 15, TypeScript, Tailwind CSS, Recharts", "Python for data pipelines and price fetching", "Alpha Vantage API for live prices", "GitHub Actions for daily automation", "Claude Code for the entire build"]
      },
    ]
  },
  {
    id: "company-news-digest",
    slug: "company-news-digest",
    title: "Company News Digest",
    tagline: "AI-ranked company news digests delivered to Slack",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&q=80",
    links: {
    },
    technologies: ["Claude Code Skill", "Python", "NewsAPI", "Slack API"],
    sections: [
      {
        type: 'text',
        content: "A Claude Code skill that fetches, ranks, and summarizes the latest news for any company, then posts a concise digest to Slack. Just say \"news digest for Tesla\" and it handles the rest."
      },
      {
        type: 'heading',
        content: "The Why"
      },
      {
        type: 'text',
        content: "Keeping up with company news is tedious \u2014 you have to check multiple sources, filter noise, and mentally rank what matters. I built this as a Claude Code skill so I can get a curated, ranked digest for any company on demand, delivered straight to Slack."
      },
      {
        type: 'heading',
        content: "How It Works"
      },
      {
        type: 'list',
        items: ["Fetches latest articles from NewsAPI.org for any company", "Claude ranks articles using a rubric: material impact, market-moving potential, source authority, novelty", "Enforces source diversity \u2014 max 2 articles per source", "Posts formatted digest to Slack with Block Kit formatting", "Ends every digest with a \"Bottom Line\" synthesis"]
      },
      {
        type: 'heading',
        content: "Tools Used"
      },
      {
        type: 'list',
        items: ["Claude Code skill system", "Python for fetch and Slack scripts", "NewsAPI.org for article data", "Slack Incoming Webhooks for delivery"]
      },
    ]
  },
  {
    id: "say-it-in-india",
    slug: "say-it-in-india",
    title: "Say It In India",
    tagline: "One story, thirty voices, eleven languages \u2014 hear India's emotions come alive",
    thumbnail: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80",
    links: {
      demo: "https://tryingsarvam.soumyosinha.com",
      github: "https://github.com/friscodanconia/say-it-in-india",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Sarvam AI Bulbul v3"],
    sections: [
      {
        type: 'text',
        content: "A scene-based voice exploration app that showcases the beauty and diversity of Indian languages through Sarvam AI's Bulbul v3 text-to-speech engine."
      },
      {
        type: 'heading',
        content: "The Why"
      },
      {
        type: 'text',
        content: "India has 22 official languages and over 700 million people who don't speak English. Voice isn't just a feature \u2014 it's the interface. \"Say It In India\" lets you *feel* the difference between a bedtime story whispered in Hindi and cricket commentary in Tamil, or a love letter read aloud in Bengali versus a train announcement in Telugu. Same words, completely different feeling."
      },
      {
        type: 'heading',
        content: "Key Features"
      },
      {
        type: 'list',
        items: ["**6 emotionally tuned scenes** \u2014 Bedtime Story, Street Food Vendor, Love Letter, Cricket Commentary, Train Announcement, and Grandmother's Recipe \u2014 each with custom pace and temperature", "**11 Indian languages** with native script display, transliteration, and English meanings", "**10 voice options** spanning male and female speakers", "**The Cascade** \u2014 pick a phrase and hear it spoken across all 11 languages in sequence", "**Custom text input** \u2014 type anything in English, hear it translated and spoken in any language"]
      },
      {
        type: 'heading',
        content: "Tools Used"
      },
      {
        type: 'list',
        items: ["Sarvam AI Bulbul v3 TTS API for speech synthesis", "React 19 + TypeScript for the UI", "Tailwind CSS for styling", "Vite for build tooling"]
      },
    ]
  },
  {
    id: "cinemagic",
    slug: "cinemagic",
    title: "CineMagic",
    tagline: "Movie and TV discovery with curated collections and regional cinema",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
        links: {
      demo: "https://cinemagic.soumyosinha.com/",
      github: "https://github.com/friscodanconia/movie-search-app"
    },
    technologies: ["Next.js", "TypeScript", "TMDB API"],
    sections: [
      {
        type: 'text',
        content: 'A movie and TV show discovery platform with curated collections, cinema challenges, and regional cinema sections. Check it out at <a href="https://cinemagic.soumyosinha.com" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">cinemagic.soumyosinha.com</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'I like movies, but frustrated by the cluttered user experience of existing movie sites. I wanted to build something clean and focused on discovery - with curated collections, regional cinema sections, and fun challenges to help people find their next favorite film.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Search movies, TV shows, and people',
          'Curated collections for discovery',
          'Cinema challenges to test your knowledge',
          'Cinema DNA - discover your viewing personality',
          'Regional cinema sections (Hindi, Tamil, Telugu)',
          'Trending and critically acclaimed sections'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Next.js, TypeScript',
          'TMDB API for movie data',
          'AI tools for curation'
        ]
      }
    ]
  },
  {
    id: "nestor-ai",
    slug: "nestor-ai",
    title: "Nestor",
    tagline: "Your guide to AI tools and resources",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
        links: {
      demo: "https://www.nestor.guide/",
      github: "https://github.com/friscodanconia/nestor-ai"
    },
    technologies: ["TypeScript", "Bolt.new", "Windsurf", "Vercel"],
    sections: [
      {
        type: 'text',
        content: 'A curated guide to AI tools and resources. Browse topics or search to quickly find what you need. Check it out at <a href="https://www.nestor.guide/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">nestor.guide</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'The AI landscape changes daily with new tools and models. With so much information available, it\'s hard to know where to focus. Nestor curates essential tools, resources, and insights to help navigate the space effectively.'
      },
      { type: 'heading', content: 'Categories' },
      {
        type: 'list',
        items: [
          'Top Tools - Best no-code tools',
          'Agents - Agents in action',
          'Apps - Must try apps',
          'AI in Marketing - How marketers can use AI',
          'Video & Audio - Explore multimedia tools',
          'Productivity - Personal organization and efficiency',
          'Content Creation - Writing and copywriting',
          'Image & Design - AI image generation',
          'GitHub Repos - Curated list of repos',
          'And more: Education, Finance, Health, Travel, Gaming'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Bolt.new',
          'Claude Sonnet',
          'Vercel for deployment',
          'Windsurf for debugging'
        ]
      }
    ]
  },
  {
    id: "bbmp-tracker",
    slug: "bbmp-tracker",
    title: "BBMP Work Tracker",
    tagline: "Civic tech for transparency in Bangalore public works",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
        links: {
      demo: "https://bbmp-tracker.vercel.app",
      github: "https://github.com/friscodanconia/bbmp-tracker"
    },
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Google APIs"],
    sections: [
      {
        type: 'text',
        content: 'A civic tech project that brings transparency to BBMP work orders and public spending in Bangalore. Search by location to see where your tax money is being spent. Check it out at <a href="https://bbmp-tracker.vercel.app" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">bbmp-tracker.vercel.app</a>.'
      },
      {
        type: 'stats',
        items: [
          { value: '14,339', label: 'work orders' },
          { value: '₹10,462 Cr', label: 'public spending' },
          { value: '243', label: 'wards mapped' },
          { value: '469', label: 'landmarks' }
        ]
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'As a Bangalore resident, I wanted to understand where public money is being spent. BBMP publishes work order data, but it\'s not easily searchable. This tool makes it accessible by letting citizens search by their address or landmark.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Smart search by address, PIN code, or landmark',
          'Google Street View for visual verification',
          'Ward-wise spending breakdowns',
          'Automated monitoring for new data (GitHub Actions)'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Next.js 15, TypeScript',
          'PostgreSQL with PostGIS',
          'Google Places and Street View APIs',
          'Python for ETL scripts'
        ]
      },
      { type: 'cta', text: 'Read the build guide', url: '/projects/bbmp-tracker/guide' }
    ]
  },
  {
    id: "tally-prime-assistant",
    slug: "tally-prime-assistant",
    title: "TallyPrime AI Assistant",
    tagline: "AI-powered help for TallyPrime accounting software",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
        links: {
      demo: "https://tallyprimeassistant.soumyosinha.com/",
      github: "https://github.com/friscodanconia/tallyprimeassistant"
    },
    technologies: ["RAG", "TypeScript", "AI"],
    sections: [
      {
        type: 'text',
        content: 'An AI-powered assistant for TallyPrime accounting software with FAQ search, quick actions, and chat-based help. Try it at <a href="https://tallyprimeassistant.soumyosinha.com/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">tallyprimeassistant.soumyosinha.com</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'TallyPrime is widely used accounting software in India, but navigating its features can be challenging. This AI assistant provides instant help through FAQ search, quick action buttons, and a chat interface.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'FAQ search for common TallyPrime questions',
          'Quick actions: Create Voucher, Day Book Report, Balance Sheet',
          'Quick actions: Ledger Account, Trial Balance, Stock Summary',
          'Chat interface for natural language queries',
          'AI-powered business intelligence'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'RAG architecture',
          'TypeScript',
          'AI for conversational interface'
        ]
      }
    ]
  },
  {
    id: "books-2025",
    slug: "books-2025",
    title: "2025 Reading Log",
    tagline: "Week-by-week reading tracker for 2025",
    thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80",
        links: {
      demo: "https://books2025.soumyosinha.com/",
      github: "https://github.com/friscodanconia/books2025"
    },
    technologies: ["TypeScript", "AI Design", "Vercel"],
    sections: [
      {
        type: 'text',
        content: 'A week-by-week reading log capturing stories, ideas, and worlds throughout 2025. Check it out at <a href="https://books2025.soumyosinha.com/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">books2025.soumyosinha.com</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'I wanted to document my reading journey in 2025 in a visual, organized way. Most reading trackers are cluttered - I wanted something that feels like a warm little library.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Week-by-week reading tracker',
          'Personal library view',
          'Favorites collection',
          'Clean, warm interface'
        ]
      }
    ]
  },
  {
    id: "visual-cookbook",
    slug: "visual-cookbook",
    title: "Chicken Atlas",
    tagline: "Ad-free visual cookbook with rich infographics",
    thumbnail: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80",
        links: {
      demo: "https://chickenatlas.nestor.guide/"
    },
    technologies: ["lovable.dev", "Windsurf", "Vercel", "OpenAI"],
    sections: [
      {
        type: 'text',
        content: 'A visual cookbook about chicken recipes that is ad-free and gives you rich infographics and cooking instructions. Check it out at <a href="https://chickenatlas.nestor.guide/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">chickenatlas.nestor.guide</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'I like cooking, but looking for recipes is painful. Most sites are full of ads, pop-ups, and irrelevant information. I wanted to build something easy, ad-free, and straight to the point. This MVP was coded over a weekend.'
      },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Ad-free recipe experience',
          'Rich infographics',
          'Detailed cooking instructions',
          'Visual step-by-step guides'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'lovable.dev',
          'Windsurf',
          'Vercel',
          'OpenAI'
        ]
      }
    ]
  },
  {
    id: "product-imagery-fashion",
    slug: "product-imagery-fashion",
    title: "AI Product Imagery",
    tagline: "Using AI to simplify fashion product photography",
    thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
        links: {
      demo: "/product-imagery-gallery"
    },
    technologies: ["Google 2.0 Flash", "Hugging Face"],
    sections: [
      {
        type: 'text',
        content: 'I consulted with a client on the importance of product imagery and its impact on customer experience and conversion. They pointed out the cost behind this process, especially with seasonal variations requiring constant investment. I investigated AI solutions that can help.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'Multi-modal models are getting better every week. You can add reference images, brand identity, and character infusion to create quality bounds. I used experimental models to input one model image and create five different variations across color and style.'
      },
      { type: 'cta', text: 'View the gallery', url: '/product-imagery-gallery' },
      { type: 'heading', content: 'Key Features' },
      {
        type: 'list',
        items: [
          'Image generation from seed images',
          'Style and color variations',
          'Prompt engineering for fine-tuning'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'Google 2.0 Flash Experimental',
          'Hugging Face hosted models'
        ]
      }
    ]
  },
  {
    id: "marketing-toolkit",
    slug: "marketing-toolkit",
    title: "AI Marketing Toolkit",
    tagline: "Building marketing assets entirely with AI tools",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        links: {
      demo: "https://fi.pinterest.com/nestorguide/ai-ads/"
    },
    technologies: ["OpenAI", "ElevenLabs", "Pika Labs", "Runway"],
    sections: [
      {
        type: 'text',
        content: 'How to build a toolkit of product imagery, models, OOH, social media, print, and video assets using AI tools. Check out the <a href="https://fi.pinterest.com/nestorguide/ai-ads/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 hover:underline">results on Pinterest</a>.'
      },
      { type: 'heading', content: 'The Why' },
      {
        type: 'text',
        content: 'AI is changing the marketing input:output process. Earlier, teams would build briefs, agencies create prototypes, revisions take weeks or months. If AI can improve this cycle through rapid iteration, we unlock massive efficiencies. I tested all these tools to see how the assets turn out.'
      },
      { type: 'heading', content: 'Asset Types Created' },
      {
        type: 'list',
        items: [
          'Product imagery',
          'Models showcasing products',
          'Video content',
          'OOH, Social Media, Print Assets'
        ]
      },
      { type: 'heading', content: 'Tools Used' },
      {
        type: 'list',
        items: [
          'OpenAI, Google 2.0 Flash',
          'ElevenLabs, Murf.ai',
          'Pika Labs, Freepik, Runway, Higgsfield'
        ]
      }
    ]
  },
];

// Legacy export for backward compatibility with existing components
export const projectsData = {
  projects: {
    title: "Projects",
    items: projects.map(p => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      description: p.tagline,
      thumbnail: p.thumbnail,
      links: p.links,
      technologies: p.technologies,
      features: p.sections
        .filter((s): s is Extract<Section, { type: 'list' }> => s.type === 'list')
        .flatMap(s => s.items)
        .slice(0, 4),
      why: p.sections
        .find((s, i, arr) =>
          s.type === 'text' &&
          arr[i - 1]?.type === 'heading' &&
          (arr[i - 1] as { content: string }).content === 'The Why'
        )?.type === 'text'
        ? (p.sections.find((s, i, arr) =>
            s.type === 'text' &&
            arr[i - 1]?.type === 'heading' &&
            (arr[i - 1] as { content: string }).content === 'The Why'
          ) as { content: string })?.content
        : undefined
    }))
  }
};
