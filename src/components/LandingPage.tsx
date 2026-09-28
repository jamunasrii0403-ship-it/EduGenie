import React from 'react';
import { PageView } from '../types';
import {
  Sparkles,
  BotMessageSquare,
  HelpCircle,
  FileText,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  BrainCircuit,
  Compass,
  Zap,
  Award,
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: PageView) => void;
  theme: 'light' | 'dark';
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, theme }) => {
  const heroImage = '/src/assets/images/hero_ai_learning_1790586176153.jpg';
  const showcaseImage = '/src/assets/images/edugenie_showcase_1790586193665.jpg';

  const featureCards = [
    {
      id: 'chat' as PageView,
      icon: <BotMessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      badge: 'AI Learning',
      title: '📚 AI Learning Assistant',
      description:
        'Instant answers with intuitive explanations, step-by-step logic, and real-world examples for complex concepts.',
      actionText: 'Try AI Tutor',
    },
    {
      id: 'quiz' as PageView,
      icon: <HelpCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      badge: 'Assessment',
      title: '📝 Smart Quiz Generator',
      description:
        'Generate custom multiple-choice tests across engineering and science topics with automated scoring and feedback.',
      actionText: 'Generate Quiz',
    },
    {
      id: 'notes' as PageView,
      icon: <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      badge: 'Productivity',
      title: '📄 Notes Summary',
      description:
        'Transform dense textbooks and lecture notes into concise bullet points, key definition glossaries, and exam pointers.',
      actionText: 'Summarize Notes',
    },
    {
      id: 'planner' as PageView,
      icon: <CalendarDays className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      badge: 'Time Management',
      title: '📅 AI Study Planner',
      description:
        'Organize realistic, balanced revision timetables aligned with your upcoming exam dates and daily available hours.',
      actionText: 'Plan Schedule',
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/80 dark:border-slate-800">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(15,23,42,0))]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Naan Mudhalvan Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                <GraduationCap className="w-4 h-4" />
                <span>Naan Mudhalvan Student Innovation Project · 2026</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
                Learn Smarter with <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">EduGenie</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
                Your AI-powered learning assistant for smarter, faster and personalized learning. Master complex college engineering topics, generate dynamic quizzes, and craft personalized exam schedules in seconds.
              </p>

              {/* Hero Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 active:scale-95"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold transition-all shadow-xs"
                >
                  Explore Features
                </button>
              </div>

              {/* Quick Trust Points */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero API Key Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Instant Interactive Demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>College Curriculum Aligned</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 p-2">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={heroImage}
                    alt="EduGenie AI student learning assistant in action"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback gracefully if image fails
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle overlay accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="text-xs font-semibold text-indigo-300">Intelligent Learning Flow</p>
                      <p className="text-sm font-medium">Gemini Architecture Multi-turn Student Model</p>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Highlights */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-indigo-500 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Simulated AI Core</p>
                      <p className="text-[10px] text-slate-500">Gemini 1.5 Reasoner</p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Active Feedback</p>
                      <p className="text-[10px] text-slate-500">Instant score card</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Four Core Pillars
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Designed for Student Academic Success
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Every module is tailored to reduce study friction, test conceptual understanding, and keep learners on track for university examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((feat) => (
            <div
              key={feat.title}
              className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              <button
                onClick={() => onNavigate(feat.id)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>{feat.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works-section"
        className="py-20 border-y border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <p className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
              Workflow
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              How EduGenie Works
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Three streamlined steps from raw syllabus concepts to exam mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Select or Inquire Subject
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Choose from Python, Java, Machine Learning, Data Science, or paste your lecture text for instant processing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
              <div className="w-9 h-9 rounded-full bg-purple-600 text-white font-bold text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Generate Interactive Assets
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Generate 5 to 15 quiz questions, extract critical key terms, or have conversational AI tutor explanations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
              <div className="w-9 h-9 rounded-full bg-indigo-700 text-white font-bold text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Track, Plan & Excel
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Follow your auto-scheduled study timetable, assess performance scores, and review weak areas before semester tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* College Project / Naan Mudhalvan Highlight Banner */}
      <section id="about-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-purple-950 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-indigo-200">
                <Award className="w-3.5 h-3.5" />
                <span>Naan Mudhalvan Academic Prototype Demonstration</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Built specifically for College Engineering & Science Students
              </h3>
              <p className="text-indigo-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                This project represents a fully interactive frontend demonstration showcasing how Google Gemini's cognitive reasoning can revolutionize higher education learning in Tamil Nadu colleges under the Naan Mudhalvan skilling initiative.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-6 py-3 rounded-xl bg-white text-indigo-950 font-bold text-sm hover:bg-indigo-50 transition-colors shadow-sm"
                >
                  Launch Student Dashboard
                </button>
                <button
                  onClick={() => onNavigate('chat')}
                  className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 font-semibold text-sm transition-colors"
                >
                  Test Simulated AI Chat
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs rounded-xl overflow-hidden border border-white/20 bg-white/5 p-2 backdrop-blur-xs">
                <img
                  src={showcaseImage}
                  alt="EduGenie Prototype Features Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-lg object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <p className="text-center text-[11px] text-indigo-300 mt-2">
                  Full Stack UI Prototype Architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-10 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              EduGenie · Learning Assistant
            </span>
            <span>—</span>
            <span>Naan Mudhalvan College Project Prototype</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('dashboard')} className="hover:text-indigo-600 transition-colors">
              Dashboard
            </button>
            <button onClick={() => onNavigate('quiz')} className="hover:text-indigo-600 transition-colors">
              Quiz Generator
            </button>
            <button onClick={() => onNavigate('notes')} className="hover:text-indigo-600 transition-colors">
              Smart Notes
            </button>
            <button onClick={() => onNavigate('planner')} className="hover:text-indigo-600 transition-colors">
              Study Planner
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
