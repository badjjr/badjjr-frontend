import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoriesList from './components/CategoriesList';
import { Routes, Route, Link } from 'react-router-dom';
import DisplayQuiz from './components/DisplayQuiz';
import Header from './components/Header';
import Score from './components/Score';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
import Quiz from './components/Quiz.js'


function App() {
	const [quizAnswers, setQuizAnswers] = useState([]);
	const [quizFormData, setQuizFormData] = useState({
		title: '',
		numberOfQuestions: 0,
		category: '',
	});
  const [quizId, setQuizId] = useState()
	const [quizQuestions, setQuizQuestions] = useState([]);
	const [categories, setCategories] = useState([]);

	return (
		<DataContext.Provider
			value={{
				quizAnswers,
				setQuizAnswers,
				quizFormData,
				setQuizFormData,
				quizQuestions,
				setQuizQuestions,
				quizId,
				setQuizId,
				categories,
				setCategories,
			}}>
			<div>
				<header>
						<Header />
				</header>
				<main>
					<Routes>
            <Route path = '/' element = { <Home /> } />
            <Route path = '/categories' element = { <CategoriesList /> } />
						<Route path = '/categories/:category' element = { <Categories /> } />
						<Route path = '/quiz-form-edit/:id' element = { <Quiz /> } />
						<Route path='/quiz-form' element={<QuizForm />} />
						<Route path='/quiz-questions' element={<QuizQuestions />} />
            <Route path='/quiz/:id' element={<DisplayQuiz />} />
					<Route path='/score' element={<Score />} />
					<Route path='/categories' element={<CategoriesList />} />
				</Routes>
      </main>
			</div>
		</DataContext.Provider>
)
}

export default App;
