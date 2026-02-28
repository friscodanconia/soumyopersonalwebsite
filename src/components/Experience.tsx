import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function Experience() {
  useDocumentMeta({ ...routeMeta['/experience'], canonicalPath: '/experience' });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Experience" />}
      <div className="p-8">
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Briefcase className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100">Experience</h1>
          </div>
        </header>

        <div className="space-y-16" ref={contentRef}>
          {Object.values(experienceData).map((experience, index) => (
            <section key={index} className="relative">
              <div className="mb-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">
                      {experience.role}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      {experience.company}
                    </a>
                    <span className="text-gray-300 dark:text-gray-700">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.location}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mt-2">
                    {experience.description}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Key Achievements
                </h3>
                <ul className="space-y-3 [&_a]:text-amber-600 [&_a]:dark:text-amber-400 [&_a]:hover:underline">
                  {experience.achievements.map((achievement, i) => (
                    <li key={`${index}-${i}`} className="flex items-start mt-2">
                      <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                      <span 
                        className="text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: achievement }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}