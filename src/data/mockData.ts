import { QuizQuestion, StudyPlanItem, NoteSummary, StudentProfile } from '../types';

export const SUBJECTS_LIST = [
  'Python',
  'Java',
  'Data Science',
  'Machine Learning',
  'Mathematics',
  'Computer Science',
] as const;

export const SAMPLE_CHAT_HISTORY = [
  {
    id: 'msg-1',
    sender: 'student' as const,
    text: 'Can you explain machine learning in simple words?',
    timestamp: '10:14 AM',
  },
  {
    id: 'msg-2',
    sender: 'ai' as const,
    text: 'Machine learning is a method where computers learn patterns from data and use those patterns to make predictions or decisions without being explicitly programmed.',
    timestamp: '10:14 AM',
    keyPoints: [
      'Data-driven: Learns directly from historical examples',
      'Pattern recognition: Uncovers subtle trends humans might miss',
      'Continuous improvement: Becomes more accurate as more data is provided',
    ],
  },
  {
    id: 'msg-3',
    sender: 'student' as const,
    text: 'Give me a real-world example.',
    timestamp: '10:15 AM',
  },
  {
    id: 'msg-4',
    sender: 'ai' as const,
    text: 'Recommendation systems used by streaming and shopping platforms are common examples of machine learning. For instance, Spotify analyzes songs you like and predicts which new tracks match your taste.',
    timestamp: '10:15 AM',
    keyPoints: [
      'Spotify & YouTube music recommendations',
      'Netflix movie recommendation algorithms',
      'Spam email filters and credit card fraud detection',
    ],
  },
];

export const AI_KNOWLEDGE_BASE: Record<
  string,
  { response: string; keyPoints?: string[]; codeSnippet?: string }
> = {
  python: {
    response:
      'Python is a high-level, interpreted programming language known for its clean, readable syntax and massive standard library. It is widely used in AI, Data Science, Web Development, and Automation.',
    keyPoints: [
      'Dynamically typed and garbage collected',
      'Rich ecosystem: NumPy, Pandas, Scikit-learn, TensorFlow',
      'Multi-paradigm: supports procedural, OOP, and functional styles',
    ],
    codeSnippet: `# Quick Python List Comprehension Example
squares = [x**2 for x in range(1, 6)]
print("Squares:", squares) # Output: [1, 4, 9, 16, 25]`,
  },
  java: {
    response:
      'Java is a class-based, object-oriented programming language designed around the "Write Once, Run Anywhere" (WORA) philosophy using the Java Virtual Machine (JVM).',
    keyPoints: [
      'Strongly typed with automatic memory management via garbage collection',
      'Core OOP pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction',
      'Foundational in enterprise software, Android development, and big data systems',
    ],
    codeSnippet: `public class EduStudent {
    private String name;
    public EduStudent(String name) { this.name = name; }
    public void greet() { System.out.println("Hello, " + name); }
}`,
  },
  'machine learning': {
    response:
      'Machine Learning (ML) is a branch of artificial intelligence focused on training computational models on data so they can classify inputs or predict numeric values.',
    keyPoints: [
      'Supervised: Labeled data (e.g., Linear Regression, Random Forest, SVM)',
      'Unsupervised: Unlabeled data (e.g., K-Means clustering, PCA)',
      'Reinforcement: Agent learns through actions and reward signals',
    ],
  },
  'data science': {
    response:
      'Data Science is an interdisciplinary field combining statistics, computational mathematics, data visualization, and domain expertise to extract actionable insights from structured and raw data.',
    keyPoints: [
      'Lifecycle: Collection -> Cleaning -> EDA -> Modeling -> Deployment',
      'Essential tools: Python, SQL, Tableau, Pandas, Matplotlib',
      'Core focus: Solving real business and academic problems using evidence',
    ],
  },
  mathematics: {
    response:
      'Mathematics forms the theoretical foundation of modern computing and artificial intelligence, notably Linear Algebra (tensors, matrices), Calculus (gradient descent), and Probability & Statistics.',
    keyPoints: [
      'Linear Algebra: Vector transformations and matrix multiplications',
      'Calculus: Derivatives to minimize loss functions during training',
      'Probability: Bayes theorem, distributions, confidence intervals',
    ],
  },
  'computer science': {
    response:
      'Computer Science encompasses the study of algorithmic processes, data structures, computational complexity, computer hardware architecture, networks, and software engineering.',
    keyPoints: [
      'Data Structures: Arrays, Linked Lists, Trees, Hash Maps, Graphs',
      'Algorithms: Sorting, Searching, Dynamic Programming, Greedy',
      'Time & Space Complexity: Big-O notation evaluation',
    ],
  },
};

