import '../styles/quizQuestions.css';
import { useContext } from 'react';
import { DataContext } from '../dataContext';
// import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuizQuestions() {
	const { quizQuestions, setQuizQuestions } = useContext(DataContext);

	// const navigate = useNavigate();

	const handleIncorrectAnswersAdd = (questionIndex) => {
		// By default, there is an input field for just one incorrect answer.
		// Allow the user to add an input field for another incorrect answer.
		const updatedIncorrectAnswers = quizQuestions.map((question, index) => {
			// The question to which the user is adding incorrect answers can be
			// identified by its questionIndex.
			if (index === questionIndex) {
				// Add a new input field, value set to '', to the end of the question's
				// incorrectAnswers array.
				question.incorrectAnswers.push('');
			}
			return question;
		});
		setQuizQuestions(updatedIncorrectAnswers);
	};

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
				answerChoices: [correctAnswerValue, ...incorrectAnswersValues],
				correctAnswer: correctAnswerValue,
				incorrectAnswers: incorrectAnswersValues,
			};
		});
		setQuizQuestions(updatedQuestions);
		console.log(updatedQuestions);
		// Navigate to the page that displays the quiz in its entirety.
		// navigate('/quiz/:id');
	};

	return (
		<div>
			{/* Render the form with Bootstrap styling. */}
			<Form className='questions-form' onSubmit={handleQuestionsSubmit}>
				{quizQuestions.map((question, questionIndex) => (
					<div key={questionIndex}>
						<h2 className='question-title'>Question {questionIndex + 1}</h2>
						<Form.Group>
							<Form.Label>Question Type</Form.Label>
							<Form.Select id={`type-${questionIndex}`}>
								<option value='multiple choice'>Multiple Choice</option>
								<option value='boolean'>True / False</option>
							</Form.Select>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='question'>Question</Form.Label>
							<Form.Control
								type='text'
								id={`question-${questionIndex}`}
								placeholder='Enter a question or statement'
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='correct-answer'>Correct Answer</Form.Label>
							<Form.Control
								type='text'
								id={`correct-answer-${questionIndex}`}
								placeholder='Enter the correct answer'
								required
							/>
						</Form.Group>

						{/* Recall that incorrectAnswers is an array. */}
						{question.incorrectAnswers
							? question.incorrectAnswers.map((item, incorrectAnswerIndex) => {
									return (
										<Form.Group key={incorrectAnswerIndex}>
											<Form.Label>Incorrect Answer</Form.Label>
											<Form.Control
												type='text'
												id={`incorrect-answer-${questionIndex}-${incorrectAnswerIndex}`}
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
								className='add-answer-button'
								onClick={() => handleIncorrectAnswersAdd(questionIndex)}>
								Add answer choice
							</Button>
							<Button
								type='button'
								className='delete-answer-button'
								onClick={() => handleIncorrectAnswersDelete(questionIndex)}>
								Delete answer choice
							</Button>
						</div>
					</div>
				))}
				<Button
					variant='primary'
					type='submit'
					className='submit-questions-button'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default QuizQuestions;
