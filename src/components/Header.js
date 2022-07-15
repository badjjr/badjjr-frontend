import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';

function Header() {
	return (
		<h1 className='badger-logo'>
			<Link className='badger-home-link' to='/home'>
				🦡
			</Link>
		</h1>
	);
}

export default Header;
