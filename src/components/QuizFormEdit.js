import { useContext, useState } from 'react';
// import { DataContext } from '../dataContext';
// import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuizFormEdit() {
	{
		/* Grab the selected quiz's data from Context */
	}
	{
		/* Populate the form field with the selected quiz's QUIZ data */
	}
	{
		/* If the user changes the number of questions, add another question to the questions array. */
	}
	{
		/* Create a button to go to the QuizQuestionToUpdate */
	}

	const testDATA = {
		_id: '62cf5e01c08e0c47c85182b0',
		title: 'test',
		numberOfQuestions: 1,
		category: 'testing',
		questions: [
			{
				type: 'multiple choice',
				question: 'question',
				answerChoices: ['correct', 'wrong'],
				correctAnswer: 'correct',
				incorrectAnswers: ['wrong'],
				_id: '62cf5e01c08e0c47c85182b1',
				createdAt: '2022-07-14T00:06:25.595Z',
				updatedAt: '2022-07-14T00:06:25.595Z',
			},
		],
		createdAt: '2022-07-14T00:06:25.595Z',
		updatedAt: '2022-07-14T00:06:25.595Z',
		__v: 0,
	};

	const handleUpdatedQuizSubmit = () => {};

	return (
		<div>
			{/* Render the form with Bootstrap styling. */}
			<Form className='quiz-form' onSubmit={handleUpdatedQuizSubmit}>
				<Form.Group>
					<Form.Label htmlFor='title'>Title</Form.Label>
					<Form.Control
						type='text'
						id='title'
						value={testDATA.title}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor='num-of-questions'># of Questions</Form.Label>
					<Form.Control
						type='number'
						id='num-of-questions'
						value={testDATA.numberOfQuestions}
						min='1'
						max='20'
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor='category'>Category</Form.Label>
					<Form.Control
						type='text'
						id='category'
						value={testDATA.category}
						required
					/>
				</Form.Group>
				<Button variant='primary' type='submit' className='form-button'>
					Next
				</Button>
			</Form>
		</div>
	);
}

export default QuizFormEdit;
