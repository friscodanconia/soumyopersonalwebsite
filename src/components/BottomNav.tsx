import { Link, useLocation } from 'react-router-dom';
import { MapPin, Briefcase, FolderOpen, BookOpen, Zap } from 'lucide-react';

const navItems = [
  { path: '/', label: 'About', icon: MapPin },
  { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/projects', label: 'Projects', icon: FolderOpen },
  { path: '/reading', label: 'Reading', icon: BookOpen },
  { path: 'https://aiupdates.soumyosinha.com', label: 'AI Updates', icon: Zap, external: true },
];

export function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/about';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-2 py-2 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center px-3 py-1 rounded-lg transition-colors text-gray-500 dark:text-gray-400"
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center px-3 py-1 rounded-lg transition-colors ${
                  active
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
        })}
      </div>
    </nav>
  );
}
