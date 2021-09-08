
/* =========================================
            Preloader
============================================ */
$(window).on('load', function () {
	// makes sure that whole site is loaded
	$('#preloader-gif, #preloader').fadeOut(3000, function () {});
});


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