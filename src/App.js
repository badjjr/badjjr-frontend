import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import Home from './components/Home';
import CategoriesList from './components/CategoriesList';
import { Routes, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import DisplayQuiz from './components/DisplayQuiz';
import Header from './components/Header';
import Score from './components/Score';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
=======
import NewQuizForm from './components/NewQuizForm';
import NewQuizQuestions from './components/NewQuizQuestions';
import NewQuiz from './components/NewQuiz';
>>>>>>> 0ce6096 (Reorganize files / Create an option to delete input fields for incorrect answers)

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
          <Route path='/' element={<Home />} />
					<Route path='/quiz/:id' element={<DisplayQuiz />} />
					<Route path='/score' element={<Score />} />
          <Route path='/quiz-form' element={<QuizForm />} />
					<Route path='/quiz-questions' element={<QuizQuestions />} />
          <Route path = '/categories' element = { <CategoriesList /> } />
				</Routes>
        </div>
        </ DataContext.Provider>
)
}

export default App;
