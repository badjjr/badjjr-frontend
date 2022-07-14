import React from 'react';
import '/Users/jalynnjk/Desktop/sei/projects/unit-3/badjjr-frontend/src/styles/displayQuizStyle.css';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../dataContext';
import {Link, useParams } from 'react-router-dom';
import axios from 'axios';

function DisplayQuiz(props) {
	const [quizData, setQuizData] = useState([]);
	const [quizQuestions, setQuizQuestions] = useState([]);
	const {quizAnswers, setQuizAnswers, quizId, setQuizId} = useContext(DataContext)
	const { id } = useParams();

	async function getQuizData() {
		try {
			const response = await axios.get(`https://badjjr.herokuapp.com/api/quizzes/${id}`
			);
			setQuizData(response.data);
			setQuizQuestions(response.data.questions);
		} catch (error) {console.log(error)}
	}
	
	useEffect(() => {
		getQuizData()
		setQuizId(id)
	}, []);

	return (
		<form className='take-quiz-form' onSubmit={(event) => {event.preventDefault()}} >
			<h2 className='quiz-title' >{quizData.title}</h2>
			{quizQuestions ? (
				quizQuestions.map((question, index) => {
					return (
						<div className='quiz-question-container' key={question._id}>
							<h4 className='quiz-question-number'>
								Question <span className='question-number'>{index + 1}</span> of{' '}
								{quizQuestions.length}
							</h4>
							<label className='quiz-question' htmlFor={`${index}`}>
								{question.question}
							</label>
							{question.answerChoices.map((choice, choiceIndex) => {
								return (
									<div
										className='quiz-answer-choice'
										key={`${question._id}: ${choiceIndex}`}>
										<input
											className='input-button'
											type='radio'
											name={`${index}`}
											value={choice}
											onChange={(event) => {
												setQuizAnswers({
													...quizAnswers,
													[event.target.name]: event.target.value,
												});
											}}
										/>
										{choice}
									</div>
								);
							})}
						</div>
					);
				})
			) : (
				<div>'Loading quiz...'</div>
			)}
						<Link to='/score'>
							<button className='quiz-submit-button'>
								Submit
							</button>
						</Link>

		</form>
	);
}

export default DisplayQuiz;