export const QUIZ_DATABASE: Record<string, QuizQuestion[]> = {
  Python: [
    {
      id: 1,
      question: 'Which programming language is commonly used for data analysis and scientific computing?',
      options: ['Python', 'HTML', 'CSS', 'SQL Only'],
      correctAnswer: 0,
      explanation: 'Python is the industry standard for data science due to libraries like NumPy, Pandas, and SciPy.',
    },
    {
      id: 2,
      question: 'What is the output of type([1, 2, 3]) in Python?',
      options: ['<class "tuple">', '<class "list">', '<class "set">', '<class "array">'],
      correctAnswer: 1,
      explanation: 'Square brackets define a Python list, which is an ordered, mutable sequence of items.',
    },
    {
      id: 3,
      question: 'Which keyword is used to define an asynchronous function in Python?',
      options: ['def async', 'async def', 'function*', 'promise def'],
      correctAnswer: 1,
      explanation: 'Python uses the "async def" syntax to declare coroutines with the asyncio module.',
    },
    {
      id: 4,
      question: 'How do you create a dictionary in Python with keys and values?',
      options: ['{"key": "value"}', '["key": "value"]', '("key", "value")', '<key = value>'],
      correctAnswer: 0,
      explanation: 'Curly braces with colon-separated key-value pairs define Python dictionaries.',
    },
    {
      id: 5,
      question: 'Which built-in function returns the total number of items in an iterable?',
      options: ['count()', 'size()', 'len()', 'length()'],
      correctAnswer: 2,
      explanation: 'len() is the standard Python built-in function to query object length.',
    },
  ],
  Java: [
    {
      id: 1,
      question: 'What is the default value of a boolean variable declared in a Java class?',
      options: ['true', 'false', '0', 'null'],
      correctAnswer: 1,
      explanation: 'In Java, uninitialized instance boolean variables default to false.',
    },
    {
      id: 2,
      question: 'Which OOP concept promotes code reusability by allowing a class to acquire properties of another class?',
      options: ['Polymorphism', 'Encapsulation', 'Inheritance', 'Abstraction'],
      correctAnswer: 2,
      explanation: 'Inheritance allows a subclass to inherit attributes and methods from a superclass using the "extends" keyword.',
    },
    {
      id: 3,
      question: 'Which Java memory area is responsible for storing object instances?',
      options: ['Stack Memory', 'Heap Memory', 'Program Counter', 'Native Method Stack'],
      correctAnswer: 1,
      explanation: 'All object instances and their corresponding instance variables are allocated on the Java Heap.',
    },
    {
      id: 4,
      question: 'Which keyword prevents a method from being overridden in Java?',
      options: ['static', 'abstract', 'final', 'const'],
      correctAnswer: 2,
      explanation: 'The "final" keyword applied to a method prevents subclasses from overriding it.',
    },
    {
      id: 5,
      question: 'What is the size of an int data type in Java?',
      options: ['16 bits', '32 bits', '64 bits', '8 bits'],
      correctAnswer: 1,
      explanation: 'In Java, an int is a signed two\'s complement 32-bit integer.',
    },
  ],
  'Machine Learning': [
    {
      id: 1,
      question: 'Which type of learning algorithm relies on labeled training datasets with ground truth targets?',
      options: ['Supervised Learning', 'Unsupervised Learning', 'Self-Organizing Maps', 'Reinforcement Learning'],
      correctAnswer: 0,
      explanation: 'Supervised learning pairs each training input with an explicit ground-truth target label.',
    },
    {
      id: 2,
      question: 'What is the primary role of an activation function in an Artificial Neural Network?',
      options: [
        'To speed up file reading',
        'To introduce non-linearity into network predictions',
        'To format data into CSV',
        'To allocate CPU memory',
      ],
      correctAnswer: 1,
      explanation: 'Activation functions (like ReLU, Sigmoid) introduce non-linear mapping, allowing neural networks to learn complex relationships.',
    },
    {
      id: 3,
      question: 'Which technique is primarily used to prevent model overfitting on training data?',
      options: ['Regularization (L1/L2)', 'Increasing learning rate to 100', 'Deleting validation sets', 'Duplicate rows'],
      correctAnswer: 0,
      explanation: 'Regularization penalties (Lasso L1 / Ridge L2) constrain model weight magnitudes to discourage overfitting.',
    },
    {
      id: 4,
      question: 'In a confusion matrix for binary classification, what does FP stand for?',
      options: ['Final Probability', 'False Positive', 'Function Prediction', 'Fast Propagation'],
      correctAnswer: 1,
      explanation: 'FP stands for False Positive, where a negative instance was incorrectly predicted as positive.',
    },
    {
      id: 5,
      question: 'Which optimization algorithm calculates gradients and iteratively adjusts parameters to minimize loss?',
      options: ['Gradient Descent', 'Bubble Sort', 'K-Means', 'Dijkstra Algorithm'],
      correctAnswer: 0,
      explanation: 'Gradient Descent (and its variants like Adam) computes partial derivatives to step towards the global minimum of the loss surface.',
    },
  ],
  'Data Science': [
    {
      id: 1,
      question: 'Which library is standard for tabular data manipulation and DataFrame analysis in Python?',
      options: ['Pandas', 'Flask', 'Django', 'Pygame'],
      correctAnswer: 0,
      explanation: 'Pandas provides high-performance Series and DataFrame structures for slicing, grouping, and transforming tabular datasets.',
    },
    {
      id: 2,
      question: 'Which metric measures the dispersion or spread of data points relative to their mean?',
      options: ['Standard Deviation', 'Mode', 'Median', 'Count'],
      correctAnswer: 0,
      explanation: 'Standard Deviation evaluates the average distance between individual observations and the sample mean.',
    },
    {
      id: 3,
      question: 'What is an outlier in a statistical dataset?',
      options: [
        'A value that differs significantly from other observations',
        'The average of all values',
        'A missing column header',
        'A duplicate row',
      ],
      correctAnswer: 0,
      explanation: 'An outlier is an observation that lies an abnormal distance from other values in a random sample.',
    },
    {
      id: 4,
      question: 'Which plot is best suited for visualizing the distribution and five-number summary of continuous data?',
      options: ['Box Plot (Box & Whisker)', 'Pie Chart', 'Breadcrumb Graph', 'Word Cloud'],
      correctAnswer: 0,
      explanation: 'Box plots represent the minimum, first quartile (Q1), median, third quartile (Q3), and maximum, highlighting outliers.',
    },
    {
      id: 5,
      question: 'What does SQL stand for in data analysis?',
      options: [
        'Structured Query Language',
        'Standard Question Logic',
        'Sequential Quality List',
        'System Quick Link',
      ],
      correctAnswer: 0,
      explanation: 'SQL stands for Structured Query Language, the ANSI standard for managing relational databases.',
    },
  ],
  Mathematics: [
    {
      id: 1,
      question: 'What is the determinant of a 2x2 identity matrix [[1, 0], [0, 1]]?',
      options: ['1', '0', '2', '-1'],
      correctAnswer: 0,
      explanation: 'det(I) = (1*1) - (0*0) = 1.',
    },
    {
      id: 2,
      question: 'What is the derivative of f(x) = x^3 with respect to x?',
      options: ['3x^2', 'x^2', '3x', 'x^4 / 4'],
      correctAnswer: 0,
      explanation: 'By the power rule: d/dx(x^n) = n*x^(n-1), so d/dx(x^3) = 3x^2.',
    },
    {
      id: 3,
      question: 'What is the probability of rolling a sum of 7 with two fair 6-sided dice?',
      options: ['6/36 (1/6)', '1/12', '7/36', '1/36'],
      correctAnswer: 0,
      explanation: 'Combinations producing 7 are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) which is 6 out of 36 outcomes = 1/6.',
    },
    {
      id: 4,
      question: 'What is an eigenvector of a square matrix A?',
      options: [
        'A non-zero vector whose direction remains unchanged when multiplied by A',
        'A vector whose elements are all zeroes',
        'The transpose of a row vector',
        'The inverse of the matrix',
      ],
      correctAnswer: 0,
      explanation: 'An eigenvector satisfies Av = λv, meaning transformation by A only scales the vector by eigenvalue λ.',
    },
    {
      id: 5,
      question: 'What is the value of log10(1000)?',
      options: ['3', '2', '10', '100'],
      correctAnswer: 0,
      explanation: '10^3 = 1000, therefore log10(1000) = 3.',
    },
  ],
  'Computer Science': [
    {
      id: 1,
      question: 'What is the average time complexity of searching an element in a balanced Binary Search Tree (BST)?',
      options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'],
      correctAnswer: 0,
      explanation: 'Because search space is halved at each node comparison, average lookup is logarithmic O(log n).',
    },
    {
      id: 2,
      question: 'Which condition is NOT one of Coffman\'s four necessary conditions for deadlock in operating systems?',
      options: ['Mutual Exclusion', 'Hold and Wait', 'Preemption Allowed', 'Circular Wait'],
      correctAnswer: 2,
      explanation: 'Deadlock requires "No Preemption" (resources cannot be forcibly taken). If preemption is allowed, deadlock cannot occur.',
    },
    {
      id: 3,
      question: 'Which layer of the OSI model handles end-to-end communication, flow control, and port addressing?',
      options: ['Transport Layer', 'Network Layer', 'Data Link Layer', 'Session Layer'],
      correctAnswer: 0,
      explanation: 'The Transport Layer (Layer 4) with protocols like TCP/UDP is responsible for segmenting, port addressing, and reliable flow control.',
    },
    {
      id: 4,
      question: 'Which data structure follows the First In First Out (FIFO) principle?',
      options: ['Queue', 'Stack', 'Tree', 'Max Heap'],
      correctAnswer: 0,
      explanation: 'A Queue enforces FIFO ordering, where items are enqueued at the back and dequeued from the front.',
    },
    {
      id: 5,
      question: 'What is the primary function of the compiler\'s lexical analyzer (lexer)?',
      options: [
        'Converts raw source code characters into a stream of tokens',
        'Allocates CPU registers',
        'Executes bytecode on hardware',
        'Links third party dynamic libraries',
      ],
      correctAnswer: 0,
      explanation: 'The lexer groups character sequences into meaningful semantic tokens (keywords, identifiers, literals, operators).',
    },
  ],
};

