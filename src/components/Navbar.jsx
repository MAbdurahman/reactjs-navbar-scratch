import React, {useState} from 'react';

export default function Navbar() {
	//**************** variables ****************//
   const [isMobile, setIsMobile] = useState(false);

	return (
		<nav id='navbar' className='navbar'>
			<div className='navbar-brand'>
				<h3 className='navbar-brand-logo'>Logo</h3>
			</div>
      
			<div className='navbar-links'>
				<ul className='navbar-links-list'>
					<li className='navbar-links-items'>
						<a href='#/' className='navbar-links-link'>
							Home
						</a>
					</li>
					<li className='navbar-links-items'>
						<a href='#/' className='navbar-links-link'>
							About
						</a>
					</li>
					<li className='navbar-links-items'>
						<a href='#/' className='navbar-links-link'>
							Skills
						</a>
					</li>
					<li className='navbar-links-items'>
						<a href='#/' className='navbar-links-link'>
							Portfolio
						</a>
					</li>
					<li className='navbar-links-items'>
						<a href='#/' className='navbar-links-link'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
