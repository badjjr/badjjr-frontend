import { useContext, useState } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function QuizFormEdit() {
	// Hard-coded data
	const testDATA = {
		_id: '62cf0973d81216a23fae6e98',
		title: 'frappuccino',
		numberOfQuestions: 2,
		category: 'programming',
		questions: [
			{
				type: 'multiple choice',
				question: 'yum?',
				answerChoices: ['yum', 'no'],
				correctAnswer: 'yum',
				incorrectAnswers: ['no'],
				_id: '62cf0973d81216a23fae6e99',
				createdAt: '2022-07-13T18:05:39.090Z',
				updatedAt: '2022-07-13T18:05:39.090Z',
			},
			{
				type: 'multiple choice',
				question: 'hot?',
				answerChoices: ['hot!', 'cold'],
				correctAnswer: 'hot!',
				incorrectAnswers: ['cold'],
				_id: '62cf0973d81216a23fae6e9a',
				createdAt: '2022-07-13T18:05:39.091Z',
				updatedAt: '2022-07-13T18:05:39.091Z',
			},
		],
		createdAt: '2022-07-13T18:05:39.091Z',
		updatedAt: '2022-07-13T18:05:39.091Z',
		__v: 0,
	};

	const { setQuizFormData, setQuizQuestions } = useContext(DataContext);

	const navigate = useNavigate();

	//============================================================================
	// MODAL
	//============================================================================
	// Display a modal to warn the user that changing the number of questions will
	// delete all of the current questions.
	const [showModal, setShowModal] = useState(false);
	const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);

	//============================================================================
	// SUBMITTING THE FORM
	// Update state, send a PATCH request, and navigate to the QuizQuestionsEdit component.
	//============================================================================
	const handleUpdatedQuizSubmit = (e) => {
		e.preventDefault();
		// Store user input for '# of Questions' in a variable for easy referral.
		const numberOfQuestions = e.currentTarget['num-of-questions'].value;
		setQuizFormData({
			title: e.currentTarget['title'].value,
			numberOfQuestions: numberOfQuestions,
			category: e.currentTarget['category'].value,
		});

		// Initialize a list of quiz questions, the length of which is based on the
		// numberOfQuestions value.
		if (numberOfQuestions !== testDATA.numberOfQuestions)
			setQuizQuestions(
				new Array(parseInt(numberOfQuestions)).fill({
					type: '',
					question: '',
					answerChoices: [''],
					correctAnswer: '',
					incorrectAnswers: [''],
				})
			);

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
						defaultValue={testDATA.title}
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor='num-of-questions'># of Questions</Form.Label>
					<Form.Control
						type='number'
						id='num-of-questions'
						defaultValue={testDATA.numberOfQuestions}
						min='1'
						max='20'
						onClick={handleShowModal}
						required
					/>
				</Form.Group>

				<Modal
					show={showModal}
					onHide={handleCloseModal}
					backdrop='static'
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>Heads up!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Changing the number of questions will delete all of your current
						questions.
					</Modal.Body>
					<Modal.Footer>
						<Button variant='primary' onClick={handleCloseModal}>
							Understood
						</Button>
					</Modal.Footer>
				</Modal>

				<Form.Group>
					<Form.Label htmlFor='category'>Category</Form.Label>
					<Form.Control
						type='text'
						id='category'
						defaultValue={testDATA.category}
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
