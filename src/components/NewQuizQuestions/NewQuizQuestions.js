import './NewQuizQuestions.css';
import { useContext } from 'react';
import { DataContext } from '../../dataContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewQuizQuestions() {
	const { quizQuestions, setQuizQuestions } = useContext(DataContext);

	// By default, there is an input field for just one incorrect answer.
	// Allow the user to add more incorrect answers to a question.
	function handleIncorrectAnswerAdd(questionIndex) {
		const updatedQuestions = quizQuestions.map((question, index) => {
			// If the user added more incorrect answers to a question, identify that
			// specific question, indicated by its questionIndex, in the list of
			// questions.
			if (index === questionIndex) {
				// Add the user's new entries to that question's incorrectAnswer array.
				const incorrectAnswer = [...question.incorrectAnswer, ''];
				// Update the question's data.
				return {
					...question,
					incorrectAnswer,
				};
			}
			return question;
		});
		// Sync changes to quiz questions to React context so that all components
		// can access the updated information.
		setQuizQuestions(updatedQuestions);
	}

	return (
		<div>
			{/* Render the form with Bootstrap styling. */}
			<Form className='questions-form'>
				{quizQuestions.map((question, questionIndex) => (
					<div key={questionIndex}>
						<h2 className='question-title'>Question {questionIndex + 1}</h2>
						<Form.Group>
							<Form.Label>Question Type</Form.Label>
							<Form.Select>
								<option value='1'>Multiple Choice</option>
								<option value='2'>True / False</option>
							</Form.Select>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='question'>Question</Form.Label>
							<Form.Control
								type='text'
								id='question'
								placeholder='Enter a question or True/False statement'
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='correct-answer'>Correct Answer</Form.Label>
							<Form.Control
								type='text'
								id='correct-answer'
								placeholder='Enter the correct answer'
								required
							/>
						</Form.Group>
						{/* Recall that incorrectAnswer is an array. */}
						{question.incorrectAnswer.map((item, incorrectAnswerIndex) => {
							return (
								<Form.Group key={incorrectAnswerIndex}>
									<Form.Label>Incorrect Answer</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter an incorrect answer'
										required
									/>
								</Form.Group>
							);
						})}
						<Button
							type='button'
							onClick={() => handleIncorrectAnswerAdd(questionIndex)}>
							+
						</Button>
					</div>
				))}
				<Button variant='primary' type='submit' className='questions-button'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default NewQuizQuestions;
