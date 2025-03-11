import { QuizData } from '../types/quiz';

export const quizData: QuizData = {
  quizTitle: "General Knowledge Quiz",
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      id: 3,
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      id: 4,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      id: 5,
      question: "Which element has the chemical symbol 'Au'?",
      options: ["Silver", "Gold", "Copper", "Iron"],
      correctAnswer: "Gold"
    }
  ],
  timeLimit: 60,
  totalQuestions: 5
};