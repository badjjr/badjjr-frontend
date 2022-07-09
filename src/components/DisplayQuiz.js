import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const data = {
	id: 1,
	title: 'Programming Pub Trivia',
	numberOfQuestions: 10,
	category: 'Programming',
	questions: [
		{
			type: 'multiple choice',
			question:
				'What programming language does the MERN stack all have in common?',
			answerChoices: ['JavaScript', 'Python', 'C#', 'JSON'],
			correctAnswer: 'JavaScript',
			incorrectAnswer: ['Python', 'C#', 'JSON'],
		},
		{
			type: 'multiple choice',
			question: 'What was the original name of JavaScript?',
			answerChoices: ['Mocha', 'Java', 'spiderMonkey', 'DynamicScript'],
			correctAnswer: 'Mocha',
			incorrectAnswer: ['Java', 'spiderMonkey', 'DynamicScript'],
		},
		{
			type: 'boolean',
			question: 'Express is a strict frame',
			answerChoices: ['false', 'true'],
			correctAnswer: 'false',
			incorrectAnswer: ['true'],
		},
		{
			type: 'multiple choice',
			question:
				'What is the correct code snipped to checkout a new branch in Git name dev?',
			answerChoices: [
				'git checkout -b dev',
				'git checkout dev',
				'git checkout new dev',
				'git create branch dev',
			],
			correctAnswer: 'git checkout -b dev',
			incorrectAnswer: [
				'git checkout dev',
				'git checkout new dev',
				'git create branch dev',
			],
		},
		{
			type: 'multiple choice',
			question:
				'{} == {} will return _____, while {} === {} will return ______.',
			answerChoices: [
				'False, False',
				'True, False',
				'True, True',
				'Undefined, Undefined',
			],
			correctAnswer: 'False, False',
			incorrectAnswer: ['True, False', 'True, True', 'Undefined, Undefined'],
		},
		{
			type: 'multiple choice',
			question: 'Which company created React?',
			answerChoices: ['Facebook', 'Google', 'Microsoft', 'Amazon'],
			correctAnswer: 'Facebook',
			incorrectAnswer: ['Google', 'Microsoft', 'Amazon'],
		},
		{
			type: 'boolean',
			question: 'The API is where the application data is stored.',
			answerChoices: ['False', 'True'],
			correctAnswer: 'False',
			incorrectAnswer: ['True'],
		},
		{
			type: 'multiple choice',
			question:
				'In React, the parent passes data to its child components in the form of:',
			answerChoices: ['Props', 'Arguments', 'State', 'Parameters'],
			correctAnswer: 'Props',
			incorrectAnswer: ['Arguments', 'State', 'Parameters'],
		},
		{
			type: 'multiple choice',
			question: 'What is a REPL?',
			answerChoices: [
				'A Node CLI tool that evaluates and returns JavaScript code expressions in the terminal.',
				'The snapshot taken of the Virtual Dom in React right before an update is made',
				'Response Evaluation Process Line used in asynchronous error handling with the Try/Catch syntax',
				'A tech-stack utilizing React, Express, Python, and LiveScript',
			],
			correctAnswer:
				'A Node CLI tool that evaluates and returns JavaScript code expressions in the terminal.',
			incorrectAnswer: [
				'The snapshot taken of the Virtual Dom in React right before an update is made',
				'Response Evaluation Process Line used in asynchronous error handling with the Try/Catch syntax',
				'A tech-stack utilizing React, Express, Python, and LiveScript',
			],
		},
		{
			type: 'boolean',
			question: 'If you were to run typeOf on NaN it would return number.',
			answerChoices: ['True', 'False'],
			correctAnswer: 'True',
			incorrectAnswer: ['False'],
		},
	],
};

function DisplayQuiz(props) {
	const [quizData, setQuizData] = useState([]);
	const [quizQuestions, setQuizQuestions] = useState([]);
	const { id } = useParams();

	// async function getQuizData() {
	// 	try {
	// 		const response = await axios.get(
	// 		);
	//         const data = await response.json()
	//         console.log(data)
	//         setQuizData(data)
	// 	} catch (error) {setLoading(false)}
	// }

	useEffect(() => {
		setQuizData(data);
		setQuizQuestions(data.questions);
	}, []);
	return (
		<form className='take-quiz-form'>
			<h2>{quizData.title}</h2>
			<div className='quiz-question'>
				{quizQuestions
					? quizQuestions.map((question, index) => {
							return (
								<div>
									<h3>
										Question {index + 1} of {quizQuestions.length}
									</h3>
									<label htmlFor={`${index}`}>{question.question}</label>
                                    {question.answerChoices.map((choice) => {
                                        return (
                                            <div>
                                                <input type="radio" name={`${index}`} value={choice}/>{choice}
                                            </div>
                                        )
                                    })}
								</div>
							);
					  })
					: 'Loading quiz...'}
			</div>
		</form>
	);
}

export default DisplayQuiz;
