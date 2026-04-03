import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from './hooks/useMediaQuery';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { ProductImageryGallery } from './pages/ProductImageryGallery';
import { KrutrimDemos } from './pages/KrutrimDemos';
import { AIInvestmentResearchGuide } from './pages/AIInvestmentResearchGuide';
import { BBMPTrackerGuide } from './pages/BBMPTrackerGuide';
import { CompanyNewsDigestGuide } from './pages/CompanyNewsDigestGuide';
import { SayItInIndiaGuide } from './pages/SayItInIndiaGuide';
import { SearchingForFoodGuide } from './pages/SearchingForFoodGuide';
import { Reading } from './components/Reading';
import { Contact } from './components/Contact';
import { AIUpdates } from './pages/AIUpdates';

// Full-bleed routes that render without sidebar/nav
const FULL_BLEED_ROUTES = ['/projects/searching-for-food/guide'];

// Helper component to render app content
function AppContent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const isFullBleed = FULL_BLEED_ROUTES.includes(location.pathname);

  if (isFullBleed) {
    return (
      <Routes>
        <Route path="/projects/searching-for-food/guide" element={<SearchingForFoodGuide />} />
      </Routes>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && <Sidebar />}
        <main className={`flex-1 overflow-y-auto bg-white dark:bg-gray-900 ${isMobile ? 'pb-20' : ''}`}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/projects/ai-investment-research/guide" element={<AIInvestmentResearchGuide />} />
            <Route path="/projects/bbmp-tracker/guide" element={<BBMPTrackerGuide />} />
            <Route path="/projects/company-news-digest/guide" element={<CompanyNewsDigestGuide />} />
            <Route path="/projects/say-it-in-india/guide" element={<SayItInIndiaGuide />} />
            <Route path="/product-imagery-gallery" element={<ProductImageryGallery />} />
            <Route path="/krutrim-demos" element={<KrutrimDemos />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/ai-updates" element={<AIUpdates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>
      </div>
      {isMobile && <BottomNav />}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
