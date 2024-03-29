import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/loginPage.css'

function LoginPage() {
	const { username, setUsername, setPassword, setIsLoggedIn } =
		useContext(DataContext);
	const navigate = useNavigate();
	// Use state to handle errors.
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		// Send a POST request to authorize a user.
		const post = async () => {
			setError('');
			setLoading(true);
			try {
				const res = await axios
					.post('https://badjjr.herokuapp.com/api/users/signin', {
						username: e.currentTarget['username-login'].value,
						password: e.currentTarget['password-login'].value,
					})
					.then((res) => {
						console.log('We have authorized the user!', res);
						// Once authorized, navigate the user to Home.
						setIsLoggedIn(true);
						setLoading(false);
						navigate('/home');
					});
			} catch (error) {
				setLoading(false);
				console.log("Uh-oh! The user wasn't authorized...", error);
				setError(
					'Hm...something went wrong. Please try again or contact us at support@badjjr.com.'
				);
			}
		};
		post();
	};

	useEffect((e) => {
		setUsername('');
		setPassword('');
	}, []);

	return (
		<div>
			<p className='welcome-back'>Welcome back!</p>
			<Form onSubmit={handleLoginSubmit} className='form-container'>
				<Form.Group>
					<Form.Label htmlFor='username'>Username</Form.Label>
					<Form.Control
						type='text'
						id='username-login'
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
						id='password-login'
						minLength='8'
						placeholder='At least 8 characters'
						required
					/>
				</Form.Group>

				<Button className='login-btn' variant='primary' type='submit'>
					Log In
				</Button>
			</Form>
			{loading && 'Logging in...'}
			{error && error}
		</div>
	);
}
export default LoginPage;
