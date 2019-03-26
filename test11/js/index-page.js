$(function() {
	
	// slick slider 1
	$('.location-object-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});

	// slick slider 2
	$('.apartment-layout-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});

	// popup1
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup1 и popup-overlay для их открытия
	  // $('.popup1').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup1').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup1').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup1').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup2
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup2').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup2').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup2').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup2').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup2').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup3
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup3').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup3').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup3').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup3').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup3').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup4
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup4').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup4').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup4').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup4').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup4').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup5
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup5').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup5').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup5').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup5').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup5').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup6
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup6').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup6').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup6').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup6').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup6').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		// проверка на стороне клиента формы через js что форма не пустая
		var name = $('.name1').val();
		var phone = $('.tel1').val();
		// console.log(name);
		// console.log(phone);

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			window.location.href = "../mailer/thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		
	
		return false;
	});



	// custom scroll
	$('.popup2').customScroll();
	$('.popup3').customScroll();
	$('.popup4').customScroll();
	$('.popup5').customScroll();
	$('.popup6').customScroll();



	// timer
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		
		//ts = (new Date()).getTime() + 10*24*60*60*1000;
		ts = (new Date()).getTime() + 13*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});

});