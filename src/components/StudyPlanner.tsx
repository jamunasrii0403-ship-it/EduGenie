import React, { useState } from 'react';
import { StudyPlanItem } from '../types';
import { INITIAL_STUDY_PLAN } from '../data/mockData';
import {
  CalendarDays,
  Sparkles,
  CheckCircle,
  Circle,
  Clock,
  BookOpen,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface StudyPlannerProps {
  theme: 'light' | 'dark';
}

export const StudyPlanner: React.FC<StudyPlannerProps> = ({ theme }) => {
  // Form Inputs
  const [examDate, setExamDate] = useState<string>('2026-10-25');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
    'Python',
    'Machine Learning',
    'Java',
  ]);
  const [studyHours, setStudyHours] = useState<string>('2 Hours/day');
  const [difficultyLevel, setDifficultyLevel] = useState<string>('Intermediate');
  const [preferredTime, setPreferredTime] = useState<string>('Evening (6 PM - 9 PM)');

  // Plan State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [planItems, setPlanItems] = useState<StudyPlanItem[]>(INITIAL_STUDY_PLAN);

  const availableSubjects = [
    'Python',
    'Machine Learning',
    'Java',
    'Data Science',
    'Mathematics',
    'Computer Science',
  ];

  const toggleSubject = (sub: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]
    );
  };

  const toggleTaskCompleted = (id: string) => {
    setPlanItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleGeneratePlan = () => {
    setIsGenerating(true);

    setTimeout(() => {
      // Generate updated adaptive study timetable
      const subjectsPool = selectedSubjects.length > 0 ? selectedSubjects : ['Python', 'Java'];
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

      const topicsMap: Record<string, string[]> = {
        Python: ['Lists & Tuples', 'Functions & Decorators', 'File I/O & JSON', 'AsyncIO & Generators'],
        Java: ['OOP & Interfaces', 'Exception Handling', 'Collections & Generics', 'JVM Architecture'],
        'Machine Learning': ['Supervised Regression', 'Decision Trees & Ensembles', 'Neural Networks', 'Model Evaluation & AUC'],
        'Data Science': ['Pandas DataFrame Ops', 'Matplotlib Visualization', 'Data Cleaning & Outliers', 'SQL Joins & GroupBy'],
        Mathematics: ['Matrix Transformations', 'Calculus & Gradients', 'Probability & Bayes', 'Vector Spaces'],
        'Computer Science': ['Binary Search Trees', 'Deadlock & Memory Management', 'Transport Layer TCP/IP', 'Lexical Parsing'],
      };

      const newPlan: StudyPlanItem[] = days.map((day, idx) => {
        const sub = subjectsPool[idx % subjectsPool.length];
        const topics = topicsMap[sub] || ['Key Concepts Review', 'Exam Question Paper Drill'];
        const topic = topics[idx % topics.length];
        return {
          id: `plan-${Date.now()}-${idx}`,
          day,
          subject: sub,
          topic,
          duration: idx % 2 === 0 ? '1 Hour' : '1.5 Hours',
          completed: false,
          priority: idx === 0 || idx === 4 ? 'High' : 'Medium',
        };
      });

      setPlanItems(newPlan);
      setIsGenerating(false);
    }, 1100);
  };

  const completedCount = planItems.filter((i) => i.completed).length;
  const progressPercent = Math.round((completedCount / planItems.length) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              AI Study Planner 📅
            </h1>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
              Personalized Timetable
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Create an optimized weekly study schedule tailored to your exam schedule and daily availability.
          </p>
        </div>
      </div>

      {/* Configuration Form */}
      <div
        className={`p-6 rounded-2xl border shadow-xs ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Exam Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              <span>Target Exam Date</span>
            </label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                theme === 'dark'
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          {/* Available Study Hours */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              <span>Available Study Hours</span>
            </label>
            <select
              value={studyHours}
              onChange={(e) => setStudyHours(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                theme === 'dark'
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="1 Hour/day">1 Hour/day (Light)</option>
              <option value="2 Hours/day">2 Hours/day (Balanced)</option>
              <option value="3 Hours/day">3 Hours/day (Intensive)</option>
              <option value="4+ Hours/day">4+ Hours/day (Exam Sprint)</option>
            </select>
          </div>

          {/* Difficulty Level */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              <span>Difficulty Level</span>
            </label>
            <select
              value={difficultyLevel}
              onChange={(e) => setDifficultyLevel(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                theme === 'dark'
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="Beginner">Beginner (Foundation First)</option>
              <option value="Intermediate">Intermediate (Concepts & Practice)</option>
              <option value="Advanced">Advanced (Deep Dives & Mock Papers)</option>
            </select>
          </div>

          {/* Preferred Study Time */}
          <div className="space-y-1.5 md:col-span-2 lg:col-span-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Preferred Study Time
            </label>
            <select
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                theme === 'dark'
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="Early Morning (6 AM - 8 AM)">Early Morning (6 AM - 8 AM)</option>
              <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
              <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
              <option value="Late Night (9 PM - 12 AM)">Late Night (9 PM - 12 AM)</option>
            </select>
          </div>

          {/* Multi-select Subjects */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>Select Active Subjects</span>
              <span className="text-slate-400 font-normal">Click to toggle</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {availableSubjects.map((sub) => {
                const isSelected = selectedSubjects.includes(sub);
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => toggleSubject(sub)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex justify-end">
          <button
            onClick={handleGeneratePlan}
            disabled={isGenerating}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-white" />
                <span>EduGenie is balancing your schedule...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-white" />
                <span>Generate Study Plan</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Progress Indicator Card */}
      <div
        className={`p-6 rounded-2xl border ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Weekly Completion Status
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {completedCount} of {planItems.length} Study Sessions Completed
            </h3>
          </div>
          <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">
            {progressPercent}%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Schedule Table / Cards */}
      <div
        className={`rounded-2xl border overflow-hidden shadow-xs ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Weekly Study Plan
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click checkboxes as you complete daily topics to update your progress.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {preferredTime.split('(')[0]}
          </span>
        </div>

        {/* Desktop Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead
              className={`text-xs font-bold uppercase tracking-wider border-b ${
                theme === 'dark'
                  ? 'bg-slate-800/60 text-slate-400 border-slate-800'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              <tr>
                <th className="py-3 px-4 w-12 text-center">Status</th>
                <th className="py-3 px-4">Day</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Topic</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {planItems.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => toggleTaskCompleted(item.id)}
                  className={`cursor-pointer transition-colors ${
                    item.completed
                      ? 'bg-emerald-50/30 dark:bg-emerald-950/10'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <td className="py-3.5 px-4 text-center">
                    <button
                      type="button"
                      aria-label="Toggle task"
                      className="text-slate-400 hover:text-indigo-600"
                    >
                      {item.completed ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                      )}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    {item.day}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-medium text-indigo-600 dark:text-indigo-400">
                      {item.subject}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`${
                        item.completed
                          ? 'line-through text-slate-400 dark:text-slate-500'
                          : 'text-slate-800 dark:text-slate-200 font-medium'
                      }`}
                    >
                      {item.topic}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-600 dark:text-slate-400 tabular-nums">
                    {item.duration}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        item.priority === 'High'
                          ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
