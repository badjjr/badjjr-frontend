import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
import DisplayQuiz from './components/DisplayQuiz'
import Header from './components/Header'
import Score from './components/Score'

function App() {
	// Use Context to share the following states between components.
	const [quizFormData, setQuizFormData] = useState({
		title: '',
		numberOfQuestions: 0,
		category: '',
	});
	const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState([])

	return (
		<DataContext.Provider
			value={{
				quizFormData,
				setQuizFormData,
				quizQuestions,
				setQuizQuestions,
        quizAnswers,
        setQuizAnswers
			}}>
			<div>
					<Header />
					<Routes>
						<Route path='/quiz-form' element={<QuizForm />} />
						<Route path='/quiz-questions' element={<QuizQuestions />} />
            <Route path='/quiz/:id' element={<DisplayQuiz />} />
            <Route path='/score' element={<Score />} />
					</Routes>
			</div>
		</DataContext.Provider>
	);
}

export default App;
