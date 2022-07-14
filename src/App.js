import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import CategoriesList from './components/CategoriesList';
import Categories from './components/Categories';
import Quiz from './components/Quiz';
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
	const [categories, setCategories] = useState([]);

	return (
		<DataContext.Provider
			value={{
				quizFormData,
				setQuizFormData,
				quizQuestions,
				setQuizQuestions,
				categories,
				setCategories
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
						<Route path = '/categories/:category' element = { <Categories /> } />
						<Route path = '/quiz-form-edit/:id' element = { <Quiz /> } />
						<Route path='/quiz-form' element={<QuizForm />} />
						<Route path='/quiz-questions' element={<QuizQuestions />} />
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
	);
}

export default App;
