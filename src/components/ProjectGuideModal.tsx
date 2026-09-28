import React from 'react';
import {
  X,
  BookOpen,
  Code2,
  PlayCircle,
  GraduationCap,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Terminal,
  FileCode,
} from 'lucide-react';

interface ProjectGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export const ProjectGuideModal: React.FC<ProjectGuideModalProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <h2 className="text-lg font-bold">
                EduGenie · College Project & VS Code Guide
              </h2>
              <p className="text-xs text-indigo-200">
                Naan Mudhalvan Student Innovation Showcase
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 text-sm leading-relaxed">
          {/* Project Abstract */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Project Abstract</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              <strong>EduGenie</strong> is an educational artificial intelligence prototype designed to assist college students in mastering engineering and science disciplines. Powered conceptually by <strong>Google Gemini’s multimodal reasoning</strong>, this prototype delivers four functional pillars: conversational tutoring (Ask EduGenie), adaptive knowledge evaluation (Quiz Generator), rapid note synthesis (Smart Notes), and weekly exam timetabling (Study Planner).
            </p>
          </div>

          {/* Quick Faculty Viva Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
              Key Viva / Presentation Points for Faculty
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <p className="font-bold text-indigo-600 dark:text-indigo-400">
                  1. Zero Friction Prototyping
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Operates entirely on client-side simulation without requiring external API credits or backend server provisioning.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <p className="font-bold text-purple-600 dark:text-purple-400">
                  2. Realistic Gemini Reasoning
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Simulates multi-turn educational dialogues with code examples, takeaways, and diagnostic feedback.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <p className="font-bold text-indigo-600 dark:text-indigo-400">
                  3. Responsive UI/UX
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Built to work on desktop monitors, tablets, and smartphones with mobile drawer navigation and instant theme toggling.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <p className="font-bold text-purple-600 dark:text-purple-400">
                  4. Curriculum Subjects
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Pre-configured with question banks and knowledge sets for Python, Java, Machine Learning, Data Science, and Computer Science.
                </p>
              </div>
            </div>
          </div>

          {/* Running in VS Code Instructions */}
          <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-500" />
              <span>How to Run in VS Code (Beginner Guide)</span>
            </h3>

            {/* Method A */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                  A
                </span>
                <span>Method 1: Live Server in VS Code (Simplest)</span>
              </p>
              <ol className="list-decimal list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-1">
                <li>Open <strong>VS Code</strong> on your computer.</li>
                <li>Go to Extensions (Ctrl + Shift + X) and search for <strong>"Live Server"</strong> (by Ritwick Dey), click <strong>Install</strong>.</li>
                <li>Open the <strong>EduGenie</strong> project folder in VS Code (File &gt; Open Folder).</li>
                <li>Right-click on <code>index.html</code> and choose <strong>"Open with Live Server"</strong>.</li>
                <li>Your browser will automatically open at <code>http://127.0.0.1:5500</code> with the full prototype!</li>
              </ol>
            </div>

            {/* Method B */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">
                  B
                </span>
                <span>Method 2: Direct Open in Web Browser (No install needed)</span>
              </p>
              <ol className="list-decimal list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-1">
                <li>Navigate to your downloaded <strong>EduGenie</strong> project folder in your computer's File Explorer / Finder.</li>
                <li>Double click on <code>index.html</code> (or right click &gt; Open with &gt; Google Chrome / Microsoft Edge).</li>
                <li>The entire application runs immediately with zero dependencies!</li>
              </ol>
            </div>

            {/* Method C */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                  C
                </span>
                <span>Method 3: Node / Vite Dev Server</span>
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                In the terminal run: <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-950 font-mono text-[11px]">npm install</code> then <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-950 font-mono text-[11px]">npm run dev</code>. Open <code>http://localhost:3000</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            College Prototype Demo · Naan Mudhalvan
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
