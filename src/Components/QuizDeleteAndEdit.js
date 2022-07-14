import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
				navigate('/quiz-form-edit/:id');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Link to={`/quiz/${id}`}>
				<div>
					<h3> Title: {title} </h3>
					<h4> Category: {category} </h4>
				</div>
			</Link>
			<button type='button' onClick={handleDelete}>
				Delete
			</button>
			<button type='button' onClick={handleEdit}>
				Edit
			</button>
		</>
	);
}

export default QuizDeleteAndEdit;
