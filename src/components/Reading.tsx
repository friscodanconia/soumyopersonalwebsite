import { useRef } from 'react';
import { Book } from 'lucide-react';
import { readingData } from '../data/readingData';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function Reading() {
  useDocumentMeta({ ...routeMeta['/reading'], canonicalPath: '/reading' });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Reading" />}
      <div className="p-8">
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Book className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100">Reading</h1>
          </div>
        </header>

        <section className="mb-12" ref={contentRef}>
          <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4">
            {readingData.reading.title}
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            A collection of books that have shaped my thinking.
          </p>

          <ul className="space-y-3 [&_a]:text-amber-600 [&_a]:dark:text-amber-400 [&_a]:hover:underline">
            {readingData.reading.books.map((book, i) => (
              <li key={i} className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <span 
                  className="text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: book }}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}