import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { aboutData } from '../data/personalData';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function AboutMe() {
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);
  useDocumentMeta({ ...routeMeta['/about'], canonicalPath: '/about' });

  const { hero, quickFacts, impactHighlights } = aboutData;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-8 md:p-6 lg:p-8" ref={contentRef}>
        <header className="mb-12 md:mb-8 lg:mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100">About Me</h1>
          </div>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {hero.personalIntro}
            </p>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {hero.mainParagraph}
            </p>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {aboutData.currently}
            </p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              <a
                href={quickFacts.location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline"
              >
                {quickFacts.location.label}
              </a>
              <span className="mx-2 text-gray-400">·</span>
              <a
                href={`mailto:${quickFacts.contact.email}`}
                className="text-amber-600 dark:text-amber-400 hover:underline"
              >
                Email
              </a>
              <span className="mx-2 text-gray-400">·</span>
              <a
                href={quickFacts.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline"
              >
                LinkedIn
              </a>
            </p>
            {/* Impact Highlights */}
            <div className="pt-4">
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-3">
                Built and scaled
              </h2>
              {/* Mobile: inline row */}
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 md:hidden">
                {impactHighlights.map((item, index) => (
                  <span key={index}>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">{item.metric}</span>
                    <span className="ml-1">{item.label}</span>
                    {index < impactHighlights.length - 1 && (
                      <span className="mx-2 text-gray-400">·</span>
                    )}
                  </span>
                ))}
              </p>
              {/* Desktop: stacked columns */}
              <div className="hidden md:flex gap-12">
                {impactHighlights.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-xl font-semibold text-amber-600 dark:text-amber-400">
                      {item.metric}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mb-12 md:mb-8 lg:mb-12">
          <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
          <ul className="space-y-3">
            {aboutData.previously.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.role} at <a 
                    href={item.companyLink} 
                    className="text-amber-600 dark:text-amber-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{item.company}</a>
                  <span className="text-gray-500 dark:text-gray-400"> ({item.period})</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4">Education</h2>
          <ul className="space-y-3">
            {aboutData.education.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.degree} from <a 
                    href={item.schoolLink} 
                    className="text-amber-600 dark:text-amber-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{item.school}</a>
                  {item.period && <span className="text-gray-500 dark:text-gray-400"> ({item.period})</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}