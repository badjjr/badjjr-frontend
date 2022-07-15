import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/categories.css';

function Categories() {
	const [categories, setCategories] = useState([]);

	const myArr = categories.map((a) => a.category);

	const newArr = [...new Set(myArr)].map((b) => b);

	useEffect(() => {
		fetch('https://badjjr.herokuapp.com/api/quizzes')
			.then((res) => res.json())
			.then((json) => {
				setCategories(json);
			})
			.catch(console.error);
	}, []);

	return (
		<section className='category-container'>
			{newArr.map((category) => (
				<Link
					to={`/categories/${category}`}
					key={category}
					className='category-list'>
					<ul>
						<li className='category-item'>{category.toUpperCase()}</li>
					</ul>
				</Link>
			))}
		</section>
	);
}

export default Categories;
