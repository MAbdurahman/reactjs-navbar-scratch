









/* =========================================
            Simple-Scroll-Spy
============================================ */
window.onload = function () {
	scrollSpy('#navbar-links-list', {
		sectionClass: '.scrollspy',
		menuActiveTarget: '.navbar-links-link',
		offset: 100,
	});
};