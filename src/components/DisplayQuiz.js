import React from 'react';
import '/Users/jalynnjk/Desktop/sei/projects/unit-3/badjjr-frontend/src/styles/displayQuizStyle.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayQuiz(props) {
	const [quizData, setQuizData] = useState([]);
	const [quizQuestions, setQuizQuestions] = useState([]);
	const [quizAnswers, setQuizAnswers] = useState([])
	const { id } = useParams();

	async function getQuizData() {
		try {
			const response = await axios.get('https://badjjr.herokuapp.com/api/quizzes/62cc994fc582b1dd9b70a621'
			);
			setQuizData(response.data);
			setQuizQuestions(response.data.questions);
		} catch (error) {console.log(error)}
	}
	
	useEffect(() => {
		getQuizData()
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
							{question.answerChoices.map((choice) => {
								return (
									<div className='quiz-answer-choice' key={choice._id}>
										<input
											className='input-button'
											type='radio'
											name={`${index}`}
											value={choice}
											onChange = {(event) => {
												setQuizAnswers(
													{ ...quizAnswers,
													[event.target.name]: event.target.value})
											}}
										/>
										<span className='input-text'>{choice}</span>
									</div>
								);
							})}
						</div>
					);
				})
			) : (
				<div>'Loading quiz...'</div>
			)}
					<button className='quiz-submit-button'>
						Submit
					</button>
		</form>
	);
}

export default DisplayQuiz;
