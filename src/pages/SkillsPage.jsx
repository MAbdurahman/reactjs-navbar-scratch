import React from 'react';

export default function SkillsPage() {
	return (
		<section id='skillsPage' className='skillsPage scrollspy'>
			<div className='container'>
				<div className='section__title--text'>
					<h2 className='title-heading'>
						<strong>Tech Skills</strong>
					</h2>
				</div>
				<div id='progress-elements' className='content-box-skills'>
					<div className='skill'>
						<h4>HTML5</h4>
						<div className='progress'>
							<div
								className='progress-bar'
								role='progressbar'
								aria-valuenow='90'
								aria-valuemin='0'
								aria-valuemax='100'
								style={{ width: 0 + '%' }}
							>
								<span>90%</span>
							</div>
						</div>
					</div>
					<div className='skill'>
						<h4>CSS3</h4>
						<div className='progress'>
							<div
								className='progress-bar'
								role='progressbar'
								aria-valuenow='85'
								aria-valuemin='0'
								aria-valuemax='100'
								style={{ width: 0 + '%' }}
							>
								<span>85%</span>
							</div>
						</div>
					</div>
					<div className='skill'>
						<h4>Javascript</h4>
						<div className='progress'>
							<div
								className='progress-bar'
								role='progressbar'
								aria-valuenow='75'
								aria-valuemin='0'
								aria-valuemax='100'
								style={{ width: 0 + '%' }}
							>
								<span>75%</span>
							</div>
						</div>
					</div>
					<div className='skill'>
						<h4>Java</h4>
						<div className='progress'>
							<div
								className='progress-bar'
								role='progressbar'
								aria-valuenow='90'
								aria-valuemin='0'
								aria-valuemax='100'
								style={{ width: 0 + '%' }}
							>
								<span>90%</span>
							</div>
						</div>
					</div>
					<div className='skill'>
						<h4>C++</h4>
						<div className='progress'>
							<div
								className='progress-bar'
								role='progressbar'
								aria-valuenow='65'
								aria-valuemin='0'
								aria-valuemax='100'
								style={{ width: 0 + '%' }}
							>
								<span>65%</span>
							</div>
						</div>
					</div>
					<div className='skill'>
						<h4>PHP</h4>
						<div className='progress'>
							<div
								className='progress-bar'
								role='progressbar'
								aria-valuenow='70'
								aria-valuemin='0'
								aria-valuemax='100'
								style={{ width: 0 + '%' }}
							>
								<span>70%</span>
							</div>
						</div>
					</div>
					<div className='skill'>
						<h4>NoSQL</h4>
						<div className='progress'>
							<div
								className='progress-bar'
								role='progressbar'
								aria-valuenow='87'
								aria-valuemin='0'
								aria-valuemax='100'
								style={{ width: 0 + '%' }}
							>
								<span>87%</span>
							</div>
						</div>
					</div>
					<div className='skill'>
						<h4>Git/GitHub</h4>
						<div className='progress'>
							<div
								className='progress-bar'
								role='progressbar'
								aria-valuenow='80'
								aria-valuemin='0'
								aria-valuemax='100'
								style={{ width: 0 + '%' }}
							>
								<span>80%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
