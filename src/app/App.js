import React from 'react';
import Preloader from './../components/Preloader';
import Navbar from './../components/Navbar';
import AboutPage from './../pages/AboutPage';
import ContactPage from './../pages/ContactPage';
import HomePage from './../pages/HomePage';
import PortfolioPage from './../pages/PortfolioPage';
import SkillsPage from './../pages/SkillsPage';
import Footer from './../components/Footer';

function App() {
	return (
		<>
			<Preloader />
			<Navbar />
			<HomePage />
			<main>
				<AboutPage />
				<SkillsPage />
			</main>
		</>
	);
}

export default App;
