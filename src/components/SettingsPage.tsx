import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { INITIAL_STUDENT_PROFILE } from '../data/mockData';
import {
  Settings,
  User,
  GraduationCap,
  Globe,
  Palette,
  Bell,
  Check,
  Save,
  Moon,
  Sun,
  ShieldCheck,
} from 'lucide-react';

interface SettingsPageProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onUpdateProfileName?: (name: string) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  theme,
  onToggleTheme,
  onUpdateProfileName,
}) => {
  const [profile, setProfile] = useState<StudentProfile>(INITIAL_STUDENT_PROFILE);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateProfileName) {
      onUpdateProfileName(profile.name);
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Settings ⚙️
            </h1>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Student Preferences
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Configure your student identity, learning interface themes, and study notifications.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border shadow-xs space-y-6 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Student Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Student Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Student Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
                required
              />
            </div>

            {/* Course */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Course
              </label>
              <input
                type="text"
                value={profile.course}
                onChange={(e) => setProfile({ ...profile, course: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
                required
              />
            </div>

            {/* Year */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Year
              </label>
              <select
                value={profile.year}
                onChange={(e) => setProfile({ ...profile, year: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <option value="1st Year (Semester 1 & 2)">1st Year (Semester 1 & 2)</option>
                <option value="2nd Year (Semester 3 & 4)">2nd Year (Semester 3 & 4)</option>
                <option value="3rd Year (Semester 5 & 6)">3rd Year (Semester 5 & 6)</option>
                <option value="4th Year (Semester 7 & 8)">4th Year (Semester 7 & 8)</option>
              </select>
            </div>

            {/* College / Institution */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                College / Institution
              </label>
              <input
                type="text"
                value={profile.institution}
                onChange={(e) => setProfile({ ...profile, institution: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Preferences Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border shadow-xs space-y-6 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Application Preferences
            </h2>
          </div>

          <div className="space-y-5">
            {/* Language */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Language
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Primary interface and explanation language
                  </p>
                </div>
              </div>
              <select
                value={profile.language}
                onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                className={`px-3.5 py-2 rounded-xl border text-xs font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <option value="English">English</option>
                <option value="Tamil">Tamil (தமிழ்)</option>
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="Telugu">Telugu (తెలుగు)</option>
              </select>
            </div>

            {/* Theme Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-indigo-400" />
                ) : (
                  <Sun className="w-5 h-5 text-amber-500" />
                )}
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Theme</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Current active theme is {theme === 'dark' ? 'Dark' : 'Light'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    if (theme === 'dark') onToggleTheme();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    theme === 'light'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Light
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (theme === 'light') onToggleTheme();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Dark
                </button>
              </div>
            </div>

            {/* Notification Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Notification
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Quiz milestone alerts and study completion notifications
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setProfile({ ...profile, notifications: !profile.notifications })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  profile.notifications ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    profile.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Daily Reminders */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Study Reminders
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Notify before scheduled daily revision session
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setProfile({ ...profile, studyReminders: !profile.studyReminders })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  profile.studyReminders ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    profile.studyReminders ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex items-center justify-between pt-2">
          {saveSuccess ? (
            <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
              <Check className="w-4 h-4" />
              <span>Settings saved successfully!</span>
            </div>
          ) : (
            <span className="text-xs text-slate-400">
              Changes update immediately across active session.
            </span>
          )}

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};
