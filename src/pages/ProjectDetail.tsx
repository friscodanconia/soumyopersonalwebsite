import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projectsData';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { SectionRenderer } from '../components/SectionRenderer';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ProjectDetail() {
  const { slug } = useParams();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  const project = projects.find(p => p.slug === slug);
  useDocumentMeta({
    title: project ? project.title : 'Project Not Found',
    description: project ? project.tagline : 'The requested project could not be found.',
    canonicalPath: project ? `/projects/${project.slug}` : undefined,
  });

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">
            Project not found
          </h1>
          <Link 
            to="/projects" 
            className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
          >
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title={project.title} />}
      <div className="p-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <article ref={contentRef}>
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              {project.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {project.tagline}
            </p>
            
            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.links.demo && (
                project.links.demo.startsWith('/') ? (
                  <Link
                    to={project.links.demo}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Demo
                  </Link>
                ) : (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Demo
                  </a>
                )
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
            </div>

            {/* Technologies */}
            {project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content Sections */}
          <div className="space-y-6">
            {project.sections.map((section, index) => (
              <SectionRenderer key={index} section={section} />
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
