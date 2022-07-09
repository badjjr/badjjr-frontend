import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
import DisplayQuiz from './components/DisplayQuiz'
import Header from './components/Header'

function App() {
	// Use Context to share the following states between components.
	const [quizFormData, setQuizFormData] = useState({
		title: '',
		numberOfQuestions: 0,
		category: '',
	});

	const [quizQuestions, setQuizQuestions] = useState([]);

	return (
		<DataContext.Provider
			value={{
				quizFormData,
				setQuizFormData,
				quizQuestions,
				setQuizQuestions,
			}}>
			<div>
				<header>
					<h1>
						<Link to='/'>🦡</Link>
					</h1>
				</header>
				<main>
					<Routes>
						<Route path='/quiz-form' element={<QuizForm />} />
						<Route path='/quiz-questions' element={<QuizQuestions />} />
            <Route path='/quiz/' element={<DisplayQuiz />} />
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
	);

}

export default App;
