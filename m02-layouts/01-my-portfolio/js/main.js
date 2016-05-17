jQuery(document).ready(function($) {
	$('.mobile-menu').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('close');
		$('.social-links, .site-header nav').slideToggle();
	});
});