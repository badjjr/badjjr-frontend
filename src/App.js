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

function App() {
	// Use Context to share the following states between components.
	const [quizFormData, setQuizFormData] = useState({});
	const [quizQuestions, setQuizQuestions] = useState([]);
	const [updatedQuizId, setUpdatedQuizId] = useState('');

	return (
		<DataContext.Provider
			value={{
				quizFormData,
				setQuizFormData,
				quizQuestions,
				setQuizQuestions,
				updatedQuizId,
				setUpdatedQuizId,
			}}>
			<div>
				<header>
					<h1>
						<Link to='/'>🦡</Link>
					</h1>
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
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
	);
}

export default App;
