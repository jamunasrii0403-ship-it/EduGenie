/**
 * ============================================================================
 * EDUGENIE - Frontend Interactive Script
 * Naan Mudhalvan College Project Prototype
 * 
 * Note for Beginners:
 * This script provides full simulated interactivity for the EduGenie prototype.
 * No real server or Gemini API key is needed. Everything runs in the browser.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. THEME TOGGLER (Light / Dark Mode)
  initTheme();

  // 2. MOBILE SIDEBAR TOGGLER
  initSidebar();

  // 3. PAGE SPECIFIC INITIALIZERS
  if (document.getElementById('chat-form')) {
    initChat();
  }
  if (document.getElementById('quiz-container')) {
    initQuiz();
  }
  if (document.getElementById('notes-form')) {
    initNotes();
  }
  if (document.getElementById('planner-form')) {
    initPlanner();
  }
});

/**
 * Theme Manager: Saves preference in browser localStorage
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('edugenie-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('edugenie-theme', next);
    });
  }
}

/**
 * Mobile Sidebar Drawer
 */
function initSidebar() {
  const menuToggle = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('app-sidebar');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

/**
 * ASK EDUGENIE - Simulated Chatbot Interaction
 */
function initChat() {
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const suggestionChips = document.querySelectorAll('.suggestion-chip');

  if (!chatForm || !chatInput || !chatMessages) return;

  function appendMessage(sender, text) {
    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${sender}`;
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleSend(text) {
    const query = text.trim();
    if (!query) return;

    // Append user's question
    appendMessage('student', query);
    chatInput.value = '';

    // Show AI thinking indicator
    const thinkingBubble = document.createElement('div');
    thinkingBubble.className = 'message-bubble ai';
    thinkingBubble.id = 'ai-thinking';
    thinkingBubble.textContent = 'EduGenie is processing your question...';
    chatMessages.appendChild(thinkingBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate AI response delay
    setTimeout(() => {
      const el = document.getElementById('ai-thinking');
      if (el) el.remove();

      let reply = `That is an insightful question about "${query}". In computer science and engineering, breaking this down into foundational concepts and step-by-step algorithms is the key to exam success!`;
      
      const lower = query.toLowerCase();
      if (lower.includes('machine learning')) {
        reply = 'Machine learning is a method where computers learn patterns from data and use those patterns to make predictions or decisions without being explicitly programmed.';
      } else if (lower.includes('example')) {
        reply = 'Recommendation systems used by streaming and shopping platforms (like Spotify or Amazon) are common real-world examples of machine learning.';
      } else if (lower.includes('python')) {
        reply = 'Python is a high-level interpreted programming language famous for clear syntax, dynamic typing, and libraries like NumPy, Pandas, and Scikit-learn.';
      }

      appendMessage('ai', reply);
    }, 1200);
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSend(chatInput.value);
  });

  suggestionChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      handleSend(chip.getAttribute('data-prompt') || chip.textContent);
    });
  });
}

/**
 * QUIZ GENERATOR - Interactive Multiple Choice Flow
 */
function initQuiz() {
  const generateBtn = document.getElementById('generate-quiz-btn');
  const configSection = document.getElementById('quiz-config-section');
  const liveQuizSection = document.getElementById('quiz-live-section');
  const resultsSection = document.getElementById('quiz-results-section');
  const questionText = document.getElementById('quiz-question-text');
  const optionsContainer = document.getElementById('quiz-options-container');
  const nextBtn = document.getElementById('quiz-next-btn');
  const submitBtn = document.getElementById('quiz-submit-btn');
  const scoreDisplay = document.getElementById('quiz-score-display');
  const retakeBtn = document.getElementById('quiz-retake-btn');

  const sampleQuestions = [
    {
      q: 'Which programming language is commonly used for data analysis?',
      options: ['Python', 'HTML', 'CSS', 'SQL Only'],
      correct: 0
    },
    {
      q: 'What is the output of type([1, 2, 3]) in Python?',
      options: ['<class "tuple">', '<class "list">', '<class "set">', '<class "array">'],
      correct: 1
    },
    {
      q: 'Which keyword defines an asynchronous function in Python?',
      options: ['def async', 'async def', 'function*', 'promise def'],
      correct: 1
    },
    {
      q: 'How do you create a dictionary in Python with keys and values?',
      options: ['{"key": "value"}', '["key": "value"]', '("key", "value")', '<key = value>'],
      correct: 0
    },
    {
      q: 'Which built-in function returns the length of a list in Python?',
      options: ['count()', 'size()', 'len()', 'length()'],
      correct: 2
    }
  ];

  let currentIdx = 0;
  let userAnswers = {};

  if (!generateBtn) return;

  generateBtn.addEventListener('click', () => {
    generateBtn.textContent = 'Generating questions...';
    setTimeout(() => {
      configSection.style.display = 'none';
      liveQuizSection.style.display = 'block';
      currentIdx = 0;
      userAnswers = {};
      renderQuestion();
    }, 800);
  });

  function renderQuestion() {
    const qData = sampleQuestions[currentIdx];
    questionText.textContent = `Question ${currentIdx + 1}: ${qData.q}`;
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    qData.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = `btn-secondary`;
      btn.style.width = '100%';
      btn.style.justifyContent = 'flex-start';
      btn.style.textAlign = 'left';
      btn.style.marginBottom = '8px';
      btn.innerHTML = `<strong>${letters[idx]}.</strong>&nbsp;&nbsp;${opt}`;

      if (userAnswers[currentIdx] === idx) {
        btn.style.borderColor = 'var(--primary-color)';
        btn.style.background = 'rgba(79, 70, 229, 0.08)';
      }

      btn.addEventListener('click', () => {
        userAnswers[currentIdx] = idx;
        renderQuestion();
      });

      optionsContainer.appendChild(btn);
    });

    if (currentIdx === sampleQuestions.length - 1) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      submitBtn.style.display = 'none';
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIdx < sampleQuestions.length - 1) {
        currentIdx++;
        renderQuestion();
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let score = 0;
      sampleQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) score++;
      });

      liveQuizSection.style.display = 'none';
      resultsSection.style.display = 'block';
      const pct = Math.round((score / sampleQuestions.length) * 100);
      scoreDisplay.innerHTML = `Your Score: <strong>${score}/${sampleQuestions.length}</strong> (${pct}%)<br><span style="font-size:16px;color:var(--text-muted)">Great job! Keep learning.</span>`;
    });
  }

  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      resultsSection.style.display = 'none';
      configSection.style.display = 'block';
      generateBtn.textContent = 'Generate Quiz';
    });
  }
}

/**
 * SMART NOTES - Summarizer Demo
 */
function initNotes() {
  const summarizeBtn = document.getElementById('summarize-notes-btn');
  const notesOutput = document.getElementById('notes-output-section');
  const copyBtn = document.getElementById('copy-notes-btn');
  const downloadBtn = document.getElementById('download-notes-btn');

  if (!summarizeBtn) return;

  summarizeBtn.addEventListener('click', () => {
    summarizeBtn.textContent = 'Summarizing with AI...';
    setTimeout(() => {
      summarizeBtn.textContent = 'Summarize with AI';
      if (notesOutput) notesOutput.style.display = 'block';
    }, 1000);
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('AI Summary: Machine Learning allows computers to learn from data, identifies patterns, and powers recommendation systems.');
      alert('Summary copied to clipboard!');
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const text = `EDUGENIE NOTES\nMachine Learning allows computers to learn from data.\nKey Terms: Machine Learning, Dataset, Model, Prediction, Classification.`;
      const blob = new Blob([text], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'EduGenie_Study_Notes.txt';
      a.click();
    });
  }
}

/**
 * STUDY PLANNER - Schedule Generation Demo
 */
function initPlanner() {
  const planBtn = document.getElementById('generate-plan-btn');
  const scheduleTable = document.getElementById('planner-schedule-section');

  if (!planBtn) return;

  planBtn.addEventListener('click', () => {
    planBtn.textContent = 'Generating Study Plan...';
    setTimeout(() => {
      planBtn.textContent = 'Generate Study Plan';
      if (scheduleTable) scheduleTable.style.display = 'block';
    }, 900);
  });
}
