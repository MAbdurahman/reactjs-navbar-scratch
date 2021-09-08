import React from 'react';
import HeaderImage from './../img/home_page/pexels-pixabay-270348.jpg'

export default function HomePage() {
	return (
		<div id='homePage' className='header pages scrollspy'>
			<div className='header_overlay'></div>
			<div id='header-content'>
				<div id='header-content--inner' className='text-center'>
					<div id='header-heading'>
						<h1 id='header-heading--one'>Andre</h1>
						<h1 id='header-heading--two'>Romanovich</h1>
					</div>
					<div id='header-heading--sub'>
						<h3>Software and Web Developer</h3>
					</div>
					<div id='header-heading--btn'>
						<a
							href='#about'
							id='heading--btn'
							class='btn-general btn-home'
							role='button'
						>
							View More
						</a>
					</div>
					<div id='arrow-content'>
						<a href='#about' id='arrow-down'>
							<i className='fas fa-chevron-down'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
