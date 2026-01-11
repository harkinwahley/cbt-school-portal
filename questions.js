// questions.js
const questionBank = {
    math: [
      {
        id: 1,
        question: "If set A = {1, 3, 5, 7, 9} and set B = {2, 3, 5, 7}, what is A ∩ B?",
        options: ["{1, 2, 9}", "{3, 5, 7}", "{1, 2, 3, 5, 7, 9}", "Ø"],
        answer: 1 // Index of correct option (0 is A, 1 is B, 2 is C, 3 is D)
      },
      {
        id: 2,
        question: "Evaluate (81)^(-3/4)",
        options: ["27", "1/27", "9", "1/9"],
        answer: 1
      },
      {
        id: 3,
        question: "Solve for x in the equation: 3^(2x) = 27",
        options: ["1", "1.5", "3", "4.5"],
        answer: 1
      },
      {
        id: 4,
        question: "Find the simple interest on ₦40,000 for 3 years at 5% per annum.",
        options: ["₦5,000", "₦6,000", "₦4,000", "₦8,000"],
        answer: 1
      },
      {
        id: 5,
        question: "Convert 1101 base 2 to base 10.",
        options: ["13", "11", "15", "12"],
        answer: 0
      },
      {
        id: 6,
        question: "If y varies inversely as x, and y=4 when x=3, find y when x=6.",
        options: ["2", "4", "6", "12"],
        answer: 0
      },
      {
        id: 7,
        question: "Factorize completely: 2x² - 8",
        options: ["2(x-2)(x+2)", "2(x-4)(x+1)", "(2x-4)(x+2)", "2(x-2)²"],
        answer: 0
      },
      {
        id: 8,
        question: "The gradient of the line passing through points P(2, 5) and Q(4, 9) is:",
        options: ["4", "3", "2", "1"],
        answer: 2
      },
      {
        id: 9,
        question: "If tan θ = 3/4, find the value of sin θ (where θ is acute).",
        options: ["3/5", "4/5", "3/7", "5/3"],
        answer: 0
      },
      {
        id: 10,
        question: "Find the mean of the numbers: 2, 4, 6, 8, 10.",
        options: ["4", "5", "6", "8"],
        answer: 2
      }
    ],
    english: [
      {
        id: 11,
        question: "Choose the option nearest in meaning to: The man was 'vindicated' by the court.",
        options: ["Condemned", "Accused", "Freed from blame", "Imprisoned"],
        answer: 2
      },
      {
        id: 12,
        question: "Choose the option opposite in meaning to: The driver was 'reckless'.",
        options: ["Careless", "Cautious", "Fast", "Drunk"],
        answer: 1
      },
      {
        id: 13,
        question: "Which of the following words is correctly spelt?",
        options: ["Embarassment", "Embarrassment", "Embarrasment", "Embarrassmant"],
        answer: 1
      },
      {
        id: 14,
        question: "Complete: The boy ______ the book on the table yesterday.",
        options: ["lay", "laid", "lied", "lain"],
        answer: 1
      },
      {
        id: 15,
        question: "Nearest in meaning: It was a 'futile' attempt to escape.",
        options: ["Successful", "Dangerous", "Useless", "Clever"],
        answer: 2
      },
      {
        id: 16,
        question: "Which word rhymes with 'Hair'?",
        options: ["Here", "Hear", "Air", "Her"],
        answer: 2
      },
      {
        id: 17,
        question: "Complete: Neither of the boys ______ present at the party.",
        options: ["were", "was", "are", "have been"],
        answer: 1
      },
      {
        id: 18,
        question: "'He has a finger in every pie.' This means he...",
        options: ["Loves eating", "Is a baker", "Is involved in many activities", "Injured his finger"],
        answer: 2
      },
      {
        id: 19,
        question: "Opposite in meaning: The atmosphere was 'hostile'.",
        options: ["Friendly", "Aggressive", "Warm", "Harsh"],
        answer: 0
      },
      {
        id: 20,
        question: "Complete: If I ______ you, I would accept the offer.",
        options: ["am", "was", "were", "be"],
        answer: 2
      }
    ]
  };