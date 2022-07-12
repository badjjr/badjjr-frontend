import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route, Link } from 'react-router-dom';
import DisplayQuiz from './components/DisplayQuiz';
import Header from './components/Header';
import Score from './components/Score';
import NewQuizForm from './components/NewQuizForm/NewQuizForm';
import NewQuizQuestions from './components/NewQuizQuestions/NewQuizQuestions';
import NewQuiz from './components/NewQuiz';

function App() {
	const [quizAnswers, setQuizAnswers] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState('');
	// Use Context to share the following states between components.
	const [quizFormData, setQuizFormData] = useState({
		title: '',
		numOfQuestions: 0,
		category: '',
	});

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
			}}>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/quiz/:id' element={<DisplayQuiz />} />
					<Route path='/score' element={<Score />} />
          <Route path='/new-quiz-form' element={<NewQuizForm />} />
					<Route path='/new-quiz-questions' element={<NewQuizQuestions />} />
          <Route path='/new-quiz' element={<NewQuiz />} />
				</Routes>
        </div>
        </ DataContext.Provider>
)
}

export default App;
