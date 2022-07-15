import { Link } from 'react-router-dom';

function AccessPage() {
	return (
		<div>
			<h3>Welcome to Badjjr!</h3>
			<ul>
				<Link to='/sign-up'>
					<li className='list-item'>Sign Up</li>
				</Link>
				<Link to='/log-in'>
					<li className='list-item'>Log In</li>
				</Link>
			</ul>
		</div>
	);
}

export default AccessPage;
