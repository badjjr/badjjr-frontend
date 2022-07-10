import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { DataContext } from './dataContext';
import NewQuizForm from './components/NewQuizForm/NewQuizForm';
import NewQuizQuestions from './components/NewQuizQuestions/NewQuizQuestions';

function App() {
	const [numOfQuestions, setNumOfQuestions] = useState('');

	return (
		<DataContext.Provider value={{ numOfQuestions, setNumOfQuestions }}>
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
