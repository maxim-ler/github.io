$(function() {
	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
	  // other options
	});



	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
		e.preventDefault();

		// поиск button close popup
		$('#js-close-popup').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});

		// поиск popup и popup-overlay для их открытия
		// $('.popup').css('display', 'block');
		// $('.popup-overlay').css('display', 'block');
		// or
		$('.popup').slideDown();
		$('.popup-overlay').css('display', 'block');
	});

	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Message successful send");
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		return false;
	});

});