export const SAMPLE_NOTE_INPUT = `Machine learning is a branch of artificial intelligence and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. 

Through the use of statistical methods, algorithms are trained to make classifications or predictions, and to uncover key insights within data mining projects. These insights subsequently drive decision making within applications and businesses, ideally impacting key growth metrics. 

As big data continues to expand and grow, the market demand for data scientists will increase. They will be required to help identify the most critical business questions and the data to answer them. Machine learning algorithms are typically created using frameworks that accelerate solution development, such as TensorFlow and PyTorch. Real world applications include recommendation engines, speech recognition, computer vision, and autonomous robotics.`;

export const PRESET_NOTE_SUMMARY: NoteSummary = {
  title: 'Machine Learning Fundamentals & Applications',
  subject: 'Machine Learning',
  originalWordCount: 142,
  summaryWordCount: 54,
  keyBulletPoints: [
    'Machine learning allows computers to learn from data without explicit programming.',
    'It identifies complex statistical patterns in large datasets to make predictions and classifications.',
    'Common industry applications include recommendation systems, speech recognition, and fraud detection.',
    'Popular development frameworks include TensorFlow, PyTorch, and Scikit-learn.',
    'Model accuracy continuously improves as higher quality training data is supplied.',
  ],
  keyTerms: [
    'Machine Learning',
    'Dataset',
    'Model Training',
    'Prediction',
    'Classification',
    'TensorFlow',
  ],
  examTips: [
    'Remember the 3 paradigms: Supervised, Unsupervised, and Reinforcement Learning.',
    'Expect questions on overfitting vs underfitting and bias-variance tradeoff.',
    'Be ready to write a 2-line explanation of real-world recommendation systems.',
  ],
};

