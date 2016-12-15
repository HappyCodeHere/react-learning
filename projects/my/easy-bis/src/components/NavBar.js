import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
	return (
		<div>
			<Link to='/'> На главную </Link>
			<Link to='/login'> Логин </Link>
			<Link to='/registration'> Регистрация </Link>
		</div>
	)
}

export default NavBar;