import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <h1 className='badger-logo'>
            <Link to='/'>🦡</Link>
        </h1>
    );
}

export default Header;