import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function CompanyNewsDigestGuide() {
  useDocumentMeta({ ...routeMeta['/projects/company-news-digest/guide'], canonicalPath: '/projects/company-news-digest/guide' });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Build Guide" />}
      <div className="p-8">
        <Link
          to="/projects/company-news-digest"
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to project
        </Link>

        <article ref={contentRef} className="space-y-6">
          <header className="mb-8">
            <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              How I Built a Company News Digest Skill
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Extending Claude Code with a custom skill that fetches, ranks, and delivers company news to Slack
            </p>
          </header>

          {/* Intro */}
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            I track a lot of companies — for investment research, consulting, and general curiosity. The daily routine of checking multiple news sources, filtering noise, and mentally ranking what actually matters is tedious. I wanted to be able to say "news digest for Tesla" and get a curated, ranked summary delivered to Slack.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Claude Code has a skill system that lets you extend it with custom capabilities. I built this as a skill, which means any Claude Code session can invoke it with natural language — no special commands needed.
          </p>

          {/* What's a Skill */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            What's a Claude Code Skill?
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            A skill is a directory with a <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">SKILL.md</code> file that tells Claude what the skill does, when to activate, and what scripts/tools are available. When you say something that matches the skill's trigger phrases, Claude reads the SKILL.md and follows the instructions.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            It's essentially a structured prompt with access to scripts. No framework, no SDK — just a markdown file and some Python scripts.
          </p>

          {/* Architecture */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Pipeline
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-20 font-medium text-amber-600 dark:text-amber-400">Fetch</span>
                <span className="text-gray-600 dark:text-gray-300">Python script calls NewsAPI.org for the company name → returns JSON array of articles</span>
              </div>
              <div className="text-gray-400 pl-10">↓</div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-20 font-medium text-amber-600 dark:text-amber-400">Rank</span>
                <span className="text-gray-600 dark:text-gray-300">Claude reads the articles + a ranking rubric → scores and selects top 5-8</span>
              </div>
              <div className="text-gray-400 pl-10">↓</div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-20 font-medium text-amber-600 dark:text-amber-400">Post</span>
                <span className="text-gray-600 dark:text-gray-300">Python script sends the formatted digest to Slack via incoming webhook</span>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The interesting part is the middle step. Rather than sorting by recency or engagement metrics (which is what most news aggregators do), Claude applies a qualitative rubric.
          </p>

          {/* The Ranking Rubric */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Ranking Rubric
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The skill includes a <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">references/ranking-criteria.md</code> file that Claude reads before ranking. The criteria:
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Material impact</strong> — does this affect the company's revenue, operations, or strategy?</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Market-moving potential</strong> — would an investor care about this?</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Strategic relevance</strong> — is this about the company's direction, not just noise?</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Source authority</strong> — Reuters over a content farm</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Novelty</strong> — new information, not a rehash of last week's story</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mt-3">
            There's also a source diversity rule: max 2 articles per source. Without this, niche-topic searches get dominated by a single trade publication that runs 5 articles on the same announcement.
          </p>

          {/* Building It */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Building the Skill
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The file structure is minimal:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4 font-mono text-xs text-gray-600 dark:text-gray-300">
            <div>company-news-digest/</div>
            <div className="pl-4">├── SKILL.md                    <span className="text-gray-400"># Instructions for Claude</span></div>
            <div className="pl-4">├── scripts/</div>
            <div className="pl-8">│   ├── fetch_news.py           <span className="text-gray-400"># NewsAPI.org client</span></div>
            <div className="pl-8">│   └── post_to_slack.py        <span className="text-gray-400"># Slack webhook poster</span></div>
            <div className="pl-4">└── references/</div>
            <div className="pl-8">    └── ranking-criteria.md     <span className="text-gray-400"># The ranking rubric</span></div>
          </div>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">fetch_news.py</code> script is straightforward — calls NewsAPI's <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">/v2/everything</code> endpoint with the company name, returns a JSON array. Accepts flags for article count and time range.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">post_to_slack.py</code> script takes a markdown summary and formats it using Slack's Block Kit markup. Each article gets a headline, source, timestamp, summary, and "Read more" link.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The SKILL.md ties it all together — it tells Claude when to activate (phrases like "news about X", "what's happening with X"), what scripts are available, and the exact workflow: fetch → read ranking criteria → rank → format → post.
          </p>

          {/* Design Decisions */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Key Design Decisions
          </h2>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>NewsAPI.org over Bing Search</strong> — Bing Search API was retired in August 2025. NewsAPI's free tier (100 requests/day) is more than enough for on-demand use.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Claude-ranked over algorithm-ranked</strong> — an LLM can assess "strategic relevance" and "material impact" in a way that keyword matching or engagement metrics can't. This is the whole point of having Claude in the loop.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>On-demand, not scheduled</strong> — no cron job. I just say "news digest for Tesla" when I want one. This keeps it simple and means I don't pay for API calls I don't use.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Slack delivery</strong> — I'm already in Slack all day. A digest that lands in a channel I'm already watching gets read. One that goes to email or a file on disk gets ignored.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>"Bottom Line" synthesis</strong> — every digest ends with 2-3 sentences that summarize the overall narrative. This is the part I actually read first.</span>
            </li>
          </ul>

          {/* Lessons */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            What I Learned
          </h2>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Skills are the right abstraction.</strong> A skill is just a markdown file + scripts. No framework overhead, no dependency management, no deployment. The "framework" is Claude itself reading instructions. This is surprisingly powerful.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Source diversity matters more than you'd think.</strong> Without the "max 2 per source" rule, a search for a niche company returns 5 articles from the same trade publication. The diversity rule forces a broader picture.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>The ranking rubric is the product.</strong> The scripts are trivial — 50 lines of Python each. The value is entirely in how the rubric shapes Claude's judgment. Getting the criteria right took more iteration than the code.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Environment variables are the deployment story.</strong> Two env vars (<code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">NEWSAPI_KEY</code> and <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">SLACK_WEBHOOK_URL</code>) in <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">~/.zshrc</code>. That's it. No Docker, no cloud functions, no infrastructure.</span>
            </li>
          </ul>

          {/* Stack */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Stack
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Skill</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>SKILL.md (Claude instructions)</li>
                <li>Python fetch + post scripts</li>
                <li>Ranking criteria reference</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Services</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>NewsAPI.org (free tier)</li>
                <li>Slack Incoming Webhooks</li>
                <li>Claude Code skill system</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
            <Link
              to="/projects/company-news-digest"
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
