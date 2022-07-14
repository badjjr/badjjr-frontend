import { useContext, useState } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuizFormEdit() {
	// Hard-coded data
	const testDATA = {
		_id: '62cdb2952cd815e1b5509110',
		title: 'Covalent Bonds',
		numberOfQuestions: 10,
		category: 'Chemistry',
		questions: [
			{
				type: 'Multiple Choice',
				question: "What's the capital of Canada?",
				answerChoices: ['Montreal', 'Toronto', 'Ottawa', 'Calgary'],
				correctAnswer: 'Ottawa',
				incorrectAnswers: ['Montreal', 'Toronto', 'Calgary'],
				_id: '62cdb4dde962d123b684333e',
				createdAt: '2022-07-12T17:52:29.833Z',
				updatedAt: '2022-07-12T17:52:29.833Z',
			},
		],
		createdAt: '2022-07-12T17:42:45.473Z',
		updatedAt: '2022-07-12T17:52:29.833Z',
		__v: 1,
	};

	const { setQuizFormData } = useContext(DataContext);

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
		setQuizFormData({
			title: e.currentTarget['title'].value,
			numberOfQuestions: e.currentTarget['num-of-questions'].value,
			category: e.currentTarget['category'].value,
		});

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
