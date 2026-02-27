import React from 'react';
import { Outlet, Link, useLocation } from '@tanstack/react-router';
import { BookOpen, MessageCircle, Home, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/learn', label: 'Learn', icon: BookOpen },
  { path: '/doubts', label: 'Doubts', icon: MessageCircle },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'oklch(0.14 0.025 155)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-chalk-white/10" style={{ background: 'oklch(0.12 0.025 155)' }}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/assets/generated/app-logo.dim_512x512.png"
              alt="Guru Blackboard"
              className="w-8 h-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div>
              <span className="chalk-heading text-xl text-chalk-yellow">Guru</span>
              <span className="chalk-heading text-xl text-chalk-white"> Blackboard</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded chalk-text text-sm transition-all min-h-[44px] ${
                    isActive
                      ? 'bg-chalk-yellow/15 text-chalk-yellow border border-chalk-yellow/30'
                      : 'text-chalk-white/70 hover:text-chalk-white hover:bg-chalk-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Free badge */}
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full border border-chalk-green/40 bg-chalk-green/10">
            <Sparkles className="w-3 h-3 text-chalk-green" />
            <span className="chalk-text text-xs text-chalk-green">100% Free</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-3 py-4 pb-24 sm:pb-6">
        <Outlet />
      </main>

      {/* Mobile bottom nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-chalk-white/10 flex" style={{ background: 'oklch(0.12 0.025 155)' }}>
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 min-h-[56px] chalk-text text-xs transition-all ${
                isActive ? 'text-chalk-yellow' : 'text-chalk-white/50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-chalk-yellow' : ''}`} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <footer className="hidden sm:block border-t border-chalk-white/10 py-3" style={{ background: 'oklch(0.12 0.025 155)' }}>
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <p className="chalk-text text-chalk-white/30 text-xs">
            © {new Date().getFullYear()} Guru Blackboard · Free for all students 🇮🇳
          </p>
          <p className="chalk-text text-chalk-white/30 text-xs flex items-center gap-1">
            Built with <span className="text-chalk-pink">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'guru-blackboard')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-chalk-yellow hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
