import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, PageView } from '../types';
import { SAMPLE_CHAT_HISTORY, AI_KNOWLEDGE_BASE } from '../data/mockData';
import {
  Send,
  Sparkles,
  BotMessageSquare,
  User,
  Copy,
  Check,
  RotateCcw,
  Lightbulb,
  Code2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface AskEduGenieProps {
  onNavigate: (page: PageView) => void;
  theme: 'light' | 'dark';
}

export const AskEduGenie: React.FC<AskEduGenieProps> = ({ onNavigate, theme }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(SAMPLE_CHAT_HISTORY);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isProcessing]);

  const quickSuggestions = [
    { label: 'Explain simply', prompt: 'Can you explain the difference between supervised and unsupervised learning simply?' },
    { label: 'Give an example', prompt: 'Give me a real-world engineering example of Dijkstra algorithm.' },
    { label: 'Summarize', prompt: 'Summarize the 4 Pillars of Object Oriented Programming in Java.' },
    { label: 'Create quiz', prompt: 'Can you test me on Python data structures with 3 quick questions?' },
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isProcessing) return;

    const studentMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'student',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, studentMsg]);
    if (!textToSend) setInputValue('');
    setIsProcessing(true);
    setProcessingStatus('EduGenie is processing your question...');

    // Simulate multi-stage AI reasoning latency for realistic feel
    setTimeout(() => {
      setProcessingStatus('Consulting Gemini educational reasoning model...');
    }, 700);

    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let aiResponseText = '';
      let keyPoints: string[] | undefined = undefined;
      let codeSnippet: string | undefined = undefined;

      // Intelligent keyword matching to provide domain-accurate answers
      if (lowerQuery.includes('python')) {
        aiResponseText = AI_KNOWLEDGE_BASE['python'].response;
        keyPoints = AI_KNOWLEDGE_BASE['python'].keyPoints;
        codeSnippet = AI_KNOWLEDGE_BASE['python'].codeSnippet;
      } else if (lowerQuery.includes('java') || lowerQuery.includes('oop')) {
        aiResponseText = AI_KNOWLEDGE_BASE['java'].response;
        keyPoints = AI_KNOWLEDGE_BASE['java'].keyPoints;
        codeSnippet = AI_KNOWLEDGE_BASE['java'].codeSnippet;
      } else if (lowerQuery.includes('data science') || lowerQuery.includes('pandas')) {
        aiResponseText = AI_KNOWLEDGE_BASE['data science'].response;
        keyPoints = AI_KNOWLEDGE_BASE['data science'].keyPoints;
      } else if (lowerQuery.includes('supervised') || lowerQuery.includes('unsupervised')) {
        aiResponseText =
          'Supervised learning trains with labeled data (like flashcards with questions and answers). In contrast, Unsupervised learning works with unlabeled raw data to discover hidden clusters or patterns on its own.';
        keyPoints = [
          'Supervised: Classification (cat vs dog) & Regression (house price prediction)',
          'Unsupervised: Clustering (customer segmentation) & Dimensionality Reduction (PCA)',
          'Key Difference: Presence vs absence of explicit ground truth target labels',
        ];
      } else if (lowerQuery.includes('dijkstra')) {
        aiResponseText =
          'Dijkstra\'s algorithm calculates the shortest path from a starting node to every other node in a weighted graph with non-negative edge weights. A prime real-world example is Google Maps and GPS navigation computing the quickest turn-by-turn route to avoid congestion.';
        keyPoints = [
          'Greedy approach: selects closest unvisited vertex at each step',
          'Data structure: Priority Queue / Min-Heap yields O((V+E) log V) efficiency',
          'Application: Telecom routing protocols like OSPF (Open Shortest Path First)',
        ];
      } else if (lowerQuery.includes('quiz')) {
        aiResponseText =
          'Here is a quick concept check! In Python: 1) What is the difference between a List and a Tuple? (List is mutable, Tuple is immutable). 2) Which data structure provides O(1) key lookup? (Dictionary/Hash Table). Would you like to launch the full Quiz Generator?';
        keyPoints = [
          'List: Mutable [1, 2, 3]',
          'Tuple: Immutable (1, 2, 3)',
          'Dict: Key-Value pairs with hashed lookup',
        ];
      } else {
        // High quality general response
        aiResponseText = `Great question on "${query}"! In computer science and engineering studies, this concept is understood by breaking it into its core inputs, computational process, and output outcomes.`;
        keyPoints = [
          'Fundamental principle: Break complex problems into smaller deterministic sub-tasks',
          'Implementation: Prioritize modularity and predictable time-complexity',
          'Exam relevance: Always remember to pair definitions with a clear architectural diagram or code snippet',
        ];
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        keyPoints,
        codeSnippet,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsProcessing(false);
      setProcessingStatus('');
    }, 1400);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    setMessages(SAMPLE_CHAT_HISTORY);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Ask EduGenie 🤖
            </h1>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              Interactive Mode
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Your personal AI learning assistant
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
            title="Reset conversation to default sample"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo</span>
          </button>
          <button
            onClick={() => onNavigate('quiz')}
            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Take Quiz</span>
          </button>
        </div>
      </div>

      {/* Main Chat Container */}
      <div
        className={`rounded-2xl border shadow-xs flex flex-col h-[580px] overflow-hidden ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        {/* Messages Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5">
          {messages.map((msg) => {
            const isStudent = msg.sender === 'student';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isStudent ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    isStudent
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-xs'
                  }`}
                >
                  {isStudent ? <User className="w-4 h-4" /> : <BotMessageSquare className="w-4 h-4" />}
                </div>

                {/* Bubble Content */}
                <div
                  className={`group relative rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    isStudent
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : theme === 'dark'
                      ? 'bg-slate-800 border border-slate-700/60 text-slate-100 rounded-tl-none'
                      : 'bg-slate-100/90 border border-slate-200/60 text-slate-800 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <span className="text-[11px] font-semibold opacity-75">
                      {isStudent ? 'You' : 'EduGenie AI'}
                    </span>
                    <span className="text-[10px] opacity-60 tabular-nums">{msg.timestamp}</span>
                  </div>

                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Bullet Key Points if generated */}
                  {msg.keyPoints && msg.keyPoints.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200/40 dark:border-slate-700/40 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                        Key Learning Takeaways:
                      </p>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {msg.keyPoints.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-indigo-500 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Code snippet if generated */}
                  {msg.codeSnippet && (
                    <div className="mt-3 p-2.5 rounded-lg bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
                      <pre>{msg.codeSnippet}</pre>
                    </div>
                  )}

                  {/* Copy Button */}
                  {!isStudent && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="absolute -bottom-6 right-2 text-[11px] text-slate-400 hover:text-indigo-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span className="text-emerald-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {/* Processing Indicator */}
          {isProcessing && (
            <div className="flex gap-3 max-w-lg mr-auto">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 animate-pulse">
                <Sparkles className="w-4 h-4" />
              </div>
              <div
                className={`rounded-2xl rounded-tl-none px-4 py-3 text-xs flex items-center gap-2.5 ${
                  theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span>{processingStatus}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Buttons */}
        <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 shrink-0 flex items-center gap-1 font-medium">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              Suggestions:
            </span>
            {quickSuggestions.map((sug) => (
              <button
                key={sug.label}
                onClick={() => handleSend(sug.prompt)}
                disabled={isProcessing}
                className="whitespace-nowrap px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 transition-all font-medium active:scale-95 disabled:opacity-50"
              >
                {sug.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about your studies..."
              disabled={isProcessing}
              className={`flex-1 px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                theme === 'dark'
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isProcessing}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-xs disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 active:scale-95 shrink-0"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
