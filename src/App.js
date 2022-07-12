import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import NewQuizForm from './components/NewQuizForm';
import NewQuizQuestions from './components/NewQuizQuestions';
import NewQuiz from './components/NewQuiz';

function App() {
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
						<Route path='/new-quiz-form' element={<NewQuizForm />} />
						<Route path='/new-quiz-questions' element={<NewQuizQuestions />} />
						<Route path='/new-quiz' element={<NewQuiz />} />
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
	);
}

export default App;
