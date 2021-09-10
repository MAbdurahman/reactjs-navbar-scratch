import React from 'react';
import Author from './../img/about_page/self.jpg';

export default function AboutPage() {
	return (
		<div id='aboutPage' className='container pages scrollspy'>
			<div className='row'>
				<div className='col-lg-6 col-xs-12'>
					<div className='about-image'>
						<img className='about-author-img' src={Author} alt='Author' />
					</div>
				</div>
				<div className='col-lg-6 col-xs-12'>
					<div className='about-info'>
						<div className='about-info-title'>
							<h1 className='about-title'>About Me</h1>
						</div>
						<div className='about-info-text'>
							<p className='about-info-para'>
								Hello!&nbsp;&nbsp; I am&nbsp;
								<strong>Mahdi Abdurrahman</strong>, a Software and Web
								Developer, living in the southeast region of the United
								States and working primarily with desktop applications,
								responsive website development, and
								databases.&nbsp;&nbsp;I have a Bachelors in Criminal
								Justice, approximately three years towards a Bachelors
								in Computer Science, and I am self-taught in other
								information technologies.
							</p>
							<p className='about-info-para'>
								I specialize in creating beautiful, reusable, and
								professional websites, using the best practices and the
								latest web standardized guidelines.&nbsp;&nbsp;This
								results in websites with semantic and SEO friendly HTML5
								and CSS3,&nbsp;which improves the quality and quantity
								of website traffic.&nbsp;&nbsp;All my websites are hand
								coded!
							</p>
							<p className='about-info-para'>
								When I am not writing code, I continue to investigate,
								experiment, and test to improve existing methods of
								software and web development.&nbsp;&nbsp;For, I am not
								content to rely on my past laurels.&nbsp;&nbsp;
								<strong>
									Programming and computer science are my passions!
								</strong>
							</p>
						</div>
						<div className='about-info-buttons'>
							<a
								href='tel:901-424-5525'
								class='about__info--single-link btn-general btn-blue'
							>
								call me
							</a>
							<a
								href='mailto:mdbdrrhm@gmail.com'
								class='about__info--single-link btn-general btn-blue'
							>
								email me
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
