import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import CategoriesList from './components/CategoriesList';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';

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
					<h1 className = "badger-img">
						<Link to='/'>🦡</Link>
					</h1>
				</header>
				<main>
					<Routes>
            <Route path = '/' element = { <Home /> } />
            <Route path = '/categories' element = { <CategoriesList /> } />
						<Route path='/quiz-form' element={<QuizForm />} />
						<Route path='/quiz-questions' element={<QuizQuestions />} />
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
	);
}

export default App;
