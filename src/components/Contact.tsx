import { Mail } from 'lucide-react';
import { contactData } from '../data/contactData';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function Contact() {
  useDocumentMeta({ ...routeMeta['/contact'], canonicalPath: '/contact' });
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Contact Me" />}
      <div className="p-8">
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100">Contact Me</h1>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4">
            {contactData.contact.title}
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>

          <ul className="space-y-4">
            {contactData.contact.links.map((link, i) => (
              <li key={i} className="flex items-center">
                <a
                  href={link}
                  className="text-sm leading-relaxed text-amber-600 dark:text-amber-400 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                  <span 
                    className="text-sm text-gray-600 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: link }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}