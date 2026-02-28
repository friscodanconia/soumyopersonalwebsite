import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function AIInvestmentResearchGuide() {
  useDocumentMeta({ ...routeMeta['/projects/ai-investment-research/guide'], canonicalPath: '/projects/ai-investment-research/guide' });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Build Guide" />}
      <div className="p-8">
        <Link
          to="/projects/ai-investment-research"
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to project
        </Link>

        <article ref={contentRef} className="space-y-6">
          <header className="mb-8">
            <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              How I Built the AI Investment Research Platform
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A weekend project that turned into a 4-agent pipeline analyzing the entire AI value chain
            </p>
          </header>

          {/* Intro */}
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            I wanted to understand the AI industry as an investment landscape — not by reading analyst reports, but by building something that could do the research for me. The result is a pipeline of four AI agents, each handling one stage of the analysis, feeding into an interactive website with live daily stock prices.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The whole thing was built in two days using Claude Code. Here's how.
          </p>

          {/* The Idea */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Idea: Agents as Analysts
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Investment research follows a natural pipeline: first you map the landscape (who are the players?), then you analyze the financials (which ones are worth buying?), then you build a portfolio (how do you allocate?), and finally you present the results.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Each of those stages is a distinct task that maps cleanly to a specialized agent. So I structured the project as four agents that run sequentially, each consuming the output of the previous one:
          </p>

          {/* Pipeline Diagram */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-24 font-medium text-amber-600 dark:text-amber-400">Agent 1</span>
                <span className="text-gray-600 dark:text-gray-300">Value Chain Mapper — maps 82 companies across 7 layers</span>
              </div>
              <div className="text-gray-400 pl-12">↓ companies.json, value-chain-map.json</div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-24 font-medium text-amber-600 dark:text-amber-400">Agent 2</span>
                <span className="text-gray-600 dark:text-gray-300">Financial Analyzer — pulls 61 financial profiles with peer groups</span>
              </div>
              <div className="text-gray-400 pl-12">↓ financials.json, comparisons.json</div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-24 font-medium text-amber-600 dark:text-amber-400">Agent 3</span>
                <span className="text-gray-600 dark:text-gray-300">Portfolio Constructor — builds a $100K model portfolio</span>
              </div>
              <div className="text-gray-400 pl-12">↓ portfolio.json, reasoning.md</div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-24 font-medium text-amber-600 dark:text-amber-400">Agent 4</span>
                <span className="text-gray-600 dark:text-gray-300">Website Builder — creates a Next.js site from the data</span>
              </div>
            </div>
          </div>

          {/* Agent 1 */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Agent 1: Mapping the AI Value Chain
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The first agent's job was to map the entire AI industry into a supply chain. It broke the industry into 7 layers, from the physical infrastructure (semiconductor equipment) all the way up to consumer-facing AI applications:
          </p>
          <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-300 pl-5 list-decimal">
            <li>Semiconductor Equipment (ASML, Applied Materials, Tokyo Electron)</li>
            <li>Chip Design & Fabrication (NVIDIA, TSMC, AMD, Intel)</li>
            <li>Cloud Infrastructure (AWS, Azure, GCP, Oracle)</li>
            <li>AI Platforms & Foundation Models (OpenAI, Google, Meta, Anthropic)</li>
            <li>AI Software & Enterprise Apps (Salesforce, Adobe, Datadog)</li>
            <li>AI-Enabled Consumer & Internet (Google, Meta, Amazon, Alibaba)</li>
            <li>Data, Annotation & AI Services (Scale AI, Palantir)</li>
          </ol>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mt-3">
            It also mapped supply chain dependencies — who supplies what to whom. This revealed the critical chokepoints: ASML has a 100% monopoly on EUV lithography machines, TSMC manufactures 90%+ of advanced chips, and NVIDIA controls 80%+ of AI training GPUs through CUDA lock-in. These aren't just interesting facts — they're investment-relevant bottlenecks.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Output: 82 companies, 9 countries, 100+ supply chain relationships, all structured as JSON.
          </p>

          {/* Agent 2 */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Agent 2: Financial Deep Dive
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The second agent took the company list from Agent 1 and built financial profiles for 61 publicly traded companies. Each profile includes revenue, growth rates, margins, forward P/E, PEG ratio, analyst price targets, and estimated AI revenue percentage.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            More usefully, it organized companies into 14 peer groups for comparative analysis — so you can compare GPU designers against each other, or cloud providers against each other, rather than comparing NVIDIA to Palantir (which is meaningless).
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            One gotcha: financial data fields can be numbers <em>or</em> strings like "NM" (Not Meaningful) for companies without earnings. Every downstream consumer needs <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">typeof x === "number"</code> guards before calling <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.toFixed()</code>. I learned this the hard way.
          </p>

          {/* Agent 3 */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Agent 3: Building the Portfolio
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            With the landscape mapped and the financials analyzed, Agent 3 constructed a $100K model portfolio. It used a 3-tier conviction system:
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Tier 1 (High Conviction)</strong> — NVDA 12%, TSM 10%, META 10% — the chokepoint owners and platform leaders</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Tier 2 (Core Holdings)</strong> — SK Hynix, GOOGL, AVGO, ASML, ANET — essential infrastructure players</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Tier 3 (Satellite)</strong> — Smaller positions in MRVL, MU, VRT, BABA, ADBE, LRCX, DDOG — diversified exposure</span>
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mt-3">
            Plus 4 ETFs for broader coverage. The portfolio's weighted stats: 28.5x forward P/E, 36% revenue growth, 1.15 PEG ratio, 1.28 beta.
          </p>

          {/* Council of Judges */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Council of Judges: Multi-Model Deliberation
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            This was the most interesting part. Inspired by the ARC-AGI approach of treating problems as object transformations, I built a "Council of Judges" pipeline where four different LLMs each independently constructed portfolios, then voted on a consensus.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The models — GPT-4, Gemini Pro, Claude 3.5, and Llama 3.1 — each received the same company data and financial profiles, but approached portfolio construction differently. Each model produced a portfolio with reasoning. Then the council voted on each position with confidence scores, producing a consensus portfolio.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The result was interesting: the Council portfolio ended up more conservative (19.8x P/E vs 28.5x) with lower growth expectations (28.4% vs 36%) but higher beta (1.42 vs 1.28). It picked 18 all-stock positions versus the original portfolio's 15 stocks + 4 ETFs. The models collectively avoided ETFs entirely, preferring direct stock exposure.
          </p>

          {/* Live Prices */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Daily Price Automation
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            A static portfolio isn't very useful. I wanted the dashboard to show live P&L, so I set up a GitHub Actions workflow that runs every weekday at 5pm ET:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300">
              <div>1. GitHub Actions triggers on cron schedule</div>
              <div>2. Python script calls Alpha Vantage API for 26 tickers</div>
              <div>3. Rate-limited to 5 calls/min (free tier), takes ~5 minutes</div>
              <div>4. Writes updated prices.json</div>
              <div>5. Auto-commits to main if prices changed</div>
              <div>6. Vercel auto-deploys the new build</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            One catch: some international tickers (like SK Hynix on the Korean exchange) aren't supported by Alpha Vantage's free tier. The script falls back to entry prices for those. Not ideal, but good enough for a side project.
          </p>

          {/* Agent 4 + Deployment */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Website
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Agent 4 built a Next.js 15 site with 6 pages: an interactive value chain infographic as the landing page, financial tables with peer group comparisons, the original portfolio with allocation breakdowns, the Council consensus portfolio, a live dashboard comparing both portfolios side-by-side, and a methodology page explaining the pipeline.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            The landing page uses an interactive bubble chart where each company is sized by log-scaled market cap. Linear scaling makes small companies invisible — log scale gives visible bubbles for everyone while still showing relative differences. Dependency lines between layers use cubic bezier curves tracked via <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">useRef(Map)</code> and <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">ResizeObserver</code> for responsive positioning.
          </p>

          {/* Lessons */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            What I Learned
          </h2>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Multi-agent pipelines need structured handoffs.</strong> Each agent writes JSON to a known location. The next agent reads it. No fancy orchestration framework — just files on disk. Simple beats clever.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Financial data is messy.</strong> Fields that should be numbers are sometimes strings ("NM", "N/A"). Always use type guards. Always.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Market cap data goes stale fast.</strong> My initial estimates drifted 50-300% within months for some stocks (Broadcom +191%, Micron +323%). Static data needs a refresh process.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Multi-model consensus is genuinely useful.</strong> The Council portfolio made different tradeoffs than any single model would. Having models "debate" surfaces assumptions you wouldn't notice with one model.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Alpha Vantage free tier is workable</strong> — 25 calls/day with 5/min rate limit. Add <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">time.sleep(12.5)</code> between calls and you're fine for ~26 tickers.</span>
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
                <li>Recharts</li>
                <li>Vercel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Pipeline</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>Python (data scripts)</li>
                <li>Alpha Vantage API</li>
                <li>GitHub Actions (cron)</li>
                <li>Claude Code (build tool)</li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Timeline
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <div><strong>Day 1 (Feb 6)</strong> — Ran all 4 agents, built the initial site, deployed to Vercel</div>
            <div><strong>Day 2 (Feb 7)</strong> — Added Council of Judges pipeline, live dashboard with side-by-side comparison, daily price automation via GitHub Actions, custom domain, market cap verification against live data</div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
            <a
              href="https://investmentadvisor.soumyosinha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
            >
              View the live site →
            </a>
            <Link
              to="/projects/ai-investment-research"
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
