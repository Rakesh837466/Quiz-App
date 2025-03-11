import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { resetQuiz } from '../store/quizSlice';
import { Check, X, RefreshCw, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ResultsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, score } = useSelector((state: RootState) => state.quiz);
  const percentage = (score / questions.length) * 100;

  const handleShare = () => {
    const text = `I scored ${score}/${questions.length} (${percentage.toFixed(1)}%) on the Quiz!`;
    if (navigator.share) {
      navigator.share({
        title: 'Quiz Results',
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Quiz Results</h1>
        <div className="text-6xl font-bold mb-2">{percentage.toFixed(1)}%</div>
        <p className="text-xl text-gray-600">
          You scored {score} out of {questions.length}
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {questions.map((q, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {q.userAnswer === q.correctAnswer ? (
                  <Check className="w-6 h-6 text-green-500" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
              </div>
              <div className="flex-grow">
                <p className="font-medium mb-2">{q.question}</p>
                <p className="text-sm text-gray-600">
                  Your answer: {q.userAnswer || 'Time expired'}
                </p>
                <p className="text-sm text-green-600">
                  Correct answer: {q.correctAnswer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(resetQuiz())}
          className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          Try Again
        </button>
        <button
          onClick={handleShare}
          className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
        >
          <Share2 className="w-5 h-5" />
          Share Results
        </button>
      </div>
    </motion.div>
  );
};

export default ResultsPage;