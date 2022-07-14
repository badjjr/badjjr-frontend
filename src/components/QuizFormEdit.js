import { useContext, useState } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuizFormEdit() {
	// Hard-coded data
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

	const { updatedQuizForm, setUpdatedQuizForm } = useContext(DataContext);

	const navigate = useNavigate();

	// The following are used to populate the input fields with the current quiz
	// data AND to keep track of any changes the user makes.
	const [titleInput, setTitleInput] = useState(testDATA.title);
	const [numberOfQuestionsInput, setNumberOfQuestionsInput] = useState(
		testDATA.numberOfQuestions
	);
	const [categoryInput, setCategoryInput] = useState(testDATA.category);

	//============================================================================
	// SUBMITTING THE FORM
	// Update state, send a PATCH request, and navigate to the QuizQuestionsEdit component.
	//============================================================================
	const handleUpdatedQuizSubmit = (e) => {
		e.preventDefault();
		setUpdatedQuizForm({
			title: e.currentTarget['title'].value,
			numberOfQuestions: e.currentTarget['num-of-questions'].value,
			category: e.currentTarget['category'].value,
		});

		// Send a PATCH request to update the current quiz in the API.
		const patch = async () => {
			try {
				const res = await axios
					.patch(
						`http://badjjr.herokuapp.com/api/quizzes/${testDATA._id}`,
						updatedQuizForm
					)
					.then((res) => {
						console.log('Quiz successfully updated!', res);
					});
			} catch (error) {
				console.log('Uh-oh! Something went wrong...', error);
			}
		};
		patch();

		// Navigate to the page holding the QuizQuestionsEdit component.
		navigate('/quiz-questions-edit');
	};

	//============================================================================
	// UI
	//============================================================================
	return (
		<div>
			{/* Render the form with Bootstrap styling. */}
			<Form className='quiz-form' onSubmit={handleUpdatedQuizSubmit}>
				<Form.Group>
					<Form.Label htmlFor='title'>Title</Form.Label>
					<Form.Control
						type='text'
						id='title'
						value={titleInput}
						onChange={(e) => setTitleInput(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor='num-of-questions'># of Questions</Form.Label>
					<Form.Control
						type='number'
						id='num-of-questions'
						value={numberOfQuestionsInput}
						onChange={(e) => setNumberOfQuestionsInput(e.target.value)}
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
						value={categoryInput}
						onChange={(e) => setCategoryInput(e.target.value)}
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
