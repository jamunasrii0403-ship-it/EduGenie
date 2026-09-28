import React from 'react';
import { PageView } from '../types';
import {
  LayoutDashboard,
  BotMessageSquare,
  HelpCircle,
  FileText,
  CalendarDays,
  BarChart3,
  Settings,
  Sparkles,
  ArrowLeft,
  X,
  GraduationCap,
} from 'lucide-react';

interface SidebarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  theme: 'light' | 'dark';
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onNavigate,
  mobileOpen,
  onCloseMobile,
  theme,
}) => {
  const menuItems: { id: PageView; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: 'chat',
      label: 'Ask EduGenie',
      icon: <BotMessageSquare className="w-5 h-5" />,
      badge: 'AI',
    },
    {
      id: 'quiz',
      label: 'Quiz Generator',
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      id: 'notes',
      label: 'Smart Notes',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: 'planner',
      label: 'Study Planner',
      icon: <CalendarDays className="w-5 h-5" />,
    },
    {
      id: 'progress',
      label: 'Learning Progress',
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  const handleItemClick = (id: PageView) => {
    onNavigate(id);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 flex flex-col transition-all duration-300 ease-in-out lg:static lg:translate-x-0 border-r ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800 text-slate-200'
            : 'bg-white border-slate-200 text-slate-800'
        } ${mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
      >
        {/* Brand Header */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                EduGenie
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Gemini Powered Study Hub
              </span>
            </div>
          </div>
          <button
            onClick={onCloseMobile}
            className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Tag Banner */}
        <div className="mx-4 my-3 px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50 flex items-center gap-2 text-xs">
          <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <div className="leading-tight">
            <p className="font-semibold text-purple-900 dark:text-purple-200">
              Naan Mudhalvan Project
            </p>
            <p className="text-[10px] text-purple-700 dark:text-purple-400">
              College Prototype Demo
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          <div className="px-3 pb-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Menu
          </div>
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Student Card & Return to Landing */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-3 px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-xs">
              AS
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                Aditya Sharma
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                B.Tech CS · 3rd Year
              </p>
            </div>
          </div>

          <button
            onClick={() => handleItemClick('landing')}
            className="w-full flex items-center justify-center gap-2 text-xs font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 py-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Public Landing</span>
          </button>
        </div>
      </aside>
    </>
  );
};
