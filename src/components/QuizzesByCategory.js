import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import QuizDeleteAndEdit from './QuizDeleteAndEdit';
import { useParams } from 'react-router-dom';

function QuizzesByCategory() {
	const [categories, setCategories] = useState([]);
	const { category } = useParams();

	// Use state to handle loading and errors.
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		setError('');
		setLoading(true);
		fetch(`https://badjjr.herokuapp.com/api/quizzes/categories/${category}`)
			.then((res) => res.json())
			.then((json) => {
				setCategories(json);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				setError(
					'Hm...something went wrong. Please try again or contact us at support@badjjr.com.'
				);
			});
	}, []);

	return (
		<section>
			{categories.map((cats) => {
				return (
					<QuizDeleteAndEdit
						key={cats._id}
						id={cats._id}
						title={cats.title}
						category={cats.category}
					/>
				);
			})}
			{loading && 'Grabbing the quizzes...'}
			{error && error}
		</section>
	);
}

export default QuizzesByCategory;
