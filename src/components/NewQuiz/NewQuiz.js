import './NewQuiz.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewQuiz() {
	return (
		<Form className='quiz-form'>
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
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
}

export default NewQuiz;
