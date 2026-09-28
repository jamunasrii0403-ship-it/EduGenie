export type PageView =
  | 'landing'
  | 'dashboard'
  | 'chat'
  | 'quiz'
  | 'notes'
  | 'planner'
  | 'progress'
  | 'settings';

export interface ChatMessage {
  id: string;
  sender: 'student' | 'ai';
  text: string;
  timestamp: string;
  topic?: string;
  keyPoints?: string[];
  codeSnippet?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index 0-3
  explanation: string;
}

export interface QuizResult {
  total: number;
  score: number;
  percentage: number;
  subject: string;
  topic: string;
  difficulty: string;
  userAnswers: { [questionId: number]: number };
}

export interface NoteSummary {
  title: string;
  subject: string;
  originalWordCount: number;
  summaryWordCount: number;
  keyBulletPoints: string[];
  keyTerms: string[];
  examTips: string[];
}

export interface StudyPlanItem {
  id: string;
  day: string;
  subject: string;
  topic: string;
  duration: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Normal';
}

export interface StudentProfile {
  name: string;
  email: string;
  course: string;
  year: string;
  institution: string;
  studentId: string;
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
  studyReminders: boolean;
}