export const INITIAL_STUDY_PLAN: StudyPlanItem[] = [
  {
    id: 'plan-1',
    day: 'Monday',
    subject: 'Python',
    topic: 'Lists, Tuples & Comprehensions',
    duration: '1 Hour',
    completed: true,
    priority: 'High',
  },
  {
    id: 'plan-2',
    day: 'Tuesday',
    subject: 'Machine Learning',
    topic: 'Supervised Algorithms & Regression',
    duration: '1.5 Hours',
    completed: true,
    priority: 'High',
  },
  {
    id: 'plan-3',
    day: 'Wednesday',
    subject: 'Java',
    topic: 'Object Oriented Programming & Interfaces',
    duration: '1 Hour',
    completed: false,
    priority: 'Medium',
  },
  {
    id: 'plan-4',
    day: 'Thursday',
    subject: 'Python',
    topic: 'Functions, Generators & Lambda Expressions',
    duration: '1 Hour',
    completed: false,
    priority: 'Normal',
  },
  {
    id: 'plan-5',
    day: 'Friday',
    subject: 'Machine Learning',
    topic: 'Model Evaluation & Confusion Matrix Revision',
    duration: '1.5 Hours',
    completed: false,
    priority: 'High',
  },
  {
    id: 'plan-6',
    day: 'Saturday',
    subject: 'Data Science',
    topic: 'Pandas DataFrames & Exploratory Data Analysis',
    duration: '2 Hours',
    completed: false,
    priority: 'Medium',
  },
  {
    id: 'plan-7',
    day: 'Sunday',
    subject: 'Weekly Review',
    topic: 'Smart Quiz Practice & Weak Concept Review',
    duration: '1 Hour',
    completed: false,
    priority: 'Normal',
  },
];

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  name: 'Aditya Sharma',
  email: 'aditya.sharma@college.edu.in',
  course: 'B.Tech - Computer Science & Engineering',
  year: '3rd Year (Semester 5)',
  institution: 'Naan Mudhalvan Skill Partner College',
  studentId: 'NM-2026-CS-4192',
  theme: 'light',
  language: 'English',
  notifications: true,
  studyReminders: true,
};
