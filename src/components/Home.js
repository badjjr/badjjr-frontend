import { useContext } from 'react';
import { DataContext } from '../dataContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/home.css';

function Home() {
	const { username, setIsLoggedIn } = useContext(DataContext);
	const navigate = useNavigate();

	const handleLogoutClick = (e) => {
		setIsLoggedIn(false);
		navigate('/');
	};

	return (
		<div className='home-div'>
			<h3 className='welcome-msg'> {`Hey ${username}! What do you want to do?`} </h3>
			<div className='home-list'>
				<Link to='/categories' id='link-take'>
					<Button
					type='button'
					id='take-quiz'>
						Take a Quiz
					</Button>
				</Link>
				<Link to='/quiz-form' id='link-make'>
					<Button
					type='button'
					id='make-quiz'>
						Make a Quiz
					</Button>
				</Link>
			</div>
				<button onClick={handleLogoutClick}>Log Out</button>
		</div>
	);
}

export default Home;
