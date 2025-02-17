$(function() {
	// wow js
	// new WOW().init();

	

	// slick certificate-slider
	$('.certificates-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});



	// slick reviews-slider
	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: true,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
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
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider").slick('reinit');
	


	// magnific-popup
	//$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
		type: 'image',
		//delegate: 'a', // child items selector, by clicking on it popup will open, example .parent-container a
		zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  // other options
	});


	// magnific-popup
	//$('.image-link').magnificPopup({type:'image'});
	// $('.popup-link2').magnificPopup({
	// 	type: 'image',
	// 	//delegate: 'a', // child items selector, by clicking on it popup will open, example .parent-container a
	// 	zoom: {
	// 		enabled: true,
	// 		duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
	// 	},
	//   // other options
	// });



	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});




	// onscroll
	window.onscroll = function() {
	  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  // console.log(scrolled);

	  if(scrolled > 700) {
	    // $('.arrow').css('display', 'block');
	    $('.arrow').show('slow', function() {
	      //
	    });
	  }
	  else {
	    // $('.arrow').css('display', 'none');
	    $('.arrow').hide('slow', function() {
	      //
	    });
	  }
	}






	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

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
	  });
	});

	$('.js-popup3').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // $('.popup3 .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  var prod = $(this).attr('data-production');
	
	  $('.'+prod).slideDown();
	  $('.popup-overlay3').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup3, .popup-overlay3').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.'+prod).slideUp();
			$('.popup-overlay3').css('display', 'none');
	  });
	});




	// email
	$('.main-form').submit(function(event) {
		// event.preventDefault();

		// $.ajax({
		// 	type: "POST",
		// 	url: "smart.php",	// url: "smart.php", даже если js и php не в одной папке!
		// 	data: $(this).serialize()
		// }).done(function(data) {
		// 	$(this).find("input").val("");
			
		// 	//alert("Заявка отправлена!");
		// 	window.location.href = "thanks.html";
			
		// 	$("form").trigger("reset");
			
		// 	$('.popup').slideUp();
		// 	$('.popup-overlay').css('display', 'none');
		// });
		
		// return false;
	});

});