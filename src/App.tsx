/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { LandingPage } from './components/LandingPage';
import { DashboardHome } from './components/DashboardHome';
import { AskEduGenie } from './components/AskEduGenie';
import { QuizGenerator } from './components/QuizGenerator';
import { SmartNotes } from './components/SmartNotes';
import { StudyPlanner } from './components/StudyPlanner';
import { LearningProgress } from './components/LearningProgress';
import { SettingsPage } from './components/SettingsPage';
import { ProjectGuideModal } from './components/ProjectGuideModal';
import {
  Menu,
  Moon,
  Sun,
  BookOpen,
  Sparkles,
  ArrowLeft,
  GraduationCap,
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('landing');
  const [studentName, setStudentName] = useState<string>('Aditya Sharma');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);

  // Initialize theme from system or saved preference
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('edugenie-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('edugenie-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageTitle = (page: PageView): string => {
    switch (page) {
      case 'dashboard':
        return 'Dashboard';
      case 'chat':
        return 'Ask EduGenie';
      case 'quiz':
        return 'Quiz Generator';
      case 'notes':
        return 'Smart Notes';
      case 'planner':
        return 'Study Planner';
      case 'progress':
        return 'Learning Progress';
      case 'settings':
        return 'Settings';
      default:
        return 'Home';
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* If Landing Page View */}
      {currentPage === 'landing' ? (
        <div className="flex flex-col min-h-screen">
          <Navbar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenProjectGuide={() => setGuideModalOpen(true)}
          />
          <main className="flex-1">
            <LandingPage onNavigate={handleNavigate} theme={theme} />
          </main>
        </div>
      ) : (
        /* If Dashboard / Internal Page View */
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            mobileOpen={mobileSidebarOpen}
            onCloseMobile={() => setMobileSidebarOpen(false)}
            theme={theme}
          />

          {/* Main App Canvas */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Top Bar for Dashboard Views */}
            <header
              className={`h-16 px-4 sm:px-6 flex items-center justify-between border-b sticky top-0 z-30 transition-colors backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white/90 border-slate-200 text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Mobile Menu Trigger */}
                <button
                  onClick={() => setMobileSidebarOpen(true)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-5 h-5" />
                </button>

                {/* Page Title & Breadcrumb */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                    EduGenie /
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {getPageTitle(currentPage)}
                  </h2>
                </div>
              </div>

              {/* Right Bar Controls */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Project Guide Button */}
                <button
                  onClick={() => setGuideModalOpen(true)}
                  className="px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-800/80 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold hover:bg-indigo-100 transition-colors hidden sm:flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>College Project Guide</span>
                </button>

                {/* Return to Public Landing Page */}
                <button
                  onClick={() => handleNavigate('landing')}
                  className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors sm:hidden"
                  title="Landing Page"
                  aria-label="Back to landing page"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  aria-label="Toggle color theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>

                {/* Student Avatar Icon */}
                <div
                  onClick={() => handleNavigate('settings')}
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-indigo-400 transition-all shadow-xs"
                  title="Open Settings"
                >
                  AS
                </div>
              </div>
            </header>

            {/* Viewport Content */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              {currentPage === 'dashboard' && (
                <DashboardHome
                  onNavigate={handleNavigate}
                  studentName={studentName}
                  theme={theme}
                />
              )}
              {currentPage === 'chat' && <AskEduGenie onNavigate={handleNavigate} theme={theme} />}
              {currentPage === 'quiz' && <QuizGenerator theme={theme} />}
              {currentPage === 'notes' && <SmartNotes theme={theme} />}
              {currentPage === 'planner' && <StudyPlanner theme={theme} />}
              {currentPage === 'progress' && (
                <LearningProgress onNavigate={handleNavigate} theme={theme} />
              )}
              {currentPage === 'settings' && (
                <SettingsPage
                  theme={theme}
                  onToggleTheme={toggleTheme}
                  onUpdateProfileName={(name) => setStudentName(name)}
                />
              )}
            </main>
          </div>
        </div>
      )}

      {/* Naan Mudhalvan Project & VS Code Guide Modal */}
      <ProjectGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
        theme={theme}
      />
    </div>
  );
}
