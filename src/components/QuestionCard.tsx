import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { answerQuestion, nextQuestion, decrementTimer } from '../store/quizSlice';
import { motion } from 'framer-motion';

const QuestionCard: React.FC = () => {
  const dispatch = useDispatch();
  const { currentQuestion, questions, timeRemaining } = useSelector(
    (state: RootState) => state.quiz
  );

  const question = questions[currentQuestion];

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(decrementTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeout(() => {
        dispatch(nextQuestion());
      }, 1000);
    }
  }, [timeRemaining, dispatch]);

  const handleAnswer = (answer: string) => {
    dispatch(answerQuestion(answer));
    setTimeout(() => {
      dispatch(nextQuestion());
    }, 2000);
  };

  const getButtonClass = (option: string) => {
    if (!question.userAnswer) return 'bg-white hover:bg-indigo-50';
    if (question.userAnswer === option) {
      return option === question.correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
    }
    if (option === question.correctAnswer) return 'bg-green-500 text-white';
    return 'bg-white opacity-50';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg"
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-semibold text-indigo-600">
            Time: {timeRemaining}s
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(timeRemaining / 60) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !question.userAnswer && handleAnswer(option)}
            disabled={!!question.userAnswer}
            className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${getButtonClass(
              option
            )}`}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;