import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import NewQuizForm from './components/NewQuizForm/NewQuizForm';
import NewQuizQuestions from './components/NewQuizQuestions/NewQuizQuestions';

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
						<Route
							path='/new-quiz-questions'
							element={<NewQuizQuestions />}></Route>
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
	);
}

export default App;
