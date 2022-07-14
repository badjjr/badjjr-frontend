import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
import Home from './components/Home';
import Create from './components/Create';
import CategoriesList from './components/CategoriesList';
// import Categories from './components/Categories';
import QuizFormEdit from './components/QuizFormEdit';
import QuizQuestionsEdit from './components/QuizQuestionsEdit';
<<<<<<< HEAD

=======
>>>>>>> 31ca989 (Add changes to resolve conflicts)

function App() {
	// Use Context to share the following states between components.
	const [quizFormData, setQuizFormData] = useState({
		title: '',
		numberOfQuestions: 0,
		category: '',
	});

	const [quizQuestions, setQuizQuestions] = useState([]);
	const [categories, setCategories] = useState([]);

	const [updatedQuizForm, setUpdatedQuizForm] = useState({});

	const [updatedQuizQuestions, setUpdatedQuizQuestions] = useState([]);

	return (
		<DataContext.Provider
			value={{
				quizFormData,
				setQuizFormData,
				quizQuestions,
				setQuizQuestions,
				categories,
				setCategories,
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
