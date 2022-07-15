import React from 'react';
import '../styles/score.css';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../dataContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Score() {
	const { quizAnswers, quizId } = useContext(DataContext);
	const [userAnswers, setUserAnswers] = useState();
	const [correctAnswers, setCorrectAnswers] = useState();
	const [userCorrectAnswers, setUserCorrectAnswers] = useState();
	const [score, setScore] = useState();

	let correctAnswersTemp = [];
	async function getCorrectAnswers() {
		const response = await axios.get(
			`https://badjjr.herokuapp.com/api/quizzes/${quizId}`
		);
		response.data.questions.forEach((question) => {
			correctAnswersTemp.push(question.correctAnswer);
		});
		setCorrectAnswers(correctAnswersTemp);
	}

	function compareAnswers() {
		let sameAnswer = userAnswers.filter((answer) => {
			if (correctAnswers.includes(answer)) {
				return true;
			} else return false;
		});
		setUserCorrectAnswers(sameAnswer);
	}

	function gradeQuiz() {
		let pointsPerQuestion = 100 / correctAnswers.length;
		let scoreTemp = userCorrectAnswers.length * pointsPerQuestion;
		setScore(scoreTemp);
	}
	useEffect(() => {
		setUserAnswers(Object.values(quizAnswers));
		getCorrectAnswers();
	}, []);

	useEffect(() => {
		if (correctAnswers) {
			compareAnswers();
		}
	}, [correctAnswers]);

	useEffect(() => {
		if (userCorrectAnswers) {
			gradeQuiz();
		}
	}, [userCorrectAnswers]);
	return (
		<div>
			{userCorrectAnswers ? (
				<div>
					<h3 className='result'>Your result is: {score}%</h3>
					<p className='number-correct'>
						You answered {userCorrectAnswers.length} of {correctAnswers.length}{' '}
						questions correctly.
					</p>
					<Link to='/home'>
						<button className='return-home-btn'>Return Home</button>
					</Link>
				</div>
			) : (
				<h3 className='error-message'>
					Oh no! There was an error loading your score.
				</h3>
			)}
		</div>
	);
}

export default Score;
