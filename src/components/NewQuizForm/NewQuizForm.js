import './NewQuizForm.css';
import { useContext } from 'react';
import { DataContext } from '../../dataContext';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewQuizForm() {
	const { numOfQuestions, setNumOfQuestions } = useContext(DataContext);

	// Programmatically navigate the user to '/new-quiz-questions' after form submission
	let navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setNumOfQuestions(numOfQuestions);
		console.log(numOfQuestions);
		navigate('/new-quiz-questions');
	};

	return (
		<div>
			<Form className='quiz-form' onSubmit={handleFormSubmit}>
				<Form.Group>
					<Form.Label htmlFor='title'>Title</Form.Label>
					<Form.Control type='text' id='title' placeholder='French' required />
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor='number-of-questions'># of Questions</Form.Label>
					<Form.Control
						type='number'
						id='number-of-questions'
						placeholder='10'
						min='1'
						max='20'
						value={numOfQuestions}
						onChange={(e) => {
							setNumOfQuestions(e.target.value);
						}}
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
