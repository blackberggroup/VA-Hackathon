var amountScrolled = 200;
$(window).scroll(function () {
	'use strict';
	if ($(window).scrollTop() > amountScrolled) {
		$('.back-to-top::before').fadeIn('slow');
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top::before').fadeOut('slow');
		$('a.back-to-top').fadeOut('slow');
	}
});


$('.usa-footer-return-to-top a,.back-to-top, .topper').click(function () {
	'use strict';
	$('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});


$(".smooth-scroll").on('click', function (event) {
	'use strict';
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 400, function () {

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
	} // End if
});


$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});


if ($('.lazy').length > 0){
	$(function() {
		$('.lazy').Lazy();
	});
}

if ($('#wave-hero-1').length > 0){
	$(function() {
		var waveHero = $('#wave-hero-1').wavify({
			height: 50,
			bones: 5,
			amplitude: 50,
			color: '#ffffff',
			speed: .20
		  });		  

		var waveHero2 = $('#wave-hero-2').wavify({
			height: 50,
			bones: 2,
			amplitude: 50,
			color: 'rgba(255,255,255,.25)',
			speed: .20
		});
		
		var waveContact = $('#wave-contact').wavify({
			height: 60,
			bones: 4,
			amplitude: 70,
			color: '#ffffff',
			speed: .30
		});		

	});
}

if ($('.vha-video__play-action').length > 0){
	$('.vha-video__play-action').magnificPopup({
		type: 'iframe', 
		
		iframe: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'<div class="mfp-title">Some caption</div>'+
					'</div>'
		}
	});
}

if ($('#countdown-timer').length > 0){
	$('#countdown-timer').countdown('2024/05/17', function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<div class="grid-col-fill"><span class="h1 text-bold">%D</span><br /><span class="text-bold">Days</span></div> '
		+ '<div class="grid-col-fill"><span class="h1 text-bold">%H</span><br /><span class="text-bold">Hours</span></div> '
		+ '<div class="grid-col-fill"><span class="h1 text-bold">%M</span><br /><span class="text-bold">Minutes</span></div> '
		+ '<div class="grid-col-fill"><span class="h1 text-bold">%S</span><br /><span class="text-bold">Seconds</span></div> '));
	});
}