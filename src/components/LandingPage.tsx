import React from 'react';
import { Timer, Brain, Award } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../store/quizSlice';
import { quizData } from '../data/quizData';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">{quizData.quizTitle}</h1>
        <p className="text-gray-600">Test your knowledge with our interactive quiz!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center p-4 bg-indigo-50 rounded-lg">
          <Brain className="w-8 h-8 text-indigo-500 mb-2" />
          <h3 className="font-semibold">Questions</h3>
          <p>{quizData.totalQuestions} total</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-indigo-50 rounded-lg">
          <Timer className="w-8 h-8 text-indigo-500 mb-2" />
          <h3 className="font-semibold">Time per Question</h3>
          <p>{quizData.timeLimit} seconds</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-indigo-50 rounded-lg">
          <Award className="w-8 h-8 text-indigo-500 mb-2" />
          <h3 className="font-semibold">Total Time</h3>
          <p>{quizData.timeLimit * quizData.totalQuestions} seconds</p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Quiz Rules:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Each question has a {quizData.timeLimit}-second time limit</li>
          <li>One point awarded for each correct answer</li>
          <li>No points deducted for wrong answers</li>
          <li>Questions are automatically skipped when time runs out</li>
          <li>Cannot return to previous questions</li>
        </ul>
      </div>

      <button
        onClick={() => dispatch(startQuiz())}
        className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        Start Quiz
      </button>
    </motion.div>
  );
};

export default LandingPage;