import React from 'react';
import { PageView } from '../types';
import {
  BotMessageSquare,
  HelpCircle,
  FileText,
  CalendarDays,
  ArrowRight,
  Flame,
  CheckCircle,
  Trophy,
  Clock,
  Sparkles,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

interface DashboardHomeProps {
  onNavigate: (page: PageView) => void;
  studentName?: string;
  theme: 'light' | 'dark';
}

export const DashboardHome: React.FC<DashboardHomeProps> = ({
  onNavigate,
  studentName = 'Student',
  theme,
}) => {
  const cards = [
    {
      id: 'chat' as PageView,
      title: 'Ask EduGenie',
      description: 'Ask questions and get AI-powered explanations.',
      buttonText: 'Ask Now',
      icon: <BotMessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      accentColor: 'indigo',
      badge: 'Interactive AI',
    },
    {
      id: 'quiz' as PageView,
      title: 'Quiz Generator',
      description: 'Generate personalized quizzes from any topic.',
      buttonText: 'Create Quiz',
      icon: <HelpCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      accentColor: 'purple',
      badge: 'Auto Evaluator',
    },
    {
      id: 'notes' as PageView,
      title: 'Smart Notes',
      description: 'Turn lengthy notes into simple study points.',
      buttonText: 'Summarize',
      icon: <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      accentColor: 'indigo',
      badge: 'Key Terms Extractor',
    },
    {
      id: 'planner' as PageView,
      title: 'Study Planner',
      description: 'Create a personalized study schedule.',
      buttonText: 'Plan Study',
      icon: <CalendarDays className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      accentColor: 'purple',
      badge: 'Smart Timetable',
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Greeting Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white shadow-lg relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 text-xs font-medium text-indigo-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gemini AI Engine · Ready to assist</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Welcome back, {studentName}! 👋
          </h1>
          <p className="text-indigo-200 text-sm sm:text-base max-w-xl">
            What would you like to learn today? Choose a tool below to accelerate your revision.
          </p>
        </div>

        {/* Daily Streak & Quick Stats */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-center backdrop-blur-xs">
            <div className="flex items-center justify-center gap-1 text-amber-300 font-bold text-lg">
              <Flame className="w-5 h-5 fill-amber-300" />
              <span>4</span>
            </div>
            <p className="text-[11px] text-indigo-200 font-medium">Day Streak</p>
          </div>

          <div className="px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-center backdrop-blur-xs">
            <div className="flex items-center justify-center gap-1 text-emerald-300 font-bold text-lg">
              <Trophy className="w-5 h-5" />
              <span>82%</span>
            </div>
            <p className="text-[11px] text-indigo-200 font-medium">Quiz Avg</p>
          </div>
        </div>

        {/* Subtle decorative glow */}
        <div className="absolute right-0 top-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Four Feature Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Core Study Modules
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Select an action to launch
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-md ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 hover:border-indigo-600'
                  : 'bg-white border-slate-200 hover:border-indigo-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      card.accentColor === 'indigo'
                        ? 'bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/60'
                        : 'bg-purple-50 dark:bg-purple-950/70 border border-purple-100 dark:border-purple-900/60'
                    }`}
                  >
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <button
                onClick={() => onNavigate(card.id)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>{card.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Dashboard Sections: Today's Tasks & Quick Subject Review */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule Card */}
        <div
          className={`lg:col-span-2 p-6 rounded-2xl border ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Today's Study Schedule
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Generated by AI Study Planner for Semester Exams
              </p>
            </div>
            <button
              onClick={() => onNavigate('planner')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>View Full Plan</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Python · Lists, Tuples & Comprehensions
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Completed · 1 Hour session
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Done
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Machine Learning · Supervised Regression Models
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Up Next · 1.5 Hours planned
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('notes')}
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Start Notes
              </button>
            </div>
          </div>
        </div>

        {/* Quick Quiz Launch */}
        <div
          className={`p-6 rounded-2xl border flex flex-col justify-between ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Ready for a Quick Test?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Test your knowledge on Python or Machine Learning. 5 targeted MCQs with instant scoring.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 py-1 border-b border-slate-100 dark:border-slate-800">
                <span>Subject:</span>
                <span className="font-semibold text-slate-900 dark:text-white">Python Core</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 py-1 border-b border-slate-100 dark:border-slate-800">
                <span>Questions:</span>
                <span className="font-semibold text-slate-900 dark:text-white">5 MCQs</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 py-1">
                <span>Difficulty:</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">Medium</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('quiz')}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Launch Practice Quiz</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
