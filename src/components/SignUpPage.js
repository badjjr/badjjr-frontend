import { useContext } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUpPage() {
	const { username, setUsername } = useContext(DataContext);
	const navigate = useNavigate();

	const handleSignUpSubmit = () => {
		console.log(username);
		navigate('/home');
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
						minlength='8'
						placeholder='At least 8 characters'
						required
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Sign Up!
				</Button>
			</Form>
		</div>
	);
}

export default SignUpPage;
