interface Question {
  question: string;
  options: string[];
  answer: string;
}

const beginner: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hypertext Markup Language",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    question: "Which of the following is NOT a programming language?",
    options: ["Java", "HTML", "Python"],
    answer: "HTML",
  },
  {
    question:
      "What symbol is used to access elements in an array in JavaScript?",
    options: ["Curly braces", "Square brackets", "Parentheses"],
    answer: "Square brackets",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is the file extension for a JavaScript file?",
    options: [".html", ".js", ".css"],
    answer: ".js",
  },
  {
    question: "Which of the following is used to style web pages?",
    options: ["JavaScript", "HTML", "CSS"],
    answer: "CSS",
  },
  {
    question: "What does IDE stand for?",
    options: [
      "Integrated Development Environment",
      "Interactive Development Environment",
      "Integrated Developer Environment",
    ],
    answer: "Integrated Development Environment",
  },
  {
    question: 'What is the result of 5 + "3" in JavaScript?',
    options: ["8", "53", "Error"],
    answer: "53",
  },
  {
    question: "Which of the following is a loop in JavaScript?",
    options: ["if", "for", "switch"],
    answer: "for",
  },
];

const intermediate: Question[] = [
  {
    question: "What is the purpose of a constructor in Java?",
    options: [
      "To initialize an object",
      "To destroy an object",
      "To define a class",
    ],
    answer: "To initialize an object",
  },
  {
    question:
      "Which of the following data structures is based on the LIFO (Last In, First Out) principle?",
    options: ["Queue", "Stack", "Heap"],
    answer: "Stack",
  },
  {
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(1)", "O(n)", "O(log n)"],
    answer: "O(log n)",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Which of the following is NOT a relational database management system (RDBMS)?",
    options: ["MySQL", "MongoDB", "Oracle"],
    answer: "MongoDB",
  },
  {
    question: "What does MVC stand for?",
    options: [
      "Model View Controller",
      "Model Validation Configuration",
      "Managed View Control",
    ],
    answer: "Model View Controller",
  },
  {
    question: "Which programming language is NOT statically typed?",
    options: ["Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: 'What is the result of 3 + 2 + "7" in JavaScript?',
    options: ["57", "12", "37"],
    answer: "57",
  },
  {
    question: "What is the default port number for HTTP?",
    options: ["80", "443", "8080"],
    answer: "80",
  },
  {
    question:
      "Which of the following is an agile software development methodology?",
    options: ["Waterfall", "Scrum", "Spiral"],
    answer: "Scrum",
  },
];

const wizard: Question[] = [
  {
    question:
      "Which design pattern is used to separate object construction from its representation?",
    options: ["Singleton", "Builder", "Prototype"],
    answer: "Builder",
  },
  {
    question:
      "What is the time complexity of binary heap operations like insertion and deletion?",
    options: ["O(1)", "O(log n)", "O(n)"],
    answer: "O(log n)",
  },
  {
    question: "Which of the following is a functional programming language?",
    options: ["Java", "Python", "Haskell"],
    answer: "Haskell",
  },
  {
    question:
      "Which encryption algorithm is commonly used for secure communication over the Internet?",
    options: ["AES", "DES", "RSA"],
    answer: "RSA",
  },
  {
    question:
      "What is the purpose of the SOLID principles in software development?",
    options: [
      "To write bug-free code",
      "To improve code readability",
      "To design robust and maintainable software",
    ],
    answer: "To design robust and maintainable software",
  },
  {
    question:
      "Which of the following is NOT a characteristic of microservices architecture?",
    options: [
      "Loose coupling",
      "Monolithic structure",
      "Independent deployment",
    ],
    answer: "Monolithic structure",
  },
  {
    question:
      "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Merge Sort", "Selection Sort"],
    answer: "Merge Sort",
  },
  {
    question: "What is the purpose of a closure in JavaScript?",
    options: [
      "To protect sensitive data",
      "To optimize code execution",
      "To preserve access to variables",
    ],
    answer: "To preserve access to variables",
  },
  {
    question:
      "What is the difference between unit testing and integration testing?",
    options: [
      "Unit testing verifies individual components",
      "Integration testing verifies interactions between components",
      "Both are the same",
    ],
    answer: "Integration testing verifies interactions between components",
  },
  {
    question:
      "Which of the following tools is commonly used for version control in software development?",
    options: ["Git", "Docker", "Jenkins"],
    answer: "Git",
  },
];

//shuffle array
const shuffle = (arr: unknown[]) => {
  let shuffledArr: unknown[] = [];
  let indexesPassed: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const randomIndex: number = Math.floor(Math.random() * arr.length);
    if (!indexesPassed.includes(randomIndex)) {
      indexesPassed.push(randomIndex);
      shuffledArr.push(arr[randomIndex]);
    }
  }
};

const getQuestions = (lev: string, len: number): Question[] => {
  const level = lev.toLowerCase();
  const shuffleAll = (questions: Question[]) => {
    shuffle(questions);
    questions.forEach((question) => {
      shuffle(question.options);
    });
  };

  if (level === "beginner") {
    shuffleAll(beginner);
    return beginner.slice(0, len);
  } else if (level === "intermediate") {
    shuffleAll(intermediate);
    return intermediate.slice(0, len);
  } else if (level === "wizard") {
    shuffleAll(wizard);
    return wizard.slice(0, len);
  } else {
    throw new Error("Unknown level");
  }
};

export { getQuestions, Question, intermediate };
