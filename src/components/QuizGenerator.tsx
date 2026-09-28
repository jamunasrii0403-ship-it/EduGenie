import React, { useState } from 'react';
import { QuizQuestion, QuizResult } from '../types';
import { SUBJECTS_LIST, QUIZ_DATABASE } from '../data/mockData';
import {
  HelpCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Award,
  AlertCircle,
} from 'lucide-react';

interface QuizGeneratorProps {
  theme: 'light' | 'dark';
}

export const QuizGenerator: React.FC<QuizGeneratorProps> = ({ theme }) => {
  // Form State
  const [selectedSubject, setSelectedSubject] = useState<string>('Python');
  const [topicInput, setTopicInput] = useState<string>('Data analysis and syntax fundamentals');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>('Medium');

  // Quiz Execution State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [quizActive, setQuizActive] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  // Generate Quiz simulation
  const handleGenerateQuiz = () => {
    setIsGenerating(true);

    setTimeout(() => {
      // Pick matching questions from database or generate adaptive questions
      const basePool = QUIZ_DATABASE[selectedSubject] || QUIZ_DATABASE['Python'];
      // Duplicate/slice to match requested count if needed
      let selected: QuizQuestion[] = [];
      while (selected.length < questionCount) {
        selected = [...selected, ...basePool];
      }
      const finalQuestions = selected.slice(0, questionCount).map((q, idx) => ({
        ...q,
        id: idx + 1,
      }));

      setQuestions(finalQuestions);
      setCurrentIndex(0);
      setSelectedAnswers({});
      setQuizSubmitted(false);
      setResult(null);
      setIsGenerating(false);
      setQuizActive(true);
    }, 1100);
  };

  const handleSelectOption = (optionIndex: number) => {
    if (quizSubmitted) return;
    const currentQ = questions[currentIndex];
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });

    const percentage = Math.round((score / questions.length) * 100);
    const newResult: QuizResult = {
      total: questions.length,
      score,
      percentage,
      subject: selectedSubject,
      topic: topicInput,
      difficulty,
      userAnswers: selectedAnswers,
    };

    setResult(newResult);
    setQuizSubmitted(true);
  };

  const handleReset = () => {
    setQuizActive(false);
    setQuizSubmitted(false);
    setResult(null);
    setSelectedAnswers({});
    setCurrentIndex(0);
  };

  const currentQ = questions[currentIndex];
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              AI Quiz Generator 📝
            </h1>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
              Interactive Test Bank
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Generate personalized quizzes from any topic to evaluate your concept mastery.
          </p>
        </div>

        {quizActive && (
          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>New Quiz Config</span>
          </button>
        )}
      </div>

      {/* Mode 1: Configuration Form */}
      {!quizActive && (
        <div
          className={`p-6 sm:p-8 rounded-2xl border shadow-xs ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-left space-y-1 mb-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Configure Your Assessment
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Select your engineering curriculum subject and specific syllabus topic.
              </p>
            </div>

            {/* Subject Dropdown */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                {SUBJECTS_LIST.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic Input */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Topic
              </label>
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                placeholder="Enter topic (e.g. Arrays, Recursion, Supervised Learning, SQL Joins)"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400'
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

            {/* Question Count & Difficulty Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Number of Questions */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Number of Questions
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[5, 10, 15].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setQuestionCount(count)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        questionCount === count
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Easy', 'Medium', 'Hard'].map((diff) => (
                    <button
                      key={diff}
                      type="button"
                      onClick={() => setDifficulty(diff)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        difficulty === diff
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleGenerateQuiz}
                disabled={isGenerating || !topicInput.trim()}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin text-white" />
                    <span>EduGenie is generating your questions...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Generate Quiz</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Live Quiz View */}
      {quizActive && currentQ && !quizSubmitted && (
        <div
          className={`p-6 sm:p-8 rounded-2xl border shadow-xs space-y-6 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                {selectedSubject} · {difficulty}
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-xs">
                {topicInput}
              </span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 tabular-nums">
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>

          {/* Stepper Dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {questions.map((q, idx) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    isCurrent
                      ? 'w-8 bg-indigo-600'
                      : isAnswered
                      ? 'w-4 bg-emerald-500'
                      : 'w-4 bg-slate-200 dark:bg-slate-700'
                  }`}
                  title={`Question ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Question Text */}
          <div className="py-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentIndex + 1}. {currentQ.question}
            </h2>
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQ.id] === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex items-center gap-3.5 group ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/50 dark:border-indigo-500 shadow-xs'
                      : 'border-slate-200 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-slate-800/50'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-100 group-hover:text-indigo-700'
                    }`}
                  >
                    {optionLetters[idx]}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isSelected
                        ? 'text-indigo-950 dark:text-indigo-200 font-semibold'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 flex items-center gap-1.5 transition-all shadow-xs"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <span>Submit Quiz</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mode 3: Score Card & Results Review */}
      {quizSubmitted && result && (
        <div className="space-y-6">
          {/* Animated Score Card */}
          <div
            className={`p-8 rounded-3xl border text-center shadow-lg relative overflow-hidden ${
              theme === 'dark'
                ? 'bg-gradient-to-b from-slate-900 to-indigo-950/70 border-slate-800'
                : 'bg-gradient-to-b from-white to-indigo-50/50 border-slate-200'
            }`}
          >
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center shadow-xs">
                {result.percentage >= 70 ? (
                  <Trophy className="w-8 h-8 text-amber-500" />
                ) : (
                  <Award className="w-8 h-8 text-indigo-500" />
                )}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Quiz Assessment Completed
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Your Score: {result.score}/{result.total}
                </h2>
                <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 my-2 tabular-nums">
                  {result.percentage}%
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {result.percentage >= 80
                    ? 'Great job! Keep learning.'
                    : result.percentage >= 50
                    ? 'Good effort! Review the explanations below to strengthen weak areas.'
                    : 'Keep practicing! Review the concepts and retake the quiz.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleGenerateQuiz}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Change Topic
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Question Review Breakdown */}
          <div
            className={`p-6 rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span>Detailed Question Review</span>
              <span className="text-xs font-normal text-slate-500">({questions.length} questions)</span>
            </h3>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAnswer = selectedAnswers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border ${
                      isCorrect
                        ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20'
                        : 'border-red-200 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {idx + 1}. {q.question}
                      </p>
                      {isCorrect ? (
                        <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Correct</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-xs font-bold shrink-0">
                          <XCircle className="w-4 h-4" />
                          <span>Incorrect</span>
                        </div>
                      )}
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1 mb-2">
                      <p>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Your choice:
                        </span>{' '}
                        {userAnswer !== undefined ? q.options[userAnswer] : 'Not answered'}
                      </p>
                      {!isCorrect && (
                        <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                          <span className="font-semibold">Correct answer:</span> {q.options[q.correctAnswer]}
                        </p>
                      )}
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 p-2.5 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{q.explanation}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
