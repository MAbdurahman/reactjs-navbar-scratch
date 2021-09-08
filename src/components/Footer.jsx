import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
	return (
		<footer id='footer' className='footer container-fluid'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-5 col-xs-12 about-company mt-lg-3'>
						<Navbar.Brand className='navbar-brand'>
							<a href='#homePage' className='footer-navbar-brand'>
								Andre Romanovich
							</a>
						</Navbar.Brand>
						<p className='pr-5 mission-statement'>
							"I put my heart and soul into my work! The needs of my
							clients are at the forefront of what I do everyday. Through
							programming, engineering, art, research, and innovation, I
							develop software and websites that are artistic,
							functional, and user friendly; which evolve with my
							client's business needs."
						</p>
						<p className='social-icons'>
							<a
								href='https://www.facebook.com'
								target='_blank'
								className='social-icon facebook'
								rel='noreferrer'
							>
								<i className='fab fa-facebook-square'></i>
							</a>
							<a
								href='https://twitter.com/'
								target='_blank'
								className='social-icon twitter'
								rel='noreferrer'
							>
								<i className='fab fa-twitter-square'></i>
							</a>
							<a
								href='https://github.com/MAbdurahman'
								target='_blank'
								className='social-icon github'
								rel='noreferrer'
							>
								<i className='fab fa-github-square'></i>
							</a>
						</p>
					</div>
					<div className='col-lg-3 col-xs-12 about-links mt-lg-3'>
						<h4 className='about-links-heading'>Links</h4>
						<div className='link-container'>
							<ul className='m-0 p-0 link-list'>
								<li className='link'>
									<a href='#homePage'>Home</a>
								</li>
								<li className='link'>
									<a href='#aboutPage'>About</a>
								</li>
								<li className='link'>
									<a href='#skillsPage'>Skills</a>
								</li>
								<li className='link'>
									<a href='#portfolioPage'>Portfolio</a>
								</li>
								<li className='link'>
									<a href='#contactPage'>Contact</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-4 col-xs-12 about-location mt-lg-3'>
						<h4 className='about-location-address'>Information</h4>
						<p className='about-location-address mb-0'>
							1234 SomeStreet Avenue #100
						</p>
						<p className='about-location-item mb-1'>
							SomeCity, SomeState 11235
						</p>
						<p className='about-location-item mb-0'>
							Work-hours: 9:00am - 12:00am
						</p>
						<p className='about-location-item mb-1 link'>
							<i className='fas fa-phone-alt'></i>&nbsp;
							<a href='tel:901-425-5525'>123-456-7890</a>
						</p>
						<p className='about-location-item mb-2 link'>
							<i className='fas fa-envelope-open-text'></i>&nbsp;
							<a
								href='mailto:mdbdrrhm2@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								andre_romanovich@gmail.com
							</a>
						</p>
					</div>
				</div>
				<hr className='footer-horizontal-line' />
				<div className='row'>
					<div className='col copyright'>
						<p className='copyright-item text-center link'>
							<small>
								<a href='!#' target='_blank' rel='noreferrer'>
									Terms and Conditions
								</a>
								&nbsp;|&nbsp;
								<a href='!#' target='_blank' rel='noreferrer'>
									Privacy Policy
								</a>
								<br />
							</small>
							<small className='copyright-text'>
								&copy;&nbsp;2013 - 2021 Andre Romanovich, All rights
								reserved
							</small>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
