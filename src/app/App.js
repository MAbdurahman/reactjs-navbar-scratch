import React from 'react';
import Navbar from './../components/Navbar';
import AboutPage from './../pages/AboutPage';
import ContactPage from './../pages/ContactPage';
import HomePage from './../pages/HomePage';
import PortfolioPage from './../pages/PortfolioPage';
import SkillsPage from './../pages/SkillsPage';
import Footer from './../components/Footer';

function App() {
	return (
		<div>
			<Navbar />
			<HomePage />
			<AboutPage />
			<SkillsPage />
			<PortfolioPage />
			<ContactPage />
			<Footer />
		</div>
	);
}

export default App;
