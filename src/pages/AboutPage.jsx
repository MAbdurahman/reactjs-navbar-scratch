import React from 'react';
import Author from './../img/about_page/m_abdurrahman.png';

export default function AboutPage() {
	return (
		<section id='aboutPage' className='about-page container scrollspy'>
			<div className='about-row row'>
				<div id='about-img-column' className='col-lg-5 col-xs-12'>
					<div className='about-image-outer'>
						<div className='about-image-inner'>
							<img
								className='about-author-img img-responsive'
								src={Author}
								alt='Author'
							/>
						</div>
					</div>
				</div>
				<div id='about-info-column' className='col-lg-7 col-xs-12'>
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
								latest standardized guidelines.&nbsp;&nbsp;This results
								in semantic and SEO friendly websites,&nbsp;which
								improves the quality and quantity of your website
								traffic.&nbsp;&nbsp;
								<strong>
									All my websites are customized and hand coded!{' '}
								</strong>
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
								class='about__info--single-link btn-default btn-blue'
							>
								<i class='fas fa-phone-alt'></i>&nbsp; call me
							</a>
							<a
								href='mailto:mdbdrrhm@gmail.com'
								class='about__info--single-link btn-default btn-blue'
							>
								<i class='fas fa-envelope-open-text'></i>
								&nbsp; email me
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
