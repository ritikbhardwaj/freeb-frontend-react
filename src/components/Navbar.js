import React from 'react';
import Logo from '../assets/images/brand.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='nav d-flex flex-column'>
			<div className='nav__menu d-flex flex-row'>
				<div className='nav__menu-left'>
					<Link to='/about' className='nav__link'>
						About
					</Link>
					<a href='#' className='nav__link nav__notifications'>
						Notifications
					</a>
					<Link to='/' className='nav__link nav__home'>
						Home
					</Link>
				</div>
				<img src={Logo} className='nav__brand'></img>
				<div className='nav__menu-right'>
					<Link to='/account' className='nav__link nav__account'>
						My account
					</Link>
					<Link to='/login' className='nav__link'>
						Login
					</Link>
					<Link to='/signup' className='nav__link'>
						Signup
					</Link>
				</div>
			</div>
			{/* <div className='nav__categories d-flex flex-row'>
				<a href='#' className='nav__link nav__trending'>
					Trending
				</a>
				<a href='#' className='nav__link'>
					Fashion
				</a>
				<a href='#' className='nav__link'>
					#Search tags
				</a>
				<a href='#' className='nav__link'>
					Nature
				</a>
				<a href='#' className='nav__link'>
					Animals
				</a>
			</div> */}
		</nav>
	);
};

export default Navigation;
