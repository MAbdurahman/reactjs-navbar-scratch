import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

export default function Navbar() {
	//**************** variables ****************//
	const [isMobile, setIsMobile] = useState(false);
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
			<div className='navbar-brand'>Andre Romanovich</div>
			<div className='navbar-burger-container' onClick={handleClick}>
				<Hamburger
					size={48}
					easing='cubic-bezier(0.175, 0.885, 0.32, 1.275)'
				/>
				{/* 				<Hamburger
					toggled={isOpen}
					toggle={setOpen(!isOpen)}
					size={48}
					direction='left'
					distance='lg'
					duration={0.5}
					color='grey'
					easing='cubic-bezier(0.175, 0.885, 0.32, 1.275)'
					hideOutline={true}
					rounded
				/> */}
			</div>

			<ul className={isOpen ? 'navbar-links-list active' : 'navbar-links-list'} >
				<li className='navbar-links-item'>
					<a href='#/' className='navbar-links-link'>
						Home
					</a>
				</li>
				<li className='navbar-links-item'>
					<a href='#/' className='navbar-links-link'>
						About
					</a>
				</li>
				<li className='navbar-links-item'>
					<a href='#/' className='navbar-links-link'>
						Skills
					</a>
				</li>
				<li className='navbar-links-item'>
					<a href='#/' className='navbar-links-link'>
						Portfolio
					</a>
				</li>
				<li className='navbar-links-item'>
					<a href='#/' className='navbar-links-link'>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
