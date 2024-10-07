// src/services/TestService.js

const hardcodedQuestions = [
    {
      id: 1,
      title: 'What is the capital of France?',
      a: 'Berlin',
      b: 'Madrid',
      c: 'Paris',
      d: 'Rome',
      correctAnswer: 'c',
      answer: 'No',
    },
    {
      id: 2,
      title: 'Which planet is known as the Red Planet?',
      a: 'Earth',
      b: 'Mars',
      c: 'Jupiter',
      d: 'Saturn',
      correctAnswer: 'b',
      answer: 'No',
    },
    {
      id: 3,
      title: 'What is the largest ocean on Earth?',
      a: 'Atlantic Ocean',
      b: 'Indian Ocean',
      c: 'Arctic Ocean',
      d: 'Pacific Ocean',
      correctAnswer: 'd',
      answer: 'No',
    },
    {
      id: 4,
      title: 'Who wrote "Romeo and Juliet"?',
      a: 'Mark Twain',
      b: 'William Shakespeare',
      c: 'Charles Dickens',
      d: 'Jane Austen',
      correctAnswer: 'b',
      answer: 'No',
    },
    {
      id: 5,
      title: 'What is the chemical symbol for Gold?',
      a: 'Au',
      b: 'Ag',
      c: 'Gd',
      d: 'Go',
      correctAnswer: 'a',
      answer: 'No',
    },
    {
      id: 6,
      title: 'Which country hosted the 2016 Summer Olympics?',
      a: 'China',
      b: 'Brazil',
      c: 'UK',
      d: 'Russia',
      correctAnswer: 'b',
      answer: 'No',
    },
    {
      id: 7,
      title: 'What is the smallest prime number?',
      a: '0',
      b: '1',
      c: '2',
      d: '3',
      correctAnswer: 'c',
      answer: 'No',
    },
    {
      id: 8,
      title: 'In which year did the Titanic sink?',
      a: '1912',
      b: '1905',
      c: '1920',
      d: '1918',
      correctAnswer: 'a',
      answer: 'No',
    },
    {
      id: 9,
      title: 'What is the powerhouse of the cell?',
      a: 'Nucleus',
      b: 'Mitochondria',
      c: 'Ribosome',
      d: 'Endoplasmic Reticulum',
      correctAnswer: 'b',
      answer: 'No',
    },
    {
      id: 10,
      title: 'Who painted the Mona Lisa?',
      a: 'Vincent Van Gogh',
      b: 'Pablo Picasso',
      c: 'Leonardo da Vinci',
      d: 'Claude Monet',
      correctAnswer: 'c',
      answer: 'No',
    },
  ];
  
  
  const TestService = {
    getQuestions: async () => {
      return JSON.parse(JSON.stringify(hardcodedQuestions));
    },
  
    submitAnswers: async (candidateId, testId, answers) => {
      console.log(`Answers submitted for Candidate ID: ${candidateId}, Test ID: ${testId}`);
      console.log(answers);
      return { success: true };
    },
  
    getScore: async (candidateId, testId, questions) => {
      let score = 0;
      questions.forEach((q) => {
        if (q.answer === q.correctAnswer) {
          score += 1;
        }
      });
      return score;
    },
  };
  
  export default TestService;
  