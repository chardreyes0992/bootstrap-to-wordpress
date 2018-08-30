$(document).ready(function() {
	//Cache the window object
	var $window = $(window);

	//Parallax backjground effect
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); //asigning the object

		$(window).scroll(function() {
			//scroll the background at var speed
			//the yPos is a negative value beacause we're scrolling

			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			//put together our final background position
			var coords = '50% '+ yPos + 'px';

			//move the background
			$bgobj.css({backgroundPosition: coords});
		}); //end window scroll
	});
});