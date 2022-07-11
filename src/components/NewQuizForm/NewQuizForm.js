import './NewQuizForm.css';
import { useContext } from 'react';
import { DataContext } from '../../dataContext';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewQuizForm() {
	const { setQuizFormData, setQuizQuestions } = useContext(DataContext);
	const navigate = useNavigate();

	const handleQuizFormSubmit = (e) => {
		e.preventDefault();
		// Store user input for '# of Questions' in a variable for easy referral.
		const numOfQuestions = e.currentTarget['num-of-questions'].value;
		// Sync form data to React context so that all components can access the
		// updated information.
		setQuizFormData({
			title: e.currentTarget['title'].value,
			numOfQuestions,
			category: e.currentTarget['category'].value,
		});
		// Initialize a list of quiz questions, the length of which is based on the
		// numOfQuestions value.
		setQuizQuestions(
			new Array(parseInt(numOfQuestions)).fill({
				type: '',
				question: '',
				correctAnswer: '',
				incorrectAnswer: [''],
			})
		);
		// Navigate to the page holding the NewQuizQuestions component.
		navigate('/new-quiz-questions');
	};

	return (
		<div>
			{/* Render the form with Bootstrap styling. */}
			<Form className='quiz-form' onSubmit={handleQuizFormSubmit}>
				<Form.Group>
					<Form.Label htmlFor='title'>Title</Form.Label>
					<Form.Control type='text' id='title' placeholder='French' required />
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor='num-of-questions'># of Questions</Form.Label>
					<Form.Control
						type='number'
						id='num-of-questions'
						placeholder='10'
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
						placeholder='Languages'
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

export default NewQuizForm;
