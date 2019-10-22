$(function() {
	// wow js
	// new WOW().init();



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




	// slick our-team-slider
	$('.our-team-slider').slick({
		slidesToShow: 1,
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
		autoplaySpeed: 5000,
		
		// непрерывные слайды
		//cssEase: 'linear',
		//autoplay: true,
		//autoplaySpeed: 0,
		//speed: 3000,			
		
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
	//$('.slider').slick('slickGoTo',4);
				
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
	
	console.log($(slick.$slides[currentSlide]));
	console.log($(slick.$slides[nextSlide]));
	console.log(slick.slideCount);

	$(slick.$slides[currentSlide]).hide('slow');
	$(slick.$slides[nextSlide]).show('slow');
	*/



	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // fix popup background to scroll
	  // $('body').addClass('no-scroll');

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  // $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup').slideDown(600);

	  $('.popup-overlay').fadeIn('slow');
	  // $('.popup-overlay').css('display', 'block');

	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();

	  	// upfix popup background to scroll
	  	// $('body').removeClass('no-scroll');

			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp(600, function() {
				// stop iframe video play after close popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});

			$('.popup-overlay').fadeOut('slow');
			// $('.popup-overlay').css('display', 'none');
			// $('.popup').find("input").val(""); // off in wp

			// для wp cf7
			// $("form").trigger("reset");
			// $("form .wpcf7-not-valid-tip").hide();
			// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	  });
	});



	// $('.js-popup2').on('click', function(e) {
	//   e.preventDefault();

	// 	// fix popup background to scroll
	// 	$('body').addClass('no-scroll');

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
	// 			e.preventDefault();

	// 			// upfix popup background to scroll
	//   		$('body').removeClass('no-scroll');

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

		// проверка на стороне клиента формы через js что форма не пустая
		// var name = $('.name1').val();
		// var phone = $('.tel1').val();
		// console.log(name);
		// console.log(phone);



		// $.ajax({
		// 	type: "POST",
		// 	url: "smart.php",	// url: "smart.php", даже если js и php не в одной папке!
		// 	data: $(this).serialize()
		// }).done(function(data) {
		// 	$(this).find("input").val("");

		// 	$("form").trigger("reset");

		// 	$('.popup').slideUp();
		// 	$('.popup-overlay').css('display', 'none');

		// 	//alert("Заявка отправлена!");
		// 	window.location.href = "thanks.html";
		// });



		// del
		// if (name !== '' & phone !== '') {
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "mailer/smart.php",
		// 		data: $(this).serialize()
		// 	}).done(function() {
		// 		$(this).find("input").val("");

		// 		//alert("Заявка отправлена!");
		// 		window.location.href = "../mailer/thanks.html";

		// 		$("form").trigger("reset");

		// 		$('.popup').slideUp();
		// 		$('.popup-overlay').css('display', 'none');
		// 	});
		// } else {
		// 	alert('Данные не заполнены!');
		// }

		return false;
	});

	// email - old
	//$('.main-form').submit(function(event) {
	//	event.preventDefault();
	//	$.ajax({
	//		type: "POST",
	//		url: "mailer/smart.php",
	//		data: $(this).serialize()
	//	}).done(function() {
	//		$(this).find("input").val("");
	//		alert("Сообщение успешно отправлено");
	//		$("form").trigger("reset");
	//
	//		$('.popup').slideUp();
	//		$('.popup-overlay').css('display', 'none');
	//	});
	//	return false;
	//});


});