import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/reading', label: 'Reading' },
    { path: '/contact', label: 'Contact' },
    { path: '/ai-updates', label: 'AI Updates' },
  ];

  return (
    <aside className="w-48 border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col">
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-2 py-1 text-sm rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
