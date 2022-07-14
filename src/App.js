import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import QuizzesByCategory from './components/QuizzesByCategory';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
import QuizFormEdit from './components/QuizFormEdit';
import QuizQuestionsEdit from './components/QuizQuestionsEdit';
import DisplayQuiz from './components/DisplayQuiz';
import Header from './components/Header';
import Score from './components/Score';

function App() {
	// Use Context to share the following states between components.
	const [quizFormData, setQuizFormData] = useState({});
	const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizId, setQuizId] = useState()
	const [updatedQuizId, setUpdatedQuizId] = useState('');
  const [quizAnswers, setQuizAnswers] = useState([]);

	return (
		<DataContext.Provider
			value={{
				quizAnswers,
				setQuizAnswers,
				quizFormData,
				setQuizFormData,
				quizQuestions,
				setQuizQuestions,
				updatedQuizId,
				setUpdatedQuizId,
				quizId,
				setQuizId,
			}}>
			<div>
				<header>
						<Header />
				</header>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/categories' element={<Categories />} />
						<Route
							path='/categories/:category'
							element={<QuizzesByCategory />}
						/>
						<Route path='/quiz-form' element={<QuizForm />} />
						<Route path='/quiz-questions' element={<QuizQuestions />} />
						<Route path='/quiz-form-edit/:id' element={<QuizFormEdit />} />
						<Route
							path='/quiz-questions-edit'
							element={<QuizQuestionsEdit />}
						/>
            <Route path='/quiz/:id' element={<DisplayQuiz />} />
					  <Route path='/score' element={<Score />} />
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
)
}

export default App;
