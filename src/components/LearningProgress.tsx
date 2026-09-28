import React from 'react';
import { PageView } from '../types';
import {
  BarChart3,
  Award,
  BookCheck,
  Clock,
  TrendingUp,
  CheckCircle2,
  BotMessageSquare,
  FileText,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface LearningProgressProps {
  onNavigate: (page: PageView) => void;
  theme: 'light' | 'dark';
}

export const LearningProgress: React.FC<LearningProgressProps> = ({
  onNavigate,
  theme,
}) => {
  const statCards = [
    {
      label: 'Topics Completed',
      value: '12',
      change: '+3 this week',
      icon: <BookCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      color: 'indigo',
    },
    {
      label: 'Quizzes Taken',
      value: '8',
      change: '87.5% pass rate',
      icon: <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      color: 'purple',
    },
    {
      label: 'Average Score',
      value: '82%',
      change: 'Top 10% in class',
      icon: <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      color: 'emerald',
    },
    {
      label: 'Study Hours',
      value: '24 hrs',
      change: 'Goal: 30 hrs/month',
      icon: <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      color: 'amber',
    },
  ];

  const quizPerformance = [
    { subject: 'Python', score: 85, color: 'bg-indigo-600' },
    { subject: 'Java', score: 78, color: 'bg-purple-600' },
    { subject: 'Machine Learning', score: 82, color: 'bg-indigo-500' },
    { subject: 'Data Science', score: 90, color: 'bg-emerald-500' },
    { subject: 'Mathematics', score: 74, color: 'bg-amber-500' },
  ];

  const weeklyHours = [
    { day: 'Mon', hours: 3.5 },
    { day: 'Tue', hours: 4.0 },
    { day: 'Wed', hours: 2.5 },
    { day: 'Thu', hours: 3.0 },
    { day: 'Fri', hours: 4.5 },
    { day: 'Sat', hours: 5.0 },
    { day: 'Sun', hours: 1.5 },
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'Completed Python Quiz',
      detail: 'Scored 5/5 (100%) on Data Structures & Syntax',
      time: '2 hours ago',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
      link: 'quiz' as PageView,
    },
    {
      id: 2,
      title: 'Generated Machine Learning Notes',
      detail: 'Summarized 142 words into 5 핵심 bullet points',
      time: 'Yesterday',
      icon: <FileText className="w-4 h-4 text-indigo-500" />,
      link: 'notes' as PageView,
    },
    {
      id: 3,
      title: 'Asked about Neural Networks',
      detail: 'Learned activation function non-linearity and backpropagation',
      time: '2 days ago',
      icon: <BotMessageSquare className="w-4 h-4 text-purple-500" />,
      link: 'chat' as PageView,
    },
    {
      id: 4,
      title: 'Created Study Plan',
      detail: 'Formulated 7-day revision schedule for upcoming exam',
      time: '3 days ago',
      icon: <Calendar className="w-4 h-4 text-amber-500" />,
      link: 'planner' as PageView,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Learning Progress 📊
            </h1>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              Active Analytics
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Track your semester milestones, quiz accuracy, and weekly study cadence.
          </p>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className={`p-5 rounded-2xl border shadow-xs ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {stat.label}
              </span>
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">{stat.icon}</div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              {stat.value}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quiz Performance by Subject */}
        <div
          className={`lg:col-span-7 p-6 rounded-2xl border shadow-xs space-y-5 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Quiz Performance
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Evaluation accuracy across completed assessments
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              82% Overall
            </span>
          </div>

          <div className="space-y-4">
            {quizPerformance.map((item) => (
              <div key={item.subject} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-800 dark:text-slate-200">{item.subject}</span>
                  <span className="text-slate-600 dark:text-slate-400 tabular-nums">
                    {item.score}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Study Hours Bars */}
        <div
          className={`lg:col-span-5 p-6 rounded-2xl border shadow-xs space-y-4 flex flex-col justify-between ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Weekly Study Cadence
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Daily hours spent on EduGenie
                </p>
              </div>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tabular-nums">
                24 hrs total
              </span>
            </div>

            {/* Custom Bar Graph */}
            <div className="h-44 flex items-end justify-between gap-2 pt-4 px-2">
              {weeklyHours.map((bar) => {
                const heightPercent = Math.round((bar.hours / 6.0) * 100);
                return (
                  <div key={bar.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] text-slate-400 tabular-nums">{bar.hours}h</span>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-md h-full flex items-end overflow-hidden">
                      <div
                        className="w-full bg-indigo-600 hover:bg-indigo-500 transition-all rounded-t-md"
                        style={{ height: `${heightPercent}%` }}
                        title={`${bar.day}: ${bar.hours} Hours`}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      {bar.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-[11px] text-slate-400 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-center">
            🔥 Highest productivity recorded on Saturday (5.0 hours)
          </div>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div
        className={`p-6 rounded-2xl border shadow-xs ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Recent Activity
          </h3>
          <span className="text-xs text-slate-400">Live user event log</span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {recentActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => onNavigate(act.link)}
              className="py-3.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 px-2 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  {act.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                    {act.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{act.detail}</p>
                </div>
              </div>
              <span className="text-xs text-slate-400 shrink-0 tabular-nums">{act.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
