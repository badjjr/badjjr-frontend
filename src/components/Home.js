import { useContext } from 'react';
import { DataContext } from '../dataContext';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
	const { username } = useContext(DataContext);

	return (
		<div className='home-div'>
			<h3 className='welcome-msg'>
				{`Hey ${username}! What do you want to do?`}
			</h3>
			<ul className='home-list'>
				<Link to='/categories' style={{ textDecoration: 'none' }}>
					<li className='list-item'>Take a Quiz</li>
				</Link>
				<Link to='/quiz-form' style={{ textDecoration: 'none' }}>
					<li className='list-item'>Make a Quiz</li>
				</Link>
				{/* <Link to='/myAccount'><li>Go to My Account</li></Link> */}
			</ul>
		</div>
	);
}

export default Home;
