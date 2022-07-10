import './NewQuizQuestions.css';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../dataContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewQuizQuestions() {
	const { numOfQuestions } = useContext(DataContext);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		let questionsArray = new Array(parseInt(numOfQuestions)).fill({});
		setQuestions(questionsArray);
	}, [numOfQuestions]);

	return (
		<div>
			<Form className='questions-form'>
				{questions.map((question, index) => (
					<div key={index}>
						<h3 className='question-title'>Question {index + 1}</h3>
						<Form.Group>
							<Form.Label htmlFor='type'>Question Type</Form.Label>
							<Form.Select>
								<option value='1'>Multiple Choice</option>
								<option value='2'>True / False</option>
							</Form.Select>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='question'>Question</Form.Label>
							<Form.Control type='text' id='question' required />
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='correct-answer'>Correct Answer</Form.Label>
							<Form.Control type='text' id='correct-answer' required />
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='incorrect-answer-1'>
								Incorrect Answer
							</Form.Label>
							<Form.Control type='text' id='incorrect-answer-1' required />
						</Form.Group>
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
