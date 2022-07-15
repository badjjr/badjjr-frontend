import { Link } from 'react-router-dom';
import '../styles/accessPage.css'

function AccessPage() {
	return (
		<div>
			<h3 className='welcome-msg'>Welcome to Badjjr!</h3>
			<ul className='access-list'>
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
