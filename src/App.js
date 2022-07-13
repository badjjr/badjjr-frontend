import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext';
import { Routes, Route } from 'react-router-dom';
import DisplayQuiz from './components/DisplayQuiz';
import Header from './components/Header';
import Score from './components/Score';

function App() {
	const [quizAnswers, setQuizAnswers] = useState([]);

	return (
		<DataContext.Provider
			value={{
				quizAnswers,
        setQuizAnswers
			}}>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/quiz/:id' element={<DisplayQuiz />} />
					<Route path='/score' element={<Score />} />
				</Routes>
			</div>
		</DataContext.Provider>
	);
}

export default App;
