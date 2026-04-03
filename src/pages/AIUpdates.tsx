import { useState, useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

const HISTORY_INDEX_URL = 'https://raw.githubusercontent.com/friscodanconia/follow-builders/main/history/index.json';
const HISTORY_BASE_URL = 'https://raw.githubusercontent.com/friscodanconia/follow-builders/main/history/';

interface DigestEntry {
  date: string;
  title: string;
  file: string;
}

function markdownToHtml(md: string): string {
  let html = md
    .replace(/^### (.+)$/gm, '<h3 class="text-sm font-medium mt-6 mb-2 text-gray-900 dark:text-gray-100">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-base font-medium mt-8 mb-3 text-gray-900 dark:text-gray-100">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-lg font-medium mt-8 mb-4 text-gray-900 dark:text-gray-100">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900 dark:text-gray-100 font-medium">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-amber-600 dark:text-amber-400 underline hover:no-underline" target="_blank" rel="noopener">$1</a>')
    .replace(/(?<!href="|">)(https?:\/\/[^\s<)]+)/g, '<a href="$1" class="text-amber-600 dark:text-amber-400 underline hover:no-underline break-all" target="_blank" rel="noopener">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
    .replace(/^---+$/gm, '<hr class="my-6 border-gray-200 dark:border-gray-700" />')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\n/g, '<br />');

  html = html.replace(/((?:<li[^>]*>.*?<\/li>\s*(?:<br \/>)?)+)/g, '<ul class="list-disc mb-4 space-y-1">$1</ul>');
  html = html.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (match) => match.replace(/<br \/>/g, ''));

  return `<div>${html}</div>`;
}

export function AIUpdates() {
  useDocumentMeta({ ...routeMeta['/ai-updates'], canonicalPath: '/ai-updates' });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState<DigestEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [digestContent, setDigestContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [loadingDigest, setLoadingDigest] = useState(false);

  // Load index
  useEffect(() => {
    fetch(HISTORY_INDEX_URL)
      .then(res => res.json())
      .then((data: DigestEntry[]) => {
        setIndex(data);
        if (data.length > 0) {
          setSelectedDate(data[0].date);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Load selected digest
  useEffect(() => {
    if (!selectedDate) return;
    setLoadingDigest(true);
    fetch(`${HISTORY_BASE_URL}${selectedDate}.md`)
      .then(res => res.text())
      .then(md => {
        setDigestContent(md);
        setLoadingDigest(false);
      })
      .catch(() => setLoadingDigest(false));
  }, [selectedDate]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="AI Updates" />}
      <div className="p-8">
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100">AI Builders Digest</h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
            Daily digest tracking what top AI builders are thinking and shipping. Follow builders, not influencers.
          </p>
          <a
            href="https://buttondown.com/soumyo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 transition-colors"
          >
            Subscribe via email
          </a>
        </header>

        {loading ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
        ) : index.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No digests yet. Check back soon.</p>
        ) : (
          <>
            {/* Date selector */}
            {index.length > 1 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {index.map((entry) => (
                  <button
                    key={entry.date}
                    onClick={() => setSelectedDate(entry.date)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      selectedDate === entry.date
                        ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20'
                        : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 bg-gray-50 dark:bg-gray-800'
                    }`}
                  >
                    {formatDate(entry.date)}
                  </button>
                ))}
              </div>
            )}

            {/* Digest content */}
            {loadingDigest ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">Loading digest...</p>
            ) : (
              <div ref={contentRef}>
                {selectedDate && (
                  <time className="text-sm text-gray-500 dark:text-gray-400 mb-4 block">
                    {formatDate(selectedDate)}
                  </time>
                )}
                <div
                  className="text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: markdownToHtml(digestContent) }}
                />
              </div>
            )}

            {/* Archive */}
            {index.length > 1 && (
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">Archive</h2>
                <ul className="space-y-2">
                  {index.map((entry) => (
                    <li key={entry.date}>
                      <button
                        onClick={() => {
                          setSelectedDate(entry.date);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`text-sm transition-colors ${
                          selectedDate === entry.date
                            ? 'text-amber-600 dark:text-amber-400 font-medium'
                            : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                        }`}
                      >
                        {formatDate(entry.date)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
