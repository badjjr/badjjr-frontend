import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/quizDeleteAndEdit.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function QuizDeleteAndEdit({ id, title, category }) {
	const navigate = useNavigate();

	const handleDelete = async () => {
		try {
			const response = await axios.delete(
				`https://badjjr.herokuapp.com/api/quizzes/${id}`
			);
			console.log(response);
			if (response.status === 200) {
				navigate('/categories');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = async () => {
		try {
			const response = await axios(
				`https://badjjr.herokuapp.com/api/quizzes/${id}`
			);
			console.log(response);
			if (response.status === 200) {
				navigate(`/quiz-form-edit/${response.data._id}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Subtitle>{category}</Card.Subtitle>
				</Card.Body>
				<Link className='take-quiz-link' to={`/quiz/${id}`}>
					<Button type='button' id='take-quiz-btn'>
						Take Quiz!
					</Button>
				</Link>
				<Button type='button' id='delete-quiz-btn' onClick={handleDelete}>
					Delete
				</Button>
				<Button type='button' id='edit-quiz-btn' onClick={handleEdit}>
					Edit
				</Button>
			</Card>
		</>
	);
}

export default QuizDeleteAndEdit;
