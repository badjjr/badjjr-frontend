import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import Home from './components/Home';
import CategoriesList from './components/CategoriesList';
import Categories from './components/Categories';
import { Routes, Route, Link } from 'react-router-dom';
import DisplayQuiz from './components/DisplayQuiz';
import Header from './components/Header';
import Score from './components/Score';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';

function App() {
	const [quizAnswers, setQuizAnswers] = useState([]);
	const [quizFormData, setQuizFormData] = useState({
		title: '',
		numberOfQuestions: 0,
		category: '',
	});
  const [quizId, setQuizId] = useState()
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
        quizId,
        setQuizId,
        quizAnswers,
        setQuizAnswers
			}}>
			<div className='App'>
				<Header />
				<Routes>
          <Route path='/home' element={<Home />} />
					<Route path='/quiz/:id' element={<DisplayQuiz />} />
					<Route path='/score' element={<Score />} />
          <Route path='/quiz-form' element={<QuizForm />} />
					<Route path='/quiz-questions' element={<QuizQuestions />} />
          <Route path = '/categories' element = { <CategoriesList /> } />
          <Route path = '/categories/:category' element = { <Categories/> } />
				</Routes>
        </div>
        </ DataContext.Provider>
)
}

export default App;
