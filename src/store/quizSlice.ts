import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState, QuizQuestion } from '../types/quiz';
import { quizData } from '../data/quizData';

const initialState: QuizState = {
  currentQuestion: 0,
  score: 0,
  timeRemaining: quizData.timeLimit,
  isQuizStarted: false,
  isQuizCompleted: false,
  questions: quizData.questions,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.isQuizStarted = true;
      state.timeRemaining = quizData.timeLimit;
    },
    answerQuestion: (state, action: PayloadAction<string>) => {
      const currentQ = state.questions[state.currentQuestion];
      currentQ.userAnswer = action.payload;
      if (action.payload === currentQ.correctAnswer) {
        state.score += 1;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
        state.timeRemaining = quizData.timeLimit;
      } else {
        state.isQuizCompleted = true;
      }
    },
    decrementTimer: (state) => {
      if (state.timeRemaining > 0) {
        state.timeRemaining -= 1;
      }
    },
    resetQuiz: (state) => {
      return { ...initialState, questions: state.questions.map(q => ({ ...q, userAnswer: undefined, timeSpent: undefined })) };
    },
  },
});

export const { startQuiz, answerQuestion, nextQuestion, decrementTimer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;