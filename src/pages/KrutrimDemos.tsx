import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

interface Video {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
}

const videos: Video[] = [
  {
    id: 'cab-booking',
    title: 'Cab Booking',
    description: 'Watch Kruti seamlessly book a cab with natural language commands',
    src: '/videos/Cab booking.mp4',
    poster: '/videos/cab-booking-poster.jpg'
  },
  {
    id: 'food-agent',
    title: 'Food Agent',
    description: 'See how Kruti helps order food through conversational AI',
    src: '/videos/Food Agent.mp4',
    poster: '/videos/food-agent-poster.jpg'
  },
  {
    id: 'image-creator',
    title: 'Image Creator',
    description: 'Experience Kruti\'s AI-powered image generation capabilities',
    src: '/videos/Image Creator.mp4',
    poster: '/videos/image-creator-poster.jpg'
  }
];

export function KrutrimDemos() {
  useDocumentMeta({ ...routeMeta['/krutrim-demos'], canonicalPath: '/krutrim-demos' });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-5xl mx-auto">
      {isMobile && <MobileHeader title="Kruti Product Demos" />}
      <div className="p-8">
        <Link
          to="/#experience"
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to experience
        </Link>

        <article ref={contentRef}>
          <div className="mb-8">
            <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4">
              Kruti Product Demos
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Watch Kruti in action bringing agentic workflows to millions of customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 transition-colors"
              >
                <div className="relative aspect-video bg-gray-100 dark:bg-gray-900">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                    <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
