import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function BBMPTrackerGuide() {
  useDocumentMeta({ ...routeMeta['/projects/bbmp-tracker/guide'], canonicalPath: '/projects/bbmp-tracker/guide' });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Build Guide" />}
      <div className="p-8">
        <Link
          to="/projects/bbmp-tracker"
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to project
        </Link>

        <article ref={contentRef} className="space-y-6">
          <header className="mb-8">
            <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              How I Built the BBMP Work Tracker
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Turning messy government data into a searchable civic transparency tool for Bangalore
            </p>
          </header>

          {/* Intro */}
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            As a Bangalore resident, I pay property tax to BBMP (Bruhat Bengaluru Mahanagara Palike) every year. But I had no way to see where that money goes. Are they fixing roads in my area? How does my ward compare to others? Which contractors keep getting work despite poor quality?
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The data exists — BBMP publishes work orders through OpenCity. But it's buried in CSV files that nobody can search. So I built a tool that makes it all accessible: search by your address, see what's being spent, verify with Street View.
          </p>

          {/* The Data Problem */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Data Problem
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Government data is never clean. BBMP's work order data from OpenCity had every problem you'd expect:
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Contractor names spelled 5 different ways</strong> — "ABC Constructions Pvt Ltd", "ABC Construction Pvt. Ltd.", "abc constructions", etc. Same company, different entries every time.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>~30% of work orders have no location</strong> — just a ward number and a vague description like "road resurfacing near junction"</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Completion status missing for 40% of records</strong> — is the work done? Unknown.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Ward renumbering</strong> — Bangalore reorganized from 198 to 243 wards in 2022, so old and new numbering systems overlap</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mt-3">
            This is the real work of civic tech — not the frontend, but making messy data usable.
          </p>

          {/* ETL Pipeline */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Building the Data Pipeline
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            I wrote Python ETL scripts to clean and structure the raw CSV data. The pipeline handles three main tasks:
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">1. Contractor Name Standardization</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Lowercase everything, strip punctuation and suffixes ("Pvt Ltd", "Private Limited"), then fuzzy-match remaining names with Levenshtein distance &lt; 3. Reduced thousands of apparent contractors down to the actual unique set. Manual review of the top 100 by spend to catch edge cases.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">2. Location Geocoding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Extract addresses from work descriptions, geocode via Google Geocoding API (free tier: 40K requests/month), then validate that geocoded points actually fall within the correct ward boundary. Failed geocodes fall back to the ward centroid. This step alone took the most iteration.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">3. Ward Mapping</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Imported ward boundary GeoJSON from Karnataka GIS portal. Mapped old 198-ward numbers to new 243-ward numbers where possible. Stored both numbering systems so users can search by either.
              </p>
            </div>
          </div>

          {/* Smart Search */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Making It Searchable
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The goal was simple: type your address and see what's being spent around you. This required three pieces:
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Full-text search</strong> across work descriptions using PostgreSQL's built-in search (good enough for MVP, no need for Elasticsearch)</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Landmark-based search</strong> — mapped 469 major landmarks (malls, hospitals, temples, parks) to coordinates, so searching "near Forum Mall" actually works</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>PIN code search</strong> — mapped Bangalore's 100+ PIN codes to ward boundaries, the most intuitive search for most residents</span>
            </li>
          </ul>

          {/* Verification */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Google Street View for Verification
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            A work order says the road was resurfaced. But was it actually done? I integrated Google Street View so users can visually check — click on a work order and see what the location actually looks like.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            This is imperfect. Street View images can be months or even years old. Coverage is patchy — not every Bangalore street is mapped. But even imperfect visual evidence is better than none when you're trying to hold a municipality accountable.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The Google Street View Static API has a free tier of 28K requests/month, which is more than enough for a civic tool where users check locations one at a time.
          </p>

          {/* Monitoring */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Keeping It Fresh
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            OpenCity updates BBMP data quarterly. I set up a GitHub Actions workflow that periodically checks for new data dumps, downloads them, runs the cleaning pipeline, and flags changes. This isn't real-time — BBMP doesn't offer APIs — but it's enough to keep the tracker reasonably current.
          </p>

          {/* The Numbers */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            What the Data Reveals
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-xl font-semibold text-amber-600 dark:text-amber-400">14,339</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">work orders</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-xl font-semibold text-amber-600 dark:text-amber-400">₹10,462 Cr</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">public spending</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-xl font-semibold text-amber-600 dark:text-amber-400">243</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">wards</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-xl font-semibold text-amber-600 dark:text-amber-400">469</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">landmarks</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            With this data structured and searchable, patterns emerge that were invisible in the raw CSVs. Ward-level spending disparities become obvious. Contractors who get repeated work across multiple wards are visible. The tool doesn't editorialize — it just makes the facts findable.
          </p>

          {/* Lessons */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            What I Learned
          </h2>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Data cleaning is 80% of civic tech.</strong> The frontend took days, the data pipeline took weeks. Geocoding, deduplication, and ward mapping were each harder than building the UI.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>PostgreSQL is enough.</strong> Full-text search, PostGIS for geospatial queries, and standard SQL for analytics. No need for Elasticsearch, Redis, or a task queue for an MVP.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Landmarks beat coordinates.</strong> Nobody knows their lat/lng. But everyone knows "near Forum Mall" or "opposite Ramaiah Hospital". Landmark-based search was the single feature that made the tool usable for non-technical people.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Be transparent about limitations.</strong> Government data has gaps. Street View is outdated. Rather than hiding this, I show it — each record shows its data confidence level. Trust comes from honesty, not perfection.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Free API tiers are surprisingly generous.</strong> Google Geocoding (40K/month), Street View (28K/month), and Vercel's hosting tier were all sufficient. Total infrastructure cost for the MVP: under $200.</span>
            </li>
          </ul>

          {/* Stack Summary */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Stack
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Frontend</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>Next.js 15, TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Google Maps / Street View</li>
                <li>Vercel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Backend & Data</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>PostgreSQL + PostGIS</li>
                <li>Python ETL scripts</li>
                <li>Google Geocoding API</li>
                <li>GitHub Actions</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
            <a
              href="https://bbmp-tracker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
            >
              Try the tracker →
            </a>
            <Link
              to="/projects/bbmp-tracker"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
            >
              Back to project overview
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
