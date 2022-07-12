import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import DisplayQuiz from './components/DisplayQuiz';
import Header from './components/Header';
import Score from './components/Score';
import NewQuizForm from './components/NewQuizForm/NewQuizForm';
import NewQuizQuestions from './components/NewQuizQuestions/NewQuizQuestions';
import NewQuiz from './components/NewQuiz';
=======
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
>>>>>>> 8d64db0 (Rename files)

function App() {
	const [quizAnswers, setQuizAnswers] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState('');
	// Use Context to share the following states between components.
	const [quizFormData, setQuizFormData] = useState({
		title: '',
		numOfQuestions: 0,
		category: '',
	});

	const [quizQuestions, setQuizQuestions] = useState([]);

	return (
		<DataContext.Provider
			value={{
				quizAnswers,
        setQuizAnswers,
        numOfQuestions, 
        setNumOfQuestions,
        quizFormData,
				setQuizFormData,
				quizQuestions,
				setQuizQuestions,
			}}>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/quiz/:id' element={<DisplayQuiz />} />
					<Route path='/score' element={<Score />} />
          <Route path='/quiz-form' element={<QuizForm />} />
					<Route path='/quiz-questions' element={<QuizQuestions />} />
          <Route path='/new-quiz' element={<NewQuiz />} />
				</Routes>
        </div>
        </ DataContext.Provider>
)
}

export default App;
