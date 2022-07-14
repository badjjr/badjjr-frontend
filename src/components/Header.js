import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';

function Header(props) {
	return (
		<h1 className='badger-logo'>
			<Link className='badger-home-link' to='/'>
				🦡
			</Link>
		</h1>
	);
}

export default Header;
