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


function App() {
	// Use Context to share the following states between components.
	const [quizFormData, setQuizFormData] = useState({
		title: '',
		numberOfQuestions: 0,
		category: '',
	});

	const [quizQuestions, setQuizQuestions] = useState([]);
	const [categories, setCategories] = useState([]);

	const [updatedQuizFormData, setUpdatedQuizFormData] = useState({
		title: '',
		numberOfQuestions: 0,
		category: '',
	});

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
<<<<<<< HEAD
					<h1>
						<Link to='/'>
							<img src='public/badger.png' alt='Badger Icon' />
						</Link>
=======
					<h1 className='badger-img'>
						<Link to='/'>🦡</Link>
>>>>>>> 20f1f54 (Add changes to resolve conflicts)
					</h1>
				</header>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
<<<<<<< HEAD
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
=======
						<Route path='/categories' element={<CategoriesList />} />
						<Route path='/categories/:category' element={<Categories />} />
						<Route path='/quiz-form-edit/:id' element={<Quiz />} />
						<Route path='/quiz-form' element={<QuizForm />} />
						<Route path='/quiz-questions' element={<QuizQuestions />} />
						<Route path='/quiz-form-edit' element={<QuizFormEdit />} />
>>>>>>> 20f1f54 (Add changes to resolve conflicts)
					</Routes>
				</main>
			</div>
		</DataContext.Provider>
	);
}

export default App;
