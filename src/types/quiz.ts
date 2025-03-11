export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string;
  timeSpent?: number;
}

export interface QuizData {
  quizTitle: string;
  questions: QuizQuestion[];
  timeLimit: number;
  totalQuestions: number;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  timeRemaining: number;
  isQuizStarted: boolean;
  isQuizCompleted: boolean;
  questions: QuizQuestion[];
}