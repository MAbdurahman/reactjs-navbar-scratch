import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

export default function Navbar() {
	//**************** variables ****************//
	const [isOpen, setOpen] = useState(false);

	//**************** functions ****************//
	const handleClick = () => {
		setOpen(!isOpen);
	};
	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav id='navbar' className='navbar'>
			<div className='navbar-brand' onClick={closeMenu}>
				<a className='navbar-brand-link' href='#homePage'>
					Andre Romanovich
				</a>
			</div>
			<div className='navbar-burger-container' onClick={handleClick}>
				<Hamburger
					size={32}
					easing='cubic-bezier(0.175, 0.885, 0.32, 1.275)'
					toggled={isOpen}
				/>
			</div>

			<ul
				id='navbar-links-list'
				className={
					isOpen ? 'navbar-links-list active' : 'navbar-links-list'
				}
			>
				<li className='navbar-links-item'>
					<a
						href='#homePage'
						className='navbar-links-link active'
						onClick={closeMenu}
					>
						Home
					</a>
				</li>
				<li className='navbar-links-item'>
					<a
						href='#aboutPage'
						className='navbar-links-link'
						onClick={closeMenu}
					>
						About
					</a>
				</li>
				<li className='navbar-links-item'>
					<a
						href='#skillsPage'
						className='navbar-links-link'
						onClick={closeMenu}
					>
						Skills
					</a>
				</li>
				<li className='navbar-links-item'>
					<a
						href='#portfolioPage'
						className='navbar-links-link'
						onClick={closeMenu}
					>
						Portfolio
					</a>
				</li>
				<li className='navbar-links-item'>
					<a
						href='#contactPage'
						className='navbar-links-link'
						onClick={closeMenu}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
