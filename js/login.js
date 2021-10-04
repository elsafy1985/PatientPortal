$(document).ready(function(){
$(function() {
	
	var images = ['images/bg1.jpg', 'images/bg2.jpg'];

   $('#container').append('<style>#container, .acceptContainer:before, #logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
	
	
	
	
	setTimeout(function() {
		$('.logoContainer').transition({scale: 1}, 700, 'ease');
		setTimeout(function() {
			$('.logoContainer .logo').addClass('loadIn');
			setTimeout(function() {
				$('.logoContainer .text').addClass('loadIn');
				setTimeout(function() {
					$('.acceptContainer').transition({height: 'inherit'});
					setTimeout(function() {
						$('.acceptContainer').addClass('loadIn');
						setTimeout(function() {
							$('.formDiv, form h1').addClass('loadIn');
						}, 500)
					}, 500)
				}, 500)
			}, 500)
		}, 1000)
	}, 10)

	
	
	
});
	
	
	
	
	
	
$('.register a').click(function(){
	$('form.loginForm').animate({height: "toggle", opacity: "toggle"}, "slow");
	$('form.registrationForm').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 
 $('.forgotPas').click(function(){
	$('form.loginForm').animate({height: "toggle", opacity: "toggle"}, "slow");
	$('form.forgetPasswordForm').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});