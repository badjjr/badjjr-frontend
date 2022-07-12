import '../styles/quizQuestions.css';
<<<<<<< HEAD
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
=======
import { useContext } from 'react';
import { DataContext } from '../dataContext';
// import { useNavigate } from 'react-router-dom';
>>>>>>> 8d64db0 (Rename files)
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuizQuestions() {
<<<<<<< HEAD
	const { quizQuestions, setQuizQuestions, quizFormData } =
		useContext(DataContext);

	const navigate = useNavigate();

	//============================================================================
	// ADDING INCORRECT ANSWERS
	//============================================================================
=======
	const { quizQuestions, setQuizQuestions } = useContext(DataContext);

	// const navigate = useNavigate();

>>>>>>> 8d64db0 (Rename files)
	const handleIncorrectAnswersAdd = (questionIndex) => {
		// By default, there is an input field for just one incorrect answer.
		// Allow the user to add an input field for another incorrect answer.
		const updatedIncorrectAnswers = quizQuestions.map((question, index) => {
			// The question to which the user is adding incorrect answers can be
			// identified by its questionIndex.
<<<<<<< HEAD
			// If the question type is True/False, prevent additional input fields.
			if (index === questionIndex) {
				// Add a new input field, value set to '', to the end of the question's
				// incorrectAnswers array.
				const incorrectAnswers = [...question.incorrectAnswers, ''];
				// Update the question's data.
				return {
					...question,
					incorrectAnswers,
				};
=======
			if (index === questionIndex) {
				// Add a new input field, value set to '', to the end of the question's
				// incorrectAnswers array.
				question.incorrectAnswers.push('');
>>>>>>> 8d64db0 (Rename files)
			}
			return question;
		});
		setQuizQuestions(updatedIncorrectAnswers);
	};

<<<<<<< HEAD
	//============================================================================
	// DELETING INCORRECT ANSWERS
	//============================================================================
=======
>>>>>>> 8d64db0 (Rename files)
	const handleIncorrectAnswersDelete = (questionIndex) => {
		const updatedIncorrectAnswers = quizQuestions.map((question, index) => {
			// The question from which the user is deleting incorrect answers can
			// be identified by its questionIndex.
			// At least one input field for an incorrect answer is required.
			if (index === questionIndex && question.incorrectAnswers.length >= 2) {
				// Delete the last input field in the question's incorrectAnswers array.
				question.incorrectAnswers.pop();
			}
			return question;
		});
		setQuizQuestions(updatedIncorrectAnswers);
	};

<<<<<<< HEAD
	//============================================================================
	// SUBMITTING THE FORM
	// Update state, send a POST request, and navigate to the finished quiz.
	//============================================================================
	const handleQuestionsSubmit = (e) => {
		e.preventDefault();
		const updatedQuestions = quizQuestions.map((question, questionIndex) => {
			// Grab the value of the correct answer and store it in a variable to be
			// used in answerChoices.
			const correctAnswerValue =
				e.target[`correct-answer-${questionIndex}`].value;
			// Grab the values of all incorrect answers and store them in a variable
			// to be used in answerChoices.
			const incorrectAnswersValues = question.incorrectAnswers.map(
				(item, incorrectAnswerIndex) => {
					return e.target[
						`incorrect-answer-${questionIndex}-${incorrectAnswerIndex}`
					].value;
				}
			);
			return {
				type: e.target[`type-${questionIndex}`].value,
				question: e.target[`question-${questionIndex}`].value,
=======
	const handleQuestionsSubmit = (e) => {
		e.preventDefault();
		const updatedQuestions = quizQuestions.map((question) => {
			const correctAnswerValue = e.currentTarget['correct-answer'].value;
			// Grab the values of the incorrect answers and store them in a variable.
			const incorrectAnswersValues = question.incorrectAnswers.map(
				(item, index) => {
					return e.currentTarget[`incorrect-answer-${index}`].value;
				}
			);

			return {
				type: e.currentTarget['type'].value,
				question: e.currentTarget['question'].value,
>>>>>>> 8d64db0 (Rename files)
				answerChoices: [correctAnswerValue, ...incorrectAnswersValues],
				correctAnswer: correctAnswerValue,
				incorrectAnswers: incorrectAnswersValues,
			};
		});
		setQuizQuestions(updatedQuestions);
<<<<<<< HEAD

		// Send a POST request to add a new quiz to the API.
		const post = async () => {
			try {
				const res = await axios
					.post('http://badjjr.herokuapp.com/api/quizzes', {
						...quizFormData,
						questions: updatedQuestions,
					})
					.then((res) => {
						console.log('Quiz successfully added!', res);
						// Using the new quiz's generated id, navigate to a separate page
						// that displays the new quiz.
						navigate(`/quiz/${res.data[res.data.length - 1]._id}`);
					});
			} catch (error) {
				console.log('Uh-oh! Something went wrong...', error);
			}
		};
		post();
	};

	//============================================================================
	// UI
	//============================================================================
=======
		console.log(updatedQuestions);
		// navigate('/display-quiz');
	};

>>>>>>> 8d64db0 (Rename files)
	return (
		<div>
			{/* Render the form with Bootstrap styling. */}
			<Form className='questions-form' onSubmit={handleQuestionsSubmit}>
				{quizQuestions.map((question, questionIndex) => (
					<div key={questionIndex}>
						<h2 className='question-title'>Question {questionIndex + 1}</h2>
<<<<<<< HEAD

						<Form.Group>
							<Form.Label>Question Type</Form.Label>
							<Form.Select id={`type-${questionIndex}`}>
=======
						<Form.Group>
							<Form.Label>Question Type</Form.Label>
							<Form.Select id='type'>
>>>>>>> 8d64db0 (Rename files)
								<option value='multiple choice'>Multiple Choice</option>
								<option value='boolean'>True / False</option>
							</Form.Select>
						</Form.Group>
<<<<<<< HEAD

=======
>>>>>>> 8d64db0 (Rename files)
						<Form.Group>
							<Form.Label htmlFor='question'>Question</Form.Label>
							<Form.Control
								type='text'
<<<<<<< HEAD
								id={`question-${questionIndex}`}
=======
								id='question'
>>>>>>> 8d64db0 (Rename files)
								placeholder='Enter a question or statement'
								required
							/>
						</Form.Group>
<<<<<<< HEAD

=======
>>>>>>> 8d64db0 (Rename files)
						<Form.Group>
							<Form.Label htmlFor='correct-answer'>Correct Answer</Form.Label>
							<Form.Control
								type='text'
<<<<<<< HEAD
								id={`correct-answer-${questionIndex}`}
=======
								id='correct-answer'
>>>>>>> 8d64db0 (Rename files)
								placeholder='Enter the correct answer'
								required
							/>
						</Form.Group>

<<<<<<< HEAD
						{/* Note that incorrectAnswers is an array. */}
=======
						{/* Recall that incorrectAnswers is an array. */}
>>>>>>> 8d64db0 (Rename files)
						{question.incorrectAnswers
							? question.incorrectAnswers.map((item, incorrectAnswerIndex) => {
									return (
										<Form.Group key={incorrectAnswerIndex}>
											<Form.Label>Incorrect Answer</Form.Label>
											<Form.Control
												type='text'
<<<<<<< HEAD
												id={`incorrect-answer-${questionIndex}-${incorrectAnswerIndex}`}
=======
												id={`incorrect-answer-${incorrectAnswerIndex}`}
>>>>>>> 8d64db0 (Rename files)
												placeholder='Enter an incorrect answer'
												required
											/>
										</Form.Group>
									);
							  })
							: null}

						<div className='questions-buttons'>
							<Button
								type='button'
<<<<<<< HEAD
								id='add-answer-button'
=======
								className='add-answer-button'
>>>>>>> 8d64db0 (Rename files)
								onClick={() => handleIncorrectAnswersAdd(questionIndex)}>
								Add answer choice
							</Button>
							<Button
								type='button'
<<<<<<< HEAD
								id='delete-answer-button'
=======
								className='delete-answer-button'
>>>>>>> 8d64db0 (Rename files)
								onClick={() => handleIncorrectAnswersDelete(questionIndex)}>
								Delete answer choice
							</Button>
						</div>
					</div>
				))}
<<<<<<< HEAD
				<Button variant='primary' type='submit' id='submit-questions-button'>
=======
				<Button
					variant='primary'
					type='submit'
					className='submit-questions-button'>
>>>>>>> 8d64db0 (Rename files)
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default QuizQuestions;
