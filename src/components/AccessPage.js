import { Link } from 'react-router-dom';

function AccessPage() {
	return (
		<div>
			<h3>Welcome to Badjjr!</h3>
			<ul>
				<Link to='/signup'>
					<li className='list-item'>Sign Up</li>
				</Link>
				<Link to='/login'>
					<li className='list-item'>Log In</li>
				</Link>
			</ul>
		</div>
	);
}

export default AccessPage;
