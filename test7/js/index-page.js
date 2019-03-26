$(function() {
	// slick slider1
	$('.slider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000
	});

	// slick slider2
	$('.slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: true,
		// centerMode: true,
		autoplaySpeed: 4000,
		// responsive: [
	 //    {
	 //      breakpoint: 830,
	 //      settings: {
	 //        arrows: false
	 //      }
	 //    }
	 //  ]
	});

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

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	

});