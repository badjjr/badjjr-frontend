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

function App() {
	const [quizAnswers, setQuizAnswers] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState('');

	return (
		<DataContext.Provider
			value={{
				quizAnswers,
        setQuizAnswers,
        numOfQuestions, 
        setNumOfQuestions
			}}>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/quiz/:id' element={<DisplayQuiz />} />
					<Route path='/score' element={<Score />} />
          <Route path='/new-quiz-form' element={<NewQuizForm />} />
						<Route
							path='/new-quiz-questions'
							element={<NewQuizQuestions />}></Route>
				</Routes>
        </div>
        </ DataContext.Provider>
)
}

export default App;
