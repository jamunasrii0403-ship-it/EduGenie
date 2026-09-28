import React from 'react';
import { PageView } from '../types';
import { Sparkles, Moon, Sun, BookOpen, Layers } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenProjectGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  theme,
  onToggleTheme,
  onOpenProjectGuide,
}) => {
  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors border-b ${
        theme === 'dark'
          ? 'bg-slate-900/90 border-slate-800 text-slate-100 backdrop-blur-md'
          : 'bg-white/90 border-slate-200 text-slate-900 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          aria-label="EduGenie Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-indigo-950 dark:text-white flex items-center gap-1.5">
              EduGenie
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300">
                AI Prototype
              </span>
            </span>
          </div>
        </button>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => onNavigate('landing')}
            className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
              currentPage === 'landing' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              if (currentPage !== 'landing') onNavigate('landing');
              setTimeout(() => {
                document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => {
              if (currentPage !== 'landing') onNavigate('landing');
              setTimeout(() => {
                document.getElementById('how-it-works-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => {
              if (currentPage !== 'landing') onNavigate('landing');
              setTimeout(() => {
                document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={onOpenProjectGuide}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1 font-semibold"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Project Guide
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {currentPage === 'landing' ? (
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-95"
            >
              Start Learning
            </button>
          ) : (
            <button
              onClick={() => onNavigate('landing')}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4" />
              <span>Landing Page</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
