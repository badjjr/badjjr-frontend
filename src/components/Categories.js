import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/categories.css';

function Categories() {
	const [categories, setCategories] = useState([]);

	// Use state to handle loading and errors.
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const myArr = categories.map((a) => a.category);

	const newArr = [...new Set(myArr)].map((b) => b);

	useEffect(() => {
		setError('');
		setLoading(true);
		fetch('https://badjjr.herokuapp.com/api/quizzes')
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
		<section className='category-container'>
			{newArr.map((category) => (
				<Link
					to={`/categories/${category}`}
					className='category-link'
					key={category}>
					<ul className='category-list'>
						<li className='category-item'>{category.toUpperCase()}</li>
					</ul>
				</Link>
			))}
			{loading && 'Grabbing the quiz categories...'}
			{error && error}
		</section>
	);
}

export default Categories;
