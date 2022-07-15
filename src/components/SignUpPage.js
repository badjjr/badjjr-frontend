import { useContext, useState } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUpPage() {
	const { username, setUsername } = useContext(DataContext);

	const navigate = useNavigate();

	// For error handling
	const [error, setError] = useState('');

	const handleSignUpSubmit = (e) => {
		e.preventDefault();

		// Send a POST request to add a new user to the database.
		const post = async () => {
			setError('');
			try {
				const res = await axios
					.post('http://localhost:8000/api/createUser', {
						username: e.currentTarget['username'].value,
						password: e.currentTarget['password'].value,
					})
					.then((res) => {
						console.log('New user successfully added!', res);
						navigate('/home');
					});
			} catch (error) {
				console.log('Uh-oh! Something went wrong...', error);
				setError(
					'Hm...something went wrong. Please contact us at support@badjjr.com.'
				);
			}
		};
		post();
	};

	return (
		<div>
			<p>Join the clan!</p>
			<Form onSubmit={handleSignUpSubmit}>
				<Form.Group>
					<Form.Label htmlFor='username'>Username</Form.Label>
					<Form.Control
						type='text'
						id='username'
						placeholder='bradjjr'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor='password'>Password</Form.Label>
					<Form.Control
						type='password'
						id='password'
						minLength='8'
						placeholder='At least 8 characters'
						required
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Sign Up
				</Button>
			</Form>
			<p>{error && error}</p>
		</div>
	);
}

export default SignUpPage;
