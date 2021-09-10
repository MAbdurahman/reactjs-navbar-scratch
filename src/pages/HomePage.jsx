import React from 'react';

export default function HomePage() {
	return (
		<header id='homePage' className='header scrollspy'>
			<div className="header_background"></div>
			<div className='header_overlay'></div>
			<div id='header-content'>
				<div id='header-content--inner' className='text-center'>
					<div id='header-heading'>
						<h1 id='header-heading--one'>Mahdi</h1>
						<h1 id='header-heading--two'>Abdurrahman</h1>
					</div>
					<div id='header-heading--sub'>
						<h3>Software and Web Developer</h3>
					</div>
					<div id='header-heading--btn'>
						<a
							href='#aboutPage'
							id='heading--btn'
							className='btn-default btn-home'
							role='button'
						>
							View More
						</a>
					</div>
				</div>
					<div id='arrow-content'>
						<a href='#aboutPage' id='arrow-down'>
							<i className='fas fa-chevron-down'></i>
						</a>
					</div>
			</div>
		</header>
	);
}
