
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

/* =========================================
            Progress Bars
============================================ */
$(function () {
	$('#progress-elements').waypoint(
		function () {
			$('.progress-bar').each(function () {
				$(this).animate(
					{
						width: $(this).attr('aria-valuenow') + '%',
					},
					1500
				);
			});

			this.destroy();
		},
		{
			offset: '100%',
		}
	);
});