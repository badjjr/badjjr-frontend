// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import React from 'react';
import Home from './Components/Home';
import Create from './Components/Create';
import CategoriesList from './Components/CategoriesList';
import Categories from './Components/Categories';
import { Routes, Route, Link } from 'react-router-dom';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
import Home from './components/Home';
import Create from './components/Create';
import CategoriesList from './components/CategoriesList';
// import Categories from './components/Categories';
import QuizFormEdit from './components/QuizFormEdit';
import QuizQuestionsEdit from './components/QuizQuestionsEdit';

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
						<Link to='/'>
							<img src='public/badger.png' alt='Badger Icon' />
						</Link>
					</h1>
				</header>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/create' element={<Create />} />
						<Route path='/categories' element={<CategoriesList />} />
						{/* <Route path='/categories/:category' element={<Categories />} /> */}
						<Route path='/quiz-form' element={<QuizForm />} />
						<Route path='/quiz-questions' element={<QuizQuestions />} />
						<Route path='/quiz-form-edit' element={<QuizFormEdit />} />
						<Route
							path='/quiz-questions-edit'
							element={<QuizQuestionsEdit />}
						/>
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
	);
}

export default App;
