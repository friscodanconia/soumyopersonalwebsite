import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function ProductImageryGallery() {
  useDocumentMeta({ ...routeMeta['/product-imagery-gallery'], canonicalPath: '/product-imagery-gallery' });
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Sample images - replace these with your actual AI-generated fashion images
  const images = [
    {
      id: 1,
      src: "/assets/images/fashion-original.jpeg", 
      alt: "Fashion Model Variation 1",
      caption: "Original seed image"
    },
    {
      id: 2,
      src: "/assets/images/fashion-variation1.jpeg",
      alt: "Fashion Model Variation 2",
      caption: "AI-generated variation - color change"
    },
    {
      id: 3,
      src: "/assets/images/fashion-variation2.jpeg",
      alt: "Fashion Model Variation 3",
      caption: "AI-generated variation - style change"
    },
    {
      id: 4,
      src: "/assets/images/fashion-variation3.jpeg",
      alt: "Fashion Model Variation 4",
      caption: "AI-generated variation - pattern change"
    },
    {
      id: 5,
      src: "/assets/images/fashion-variation4.jpeg",
      alt: "Fashion Model Variation 5",
      caption: "AI-generated variation - background change"
    },
    {
      id: 6,
      src: "/assets/images/fashion-variation5.jpeg",
      alt: "Fashion Model Variation 6",
      caption: "AI-generated variation - lighting effect"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Product Imagery Gallery" />}
      <div className="p-8">
        <Link 
          to="/projects/product-imagery-fashion" 
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to project
        </Link>

        <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100 mb-6">
          Product Imagery AI Variations
        </h1>
        
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
          These images demonstrate how AI can generate multiple variations of a product from a single seed image, 
          saving time and resources in fashion product photography.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image) => (
            <div key={image.id} className="space-y-2">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
