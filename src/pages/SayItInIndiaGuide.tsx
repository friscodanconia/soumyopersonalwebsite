import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { routeMeta } from '../data/routeMeta';

export function SayItInIndiaGuide() {
  useDocumentMeta({ ...routeMeta['/projects/say-it-in-india/guide'], canonicalPath: '/projects/say-it-in-india/guide' });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Build Guide" />}
      <div className="p-8">
        <Link
          to="/projects/say-it-in-india"
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to project
        </Link>

        <article ref={contentRef} className="space-y-6">
          <header className="mb-8">
            <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              How I Built Say It In India
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Discovering Sarvam's Bulbul v3 and building a voice exploration app for India's 22 languages
            </p>
          </header>

          {/* Intro */}
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Voice matters in India. Twenty-two official languages, over 700 million people who don't speak English, and a culture where storytelling is deeply oral. I'd been tracking Indian AI companies for a while when I came across Sarvam AI's Bulbul v3 — a text-to-speech model built specifically for Indian languages. I tried it, was surprised by the quality, and decided to build something around it.
          </p>

          {/* The Discovery */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Discovery
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Most TTS engines treat Indian languages as an afterthought — the pronunciation is off, the rhythm is wrong, the emotion is flat. Bulbul v3 was different. It handles 11 Indian languages natively, with natural cadence and genuine emotion. The first time I heard it read a bedtime story in Hindi, it didn't sound like a robot reading text — it sounded like someone telling a child a story. That's when it clicked: this wasn't just a TTS demo, it was a way to make people <em>feel</em> something.
          </p>

          {/* The Idea — Scenes as Emotion */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Idea — Scenes as Emotion
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            I didn't want to build a translation app. I wanted to build an emotion app. The core insight: the same words feel completely different depending on the scene. A bedtime story whispered in Hindi feels nothing like cricket commentary shouted in Tamil, even if you don't understand either language. The voice carries the feeling.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            So I designed six scenes, each with its own emotional signature tuned through TTS parameters:
          </p>

          {/* Pipeline diagram */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-24 font-medium text-amber-600 dark:text-amber-400">Scene</span>
                <span className="text-gray-600 dark:text-gray-300">Select emotion — sets pace + temperature parameters</span>
              </div>
              <div className="text-gray-400 pl-12">↓</div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-24 font-medium text-amber-600 dark:text-amber-400">Language</span>
                <span className="text-gray-600 dark:text-gray-300">Choose from 11 Indian languages — loads pre-written native text</span>
              </div>
              <div className="text-gray-400 pl-12">↓</div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-24 font-medium text-amber-600 dark:text-amber-400">Voice</span>
                <span className="text-gray-600 dark:text-gray-300">Pick a speaker — 10 options across male and female</span>
              </div>
              <div className="text-gray-400 pl-12">↓</div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-24 font-medium text-amber-600 dark:text-amber-400">Sarvam API</span>
                <span className="text-gray-600 dark:text-gray-300">Bulbul v3 synthesizes speech with scene parameters → audio</span>
              </div>
            </div>
          </div>

          {/* Scene parameters */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <div className="grid grid-cols-3 gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 px-1">
              <span>Scene</span>
              <span>Pace / Temp</span>
              <span>Why</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="grid grid-cols-3 gap-2 px-1">
                <span>Bedtime Story</span>
                <span className="font-mono text-xs">0.85 / 0.3</span>
                <span className="text-xs">Slow, warm, consistent</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-1">
                <span>Street Food</span>
                <span className="font-mono text-xs">1.2 / 0.7</span>
                <span className="text-xs">Fast, energetic, varied</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-1">
                <span>Love Letter</span>
                <span className="font-mono text-xs">0.8 / 0.5</span>
                <span className="text-xs">Slow, intimate, tender</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-1">
                <span>Cricket</span>
                <span className="font-mono text-xs">1.4 / 0.9</span>
                <span className="text-xs">Fastest, most excited</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-1">
                <span>Train Announce</span>
                <span className="font-mono text-xs">0.9 / 0.3</span>
                <span className="text-xs">Measured, authoritative</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-1">
                <span>Grandma's Recipe</span>
                <span className="font-mono text-xs">0.85 / 0.5</span>
                <span className="text-xs">Gentle, storytelling warmth</span>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Pace controls how fast the voice speaks (0.8 = slow, 1.4 = fast). Temperature controls variation — low temperature sounds steady and predictable, high temperature sounds more expressive and unpredictable. Together, they're the "emotion knobs" of the app.
          </p>

          {/* The Cascade */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            The Cascade
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            My favorite feature. Pick any phrase, and the app speaks it across all 11 languages in sequence — Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, and English. You hear the same meaning flow through completely different sounds.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Under the hood, it's sequential API calls with a 400ms pause between languages. Each call uses the same scene parameters but the text is in the target language. The effect is surprisingly moving — you hear India's linguistic diversity in 30 seconds.
          </p>

          {/* Key Design Decisions */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Key Design Decisions
          </h2>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Pre-written native text, not live translation.</strong> The scene texts are written in each language by native speakers, not translated on the fly. Translated text sounds unnatural — idioms get mangled, rhythm gets lost. Pre-written text lets the TTS engine sound its best.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Custom text uses translation.</strong> When you type your own text, the app uses Sarvam's Mayura v1 translation API. This is a deliberate trade-off — convenience over perfection. You can hear your own words in any language, even if the result isn't quite as polished as the curated scenes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>TTS parameters per scene.</strong> Pace ranges from 0.8 to 1.4, temperature from 0.3 to 0.9. Each scene has hand-tuned values. Cricket commentary at pace 1.4 and temperature 0.9 sounds genuinely excited. A bedtime story at 0.85 and 0.3 sounds genuinely soothing. These parameters are the product.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Lowercase speaker IDs.</strong> A small but annoying discovery during the build — Sarvam's API requires lowercase speaker IDs. Capitalizing them returns a cryptic error. The kind of thing that costs you an hour.</span>
            </li>
          </ul>

          {/* What I Learned */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            What I Learned
          </h2>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 pl-1">
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Voice quality has crossed a threshold.</strong> Bulbul v3 doesn't sound like a robot. It sounds like people. The emotional range — from a gentle bedtime story to excited cricket commentary — is genuinely impressive for Indian languages. This wasn't possible even a year ago.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>TTS parameters are the real "emotion knobs."</strong> Most TTS demos let you pick a voice and a language. But pace and temperature are what actually shape emotion. A fast, high-temperature voice sounds excited. A slow, low-temperature voice sounds calm. This is where the art is.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Pre-written native text beats translated text.</strong> Every time. The difference is audible. Translated text has awkward phrasing that the TTS engine faithfully reproduces — making it sound <em>articulately</em> wrong. Native text flows.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <span><strong>Voice will be the key AI interface for India's next 500M users.</strong> Most of India's internet growth is coming from people who are more comfortable speaking than typing. Voice-first AI interfaces aren't a nice-to-have — they're the only way to reach this audience. Bulbul v3 makes this viable.</span>
            </li>
          </ul>

          {/* Stack */}
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4">
            Stack
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Frontend</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>React 19 + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">AI Services</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>Sarvam Bulbul v3 (TTS)</li>
                <li>Sarvam Mayura v1 (translation)</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
            <a
              href="https://tryingsarvam.soumyosinha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
            >
              Try Say It In India →
            </a>
            <Link
              to="/projects/say-it-in-india"
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
