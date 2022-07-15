import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignupPage() {
	const { username, setUsername, setIsLoggedIn } = useContext(DataContext);
	const navigate = useNavigate();
	// Use state to handle errors.
	const [error, setError] = useState('');

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		// Send a POST request to add a new user to the database.
		const post = async () => {
			setError('');
			try {
				const res = await axios
					.post('https://badjjr.herokuapp.com/api/createUser', {
						username: e.currentTarget['username'].value,
						password: e.currentTarget['password'].value,
					})
					.then((res) => {
						console.log('Success! A new user!', res);
						// Automatically log the user in upon successful signup.
						setIsLoggedIn(true);
						navigate('/home');
					});
			} catch (error) {
				console.log("Uh-oh! A new user wasn't created...", error);
				setError(
					'Hm...something went wrong. Please try again or contact us at support@badjjr.com.'
				);
			}
		};
		post();
	};

	useEffect((e) => {
		setUsername('');
	}, []);

	return (
		<div>
			<p>Join the badjjr clan!</p>
			<Form onSubmit={handleSignupSubmit}>
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

export default SignupPage;