import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import LandingPage from './components/LandingPage';
import QuestionCard from './components/QuestionCard';
import ResultsPage from './components/ResultsPage';

const QuizApp: React.FC = () => {
  const { isQuizStarted, isQuizCompleted } = useSelector(
    (state: RootState) => state.quiz
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {!isQuizStarted && <LandingPage />}
      {isQuizStarted && !isQuizCompleted && <QuestionCard />}
      {isQuizCompleted && <ResultsPage />}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <QuizApp />
    </Provider>
  );
}

export default App;