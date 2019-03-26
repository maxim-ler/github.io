$(function() {
	// magnific-popup
	//$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
		type: 'image',
		zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  // other options
	});



	// click to slider cursor
	$('.planning-residential .slider-cursor').on('click', function() {
		$('.planning-residential .slider a').trigger('click');
	})



	// slick slider
	$('.planning-residential .slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
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
	
	//$(".slider").slick('reinit');
	
	/*
	if(currentSlide == 0) {
		$('.slider5 .slick-prev').css('background', 'url(../img/slider5-arrow-left-grey.png) 0 0 no-repeat');
	}
	if(currentSlide == slick.slideCount-1) {
		$('.slider5 .slick-next').css('background', 'url(../img/slider5-arrow-right-grey.png) 0 0 no-repeat');
	}
	if(currentSlide != 0 && currentSlide != slick.slideCount-1) {
		$('.slider5 .slick-prev').css('background', 'url(../img/slider5-arrow-left.png) 0 0 no-repeat');
		$('.slider5 .slick-next').css('background', 'url(../img/slider5-arrow-right.png) 0 0 no-repeat');
	}
	*/





	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  // $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp('300', function() {
				
				// stop iframe video play after close popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});
			$('.popup-overlay').css('display', 'none');
			// $('.popup').find("input").val(""); // off in wp
			
			// для wp cf7
			// $("form").trigger("reset");
			// $("form .wpcf7-not-valid-tip").hide();
			// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	  });
	});

	// $('.js-popup2').on('click', function(e) {
	//   e.preventDefault();

	//   // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	//   // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	//   // $('.popup2 .main-form input[name="user_data"]').val($(this).attr('data-user'));

	//   // поиск popup и popup-overlay для их открытия
	//   // $('.popup').css('display', 'block');
	//   // $('.popup-overlay').css('display', 'block');
	//   // or
	//   $('.popup2').slideDown();
	//   $('.popup-overlay').css('display', 'block');
	  
	//   // поиск button close popup
	//   $('.js-close-popup, .popup-overlay').on('click', function(e) {
	// 		// $('.popup').css('display', 'none');
	// 		// $('.popup-overlay').css('display', 'none');
	// 		// or
	// 		$('.popup2').slideUp();
	// 		$('.popup-overlay').css('display', 'none');
			
	// 		// для wp cf7
	// 		// $("form").trigger("reset");
	// 		// $("form .wpcf7-not-valid-tip").hide();
	// 		// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	//   });
	// });




	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();

		$.ajax({
			type: "POST",
			url: "../smart.php",
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			window.location.href = "../thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		
		return false;
	});
});