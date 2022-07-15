import { useContext, useState } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LogInPage() {
	const { username, setUsername } = useContext(DataContext);

	const navigate = useNavigate();

	// For error handling
	const [error, setError] = useState('');

	const handleLogInSubmit = (e) => {
		e.preventDefault();

		// Send a POST request to verify the returning user's info.
		const post = async () => {
			setError('');
			try {
				const res = await axios
					.post('http://localhost:8000/api/showUser', {
						username: e.currentTarget['username'].value,
						password: e.currentTarget['password'].value,
					})
					.then((res) => {
						console.log('We have a returning user!', res);
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
			<p>Welcome back!</p>
			<Form onSubmit={handleLogInSubmit}>
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
					Log In
				</Button>
			</Form>
			<p>{error && error}</p>
		</div>
	);
}
export default LogInPage;
